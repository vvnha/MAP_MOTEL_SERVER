const _get = require('lodash/get');
const mapService = require('../services/map-service');
const ReturnResult = require('../libs/return-result');
const Constants = require('../libs/constants');

exports.searchPlace = async (req, res) => {
  try {
    const data = _get(req, 'query', {});

    const result = await mapService.searchPlaces(data);

    res.send(
      new ReturnResult(
        null,
        result,
        Constants.mapMessages.SEARCH_PLACE,
        null,
        null,
      ),
    );
  } catch (error) {
    res
      .status(400)
      .send(new ReturnResult(null, null, null, error.message, null));
  }
};
