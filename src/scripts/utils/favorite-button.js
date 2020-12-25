import RestaurantIdb from '../data/restaurant-idb';

const FavoriteButtonInitiator = {
  async init({ favoriteButton, restaurant }) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _isRestaurantFavorite(id) {
    const restaurant = await RestaurantIdb.getRestaurantById(id);
    return !!restaurant;
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantFavorite(id)) this._renderDelete();
    else this._renderSave();
  },

  _renderSave() {
    this._favoriteButton.innerHTML = '<button aria-label="Like this Restaurant" id="likeButton" class="like">&#10084;</button>';
    const favButton = document.querySelector('#likeButton');
    favButton.addEventListener('click', async () => {
      await RestaurantIdb.saveRestaurant(this._restaurant);
      this._renderDelete();
    });
  },

  _renderDelete() {
    this._favoriteButton.innerHTML = '<button aria-label="Unlike this Restaurant" id="deleteButton" class="like">&#10084;</button>';
    const deleteButton = document.querySelector('#deleteButton');
    deleteButton.style.color = 'red';
    deleteButton.addEventListener('click', async () => {
      await RestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderSave();
    });
  },
};

export default FavoriteButtonInitiator;
