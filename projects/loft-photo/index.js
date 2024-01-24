import pages from './pages';
import mainPage from './loginPage';
import loginPage from './loginPage';
import('./styles.css');

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
