var DOMstrings = {
    list: ".team_list",
}

const date = new Date();
let y = date.getFullYear();
let m = date.getMonth() + 1;
let d = date.getDate();
dates = document.querySelectorAll(".box>div:nth-child(1)")
headerDate = document.querySelector(".date")
console.log(dates);
for (let i = 0; i < dates.length; i++) {
    d += 2;
    if (m == 2 && d > 28 || ((m == 4 || m == 6 || m == 9 || m == 11) && d > 30) || d > 31) {
        d = 1;
        m++;
        if (m == 12) {
            m = 1;
        }
    }
    dates[i].innerHTML = y + "/" + m + "/" + d
}
y = date.getFullYear();
m = date.getMonth() + 1;

d = date.getDate();
document.querySelector(".date").innerHTML = y + "/" + m + "/" + d
scores = document.querySelectorAll(".team_list>div:nth-child(1)");
names = document.querySelectorAll(".team_list>div:nth-child(2)");
console.log(names);
randomCount = Math.floor(Math.random() * 7);
console.log(randomCount);
for (let i = 0; i < scores.length; i++) {
    scores[i].innerHTML = Math.floor(Math.random() * 7);
}
// Товчлуур дарах үед ажиллах 
document.querySelector(".btn").addEventListener("click", () => {
    // өдөр нэмэгдүүлэх
    // өдрийг хэвлэх функц
    // Цагыг тавих функц
    document.querySelector(".date").innerHTML = y + "/" + m + "/" + d

    // Санамсаргүй тоог гаргах хоорондоо тэнцүү байэ болохгүй
    // Ялагчийг олох функц 2р багыг харьцуулах



    // Ялагчийг дараагийн шатанд гаргах


    // Медалт байрыг гаргах
})