import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking A Restaurant', () => {
  const dataRestaurant = {
    id: 'uewq1zg2zlskfw1e867',
    name: 'Kafein',
    description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    pictureId: '15',
    city: 'Aceh',
    rating: 4.6,
  };

  beforeEach(() => {
    document.body.innerHTML = '<div id="favoriteButton"></div>';
  });

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButton(dataRestaurant);

    expect(document.querySelector('[aria-label="Like this Restaurant"]')).toBeTruthy();
  });

  it('Should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButton(dataRestaurant);

    expect(document.querySelector('[aria-label="Unlike this Restaurant"]')).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await TestFactories.createLikeButton(dataRestaurant);

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantIdb.getRestaurantById(dataRestaurant.id);
    expect(restaurant).toEqual(dataRestaurant);

    await RestaurantIdb.deleteRestaurant(dataRestaurant.id);
  });

  it('Should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButton(dataRestaurant);
    await RestaurantIdb.saveRestaurant(dataRestaurant);

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurant()).toEqual([dataRestaurant]);
    await RestaurantIdb.deleteRestaurant(dataRestaurant.id);
  });

  it('Should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButton({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await RestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
