function lastDayIsFriday(initialYear, endYear = initialYear) {
  let fridays = 0;
  for (let y = initialYear; y <= endYear; y++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(y, month + 1, 0).getDay() === 5) fridays++;
    }
  }
  return fridays;
}

/*
    function lastDayIsFriday(initialYear, endYear) {
    
     var fridayCounter = 0;
     
     function getMonthLength(month,year) {
       switch(month) {
         case 11:
         case 4:
         case 6:
         case 9:
           return 30;
           break;
         case 1:
         case 3:
         case 5:
         case 7:
         case 8:
         case 10:
         case 12:
           return 31;
           break;
         case 2:
           if (((year%4===0) && (year%100!==0)) || (year%400===0)) return 29;
           else return 28;
         break;
       }
     }
     do {
       for (var i = 1;i<=12;i++) {
         var lastMonthDay = new Date(${initialYear}-${i}-${getMonthLength(i,initialYear)});
         if (lastMonthDay.getDay()===5) {
           fridayCounter++;
           //console.log('Friday:',lastMonthDay);
         }
       }
       initialYear++;
     }while(initialYear<=endYear);
     return fridayCounter;
    }
    */
