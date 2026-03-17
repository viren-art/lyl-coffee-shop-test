/**
 * Store opening hours data for Bean & Brew
 * 
 * @module storeHours
 * @description Centralized data source for store operating hours.
 * To update hours: modify objects in this array and redeploy application.
 * 
 * @typedef {Object} StoreHours
 * @property {string} dayOfWeek - Day of the week
 * @property {string} openTime - Opening time in 12-hour format
 * @property {string} closeTime - Closing time in 12-hour format
 * @property {boolean} isClosed - Whether store is closed this day
 */

/**
 * Array of store hours for each day of the week
 * @type {StoreHours[]}
 */
export const storeHours = [
  {
    dayOfWeek: 'Monday',
    openTime: '7:00 AM',
    closeTime: '8:00 PM',
    isClosed: false
  },
  {
    dayOfWeek: 'Tuesday',
    openTime: '7:00 AM',
    closeTime: '8:00 PM',
    isClosed: false
  },
  {
    dayOfWeek: 'Wednesday',
    openTime: '7:00 AM',
    closeTime: '8:00 PM',
    isClosed: false
  },
  {
    dayOfWeek: 'Thursday',
    openTime: '7:00 AM',
    closeTime: '8:00 PM',
    isClosed: false
  },
  {
    dayOfWeek: 'Friday',
    openTime: '7:00 AM',
    closeTime: '9:00 PM',
    isClosed: false
  },
  {
    dayOfWeek: 'Saturday',
    openTime: '8:00 AM',
    closeTime: '9:00 PM',
    isClosed: false
  },
  {
    dayOfWeek: 'Sunday',
    openTime: '8:00 AM',
    closeTime: '7:00 PM',
    isClosed: false
  }
];