const fetch = require('node-fetch');

const { client } = require('../libs/redis');
const { hexEncode } = require('../libs/hex-converter');
const Constants = require('../libs/constants');

exports.searchPlaces = async (data) => {
  const { text } = data;
  const newText = text.trim().toLowerCase();
  const hexText = hexEncode(newText);

  const mapRedisKey = `map:${hexText}`;

  const places = await client.get(mapRedisKey);

  // if has places in cache => return from cache
  if (places) {
    return JSON.parse(places);
  } else {
    const url = new URL('https://discover.search.hereapi.com/v1/discover');
    const params = {
      limit: 2,
      in: 'countryCode:VNM',
      q: newText,
      at: '52.53,13.38',
      apiKey: process.env.MAP_API_KEY,
    };

    // add query params to url
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );

    // Fetch directly from remote api
    const response = await fetch(url);

    const { items } = await response.json();

    // Save the  API response in Redis store,  data expire time in 15*60 seconds, it means one hour
    const expTime = Constants.MINUTE_PER_SECOND * 15;
    client.setEx(mapRedisKey, expTime, JSON.stringify(items));

    return items;
  }
};
