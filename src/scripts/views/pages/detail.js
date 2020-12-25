import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import FavoriteButtonInitiator from '../../utils/favorite-button';
import '../../component/detail-restaurant';

class Detail {
  static async render() {
    return `
        <article id="content">
            <h2 class="__label">Details</h2>
            <detail-restaurant></detail-restaurant>
            <div id="favoriteButton"></div>
        </article>
    `;
  }

  static async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantsContainer = document.querySelector('detail-restaurant');

    try {
      const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
      restaurantsContainer.ItemRestaurant = restaurant;

      await FavoriteButtonInitiator.init({
        favoriteButton: document.querySelector('#favoriteButton'),
        restaurant: restaurant.restaurant,
      });
    } catch (message) {
      restaurantsContainer.renderError(message);
    }
  }
}

export default Detail;
