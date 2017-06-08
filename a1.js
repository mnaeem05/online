var itemAdd = 0;
function incrementItem1() {
    itemAdd++;
    document.getElementById("box01").innerHTML;
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", itemAdd)
    // Retrieve
    document.getElementById("final").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("final").innerHTML = "Sorry, your browser does not support Web Storage...";
}
    // itemAdd++;
document.getElementById("box01").innerHTML;
// document.getElementById("final").innerHTML = "<h3> Item Added "+itemAdd+" </h3>"
// alert( (itemAdd) + " Item Added")
}


if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "  one")
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}