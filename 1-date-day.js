const today = new Date();
console.log(today);
const day = today.getDay();
const time = today.getTime();
const hours = today.getHours();
const mins = today.getMinutes();
const secs = today.getSeconds();
console.log(`${day} ${hours}:${mins}`);

const daylist = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log(`${daylist[day]}`);
let prepand = (hours >=12)? 'PM':'AM';
console.log(prepand);
if (hours === 0 && prepand === 'PM'){
    if(mins===0 && secs===0){
        prepand='Noon';
    }
}
else {
    hours =12;
    prepand = 'PM';
}
if(hours===0 && prepand ==='AM'){
    
}