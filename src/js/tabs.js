const section = document.querySelectorAll('.js-section');
const sectionArray = Array.prototype.slice.call(section);
const tabsButton = document.querySelectorAll('.js-tabs');
const tabsButtonArray = Array.prototype.slice.call(tabsButton);
function openActiveElement(tab) {
  tabsButtonArray.forEach((currentTab) => {
    if (currentTab === tab) {
      currentTab.classList.add('main-nav__item_active');
      window.location.hash = tab.dataset.trigger;
    } else {
      currentTab.classList.remove('main-nav__item_active');
    }
  });
  sectionArray.forEach((currentSection) => {
    if (tab.dataset.trigger === currentSection.dataset.content) {
      currentSection.classList.add('main-nav__section_active');
    } else {
      currentSection.classList.remove('main-nav__section_active');
    }
  });
}
tabsButtonArray.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    openActiveElement(tab);
  });
});

if (window.location.hash) {
  const elem = window.location.hash;
  const triggerElement = elem.slice(1);
  openActiveElement(document.querySelector(`[data-trigger = ${triggerElement}]`));
}
