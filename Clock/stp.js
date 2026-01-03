var t;
const date=new Date;

function start(){
    const hour=date.getHours();
    const minute=date.getMinutes();
    const second=date.getSeconds();
    const timestring=(""+hour+":"+minute+":"+second);
    document.getElementById("tim").textContent=timestring;
    setInterval(start,1000);
}
start();