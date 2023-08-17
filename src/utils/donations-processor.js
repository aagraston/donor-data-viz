// //data processing for raw JSON,

const backgroundColor = "#ffffff";
const lineColor = "#ddd043";

const getDataForYear = (amounts, dates, year) => {
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
  let total = 0;

  for (let i = 0; i < amounts.length; i++) {
    const curDate = new Date(dates[i]);
    const curYear = curDate.getFullYear();

    if (curYear == year) {
      total += amounts[i];
    }
  }

  return total;
};

const getDataDonorsForYear = (totalDonors, year) => {
  let donorCount = 0;

  for (let i = 0; i < totalDonors.length; i++) {
    let donationsArray = totalDonors[i].node.donations;

    for (let x = 0; x < donationsArray.length; x++) {
      let curYear = new Date(donationsArray[x].date).getFullYear();

      if (curYear == year) {
        donorCount += 1;
        break;
      }
    }
  }

  return donorCount;
};

const monthNumToShortName = (num) => {
  switch (num) {
    case 0:
      return 'Jan'
      break;
    case 1:
      return 'Feb'
      break;
    case 2:
      return 'Mar'
      break;
    case 3:
      return 'Apr'
      break;
    case 4:
      return 'May'
      break;
    case 5:
      return 'Jun'
      break;
    case 6:
      return 'Jul'
      break;
    case 7:
      return 'Aug'
      break;
    case 8:
      return 'Sep'
      break;
    case 9:
      return 'Oct'
      break;
    case 10:
      return 'Nov'
      break;
    case 11:
      return 'Dec'
      break;
  }
};

const monthNumToLongName = (num) => {
  switch (num) {
    case 0:
      return 'January'
      break;
    case 1:
      return 'February'
      break;
    case 2:
      return 'March'
      break;
    case 3:
      return 'April'
      break;
    case 4:
      return 'May'
      break;
    case 5:
      return 'June'
      break;
    case 6:
      return 'July'
      break;
    case 7:
      return 'August'
      break;
    case 8:
      return 'September'
      break;
    case 9:
      return 'October'
      break;
    case 10:
      return 'November'
      break;
    case 11:
      return 'December'
      break;
  }
};

const getBestMonth = (amounts, dates, year) => {
  let curMonthTotal = 0;
  let bestMonthTotal = 0;
  let bestMonth = 0;

  for (let x = 0; x < 12; x++) {
    for (let i = 0; i < amounts.length; i++) {
      const curDate = new Date(dates[i]);
      const curMonth = curDate.getMonth();
      const curYear = curDate.getFullYear();

      if (curYear == year && curMonth == x) {
        curMonthTotal += amounts[i];
      }
    }
    if (curMonthTotal > bestMonthTotal) {
      bestMonth = x;
      bestMonthTotal = curMonthTotal;
    }
    curMonthTotal = 0;
  }

  let monthName = monthNumToLongName(bestMonth)
  let returnObj = {
    monthName: monthName,
    monthTotal: bestMonthTotal
  }
  return returnObj
};

export {
  getBestMonth,
  getDataForYear,
  getDataForYearTotalDonations,
  getDataDonorsForYear,
};
