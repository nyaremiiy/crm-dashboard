console.log('App started!!!');

let isOpenSideBar = false;

const menuItems = document.querySelectorAll('.item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((item) => {
      item.classList.remove('active-menu');
    });
    item.classList.add('active-menu');
    removeClassesForSidebar();
    rotateBtnSideBarSwitch(isOpenSideBar);
  });
});

const btnSidebar = document.querySelector('.btnSidebar');

btnSidebar.addEventListener('click', () => {
  document.querySelector('.logo__text').classList.toggle('logo__text--close');
  document.querySelector('.sidebar').classList.toggle('sidebar--close');
  document.querySelector('.user__info').classList.toggle('user__info--close');
  document.querySelectorAll('.item__text').forEach((item) => {
    item.classList.toggle('item__text--close');
  });
  isOpenSideBar = !isOpenSideBar;
  rotateBtnSideBarSwitch(isOpenSideBar);
});

function addClassesForSidebar() {
  rotateBtnSideBarSwitch(true);
  document.querySelector('.logo__text').classList.add('logo__text--close');
  document.querySelector('.sidebar').classList.add('sidebar--close');
  document.querySelector('.user__info').classList.add('user__info--close');
  document.querySelectorAll('.item__text').forEach((item) => {
    item.classList.add('item__text--close');
  });
  isOpenSideBar = true;
  rotateBtnSideBarSwitch(isOpenSideBar);
}
function removeClassesForSidebar() {
  rotateBtnSideBarSwitch(false);
  document.querySelector('.logo__text').classList.remove('logo__text--close');
  document.querySelector('.sidebar').classList.remove('sidebar--close');
  document.querySelector('.user__info').classList.remove('user__info--close');
  document.querySelectorAll('.item__text').forEach((item) => {
    item.classList.remove('item__text--close');
  });
  isOpenSideBar = false;
  rotateBtnSideBarSwitch(isOpenSideBar);
}

function closeSidebar() {
  const widthScreen = window.innerWidth;

  if (widthScreen <= 768) {
    addClassesForSidebar();
  }
}
closeSidebar();

function rotateBtnSideBarSwitch(isOpenSideBar) {
  if (isOpenSideBar) {
    btnSidebar.style =
      'transform: rotate(0deg); transition: transform .3s; transform-origin: center;';
  } else {
    btnSidebar.style =
      'transform: rotate(-180deg); transition: transform .3s; transform-origin: center;';
  }
}
