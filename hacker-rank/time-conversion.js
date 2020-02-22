// My solution passes all tests
// But... there's gotta be a cleaner way to solve this

function timeConversion(s) {
    //first check if AM or PM
    let timeAM, timePM;
    if (s.endsWith('AM')) {
      timeAM = s.replace('12', '00').slice(0, 8);
      console.log(timeAM)
      return timeAM;
    } else {
      if (s.startsWith('01')) {
        timePM = s.replace('01', '13').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('02')) {
        timePM = s.replace('02', '14').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('03')) {
        timePM = s.replace('03', '15').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('04')) {
        timePM = s.replace('04', '16').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('05')) {
        timePM = s.replace('05', '17').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('06')) {
        timePM = s.replace('06', '18').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('07')) {
        timePM = s.replace('07', '19').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('08')) {
        timePM = s.replace('08', '20').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('09')) {
        timePM = s.replace('09', '21').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('10')) {
        timePM = s.replace('10', '22').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('11')) {
        timePM = s.replace('11', '23').slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      if (s.startsWith('12')) {
        timePM = s.slice(0, 8);
        console.log(timePM);
        return timePM;
      }
      console.log('AFTERNOON');
    }
  }