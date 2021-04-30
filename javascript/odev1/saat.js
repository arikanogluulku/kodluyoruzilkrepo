function username()
{
    var name = prompt("Adınız ? ");
    document.getElementById("uname").innerText = name;
}
function time()
{
    var date = new Date();
    var h =date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDay();

    if(day==1){
        day="Pazartesi";
    } else if(day==2){
        day="Salı";
    }else if(day==3){
        day="Çarşamba";
    }else if(day==4){
        day="Persembe";
    }else if(day==5){
        day="Cuma";
    }else if(day==6){
        day="Cumartesi";
    }else if(day==7){
        day="Pazar";
    }
    
    if(h<10)
    {
        h="0"+h
    }
    if(m<10)
    {
        m="0"+m
    }
    if(s<10)
    {
        s="0"+s
    }
    var time = h+" : "+m+" : "+s+"  " + day;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(time,1000);
    

}
username();
time()