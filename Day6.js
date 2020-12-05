Array.prototype.befindobject = function() {
    var lists = [];
    
    for(var i=0;i<this.length;i++){
        lists.push(this[i].name);
    }
    console.log(lists);
}

var sampleinput = [
    {
        name:"John",
        age:26
    },
    {
        name:"Siva",
        age:27
    }
]

sampleinput.befindobject()
