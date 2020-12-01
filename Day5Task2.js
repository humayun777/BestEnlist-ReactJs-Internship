//Day5
function MyString(str){
    this.yourString = str;
}

const myString = new MyString("Hello");

MyString.prototype.bespacify = function(){

    var string = this.yourString;
    var newString = string.match(/[aeiou]/gi).toString();
    console.log(newString.replace(',',""));
}

myString.bespacify();
