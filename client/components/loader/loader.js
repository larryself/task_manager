const LOADER_ACTIVE = 'loader--active';

function load(loader) {
  loader.classList.add(LOADER_ACTIVE);
  setTimeout(() => {
    loader.classList.remove(LOADER_ACTIVE);
  }, 1000);
}

/* eslint-disable-next-line import/prefer-default-export */
export { load };
