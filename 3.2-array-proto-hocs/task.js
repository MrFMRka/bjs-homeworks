"user strict";

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.  
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((item) => arr1.indexOf(item) === arr2.indexOf(item))
  );
}

function memorize(fn, limit) {

  const memory = [];

  return (...argument) => {  

   const searchInMemory = memory.find((item) =>
     compareArrays(item.args, argument)
   );

   if (searchInMemory) {
     return searchInMemory.result;
   }

   const result = fn(...argument);   
   memory.push({ args: Array.from(argument), result: result });

   if (memory.length > limit) {
     memory.shift();
   }   

   console.log("result from function memorize()");
   return result;    
  };   
}

function testCase(testFunction, timerName) {
  console.time(timerName);
  for (let i = 0; i < 101; i++) {
    newArray.forEach((item) => {
      testFunction(...item);
    });
  }
  console.timerEnd(timerName);
}

const newArray = [
  [1, 2, 3],
  [1, 2],
  [1, 2, 3],
  [1, 2],
  [9, 5, 2, 4],
];