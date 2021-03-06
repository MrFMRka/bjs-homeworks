"use strict";

function parseCount(userData) {
  const transformData = Number.parseInt(userData);

  if (isNaN(transformData)) {
    throw new Error("Невалидное значение");
  }

  return transformData;
}

// console.log(parseCount(NaN));

function validateCount(userData) {
  try {   
    return parseCount(userData);   
  } catch (e) {
    return e;
  }
}

// console.log(validateCount(NaN));

class Triangle {
  constructor(firstParty, secondParty, thirdParty) {
    
    this.firstParty = firstParty;
    this.secondParty = secondParty;
    this.thirdParty = thirdParty;

    if (
      this.firstParty > this.secondParty + this.thirdParty ||
      this.secondParty > this.firstParty + this.thirdParty ||
      this.thirdParty > this.firstParty + this.secondParty
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.firstParty + this.secondParty + this.thirdParty
  }
  getArea() {
    const halfPerimeter = this.getPerimeter() / 2;
    return Number(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.firstParty)
      * (halfPerimeter - this.secondParty)
      * (halfPerimeter - this.thirdParty)).toFixed(3));
  }
}

function getTriangle(firstParty, secondParty, thirdParty) {
  try {
    return new Triangle(firstParty, secondParty, thirdParty);
  } catch (e) {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует"
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}