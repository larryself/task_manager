const section = document.querySelectorAll('.js-section');
const sections = Array.prototype.slice.call(section);
const tabsButton = document.querySelectorAll('.js-tabs');
const tabButtons = Array.prototype.slice.call(tabsButton);
const MAIN_NAV_ITEM_ACTIVE = 'main-nav__item_active';
const MAIN_NAV_SECTION_ACTIVE = 'main-nav__section_active';

function openActiveElement(tab) {
  tabButtons.forEach((currentTab) => {
    if (currentTab === tab) {
      currentTab.classList.add(`${MAIN_NAV_ITEM_ACTIVE}`);
      window.location.hash = tab.dataset.trigger;
    } else {
      currentTab.classList.remove(`${MAIN_NAV_ITEM_ACTIVE}`);
    }
  });
  sections.forEach((currentSection) => {
    if (tab.dataset.trigger === currentSection.dataset.content) {
      currentSection.classList.add(`${MAIN_NAV_SECTION_ACTIVE}`);
    } else {
      currentSection.classList.remove(`${MAIN_NAV_SECTION_ACTIVE}`);
    }
  });
}
tabButtons.forEach((tab) => {
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
