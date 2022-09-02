
//Program 1: write a program to find maximum between two number.
// var a:number = 30;
// var b:number =20;
// if(a > b)
//     {
//         console.log('a is greater')
//     }
// else
//     {
//         console.log('b is greater');
//     }

// //Program 2: write a program to find maximum between three numbers.
// var a:number = 30;
// var b:number =120;
// var c:number =150;
// if(a > b && a > c)
//     {
//         console.log('a is greater')
//     }
// else if(b > c && b > a)
//     {
//         console.log('b is greater');
//     }
// else
//     {
//         console.log('c is greater'); 
//     }

//Program 3: write a program to check weather the number is positive, negative and zero.
// var a:number = -10;
// if(a > 0)
//     {
//         console.log('a is positive')
//     }
// else if(a < 0)
//     {
//         console.log('a is negative');
//     }
// else
//     {
//         console.log('a is zero'); 
//     }

//Program 4: write a program to check the weather the number is divisible by 5 and 11 or not.
// var a:number = 200;
// if(a % 5 ==0 && a % 11==0)
//     {
//         console.log('divisible by 5 and 11')
//     }
// else 
//     {
//         console.log('not divisible by 5 and 11')
//     }

//Program 5: write a program to check the weather the number is divisible by 5 and 11 or not.
// var a:number = 7;
// if(a % 2 ==0 )
//     {
//         console.log('Even number')
//     }
// else 
//     {
//         console.log('Odd number')
//     }

//Program 7: write a program to check the weather the character is alphabetic or not.
// var a:string = 'p';
// if(a =='a'|| a =='b'|| a =='c'|| a =='d'|| a =='e'|| a =='f'|| a =='g'|| a =='h'|| a =='i'||
// a =='j'|| a =='k'|| a =='l'|| a =='m'|| a =='n'|| a =='o'|| a =='p'|| a =='q'|| a =='r'|| a =='s'||
// a =='t'|| a =='u'|| a =='v'|| a =='w'|| a =='x'|| a =='y'|| a =='z')
//     {
//         console.log('Alphabetic ')
//     }
// else 
//     {
//         console.log('Not Alphabet')
//     }

//Program 8: write a program to input any alphabet and weather its is vowel or consonant.
// var a:string | null = prompt("Enter vowal or consonant");
// if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u')
// console.log('vowel')
// else
// console.log('consonant')


//Program 9: write a program to any input character and check wheather its is alphabet, digits or special character.
// var a:string = prompt('Enter any charater');
// if(a>='a' && a<='z')
// console.log('alphabet')
// else if(a>='0'&&a<='9')
// console.log('digits')
// else
// console.log('special character')

//Program 10: write a program to chech weather character upercase and lowercase alphabet.
// var a:string='a'
// if(a>='a' && a<='z')
// console.log('lowecase')
// else
// console.log('uppercase')

//Program 11: write a program to input month number and print number of days in that month.
// var a:string='12'
// if(a=='1'||a=='3'||a=='5'||a=='7'||a=='8'||a=='10'||a=='12')
// console.log('31 Days Month')
// else if (a == '4' || a == '6'
//     || a == '9' || a == '11') {
//         console.log('30 Days Month')
// }
// else if (a == '2') {
//     console.log('28-29 Days Month')
// }
// else 
//     console.log('invalid number')

//Program 17: write a program to find all roots of a quardratic equation.
var root1:number, root2:number;

var a:number = 21;
var b :number= 10;
var c :number= 15;

// calculate discriminant
var discriminant:number = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    var realPart:number = (-b / (2 * a)).toFixed(2);
    var imagPart:number = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    console.log
    (`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}

