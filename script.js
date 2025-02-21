
      AOS.init({
    duration: 800,
    offset: 100,
    once: true
  });
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const menuItems = document.querySelectorAll('.menu-item');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    menuItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(20px)';
    
      item.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    function animateMenuItems() {
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.style.transition = 'all 0.4s ease';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, 100 * index);
      });
    }

    mobileNav.addEventListener('transitionend', (e) => {
      if (e.propertyName === 'right' && mobileNav.classList.contains('active')) {
        animateMenuItems();
      }
    });
  });  