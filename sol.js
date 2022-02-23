function solution(D){
    let x = {
    '2020-01-01': 4,
    '2020-01-02': 2,
    '2020-01-03': 2,
    '2020-01-04': 2,
    '2020-01-05': 2,
    '2020-01-06': -8,
    '2020-01-07': -8,
  }


  let y = [];
  for (let b = 0; b < 7; b++)
    y.push(0);

  console.log(y);

  for (let key of Object.keys(x)) {
    y[new Date(key).getDay()] += x[key];
  }

  console.log(y);
}
