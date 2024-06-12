import { format, toDate } from 'date-fns';

const DateToLocal = (date: string) => {
  const dateObject = new Date(date);

  return format(toDate(dateObject), 'yyyy-MM-dd HH:mm:ss');
};

export default DateToLocal;
