import CONFIG from '../data/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class ItemRestaurant extends HTMLElement {
  set ItemRestaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="item">
      <div class="item__header">
          <img class="item__thumbnail lazyload" data-src="${CONFIG.BASE_IMG_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
          <div class="item__rating">
              <p>⭐️<span class="item__rating__score">${this._restaurant.rating}</span></p>
          </div>
      </div>
      <div class="item__content">
          <p class="item__title">${this._restaurant.name}</p>
          <p class="item__city">${this._restaurant.city}</p>
          <p class="item__description">${this._restaurant.description}</p>
          <p class="button"><a href="${`/#/detail/${this._restaurant.id}`}"><span>See Detail</span></a></p>
      </div>
      </article>
      `;
  }
}

customElements.define('item-restaurant', ItemRestaurant);
