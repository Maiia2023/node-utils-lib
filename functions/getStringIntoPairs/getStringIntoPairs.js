export const getStringIntoPairs = (str) => {
  const pairs = [];
  let currentPair = '';

  for (let i = 0; i < str.length; i++) {
    currentPair += str[i];
    if (currentPair.length === 2) {
      pairs.push(currentPair);
      currentPair = '';
    };
  };

  if (currentPair.length === 1) {
    pairs.push(currentPair + '_');
  };

  return pairs;
};
