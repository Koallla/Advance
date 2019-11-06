import { EventEmitter } from './EventEmitter.js';
import ScrollMagic from 'scrollmagic';

export class Navigation {
  constructor(navList, navSections) {
    this.navList = document.querySelectorAll(navList);
    this.navSections = document.querySelectorAll(navSections);
    this.eventEmiter = new EventEmitter();
    this.activeTab = this.navList[0];
  }
  addScrollListeners() {
    Array.from(this.navSections).forEach((element, index) => {
      const controller = new ScrollMagic.Controller();
      const scene = new ScrollMagic.Scene({
        triggerElement: element,
        offset: 150,
      }).addTo(controller);

      scene.on('start', () => {
        this.eventEmiter.emit('change', index);
      });
    });
  }

  addSectionChangeListener() {
    this.eventEmiter.subscribe('change', index => {
      this.removeActiveNavItem();
      this.setActiveNavItem(this.navList[index]);
    });
  }

  setActiveNavItem(navItem) {
    navItem.classList.add('active');
    this.activeTab = navItem;
  }
  removeActiveNavItem() {
    this.activeTab.classList.remove('active');
  }
  init() {
    this.addSectionChangeListener();
    this.addScrollListeners();
  }
}
