import RestaurantSource from '../../data/restaurant-source';
import '../../component/list-restaurant';

class HomeMenu {
  static async render() {
    return `
      <section class="jumbotron">
        <img src="./images/heros/hero-big.jpg"
          srcset="./images/heros/hero-little.jpg 480w, ./images/heros/hero-big.jpg 1080w"
          sizes="(max-width: 600px) 480px, 1080px"
          alt="Heroes Image">
        <h1 class="jumbotron__title">Hello!</h1>
      </section>

      <article id="content">
            <h2 class="__label">Restaurants</h2>
            <list-restaurant></list-restaurant>
      </article>
    `;
  }

  static async afterRender() {
    const restaurants = document.querySelector('#content');
    const restaurantsContainer = document.querySelector('list-restaurant');

    try {
      const response = await RestaurantSource.getRestaurantItem();
      restaurantsContainer.restaurant = response;
    } catch (message) {
      restaurants.innerHTML = '<h2>Loading Data Failed! Please Check Your Connection</h2>';
    }
  }
}

export default HomeMenu;
