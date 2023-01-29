document.addEventListener('DOMContentLoaded', function(){
    function countdown() {
        let timer = document.getElementById("timer"); 
        let secs = timer.innerHTML;
        if (secs !== `0`) {
            --secs
            timer.innerHTML = secs;
        } else (clearInterval(timer));
        if(secs == 0)
        {  
        alert(`Вы победили в конкурсе!`);
        }
}
    setInterval(countdown,1000);  
    });
 
