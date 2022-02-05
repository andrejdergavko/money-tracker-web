const formatSum = (numberInString) => {
  const stringWithoutSpase = numberInString.replace(/\s/g, '');
  return Number(stringWithoutSpase.replace(',', '.'));
};

const formatDate = (date) => {
  if (date == null) {
    return '';
  }
  const dateWithoutHours = date.split(' ')[0];
  const yesr = dateWithoutHours.split('.')[2];
  const month = dateWithoutHours.split('.')[1];
  const day = dateWithoutHours.split('.')[0];

  return new Date(yesr, month - 1, day).getTime();
};

export const getTransactionsFromCsv = async (path) => {
  const transactions = [];

  return transactions;
};
