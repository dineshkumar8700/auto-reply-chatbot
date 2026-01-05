export const calculator = (query) => {
  const regex = /\d+ .* \d+/;
  const expression = query.match(regex)[0];
  const result = eval(expression);

  return result;
};
