import pages from './pages';
import model from '../loft-photo/model';
import mainPage from './loginPage';
import loginPage from './loginPage';
import('./styles.css');

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  const pageName = model.getRandomElement(pageNames);
  pages.openPage(pageName);
});
