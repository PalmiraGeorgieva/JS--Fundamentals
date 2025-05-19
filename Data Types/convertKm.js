function convertKm(meter) {
    let km = meter/1000;
    let miles = km * 0.621371 ;
    console.log(`${meter} meters is equal to ${km} kilometers.`);
    console.log(`${km} kilometers is equal to ${miles.toFixed(2)} miles.`)

}
convertKm(1852)