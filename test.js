// Тухайн өдрийн он,сар, өдрийг авч өөрчлөгдөхгүй хувьсагчид хадгална
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
let today = document.querySelector(".today");
today.innerHTML = `${year}/${month}/${day}`;
let bronzeMedal;
let goldMedal;
let silverMedal;
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
    for (let j = 0; j < games.length; j++) {
        games[j].classList.remove("active");
        if (games[j].innerHTML == today.innerHTML) {
            games[j].classList.add("active");
            match(games[j].parentElement);
        }
    }
    if (today.innerHTML == games[games.length - 1].innerHTML) {
        clearInterval(go);
        alert(" алтан медал " + goldMedal + "\n silver medal " + silverMedal + "\n bronze medal " + bronzeMedal)
    }
}, 1000);
// Тоглолтын функц зарлана.
const teams = document.querySelectorAll(".teams");
match = (att) => {
    const a = Math.floor(Math.random() * 8);
    att.querySelector(".teams .team1 .score").innerHTML = a;
    let b = Math.floor(Math.random() * 8);
    if (a == b) {
        while (a == b) {
            b = Math.floor(Math.random() * 8);
        }
    }
    att.querySelector(".teams .team2 .score").innerHTML = b;

    if (a > b) {
        att.querySelector(".teams .team1").classList.add("winner")
        att.querySelector(".teams .team2").classList.add("looser")

    } else {
        att.querySelector(".teams .team2").classList.add("winner")
        att.querySelector(".teams .team1").classList.add("looser")
    }
    // Медалын төлөөх тоглолтуудын функц

    if (att.classList.contains("box1")) {
        document.querySelector(".semifinals .box5 .team1 .name").textContent = att.querySelector(".winner .name").textContent
    } else if (att.classList.contains("box2")) {
        document.querySelector(".semifinals .box5 .team2 .name").textContent = att.querySelector(".winner .name").textContent
    } else if (att.classList.contains("box3")) {
        document.querySelector(".semifinals .box6 .team1 .name").textContent = att.querySelector(".winner .name").textContent
    } else if (att.classList.contains("box4")) {
        document.querySelector(".semifinals .box6 .team2 .name").textContent = att.querySelector(".winner .name").textContent
    } else if (att.classList.contains("box5")) {
        document.querySelector(".gold .box8 .team1 .name").textContent = att.querySelector(".winner .name").textContent
        document.querySelector(".bronze .box7 .team1 .name").textContent = att.querySelector(".looser .name").textContent
    } else if (att.classList.contains("box6")) {
        document.querySelector(".gold .box8 .team2 .name").textContent = att.querySelector(".winner .name").textContent
        document.querySelector(".bronze .box7 .team2 .name").textContent = att.querySelector(".looser .name").textContent
    } else if (att.classList.contains("box7")) {
        bronzeMedal = att.querySelector(".winner .name").textContent;
    } else if (att.classList.contains("box8")) {
        goldMedal = att.querySelector(".winner .name").textContent;
        silverMedal = att.querySelector(".looser .name").textContent;
    }

}



// Хэвлэж харуулах функц