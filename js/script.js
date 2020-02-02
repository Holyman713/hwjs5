const users = {};
for (var i = 1; i <= 10; i++) { 
    users[i] = {
        name: prompt('Введите Имя'),
        age: +prompt('Введите возраст')
    }
}
i = 1;
for (const key in users) {
    console.log(`Пользователь ${i++} `);
    for (const newKey in users[key]) {
        if (newKey == 'name') {
            console.log(`Ваше имя: ${users[key][newKey]}`);
        }
        else {
            console.log(`Ваше возраст: ${users[key][newKey]}`);
        }
    }
}
console.log(users);



const obj = cartObj();
// console.log(cartObj());
// console.log(obj);
var sum = 0;
var dostavka = 9000;
var product = '';
// var info1 = '';


for (const key in obj) {
        // console.log(key);  
        // product = product +' ' + key;       
        
    for(const newKey in obj[key]) {
        // console.log(obj[key][newKey]);  
        if (newKey == 'info') {
            product = product +' ' + key + ' ' +obj[key][newKey] + ',';  
        }
        if (newKey == 'price') {
            sum += obj[key][newKey]      
        }   
    }    
}
console.log(`Вы заказали${product} - Общая сумма ${sum+dostavka} с доставкой ${dostavka}`);

// console.log(info1);
