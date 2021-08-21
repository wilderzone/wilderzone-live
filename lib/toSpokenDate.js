function toSpokenDate(date){
  var ordinals = ["th", "st", "nd", "rd"];
  var months = ["","Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
  var spokenDate = parseInt(date.split("/")[2]);
  
  if(parseInt(date.split("/")[2][1]) >= 1 && parseInt(date.split("/")[2][1]) <= 3 && parseInt(date.split("/")[2]) != 11 && parseInt(date.split("/")[2]) != 12 && parseInt(date.split("/")[2]) != 13){
    spokenDate += ordinals[parseInt(date.split("/")[2][1])];
  }else{
    spokenDate += ordinals[0];
  }
  
  spokenDate += " " + months[parseInt(date.split("/")[1])] + " " + date.split("/")[0];
  
  return spokenDate;
}