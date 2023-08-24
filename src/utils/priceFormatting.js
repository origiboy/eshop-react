export function priceFormatting(price) {
    if (typeof price !== 'number') {
    return 'Invalid input';
  }

  return price.toLocaleString().replace(/,/g, ' ') +  " руб.";
}