"use strict";
// Задание 1
function getSolutions(a, b, c){
    const D = b**2 - 4 * a * c; // D - discriminante (Дискриминанта)
    let x = [];
    if (D > 0) {
    	let x1 = (-b + Math.sqrt(D))/(2 * a);
    	let x2 = (-b - Math.sqrt(D))/(2 * a);
        x.push(x1, x2);
    }
    else if (D === 0) {
        x.push(-b / (2 * a));
    }
    return {D: D, roots: x};
}
function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    if (result.D > 0)
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    else if (result.D === 0)
      console.log(`Уравнение имеет один корень X = ${result.roots[0]}`);
    else
      console.log(`Уравнение не имеет вещественных корней`);
}

// Задание 2
console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    phisics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}))

function getAverageMark(marks) {
  return (marks.length === 0) ?  0 : (marks.reduce((sum, current) => {
    return sum + current
  }, 0)) / marks.length;
}
function getAverageScore(data) {
  const newObj = {};
  const array = []
  for (const key in data) {
    newObj[key] = getAverageMark(data[key]);
    array.push(newObj[key]);
  }
  newObj.average = getAverageMark(array);
  return newObj;
}

// Задание 3
console.log(getPersonData({
  aaa: 1,
  bbb: 0
}))

function getDecodedValue(secret) {
  if (secret === 1) {
    return 'Эмильо';
  }
  if (secret === 0) {
    return 'Родриго';
  }
}

function getPersonData(secretData) {
  return { firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) }
}