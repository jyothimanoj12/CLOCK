const secondshand= document.querySelector(".second.hand");
const minutehand= document.querySelector(".minute.hand");
const hourhand= document.querySelector(".hour.hand");

function setdate(){
    const now = new Date();
    const seconds =now.getSeconds();
    const secondsDegree = ((seconds/60)*360)+90;
    secondshand.style.transform=`rotate(${secondsDegree}deg)`;
    console.log(seconds);
    const minute =now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutehand.style.transform=`rotate(${minuteDegree}deg)`;
    console.log(minute);
    const hour =now.getHours();
    const hourDegree = ((hour % 12) / 12 * 360) + ((minute / 60) * 30) + 90
    hourhand.style.transform=`rotate(${hourDegree}deg)`;
    console.log(hour);

    
}
setInterval(setdate , 1000);