const secondHand= document.getElementById('segundero');
const minutero= document.getElementById('minutero');
const hora= document.getElementById('hora');

function setDate(){
    // Segundos
    const ahora= new Date();
    const seconds= ahora.getSeconds();    
    const secondsDegrees = ((seconds/60)*360)+90;    
    secondHand.style.transform= `rotate(${secondsDegrees}deg)`;  
    console.log(seconds); 
    // Minutos
    const minutes=ahora.getMinutes();
    const minutesDegrees = ((minutes/60)*360)+90;
    minutero.style.transform= `rotate(${minutesDegrees}deg)`;
    console.log(minutes);
    // Horas
    const hours=ahora.getHours();
    const hoursDegrees = ((hours/12)*360)+90;
    hora.style.transform= `rotate(${hoursDegrees}deg)`;
    console.log(hours);
}
setInterval(setDate, 1000);


