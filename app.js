faveMovie = (movie = 'The Room', name = 'Tommy Wiseau') => console.log(`My name is ${name} and my favorite movie is ${movie}!`);

faveMovie();
faveMovie('Snatch');
faveMovie('Snatch', 'Will Seese');

getFirstName = (name) => {
    let firstName = (name.split(' '))[0];
    console.log(firstName);
}
getFirstNameConcise = (name) => console.log((name.split(' '))[0]);

getFirstName('Will Seese');
getFirstNameConcise('Will Seese');

doMath = (x, y) => ({exponent: x**y, product: x*y});
console.log(`${doMath.exponent}, ${doMath.product}`);

spreadSyntax = (name, location, faveFood) => console.log(`${name}, ${location}, ${faveFood}`);
let array = ['Will', 'Colorado', 'pizza'];
spreadSyntax(...array);

let name = 'Will Seese';
takesParameter = (parameter) => {
    let nameArray = [...parameter];
    for(i = 0; i < nameArray.length; i++) {
        console.log(nameArray[i]);
    };
};
takesParameter(name);