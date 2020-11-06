"use strict";

class AlarmClock {
  constructor (){
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (time, fn, id){
    if (!id) {throw new Error('Не задан id будильника.');
    };
    if (this.alarmCollection.some(timer => timer.id == id)) {
      return console.error(`Ошибка создания нового будильника. ID будльника \"${id}\" не уникален.`);
    }
    this.alarmCollection.push({id, time, callback: fn});
  }

  removeClock (id) {
    return !!(this.alarmCollection.splice(this.alarmCollection.findIndex(alarm => (alarm.id == id)), 1).length);
  }

  getCurrentFormattedTime () {
    return (`${checkTimeDigits(new Date().getHours())}:${checkTimeDigits(new Date().getMinutes())}`);
  }

  start () {
    if (!this.timerId) {
      this.timerId = setInterval (() => (this.alarmCollection.forEach(alarm => checkClock(alarm, this.getCurrentFormattedTime()))), 100);
    }
  }

  stop () {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms () {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`)
    this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.id} установлен на ${alarm.time}`));
  }
  clearAlarms () {this.stop(), this.alarmCollection.length = 0;}
}

function checkClock (alarm, time) {
  if (alarm.time == time) {
    alarm.callback();
  }
}

function checkTimeDigits(i) {
  return (i < 10) ? i = "0" + i : i;
}

function testCase () {
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock("09:00", () => console.log("Время просыпаться!"), 1);
  phoneAlarm.addClock("09:01", () => {console.log("ПРОБУДИТЕСЬ!"); 
    phoneAlarm.removeClock(2)
  }, 2);
  phoneAlarm.addClock("09:02", () => console.log("Подъем!!!"));
  phoneAlarm.addClock("09:03", () => {console.log("Вставай сейчас же!");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
  }, 3);
  phoneAlarm.addClock("09:04", () => console.log("Вставай, чувак!"), 1);
  phoneAlarm.printAlarms();
  phoneAlarm.start();
}