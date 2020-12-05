Array.prototype.beaddobject = function(object) {
    var keys = Object.keys(object);
    var vals = Object.values(object);
    for(var i=0;i<this.length;i++){
        this[i] [keys] = vals;
     }
    console.log(this);
}

var sampleinput=[
    {
        name:"John",
        age:26
    },
    {   
        name:"siva",
        age:27
    }
]

sampleinput.beaddobject({Country:"India"});
