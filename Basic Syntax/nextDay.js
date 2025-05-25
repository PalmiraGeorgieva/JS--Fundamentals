function nextDay(year, month, day){
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1)
    const newDay = date.getDate();
    const newMonth = date.getMonth() + 1;
    const newYear = date.getFullYear();
    console.log(`${newYear}-${newMonth}-${newDay}`)
}
nextDay(2016, 9, 30)