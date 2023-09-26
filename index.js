const zi = 'Miercuri';


switch (zi) {
    case 'Luni':
        console.log('Astazi este luni!');
        break;
    case 'Marti':
        console.log('Astazi este marti!');
        break;
    case 'Miercuri':
        console.log('Astazi este miercuri!');
        break;
    case 'Joi':
        console.log('Astazi este joi!');
        break;
    case 'Vineri':
        console.log('Astazi este vineri!');
        break;
    case 'Sambata':
        console.log('Astazi este sambata!');
        break;
    case 'Duminica':
        console.log('Astazi este duminica!');
        break;
    default:
        console.log('Nu este zi a saptamanei!');
        break;
}





const str = 1
const lungimeaStr = str
if (lungimeaStr > 10) {
   console.log("Lungimea la str este mai mare decat 10")
} else console.log("Lungimea la str este mai mica decat 10")



const str1 = 1
const lungimeaStr1 = (str1 > 10) ? "Lungimea la str este mai mare decat 10" : "Lungimea la str este mai mica decat 10";

console.log(lungimeaStr1)



const text = 'Uppercase'
console.log(text.toUpperCase())

const text1 = 'LOWERCASE'
console.log(text1.toLowerCase())


const asignare = 'unu doi trei patru cinci'
const substract = asignare.slice(8, 12)
const substract2 = asignare.substring(8, 12)
console.log(substract)
console.log(substract2)