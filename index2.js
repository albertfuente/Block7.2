document.getElementById("enviar").addEventListener("click",function(e){
  e.preventDefault();

  var name = document.getElementById("name").value;
  var surName= document.getElementById("surname").value;
  document.getElementById("respuesta").innerHTML="the name is: "+name+" the surname is: "+surName;
  console.log("this shows in console the name is: "+name+" the surname is: "+surName);
});
