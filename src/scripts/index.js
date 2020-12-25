import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/app-bar';
import './utils/drawer-initiator';
import registerSW from './utils/register-sw';
import App from './views/app';

document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  App.renderPage();
});

window.addEventListener('hashchange', () => {
  App.renderPage();
});
