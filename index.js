console.log('App started!!!');

const menuItems = document.querySelectorAll('.item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((item) => {
      item.classList.remove('active-menu');
    });
    item.classList.add('active-menu');
  });
});
