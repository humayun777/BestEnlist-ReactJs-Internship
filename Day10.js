formatddmmyyyy = (date) => {
    var dat = date.getDate();
    var mon = date.getMonth() + 1;
    var year = date.getFullYear();
    if (dat < 10){
        dat = '0' + dat;
    }
    if (mon < 10){
        mon = '0' + mon;
    }
    return dat +'/'+ mon +'/' + year;
}

Date.prototype.addDays = (days) => {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

String.prototype.begetdatebetween = function() {
    var dates = this.split(",")
    for(var i=0;i<2;i++){
        dates[i] = dates[i].split('/')
    }
    const startDate = new Date(dates[0][2], dates[0][1]-1, dates[0][0])
    const stopDate = new Date(dates[1][2], dates[1][1]-1, dates[1][0])
    var dateArray = new Array();
    var currentDate = startDate;
    currentDate = currentDate.addDays(1);
    while (currentDate < stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    for (i = 0; i < dateArray.length; i ++ ) {
        console.log(formatddmmyyyy(dateArray[i]));
    }
}

"01/11/2020,03/11/2020".begetdatebetween()
