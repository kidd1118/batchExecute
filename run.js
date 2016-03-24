function run (callback){
  var i = 0;
  var section = 1;
  var sectionNumber = 4;
  var bufferTime = 1000;
  var total = 500;
  
  function func() {

    while (i < section * sectionNumber) {
      /* exit */
      if (i >= total) {
        return;
      }
      callback && callback();
      i++;
      setTimeout(func, bufferTime);
    }
    /* change to next section */
    if (section * sectionNumber < total) {
      section++;
    }
  }
  setTimeout(func, bufferTime);
}
