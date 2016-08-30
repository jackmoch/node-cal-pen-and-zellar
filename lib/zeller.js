'use strict';

module.exports.getDayOfWeek = (dateObj) => {

  let month = dateObj.month
  let year = dateObj.year

  const q = 1
  const m = module.exports.modifiedMonth(month)
  const y = module.exports.modifiedYear(year, month)

  const zDay =
    (q + Math.floor((13 * (m + 1)) / 5) + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)) % 7

  return zDay
}

module.exports.modifiedMonth = (month) => (
  month < 3 ? month + 12 : month
)

module.exports.modifiedYear = (year, month) => (
  month < 3 ? year - 1 : year
)