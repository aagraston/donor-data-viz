// //data processing for raw JSON,

const getDataForYear = (amounts, dates, year) => {
  let jan,
    feb,
    mar,
    apr,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec = 0;
  let totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let labels = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  for (let i = 0; i < amounts.length; i++) {
    const curDate = new Date(dates[i]);
    const curMonth = curDate.getMonth();
    const curYear = curDate.getFullYear();

    if (curYear == year) {
      console.log(curYear);
      totals[curMonth] += amounts[i]
    }
  }

  return ({
    datasets: [
      {
        label: `Donations For ${year}`,
        data: totals,
      }
    ],
    labels: labels,
  })
};

const getDataForYearTotalDonations = (amounts, dates, year) => {
  for (let i = 0; i < amounts.length; i++) {
    const curDate = new Date(dates[i]);
    const curMonth = curDate.getMonth();
    const curYear = curDate.getFullYear();

    if (curYear == year) {
      console.log(curYear);
    }
  }
};

export { getDataForYear, getDataForYearTotalDonations };
