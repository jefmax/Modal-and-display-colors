if (document.getElementById("btnModal")) {
    var modal = document.getElementById("verModal");
    var btn = document.getElementById("btnModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];
  
    btn.onclick = function () {
      modal.style.display = "block";
    };
  
    span.onclick = function () {
      modal.style.display = "none";
    };
  
    //salir dando click fuera del modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  
    //salir con Esc , código 27
    window.addEventListener("keyup", function (e) {
      if (e.keyCode == 27) {
        document.getElementById("verModal").style.display = "none";
      }
    });
  }