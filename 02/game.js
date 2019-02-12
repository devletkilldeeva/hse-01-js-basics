// Координаты трехпалубного корабля
// Координаты текущего выстрела
// Количество попаданий
// Потоплен корабль или нет

// Создаем три переменные: location1, location2, location3
let location1 = 5
let location2 = 6
let location3 = 7
// Создаем переменную currentShot
let currentShot
// Созлаем переменную, чтобы считать выстрелы
let shots = 0
// Создаем переменную для количества попаданий hits
let hits = 0
// Создаем переменную, чтобы отслеживать потоплен или нет isSunk
let isSunk = false

while (isSunk === false) {
  // Получить координаты выстрела
  currentShot = Number(prompt("Введите число от 0 до 9:"))
  // Нужно увеличить счетчик всех выстрелов
  shots += 1
  // Сравнить координаты выстрела с координатами корабля
  if (currentShot !== 5 || currentShot !== 6 || currentShot !== 7) {
    alert("лох!")
  }
  if (currentShot === 5 || currentShot === 6 || currentShot === 7) {
    alert("в точку!")
  }
  if (currentShot < 0 || currentShot > 9) {
    alert("лох!")
  } else {
    if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
      hits += 1
      if (hits === 3) {
        isSunk = true
        alert("Победа!")
      }
    }
  }
}
// Выводим статистику игры и рейтинг игрока
let rating = Math.round(3 / shots * 100)
alert("Вам понадобилось " + shots + " выстрелов, чтобы потопить корабль. Ваш рейтинг: " + rating)
