import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Unliking A Restaurant', () => {
  const dataRestaurant = {
    id: 'uewq1zg2zlskfw1e867',
    name: 'Kafein',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    pictureId: '15',
    city: 'Aceh',
    rating: 4.6,
  };

  beforeEach(async () => {
    document.body.innerHTML = '<div id="favoriteButton"></div>';
    await RestaurantIdb.saveRestaurant(dataRestaurant);
  });

  afterEach(async () => {
    await RestaurantIdb.deleteRestaurant(dataRestaurant.id);
  });

  it('Should display unlike button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButton(dataRestaurant);

    expect(document.querySelector('[aria-label="Unlike this Restaurant"]')).toBeTruthy();
  });

  it('Should not display like button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButton(dataRestaurant);

    expect(document.querySelector('[aria-label="Like this Restaurant"]')).toBeFalsy();
  });

  it('Should be able to delete the restaurant', async () => {
    await TestFactories.createLikeButton(dataRestaurant);

    document.querySelector('#deleteButton').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurant()).toEqual([]);
  });

  it('Should not throw error if the deleted restaurant is not in the list', async () => {
    await TestFactories.createLikeButton(dataRestaurant);
    await RestaurantIdb.deleteRestaurant(dataRestaurant.id);

    document.querySelector('#deleteButton').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
