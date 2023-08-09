const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const years = [];

const yearsArray = () => {
  let returnYears = [];

  for (let i = 0; i < 5; i++) {
    years.push(currentYear - i);
    returnYears = years;
  }

  return returnYears;
};

export { yearsArray };
