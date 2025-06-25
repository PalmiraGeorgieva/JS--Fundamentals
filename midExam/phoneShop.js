function phoneShop(data) {
    let phoneStorage = data.shift().split(', ');

    let command = data.shift();
    while(command !== 'End') {
        let tokens = command.split(' - ');
        let action = tokens[0];
        let phoneModel = tokens[1];

        switch(action) {
            case "Add":
                if(!phoneStorage.includes(phoneModel)) {
                    phoneStorage.push(phoneModel)
                } 

                break;
            case "Remove":
                if(phoneStorage.includes(phoneModel)) {
                    let index = phoneStorage.indexOf(phoneModel)
                    phoneStorage.splice(index, 1)
                } 

                break;
            case "Bonus phone":
                let [oldPhone, newPhone] = phoneModel.split(':');
                if(phoneStorage.includes(oldPhone)) {
                    let newIndex = phoneStorage.indexOf(oldPhone);
                    phoneStorage.splice(newIndex + 1, 0, newPhone)
                }    
                break;
            case "Last":
                if(phoneStorage.includes(phoneModel)) {
                    let index = phoneStorage.indexOf(phoneModel)
                    phoneStorage.splice(index, 1);
                    phoneStorage.push(phoneModel)
                } 
                break;

        }

        command = data.shift()
    }
    console.log(phoneStorage.join(', '))

}
phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]))

phoneShop((["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"]))