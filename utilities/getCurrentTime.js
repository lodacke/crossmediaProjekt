export function getCurrentTime (){

    let time = new Date();   
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let currentTime = hours * 3600 + minutes * 60 + seconds;
    
    return currentTime
}