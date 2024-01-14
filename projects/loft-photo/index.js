import pages from '../loft-photo/pages';
import model from '../loft-photo/model';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  const pageName = model.getRandomElement(pageNames);
  pagesMap.openPage(pageName);
});
