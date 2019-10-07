import { Timer } from './timer';
import '../css/style.css';

const superTimer = new Timer({
  selector: '.super-timer',
  time: 8000,
  onTimerEnd: () => {
    console.log('Timer END');
  },
});

superTimer.init();

const currentDate = new Date(1000000);
console.log(currentDate);

console.log(Date.now());
