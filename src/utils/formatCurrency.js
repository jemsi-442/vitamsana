const priceFormatter = new Intl.NumberFormat('en-TZ');

export const formatTsh = (amount) => `TSh ${priceFormatter.format(amount)}`;
