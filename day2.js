//function to square two numbers
function square(number) {
   return number * number;
}
square(5)

//function to generate random 6 digit numbers
function getRandomInteger(100000, 1000000) {
    return Math.floor(Math.random() * (1000000 - 100000) ) + 100000;
}
getRandomInteger(100000, 1000000)

//function which displays type and version of browser using alert
function browser(){
  alert(navigator.appName);
  alert(navigator.appVersion);
}
