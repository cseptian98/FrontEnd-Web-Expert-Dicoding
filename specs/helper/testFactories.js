import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button';

const createLikeButton = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButton: document.querySelector('#favoriteButton'),
    restaurant,
  });
};

export { createLikeButton };
