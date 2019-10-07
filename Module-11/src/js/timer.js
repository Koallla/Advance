const HOURS_IN_MILISECONDS = 60 * 60 * 1000;
const MINUTES_IN_MILISECONDS = 60 * 1000;

export class Timer {
  constructor({ selector, time, onTimerEnd }) {
    this.container = document.querySelector(selector);
    this.time = time;
    this.onTimerEnd = onTimerEnd;
  }

  getHours() {
    const hours = this.time / HOURS_IN_MILISECONDS;
    return hours >= 1 ? Math.floor(hours) : 0;
  }

  getMinutes() {
    const minutes = (this.time % HOURS_IN_MILISECONDS) / MINUTES_IN_MILISECONDS;
    return minutes >= 1 ? Math.floor(minutes) : 0;
  }

  getSeconds() {
    const seconds =
      ((this.time % HOURS_IN_MILISECONDS) % MINUTES_IN_MILISECONDS) / 1000;
    return seconds >= 1 ? Math.floor(seconds) : 0;
  }

  transformToTwoGigits(value) {
    return value >= 10 ? value : `0${value}`;
  }

  startTimer() {
    const timer = setInterval(() => {
      this.time = this.time - 1000;
      if (this.time < 0) {
        clearInterval(timer);
        this.onTimerEnd && this.onTimerEnd();
        return;
      }
      this.renderTimer();
    }, 1000);
  }

  renderTimer() {
    const template = `
      <div class="timer">
        <span class="timer__hours">${this.transformToTwoGigits(
          this.getHours(),
        )} :</span>
        <span class="timer__minutes">${this.transformToTwoGigits(
          this.getMinutes(),
        )} :</span>
        <span class="timer__seconds">${this.transformToTwoGigits(
          this.getSeconds(),
        )}</span>
        </div>
        `;
    this.container.innerHTML = template;
  }
  init() {
    this.renderTimer();
    this.startTimer();
  }
}
