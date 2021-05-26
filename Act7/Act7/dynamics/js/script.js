$(document).ready(function() {
  $(".results").load("./dynamics/php/Consultas.php")
  $(".submitcarr").on("click", function(){

      let busqueda = $("input").val();
      console.log(busqueda)
      let peticion = $.ajax({
          url: "./dynamics/php/Consultas.php",
          data: {busq: busqueda},
          method: "POST"
      });
      peticion.done(function(resp){
        $(".results").html(resp);
        console.log(resp)
      })
      peticion.fail(function(resp){
          alert(falle);
      })
  })
  $(".filtmod").on("change", function(){
  let filtro = $(".filtmod").val();
      let peticion1 = $.ajax({
          url: "./dynamics/php/Consultas.php",
          data: {dato: filtro},
          method: "POST"
      });
      peticion1.done(function(resp){
        $(".results").html(resp);
        console.log(resp)
      })
      peticion1.fail(function(resp){
          alert(falle);
      })
  })
});
