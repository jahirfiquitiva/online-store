const createPriceFormatter = (
  priceCurrency = 'USD',
  minimumFractionDigits = 2,
  maximumFractionDigits = 2
) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: priceCurrency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

const formatter = createPriceFormatter();

const formatPrice = (price) => {
  return formatter.format(price);
};

export default formatPrice;
