import * as moment from 'moment';

export const getDatabaseInsertableTime = (amount, unit) => {
  return moment(moment(), 'YYYY-MM-DD HH:mm:ss').add(amount, unit).toString();
};
