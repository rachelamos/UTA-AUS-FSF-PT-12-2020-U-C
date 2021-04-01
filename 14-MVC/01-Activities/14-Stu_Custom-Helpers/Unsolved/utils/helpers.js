module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
  format_date: (date) => {
    newDate = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
    fulldate = new Date (month + 1, day, year + 5);
    return fulldate;
  }
};
