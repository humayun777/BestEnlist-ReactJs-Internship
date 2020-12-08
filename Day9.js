Array.prototype.begetduplicate = function() {
    var sortedArray = this.sort();
    var duplicates = [];
    for (var i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] === sortedArray[i]) {
            duplicates.push(sortedArray[i]);
        }
    }
    console.log(duplicates);
} 

var sampleinput=[1,2,4,5,2,5];
sampleinput.begetduplicate();   
