const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You have no favorite restaurants yet', '.noFavoriteData');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#content');
  I.seeElement('list-restaurant');
  I.seeElement('item-restaurant');
  I.seeElement('.button');

  const firstRestaurant = locate('item-restaurant .button').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('item-restaurant .item__title').first());

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('list-restaurant');
  I.seeElement('item-restaurant');

  const likedRestaurantTitle = await I.grabTextFrom('item-restaurant .item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('#content');
  I.seeElement('list-restaurant');
  I.seeElement('item-restaurant');
  I.seeElement('.button');

  const firstRestaurant = locate('item-restaurant .button').first();
  const firstRestaurantTitle = await I.grabTextFrom(locate('item-restaurant .item__title').first());

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('list-restaurant');
  I.seeElement('item-restaurant');

  const likedRestaurantTitle = await I.grabTextFrom('item-restaurant .item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const likedRestaurant = locate('item-restaurant .button').first();
  const firstLikedRestaurantTitle = await I.grabTextFrom(locate('item-restaurant .item__title').first());

  I.click(likedRestaurant);

  I.seeElement('#deleteButton');
  I.click('#deleteButton');

  const unlikedRestaurantTitle = await I.grabTextFrom('detail-restaurant .item__title');
  assert.strictEqual(firstLikedRestaurantTitle, unlikedRestaurantTitle);

  I.amOnPage('/#/favorite');
  I.see('You have no favorite restaurants yet', '.noFavoriteData');
});
