setInterval(() => {
    let today = new Date();
    hour = today.getHours();
    minutes = today.getMinutes();
    second = today.getSeconds();
    /* hrotation = 30 * hour + minutes / 2;
    mrotation = 6 * minutes;
    srotation = 6 * second;
*/


    document.getElementById("hour").style.transform = `rotate(${30 * hour + minutes / 2}deg )`;
    document.getElementById("minutes").style.transform = `rotate(${6 * minutes}deg )`;
    document.getElementById("seconds").style.transform = `rotate(${6 * second}deg )`;

}, 1000);