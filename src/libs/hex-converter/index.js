/* eslint-disable no-plusplus */
const hexEncode = (text) => {
  let hex;
  let i;

  let result = '';
  for (i = 0; i < text.length; i++) {
    hex = text.charCodeAt(i).toString(16);
    result += `000${hex}`.slice(-4);
  }

  return result;
};

const hexDecode = (text) => {
  let j;
  const hexes = text.match(/.{1,4}/g) || [];
  let back = '';
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
};

module.exports = {
  hexEncode,
  hexDecode,
};
