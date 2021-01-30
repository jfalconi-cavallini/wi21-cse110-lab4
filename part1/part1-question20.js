function date(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  window.setInterval(date,1000);