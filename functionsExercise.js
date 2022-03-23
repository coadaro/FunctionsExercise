//1 
function fozzieBear() {
    console.log(`Wocka Wocka!`);
}
fozzieBear();

//2
function beaker(speak){
    console.log(`${speak}, ${speak}, ${speak}, ${speak}`);
};
beaker(`Meep`);

//3
function muppetShow(a, b) {
    if (a === `Muppet` && b === `Show`){
        return `It's time to play the music. It's time to light the lights.`;
    };
};
console.log(muppetShow(`Muppet`, `Show`));

//4
function kermit() {
    return `Kermit The Frog`
};
let kermitIs = kermit();
console.log(kermitIs);

//5
function muppetShowSeasons(seasons) {
    if (seasons === 5){
        return true;
    }
    return false;
};
console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));

//6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet`);
}
manOrMuppet();

//7
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;
console.log(rainbowConnection());

//8
// No

//9
// Yes

//bonus
//10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

//10b
const uppers = newMuppetMovies.map(function(x){
    return x.toUpperCase();
})
console.log(uppers);
//or
const upperMovies = newMuppetMovies.map(movie => movie.toUpperCase());
console.log(upperMovies);

//11a
const oldMuppetMovies = [
    "The Muppet Movie", 
    "The Muppets Take Manhattan", 
    "The Great Muppet Caper", 
    "The Muppet Christmas Carol", 
    "Muppet Treasure Island",
    "Muppets From Space"
];

//11b
const a = oldMuppetMovies.filter(twoMovies => twoMovies.length === 22);
console.log(a);

//12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

//12b
const charactersTwo = [
    "The Swedish Chef", 
    "Animal", 
    "Rowlf"
];

//12c
randomMuppet = (characters) => {
    console.log(`${characters[Math.floor(Math.random() * characters.length)]}`);
}

//12d
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

//13
// caps = strings => {
//     let chars = strings.toLowerCase().split(``);
//     for (i=0; i<chars.length; i+=2){
//         chars[i] = chars[i].toUpperCase();
//     }
//     console.log(chars.join(``));
// }
// caps(`Hello World`)
//or
// caps = (string) => {
//     let newString = ``;
//     for (i = 0; i < string.length; i++){
//         if (i % 2 === 0){
//             newString += string[i].toUpperCase();
//         } else {
//             newString += string[i].toLowerCase();
//         }
//     }
//     return newString;
// }
// console.log(caps(`Hello World`));

//13 extra bonus
caps = string => {
    let count = 0;
    let newString =``;
    for (i = 0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        } else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        } else {
            newString += string[i].toLowerCase();
            count++
        }
    }
    return newString;
}
console.log(caps(`Hello World`));