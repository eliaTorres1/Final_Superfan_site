/* Java for ;eadership page */
function changeContent() {
  document.getElementById("emperor").classList.toggle("begone");
  document.getElementById("palpatine").classList.toggle("begone");
  document.getElementById("glory").play();
}
function changeContent2() {
  document.getElementById("agent").classList.toggle("begone");
  document.getElementById("kallus").classList.toggle("begone");
}
function changeContent3() {
  document.getElementById("vader").classList.toggle("begone");
  document.getElementById("darth").classList.toggle("begone");
}
function changeContent4() {
  document.getElementById("tarkin").classList.toggle("begone");
  document.getElementById("moff").classList.toggle("begone");
}
function changeContent5() {
  document.getElementById("thrawn").classList.toggle("begone");
  document.getElementById("admiral").classList.toggle("begone");
}
function changeContent6() {
  document.getElementById("orson").classList.toggle("begone");
  document.getElementById("krennic").classList.toggle("begone");
}
function changeContent7() {
  document.getElementById("mas").classList.toggle("begone");
  document.getElementById("vizier").classList.toggle("begone");
}
/* Java for home page */
function joinEmpire() {
  document.getElementById("join").play();
}
function flyForward() {
  document.getElementById("fly").classList.add("fly-forward");
}

/* Java for roles page */
function changeRole() {
  document.getElementById("role-change").src = "images/storm.png";
  document.getElementById("area").classList.add("red");
  document.getElementById("fly").classList.remove("fly-forward");
  document.getElementById("area").classList.remove("black");
  document.getElementById("area").classList.remove("white");
  document.getElementById("icon").src = "images/insignia.png";
}
function changeRole2() {
  document.getElementById("role-change").src = "images/Pilot.jpg";
  document.getElementById("area").classList.remove("white");
  document.getElementById("area").classList.add("black");
  document.getElementById("fly").classList.remove("fly-forward");
  document.getElementById("area").classList.remove("red");
  document.getElementById("icon").src = "images/tie_transparent.png";
}
function changeRole3() {
  document.getElementById("role-change").src = "images/scout.png";
  document.getElementById("area").classList.add("white");
  document.getElementById("area").classList.remove("black");
  document.getElementById("area").classList.remove("red");
  document.getElementById("icon").src = "images/speeder2_transparent.png";
  document.getElementById("fly").classList.remove("fly-forward");
}
