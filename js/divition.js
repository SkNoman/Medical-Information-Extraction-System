function trigger(d1,d2) {
    var d1 = document.getElementById(d1);
    var d2 = document.getElementById(d2);

    
    d2.innerHTML = "";
    if(d1.value == "Dhaka"){
        var optionArray = ["----------|----------","Dhaka|Dhaka","Faridpur|Faridpur","Gazipur|Gazipur","Gopalganj|Gopalganj","Kishoreganj|Kishoreganj","Madaripur|Madaripur","Manikganj|Manikganj","Munshiganj|Munshiganj","Narayanganj|Narayanganj","Narsingdi|Narsingdi","Rajbari|Rajbari","Shariatpur|Shariatpur","Tangail|Tangail"];
       }
    else  if(d1.value == "Barishal"){
        var optionArray = ["----------|----------","Barisal|Barisal","Barguna|Barguna","Bhola|Bhola","Jhalokati|Jhalokati","Patuakhali|Patuakhali","Pirojpur|Pirojpur"];
       }
    else  if(d1.value == "Khulna"){
        var optionArray = ["----------|----------","Bagerhat|Bagerhat","Chuadanga|Chuadanga","Jashore|Jashore","Jhenaidah|Jhenaidah","Khulna|Khulna","Kushtia|Kushtia","Magura|Magura","Meherpur|Meherpur-","Narail|Narail","Satkhira|Satkhira"];
       }
    else  if(d1.value == "Mymensingh"){
        var optionArray = ["----------|----------","Jamalpur|Jamalpur","Mymensingh|Mymensingh","Netrokona|Netrokona","Sherpur|Sherpur"];
       }

    else  if(d1.value == "Chittagong"){
        var optionArray = ["----------|----------","Bandarban|Bandarban","Brahmanbaria|Brahmanbaria","Chandpur|Chandpur","Chittagong|Chittagong","Comilla|Comilla","Cox's Bazar|Cox's Bazar","Feni|Feni","Khagrachhari|Khagrachhari","Lakshmipur|Lakshmipur","Maijdee|Maijdee","Rangamati|Rangamati"];
          }
    else  if(d1.value == "Rajshahi"){
        var optionArray = ["----------|----------","Bogura|Bogura","Chapainawabganj|Chapainawabganj","Joypurhat|Joypurhat","Naogaon|Naogaon","Natore|Natore","Pabna|Pabna","Rajshahi|Rajshahi","Sirajganj|Sirajganj"];
          }
    else  if(d1.value == "Rangpur"){
        var optionArray = ["----------|----------","Rangpur|Rangpur","Dinajpur|Dinajpur","Kurigram|Kurigram","Nilphamari|Nilphamari","Gaibandha|Gaibandha","Thakurgaon|Thakurgaon","Panchagarh|Panchagarh","Lalmonirhat|Lalmonirhat"];
          }
    else  if(d1.value == "Sylhet"){
        var optionArray = ["----------|----------","Habiganj|Habiganj","Moulvibazar |Moulvibazar","Sunamganj|Sunamganj","Sylhet|Sylhet"];
          }
   



    for(var option in optionArray)
    {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      district.options.add(newOption);
      }
   }



