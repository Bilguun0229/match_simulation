// Өнөөдөр, зарлагдсан хувьсагч
const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const day = date.getDate();
let day1;
gameDay = day;
gameMonth = month;
gameYear = year;
const timeRange = {
    quartefinalsGames: [],
    semifinalsGame: [],
    medalGames: [],
    end: ""
}
const medals = {
    goldMedal: "",
    silverMedal: "",
    bronzeMedal: ""
}
const boxs = document.querySelectorAll(".box");
// Өдрийг 1 ээр нэмэгдүүлэх
const addDay = () => {
        gameDay += 1;
        if ((gameMonth == 2 && gameDay == 29) || ((gameMonth == 4 || gameMonth == 6 || gameMonth == 9 || gameMonth == 11) && gameDay == 31) || gameDay == 32) {
            gameMonth += 1;
            gameDay = 1;
            if (gameMonth == 13) {
                gameYear += 1;
                gameMonth = 1;
            }
        }
        day1 = gameYear + "/" + gameMonth + "/" + gameDay;
    }
    // Тоглолтын хуваарь зоох
gameTable = () => {
        for (i = 0; i < 7; i++) {
            addDay();
            timeRange.quartefinalsGames.push(day1);
        }
        for (i = 0; i < 4; i++) {
            addDay();
            timeRange.semifinalsGame.push(day1);
        }
        for (i = 0; i < 2; i++) {
            addDay();
            timeRange.medalGames.push(day1);
        }
        for (i = 0; i < 1; i++) {
            addDay();
            timeRange.end = day1;
        }
        for (i = 0; i < 4; i++) {
            boxs[i].querySelector(".date").innerHTML = timeRange.quartefinalsGames[Math.floor(Math.random() * 7)]
        }
        for (i = 4; i < 6; i++) {
            boxs[i].querySelector(".date").innerHTML = timeRange.semifinalsGame[Math.floor(Math.random() * 4)]
        }
        for (i = 6; i < 8; i++) {
            boxs[i].querySelector(".date").innerHTML = timeRange.medalGames[i - 6];
        }
    }
    // Тоглолтын  функц
match = (arr) => {
    a = Math.floor(Math.random() * 8);
    arr.querySelector(".team1 .score").innerHTML = a;
    b = Math.floor(Math.random() * 8);
    while (a == b) {
        b = Math.floor(Math.random() * 8);
    }
    arr.querySelector(".team2 .score").innerHTML = b;
    // Ялагч тодруулах
    if (a > b) {
        arr.querySelector(".team1").classList.add("winner");
        arr.querySelector(".team2").classList.add("looser");
    } else {
        arr.querySelector(".team1").classList.add("looser");
        arr.querySelector(".team2").classList.add("winner");
    }
    // Дараагийн шатанд оруулах
    if (arr == boxs[0]) {
        boxs[4].querySelector(".team1 .name").innerHTML = arr.querySelector(".winner .name").innerHTML
    } else if (arr == boxs[1]) {
        boxs[4].querySelector(".team2 .name").innerHTML = arr.querySelector(".winner .name").innerHTML
    } else if (arr == boxs[2]) {
        boxs[5].querySelector(".team1 .name").innerHTML = arr.querySelector(".winner .name").innerHTML
    } else if (arr == boxs[3]) {
        boxs[5].querySelector(".team2 .name").innerHTML = arr.querySelector(".winner .name").innerHTML
    } else if (arr == boxs[4]) {
        boxs[7].querySelector(".team1 .name").innerHTML = arr.querySelector(".winner .name").innerHTML
        boxs[6].querySelector(".team1 .name").innerHTML = arr.querySelector(".looser .name").innerHTML
    } else if (arr == boxs[5]) {
        boxs[7].querySelector(".team2 .name").innerHTML = arr.querySelector(".winner .name").innerHTML
        boxs[6].querySelector(".team2 .name").innerHTML = arr.querySelector(".looser .name").innerHTML
    } else if (arr == boxs[6]) {
        medals.bronzeMedal = arr.querySelector(".winner .name").innerHTML;
    } else if (arr == boxs[7]) {
        medals.goldMedal = arr.querySelector(".winner .name").innerHTML;
        medals.silverMedal = arr.querySelector(".looser .name").innerHTML;
    }
}
end = () => {
    gameDay = day;
    gameMonth = month;
    gameYear = year;
    timeRange.quartefinalsGames = [];
    timeRange.semifinalsGame = [];
    timeRange.medalGames = [];
    medals.goldMedal = "";
    medals.silverMedal = "";
    medals.bronzeMedal = "";
    if (document.querySelectorAll(".winner").length > 0) {
        x = document.querySelectorAll(".winner")
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('winner')
        }
    }
    if (document.querySelectorAll(".looser").length > 0) {
        x = document.querySelectorAll(".looser")
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('looser')
        }
    }
    if (document.querySelectorAll(".active").length > 0) {
        x = document.querySelectorAll(".active")
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('active')
        }
    }

}

// Товчлуур дарагдах үед
document.querySelector(".btn").addEventListener("click", (event) => {
    if (event.target.classList.contains('pause')) {
        event.target.classList.remove('pause')
        event.target.classList.add('resume')
        event.target.innerHTML = 'resume'
        clearInterval(go)
    } else if (event.target.classList.contains('resume')) {
        event.target.classList.remove('resume')
        event.target.classList.add('pause')
        event.target.innerHTML = 'pause'
        go = setInterval(() => {
            start();
        }, 1000)
    } else {
        event.target.classList.add('pause')
        event.target.innerHTML = 'pause'
        gameTable();
        gameDay = day;
        gameMonth = month;
        gameYear = year;
        go = setInterval(() => {
            start();
        }, 1000)
    }
})
start = () => {
    addDay();
    if (timeRange.quartefinalsGames[0] == day1) {
        document.querySelector(".quartefinals>h3").style.color = "black"
    }
    if (timeRange.semifinalsGame[0] == day1) {
        document.querySelector(".semifinals>h3").style.color = "black"
        document.querySelector(".quartefinals>h3").style.color = null
    }
    if (timeRange.medalGames[0] == day1) {
        document.querySelector(".bronze>h3").style.color = "black"
        document.querySelector(".semifinals>h3").style.color = null
    }
    if (timeRange.medalGames[1] == day1) {
        document.querySelector(".gold>h3").style.color = "black"
        document.querySelector(".bronze>h3").style.color = null
    }
    if (timeRange.end == day1) {
        document.querySelector(".gold>h3").style.color = null
    }

    document.querySelector(".today").innerHTML = day1;
    if (document.querySelectorAll(".active").length > 0) {
        x = document.querySelectorAll(".active")
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove('active')
        }
    }
    for (i = 0; i < boxs.length; i++) {
        if (boxs[i].querySelector(".date").innerHTML == day1) {
            boxs[i].classList.add("active");
            match(boxs[i]);
        }
    }
    if (day1 == timeRange.end) {
        clearInterval(go);
        document.getElementById("medals").style.display = "block"
        document.getElementById("medals").innerHTML = "Алтан медал: " + medals.goldMedal + "\n" + "Мөнгөн медал: " + medals.silverMedal + "\n" + "Хүрэл медал: " + medals.bronzeMedal
        document.querySelector(".btn").innerHTML = "START SIMULATION"
        document.querySelector(".btn").className = "btn"
        end();
        allScores = document.querySelectorAll(".score")
        for (j = 0; j < allScores.length; j++) {
            allScores[j].innerHTML = ""
        }
        allDate = document.querySelectorAll(".date");
        for (z = 0; z < allDate.length; z++) {
            allDate[z].innerHTML = ""
        }
        allName = document.querySelectorAll(".name");
        for (z = 8; z < allName.length; z++) {
            allName[z].innerHTML = ""
        }
        setTimeout(() => {
            document.getElementById("medals").style.display = null;
        }, 2000);
    }
}