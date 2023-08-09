// //data processing for raw JSON,

const backgroundColor = "#ffffff";
const lineColor = '#ddd043'

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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < amounts.length; i++) {
    const curDate = new Date(dates[i]);
    const curMonth = curDate.getMonth();
    const curYear = curDate.getFullYear();

    if (curYear == year) {
      totals[curMonth] += amounts[i];
    }
  }

  return {
    datasets: [
      {
        label: `${year}`,
        data: totals,
        backgroundColor: backgroundColor,
        borderColor: lineColor,
      },
    ],
    labels: labels,
  };
};

const getDataForYearTotalDonations = (amounts, dates, year) => {
  for (let i = 0; i < amounts.length; i++) {
    const curDate = new Date(dates[i]);
    const curMonth = curDate.getMonth();
    const curYear = curDate.getFullYear();

    if (curYear == year) {
    }
  }
};

export { getDataForYear, getDataForYearTotalDonations };
