import RestaurantIdb from '../../data/restaurant-idb';
import '../../component/list-restaurant';

class Favorite {
  static async render() {
    return `<article id="content">
                <h2 class="__label">Your Favorite Restaurant</h2>
                <h2 class="noFavoriteData">You have no favorite restaurants yet</h2>
                <list-restaurant></list-restaurant>
            </article>
            `;
  }

  static async afterRender() {
    const restaurantList = document.querySelector('list-restaurant');
    const favoriteData = await RestaurantIdb.getAllRestaurant();
    const noFavoriteData = document.querySelector('.noFavoriteData');

    if (favoriteData.length > 0) {
      noFavoriteData.style.display = 'none';
    }

    restaurantList.restaurant = favoriteData;
  }
}

export default Favorite;
