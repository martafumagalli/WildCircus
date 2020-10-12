window.onload=function(){
  document.getElementById("menu").addEventListener('click', () => {
  var drop = document.getElementById("myDropdown");
  var show = document.getElementById("show");
  var hide = document.getElementById("hide");

  if (drop.style.display == "block") {
    drop.style.display = "none";
    show.style.display = "block";
    hide.style.display = "none";
  } else {
    drop.style.display = "block";
    show.style.display = "none";
    hide.style.display = "block";
  }})
};
