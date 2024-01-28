import pages from './pages';
import mainPage from './loginPage';
import loginPage from './loginPage';
import profilePage from './profilePage';
import('./styles.css');

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();
