'use strict'
//код для задачи №1
String.prototype.isPalindrome = function() {
  const source = this.toLowerCase().replace(/\s/g, '').split("");
  return source.join("") === source.reverse().join("");
}

// код для задачи №2
function getAverageMark(marks) {
    const average = Math.round(marks.reduce((sum, current) => 
        {return sum + current}, 0)) / marks.length;
    return (marks.length === 0) ?  0 : Math.round(average);
}

// код для задачи №3
function checkBirthday(birthday) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);
  const diffMs = (+currentDate) - (+birthdayDate);
  const age = diffMs / 31557600000;
  return age > 18;
}