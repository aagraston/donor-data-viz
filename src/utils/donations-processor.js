// //data processing for raw JSON,

const backgroundColor = "#ffffff";
const lineColor = "#ddd043";

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

  let donorCount = 0

  for (let i = 0; i < totalDonors.length; i++) {
    
    let donationsArray = totalDonors[i].node.donations

    for (let x = 0; x < donationsArray.length; x++) {
      
      let curYear = new Date(donationsArray[x].date).getFullYear()

      console.log(curYear)
      console.log(year)

      if (curYear == year) {
        donorCount += 1
        break
      }
    }
  }

  return donorCount

}

export { getDataForYear, getDataForYearTotalDonations, getDataDonorsForYear };
