const secondsToMinutes = millisec => {
    var minutes = "0" + Math.floor(millisec / 60);
    var seconds = "0" + Math.floor(millisec - minutes * 60);
    var dur = minutes.slice(-2) + ":" + seconds.slice(-2);
    return dur;
  };
  
  const timeCounter = currentTime => {
    var minutes = "0" + Math.floor(currentTime / 60);
    var seconds = "0" + Math.floor(currentTime - minutes * 60);
    var counter = minutes.slice(-2) + ":" + seconds.slice(-2);
  
    return counter;
  };
  
  export { secondsToMinutes, timeCounter };
  