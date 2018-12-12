import Color from 'color';

const getDarkenArray = color => {
  const resultArr = [];
  for (let i = 1; i <= 10; i++) {
    resultArr.push({selected: false, color: Color(color).darken(i*5/100).hex()})
  }
  return resultArr;
}

export default getDarkenArray;