import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  static async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    const mainContent = document.querySelector('main');
    mainContent.innerHTML = await page.render();

    await page.afterRender();
  }
}

export default App;
