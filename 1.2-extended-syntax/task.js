"use strict";
function getResult(a,b,c){
    let D = b**2 - 4 * a * c; // D - discriminante (Дискриминанта)
    let x = [];
    if (D > 0) {
    	let x1 = (-b + Math.sqrt(D))/(2 * a);
    	let x2 = (-b - Math.sqrt(D))/(2 * a);
    	x.push(x1, x2);
    }
    else if (D === 0) {
    	x.push(-b / (2 * a));
    }
    else if (D < 0) {
    	x.push();
    }
    return x;
}

function getAverageMark(marks){
    let quantity = marks.length;
    if (quantity > 0) {
    	if (quantity > 5) {
    		console.log(`Оценок больше 5-ти.`);
    		marks.splice(5);
    		quantity = 5;
    	}
    	let sumOfRatings = 0;
    	for (let mark of marks) {
    		console.log(mark);
    		sumOfRatings = sumOfRatings + mark;
    	}
    	return sumOfRatings/quantity;
    }
	else return 0;
}

function askDrink(name,dateOfBirthday){   
    let now = new Date();
    now = ((now.getFullYear() - dateOfBirthday.getFullYear()) >= 18) ?
             `Не желаете ли олд-фэшн, ${name}?` :        
             `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return now;
}