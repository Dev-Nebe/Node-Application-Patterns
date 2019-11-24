exports.randomString = (stringLength = 12) => {
  const chars = '012344556677890ihnalkknacappokcnkldsnocilna';
  let result = '';
  for (let i = 0; i < stringLength; i += 1) {
    result += Math.floor(Math.random * chars.length);
  }
  return result;
};
