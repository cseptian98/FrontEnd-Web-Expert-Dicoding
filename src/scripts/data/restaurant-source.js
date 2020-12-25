import API_ENDPOINT from './api-endpoint';

class RestaurantSource {
  static async getRestaurantItem() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_ITEM);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
