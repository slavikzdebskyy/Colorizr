import Color from 'color';

export const getDarkenArray = color => {
  const resultArr = [];
  for (let i = 1; i <= 10; i++) {
    resultArr.push({selected: false, color: Color(color).darken(i*5/100).hex()})
  }
  return resultArr;
}

export const isVisibleRemoveBtn = array => {
  let count = 0;
  array.forEach(element => {
    if (element.selected) {
      count ++;
    }
  });
  return count === array.length;
}

