function checkMovie(name, rating, price) {
  if (rating >= 7 && price < 500) {
    console.log("На " + name + " стоит сходить в кино.")
  } else {
    console.log(name + " лучше посмотреть дома.")
  }
}

let movieName = "Алита: Боевой ангел"
let movieRating = 7.3
let moviePrice = 600
checkMovie(movieName, movieRating, moviePrice)

movieName = "Спасти Ленинград"
movieRating = 5.5
moviePrice = 300
checkMovie(movieName, movieRating, moviePrice)

movieName = "Дом, который построил Джек"
movieRating = 7.2
moviePrice = 500
checkMovie(movieName, movieRating, moviePrice)

movieName = "Стекло"
movieRating = 6.5
moviePrice = 400
checkMovie(movieName, movieRating, moviePrice)

movieName = "Ван Гог. На пороге вечности"
movieRating = 7.2
moviePrice = 450
checkMovie(movieName, movieRating, moviePrice)
