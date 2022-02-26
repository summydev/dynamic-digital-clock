function showtime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";


    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;
    setTimeout(showtime, 1000);

    let noV = Math.floor((Math.random() * 80) + 1);
    let noH = Math.floor((Math.random() * 50) + 1);
    document.getElementById("myClockDisplay").style.top = (noV + "%")
    document.getElementById("myClockDisplay").style.left = (noH + "%")
    document.getElementById("myClockDisplay").style.right = (noH + "%")
    document.getElementById("myClockDisplay").style.bottom = (noV + "%")

}

showtime();