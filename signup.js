function input() {
   
    var name = document.getElementById("name").value;
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementsByClassName("repassword").value; 
   
    if (name == "") {
       alert ("الرجاء ادخال اسمك ");
        return false;
      }
    if (user == "") {
      alert("الرجاء ادخال اسم الحساب");
      return false;
    }
    if (email == "") {
        alert("الرجاء ادخال البريد الإلكتروني");
        return false;
      }
      if(number.length < 10){
        alert(" الرجاء ادخال الرقم بشكل صحيح");
      return false;
    } 
    if (password == "") {
      alert("الرجاء ادخال الرقم السري");
      return false;
    }else {
        if(password.length < 6){
        alert(" الرجاء ادخال الرقم السري بشكل صحيح");
      return false;
    } }
    if (repassword != password) {
        alert(" الرجاء ادخال الرقم السري بشكل صحيح");
        return false;
      }else {
         if (repassword==password){
          alert(" تم التطابق");
        return true;
      } }
      
    return true;
    }
