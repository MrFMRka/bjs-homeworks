 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
	
	let algebra = a;
	let geography = g;
	let physics = p;
	return task1Result = (a + g + p) / 3;

/*	Вывод целого числа оценки. 
	Возможен вариант с округлением в большую или меньшую сторону,
	но я его тут не рассматривал.
	
	let algebra = a;
	let geography = g;
	let physics = p;
	let task1ResultGeneral = (a + g + p) / 3;
    let task1Result = task1ResultGeneral - (((a + g + p) / 3) % 1);
	return task1Result;
*/
}

function sayHello(userName) {
	
    let myName = userName;
	let message = "Привет, мир! Меня зовут " + myName;	
	return task2Result = message;
}

function calculateFormula() {
    
	// реализуйте здесь задание №3
    
    return // ваш ответ;
}
