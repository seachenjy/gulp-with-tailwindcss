
;(function(){
  document.querySelector("#mobile-menu-button").addEventListener("click", function(){
    document.querySelector("#mobile-menu").style.display="block"
  })
  document.querySelector("body").addEventListener("mouseleave", function(e){
    document.querySelector("#mobile-menu").style.display="none"
  })
}());