export const formatCurrency = (price: number): string => {
  if (!price) return 'Price not disclosed';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};
