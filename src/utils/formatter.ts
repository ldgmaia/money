export const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  // fractionalSecondDigits: 3,
  // timeZone: 'UTC'
})

export const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'CAD',
})
