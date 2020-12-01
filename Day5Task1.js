//Day 5
function MyString(str){
    this.yourString = str;
}

const myString = new MyString("Hello");

MyString.prototype.bespacify = function(){
	console.log(this.yourString.split("").join(" "));
}

myString.bespacify();
