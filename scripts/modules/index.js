// This file will be imported in the footer.
// console.log('loading /scripts/modules/index.js');

// if (module.hot) {
//   module.hot.accept();
// }

class Menu {
  constructor() {
    this.navMenu = document.querySelector('.main-nav');
    // this.telephone = document.querySelector('.telephone');
    this.menuIcon = document.querySelector('.site-header__menu-icon');
    this.logo = document.querySelector('.logo');
    this.siteHeader = document.querySelector('.site-header');
    this.events();
    // this.report();
    // console.log(this.menuIcon);
  }

  report() {
    //console.log('menu started');
    if (this.navMenu && this.telephone && this.logo && this.menuIcon) {
      console.log('Items found');
    } else {
      console.log('items are not found');
    }
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    //console.log('togle added to menu');
    this.navMenu.classList.toggle('showItem');
    // this.telephone.classList.toggle('showItem');
    this.logo.classList.toggle('hideItem');
    this.siteHeader.classList.toggle('showItem');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    //console.log('toggle clicked');
  }
}

//export default Menu;
