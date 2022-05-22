// Тухайн өдрийн он,сар, өдрийг авч өөрчлөгдөхгүй хувьсагчид хадгална

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const today = document.querySelector(".today");
today.innerHTML = `${year}/${month}/${day}`;
// 8 багийн тоглолтонд 2р өдрийн зайтай хуваарь зоож өгнө.
games = document.querySelectorAll(".date");
let gameYear = year;
let gameMonth = month;
let gameDay = day;
for (let i = 0; i < 8; i++) {
    gameDay += 2;
    if (gameMonth == 2 && gameDay > 28) {
        gameDay = 1;
        gameMonth += 1;
    } else if (gameDay > 30) {
        if (gameMonth == 4 || gameMonth == 6 || gameMonth == 9 || gameMonth == 11) {
            gameDay = 1;
            gameMonth += 1;
        }
    };
    if (gameMonth > 12) {
        gameMonth = 1;
        gameYear += 1;
    }
    games[i].innerHTML = `${gameYear}/${gameMonth}/${gameDay}`

}


// Өдрийг нэмэгдүүлнэ.
let y = year;
let m = month;
let d = day;
day += 1
    // Тоглолтын функц зарлана.