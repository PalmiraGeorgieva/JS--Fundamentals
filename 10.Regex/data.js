function date(arr) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Za-z]{3})\2(?<year>\d{4})\b/g
    let dateArr = arr[0]
    let matches = dateArr.matchAll(pattern);

    for(let match of matches) {
        let day = match.groups.day;
        let month = match.groups.month;
        let year = match.groups.year


        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }

}
date(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])