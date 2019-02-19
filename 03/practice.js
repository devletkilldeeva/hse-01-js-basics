// // sayHello() — принимает имя и выводит приветствие
//
// function sayHello(name) {
//   console.log("Привет, " + name)
// }
// let userName = "Женя"
// // let userName = prompt("Как тебя зовут?")
// sayHello(userName)
//
// // findMax() — принимает два числа и выводит большее из них
// // Создать функцию, которая принимает 2 параметра
// // Если первый параметр больше второго, то вывожу его в консоль
// // Иначе вывожу второй
// // Вызываю функцию с двумя числами
// function findMax(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
// findMax(53, 21)
// findMax(727, 121)
// findMax(1, 20)
// let value1 = Math.floor(Math.random() * 100)
// let value2 = Math.floor(Math.random() * 100)
// findMax(value1, value2)
//
// // checkSeason() — принимает текущий месяц в виде числа
// // и сообщает какое сейчас время года: 3, 4, 5 — весна; 6, 7, 8 — лето; 9, 10, 11 — осень; 12, 1, 2 — зима.
//
// function checkSeason(currentMonth) {
//   if (currentMonth < 1 || currentMonth > 12) {
//     console.error("Ошибка, введите число от 1 до 12");
//   } else {
//     if (currentMonth === 3 || currentMonth === 4 || currentMonth === 5) {
//       console.log("Сейчас весна")
//     }
//     if (currentMonth >= 6 && currentMonth <= 8) {
//       console.log("Сейчас лето")
//     }
//     if (currentMonth >= 9 && currentMonth <= 11) {
//       console.log("Сейчас осень")
//     }
//     if (currentMonth === 12 || currentMonth === 1 || currentMonth === 2) {
//       console.log("Сейчас зима")
//     }
//   }
// }
// // let askForSeason = prompt("Какой сейчас месяц (1-12)?")
// // checkSeason(Number(askForSeason))
// checkSeason(3)
// checkSeason(6)
// checkSeason(12)
// checkSeason(56)
//
// // checkBedTime() — рассчитывает в котором часу лечь спать, чтобы выспаться. Функция принимает время пробуждения в формате
// // от 0 до 23 и выводит рекомендацию во сколько лечь. Рекомендуемое количество сна — 8 часов.
//
// // Создаем функцию, которая спрашивает желаемое время пробуждения
// // Рассчитываем время засыпания исходя из нормы
// // Выводим
//
// function checkBedTime(wakeUpTime) {
//   let sleepingTime = 8
//   if (wakeUpTime < 0 || wakeUpTime > 23) {
//     console.error("Время должно быть от 0 до 23")
//   } else {
//     let bedTime = wakeUpTime - sleepingTime
//     if (bedTime < 0) {
//       console.log("Ложитесь спать в: " + (24 + bedTime))
//     } else {
//       console.log("Ложитесь спать в: " + bedTime)
//     }
//   }
// }
// checkBedTime(9)
// checkBedTime(7)
//
// // addOne() – принимает любое число, прибавляет 1 и возвращает результат
//
// function addOne(num) {
//   return num + 1
// }
// console.log("Вызываю функцию addOne(15):" + addOne(number))
// console.log("Вызываю функцию addOne(15):" + addOne(num))
// console.log("Вызываю функцию addOne(15):" + addOne(15))

// function nextEvent(num) {
//   if (num % 2 === 0) {
//     num +=2
//     return num
//   } else {
//     return num +=1
//   }
// }
// let num = 8
// console.log("Вызываю функцию nextEvent(num):" + nextEvent(num))

function makeDiff() {
  if (Math.min(a, b, c)) {
    
  }
}
let a = 2
let b = 1
let c = 3

// function calcPrice(price, goods) {
//   return price * goods
// }
// let price = 20
// let goods = 10
// console.log("Вызываю функцию calcPrice(price, goods):" + calcPrice(price, goods))

// function splitPrice(price, value) {
//   return price / value
// }
// let price = 300
// let value = 15
// console.log("Вызываю функцию splitPrice(price, value):" + splitPrice(price, value))






// EOF
