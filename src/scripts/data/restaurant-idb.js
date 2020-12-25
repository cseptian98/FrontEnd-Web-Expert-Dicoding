import { openDB } from 'idb';
import CONFIG from './config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const RestaurantIdb = {
  async getRestaurantById(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurant() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async saveRestaurant(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default RestaurantIdb;
