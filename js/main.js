const specialDate = {
  year: 2020,
  month: 8,
  day: 3,
  hour: 0,
  minute: 0,
  second: 0,
};

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const data = { date: String(new Date()) };
fetch('https://serverless.fenriuz.vercel.app/api/test/functionuwu', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((x) => {
    console.log(x);
  })
  .catch((error) => {
    console.log(error);
  });

const flexData = document.querySelectorAll('#flex-table h1');

const updateClock = () => {
  const newDate = new Date();

  const counterYear = (newDate.getMonth() - specialDate.month >= 0)
    ? newDate.getFullYear() - specialDate.year
    : newDate.getFullYear() - specialDate.year - 1;
  let counterDays;
  if (newDate.getMonth > 0) {
    counterDays = daysInMonth(newDate.getMonth - 1, newDate.getFullYear());
  } else {
    counterDays = daysInMonth(11, newDate.getFullYear() - 1);
  }
  console.log('abr', daysInMonth(11, newDate.getFullYear - 1));

  const counterTime = [
    counterYear,
    newDate.getMonth() - specialDate.month >= 0
      ? newDate.getMonth() - specialDate.month
      : newDate.getMonth() + (11 - specialDate.month),
    counterDays,
    newDate.getHours(),
    newDate.getMinutes(),
    newDate.getSeconds(),
  ];

  for (let i = 0; i < counterTime.length; i += 1) {
    flexData[i].innerHTML = counterTime[i];
  }
};
updateClock();

setInterval(updateClock, 1000);
