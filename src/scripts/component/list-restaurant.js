import './item-restaurant';

class ListRestaurant extends HTMLElement {
  set restaurant(list) {
    this._list = list;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._list.forEach((restaurant) => {
      const restaurantElement = document.createElement('item-restaurant');
      restaurantElement.ItemRestaurant = restaurant;

      this.appendChild(restaurantElement);
    });
  }
}

customElements.define('list-restaurant', ListRestaurant);
