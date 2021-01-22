/*let spinWheel = prompt('Please spin the wheel to win a discount!');
let wheel = 'SPIN'
if(spinWheel === 'yes') {
alert(wheel)
}*/

/*let beans = 'i like to eat beans';
for(let i = 0; i < 10; i++) {
    console.log(`${beans} ${i} times a day`)
}*/
/*let beans = 10;
while(beans >= 1) {
    console.log('hello ' + beans)
    beans--;
}

for(i = 5; i <= 100; i++) {
    console.log("hello " + i )
}*/

const question = prompt("What year would you like to look up?");


let kobeStats = [
{team: 'Lakers', year: 1996, ppg: 7.6, mpg: 15.5, fg: 41.7},
{team: 'Lakers', year: 1997, ppg: 15.4, mpg: 26.0, fg: 42.8},
{team: 'Lakers', year: 1998, ppg: 19.9, mpg: 37.9, fg: 46.5},
{team: 'Lakers', year: 1999, ppg: 22.5, mpg: 38.2, fg: 46.8},
{team: 'Lakers', year: 2000, ppg: 28.5, mpg: 40.9, fg: 46.4},
{team: 'Lakers', year: 2001, ppg: 25.2, mpg: 38.3, fg: 46.9},
{team: 'Lakers', year: 2002, ppg: 30.0, mpg: 41.5, fg: 45.1},
{team: 'Lakers', year: 2003, ppg: 24.0, mpg: 37.6, fg: 43.8},
{team: 'Lakers', year: 2004, ppg: 27.6, mpg: 40.7, fg: 43.3},
{team: 'Lakers', year: 2005, ppg: 35.4, mpg: 41.0, fg: 45.0},
{team: 'Lakers', year: 2006, ppg: 31.6, mpg: 40.8, fg: 46.3},
{team: 'Lakers', year: 2007, ppg: 28.3, mpg: 38.9, fg: 45.9},
{team: 'Lakers', year: 2008, ppg: 26.8, mpg: 36.1, fg: 46.7},
{team: 'Lakers', year: 2009, ppg: 27.0, mpg: 38.8, fg: 45.6},
{team: 'Lakers', year: 2010, ppg: 25.3, mpg: 33.9, fg: 45.1},
{team: 'Lakers', year: 2011, ppg: 27.9, mpg: 38.5, fg: 43.0},
{team: 'Lakers', year: 2012, ppg: 27.3, mpg: 38.6, fg: 46.3},
{team: 'Lakers', year: 2013, ppg: 13.8, mpg: 29.5, fg: 42.5},
{team: 'Lakers', year: 2014, ppg: 22.3, mpg: 34.5, fg: 37.3},
{team: 'Lakers', year: 2015, ppg: 17.6, mpg: 28.2, fg: 35.8},
];
 
let message= ""; 

for(i = 0; i < kobeStats.length; i++){
kobe = kobeStats[i]
message += `Kobe Bryant Averaged ${kobe.ppg} points per game,
 in the year ${kobe.year}. All while playing ${kobe.mpg} mins per game
 with an outstanding ${kobe.fg}% field goal percentage!

  `
}

console.log(message)