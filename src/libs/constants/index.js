const Constants = Object.freeze({
  mapMessages: {
    SEARCH_PLACE: 'Search places successfully!',
  },
  authenMessages: {
    USER_AUTHEN: 'Login successfully!',
    AUTHEN_FAILURE: 'Your input is wrong!',
    PERMISSION_DENIED: 'Permisson is denied !',
    NO_TOKEN_FOUND: 'There is no token found!',
    DUPLICATE_EMAIL: 'Email has been used!',
  },
  requestInfo: {
    limit: 3,
  },
  MINUTE_PER_SECOND: 60,
});

module.exports = Constants;
