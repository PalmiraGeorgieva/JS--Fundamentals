function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;
    let price = 0
    let reducePrice = 0;
    switch (dayOfWeek) {
        case "Friday":
            if(typeOfGroup === "Students") {
                if (groupOfPeople >= 30) {
                    price = 8.45 * groupOfPeople
                   reducePrice = price * 0.15
                   totalPrice = price - reducePrice

                } else {
                    totalPrice = 8.45 * groupOfPeople
                }

            } else if (typeOfGroup === "Business") {
                if (groupOfPeople >= 100) {
                    price = 10.90 * groupOfPeople
                    totalPrice = price - (10 * 10.90)

                } else {
                    totalPrice = 10.90 * groupOfPeople
                }
                

            } else if (typeOfGroup === "Regular") {
                if (groupOfPeople >= 10 && groupOfPeople < 20) {
                    price = 15 * groupOfPeople;
                    reducePrice = price * 0.05;
                    totalPrice = price - reducePrice
                } else {
                    totalPrice = 15 * groupOfPeople
                }

            }
            break;
        case "Saturday":
            if(typeOfGroup === "Students") {
                if (groupOfPeople >= 30) {
                    price = 9.80 * groupOfPeople
                   reducePrice = price * 0.15
                   totalPrice = price - reducePrice

                } else {
                    totalPrice = 9.80 * groupOfPeople
                }

            } else if (typeOfGroup === "Business") {
                if (groupOfPeople >= 100) {
                    price = 15.60 * groupOfPeople
                    totalPrice = price - (10 * 15.60)

                } else {
                    totalPrice = 15.60 * groupOfPeople
                }
                

            } else if (typeOfGroup === "Regular") {
                if (groupOfPeople >= 10 && groupOfPeople < 20) {
                    price = 20 * groupOfPeople;
                    reducePrice = price * 0.05;
                    totalPrice = price - reducePrice
                } else {
                    totalPrice = 20 * groupOfPeople;
                }

            }
            break;
        case "Sunday":
            if(typeOfGroup === "Students") {
                if (groupOfPeople >= 30) {
                    price = 10.46 * groupOfPeople
                   reducePrice = price * 0.15
                   totalPrice = price - reducePrice

                } else {
                    totalPrice = 10.46 * groupOfPeople
                }

            } else if (typeOfGroup === "Business") {
                if (groupOfPeople >= 100) {
                    price = 16 * groupOfPeople
                    totalPrice = price - (10 * 16)

                } else {
                    totalPrice = 16 * groupOfPeople
                } 
                

            } else if (typeOfGroup === "Regular") {
                if (groupOfPeople >= 10 && groupOfPeople < 20) {
                    price = 22.50 * groupOfPeople;
                    reducePrice = price * 0.05;
                    totalPrice = price - reducePrice
                } else {
                    totalPrice = 22.50 * groupOfPeople
                }

            }
            break;        

    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(30,
"Students",
"Sunday"
)