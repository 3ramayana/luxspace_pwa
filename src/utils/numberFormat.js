const numberFormat = (price) => {
  const currency = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);

  return currency;
};

export default numberFormat;
