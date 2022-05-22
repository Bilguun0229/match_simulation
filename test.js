// Тухайн өдрийн он,сар, өдрийг авч өөрчлөгдөхгүй хувьсагчид хадгална

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
let today = document.querySelector(".today");
today.innerHTML = `${year}/${month}/${day}`;
// 8 багийн тоглолтонд 2р өдрийн зайтай хуваарь зоож өгнө.
games = document.querySelectorAll(".date");
let gameYear = year;
let gameMonth = month;
let gameDay = day;
for (let i = 0; i < 8; i++) {
    gameDay += 2;
    if (gameMonth == 2 && gameDay > 28 || ((gameMonth == 4 || gameMonth == 6 || gameMonth == 9 || gameMonth == 11) && gameDay > 30) || gameDay > 31) {
        gameDay = 1;
        gameMonth++;
        if (gameMonth == 12) {
            gameMonth = 1;
            gameYear += 1;
        }
    }
    games[i].innerHTML = `${gameYear}/${gameMonth}/${gameDay}`

}


// Өдрийг нэмэгдүүлнэ.
let y = year;
let m = month;
let d = day;
go = setInterval(() => {
    d += 1;
    if (m == 2 && d > 28 || ((m == 4 || m == 6 || m == 9 || m == 11) && d > 30) || d > 31) {
        d = 1;
        m++;
        if (m == 12) {
            m = 1;
            y += 1;
        }
    }
    today.innerHTML = `${y}/${m}/${d}`;
    for (let i = 0; i < games.length; i++) {
        games[i].classList.remove("active");
        if (games.innerHTML == today.innerHTML) {
            games[i].classList.add("active");

        }
    }
    if (today.innerHTML == games[games.length - 1].innerHTML) {
        clearInterval(go);
    }
}, 1000);
// Тоглолтын функц зарлана.
const teams = document.querySelectorAll(".teams");
console.log(teams)
match = () => {
    const a = Math.floor(Math.random() * 100);
    document.querySelector(".team1 .score").innerHTML = a;
    const b = Math.floor(Math.random() * 100);
    document.querySelector(".team2 .score").innerHTML = b;
}