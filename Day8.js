Array.prototype.beremoveobject = function(object) {
    var keys = Object.keys(object);
    for(var i=0 ; i<this.length ; i++){
         delete this [i] [keys];
    }
    console.log(this);
}



var sampleinput=[
    {
        name:"John",
        age:26,
        Country:"india"
    },
    {
        name:"siva",
        age:27,
        Country:"india"
    }
]

sampleinput.beremoveobject({Country:"india"});
