var date = new Date();
      var year = date.getFullYear();
      var year = String(year);
      console.log(year);
      var yy = year.substring(2,4);
      var month = new String(date.getMonth()+1);
      var day = new String(date.getDate());

      // 한자리수일 경우 0을 채워준다.
      if(month.length == 1){
      month = "0" + month;
      }
      if(day.length == 1){
      day = "0" + day;
      }


      console.log (yy+month);
      var this_month = yy+month;