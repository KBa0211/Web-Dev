function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}
  
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)