import CONFIG from '../data/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class DetailRestaurant extends HTMLElement {
  set ItemRestaurant(item) {
    this._restaurant = item.restaurant;
    this.render();
  }

  getCategories() {
    let categories = '';
    this._restaurant.categories.forEach((item) => {
      categories += `${item.name},`;
    });
    return categories;
  }

  getFoods() {
    let foods = '<h2>Foods</h2><div class="menu__section">';
    this._restaurant.menus.foods.forEach((food) => {
      foods += `<li>${food.name}</li>`;
    });
    foods += '</div>';

    return foods;
  }

  getDrinks() {
    let drinks = '<h2>Drinks</h2><div class="menu__section">';
    this._restaurant.menus.drinks.forEach((drink) => {
      drinks += `<li>${drink.name}</li>`;
    });
    drinks += '</div>';

    return drinks;
  }

  getReviews() {
    let reviews = '<h2>Reviews</h2>';
    this._restaurant.customerReviews.forEach((review) => {
      reviews += `<div class="review__section">
                    <b>${review.name}</b><br>
                    ${review.date}<br>
                    ${review.review}
                    </div>`;
    });
    return reviews;
  }

  render() {
    this.innerHTML = `
        <article class="item__detail">
            <div class="item__header">
                <img class="item__detail__thumbnail lazyload" data-src="${CONFIG.BASE_IMG_URL + this._restaurant.pictureId}" alt="${this._restaurant.name}">
                <div class="item__detail__rating">
                    <p>⭐️<span class="item__rating__score">${this._restaurant.rating}</span></p>
                </div>
            </div>
            <div class="item__content">
                <h1 class="item__title">${this._restaurant.name}</h1>
                <h1 class="item__city">${this._restaurant.city} | ${this._restaurant.address}</h1>
                <h2>Categories</h2>
                ${this.getCategories()}
                <h2>Description</h2>
                <p class="detail__description">${this._restaurant.description}</p>
                ${this.getFoods()}
                ${this.getDrinks()}
                ${this.getReviews()}
            </div>
        </article>
      `;
  }

  renderError(message) {
    console.log(message);
    this.innerHTML += '<h3 class="load_failed">Failed to load data!<br>You are offline, please check your internet connection.</h3>';
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
