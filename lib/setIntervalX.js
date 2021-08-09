function setIntervalX(callback, delay, repetitions){
  var i = 0;
  var intervalIDX = window.setInterval(function(){
    callback();
    if (++i === repetitions){
      window.clearInterval(intervalIDX);
    }
  }, delay);
}