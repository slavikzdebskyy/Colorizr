import Color from 'color';

export const getDarkerArray = color => {
  const darkerArray = [];
  for (let i = 1; i <= 10; i++) {
    darkerArray.push({selected: false, color: Color(color).darken(i * 5 / 100).hex()})
  }
  return darkerArray;
}

export const getMixedArray = (mainColor, mixedWithColor) => {
  const mixedArray = [];
  const color = Color(mainColor);
  for (let i = 1; i <= 10; i++) {
    mixedArray.push({selected: false, color: color.mix(Color(mixedWithColor), i * 8 / 100).hex()})
  }
  return mixedArray;
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

export const getVariablesArray = colorsArray => {
  const varArr = [];
  
  colorsArray.forEach((item, index) => {
    const itemObj = {
      variableName : `color-${index + 1}`, 
      color : item
    }
    varArr.push(itemObj);
  })
  return varArr;
}

