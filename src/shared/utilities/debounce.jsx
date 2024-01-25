export function debounce(cb,delay=1000){
    let timer;
    return ()=>{
        clearInterval(timer);
        timer = setTimeout(()=>{
            cb();
        },delay);
    }
}