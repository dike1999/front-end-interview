const json = {
  data: [
    { date: '2018-08-01', DIU: 1209, country: 'US' },
    { date: '2018-08-01', DIU: 2311, country: 'CN' },
    { date: '2018-08-02', DIU: 879, country: 'US' },
    { date: '2018-08-02', DIU: 680, country: 'GB' },
    { date: '2018-08-02', DIU: 1525, country: 'CN' },
  ],
};

function sortWrite(data) {
  let res = data.sort((a, b) => {
    if (a.date !== b.date) {
      return Date.parse(b.date) - Date.parse(a.date);
    }
    if (a.DIU !== b.DIU) {
      return b.DIU - a.DIU;
    }
  });

  return res;
}

console.log(sortWrite(json.data));
