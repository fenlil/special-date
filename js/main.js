const specialDate = {
  year: 2020,
  month: 8,
  day: 3,
  hour: 0,
  minute: 0,
  second: 0,
};

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

  const counterTime = [
    newDate.getFullYear() - specialDate.year,
    newDate.getMonth() - specialDate.month >= 0
      ? newDate.getMonth() - specialDate.month
      : newDate.getMonth(),
    newDate.getDate(),
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
