var itemAdd = 0;
function incrementItem1() {
    itemAdd++;
document.getElementById("box001").innerHTML;
document.getElementById("final").innerHTML= "<h5> Item Added "+itemAdd+" </h5>"
// alert( (itemAdd) + " Item Added")
}

var itemLess = 0;
function decrementItem1() {
    itemLess++;
    if(itemAdd >= itemLess){
    document.getElementById("box002").innerHTML;
document.getElementById("final2").innerHTML= "<h5> Item Removed "+itemLess+" </h5>"
    // alert((itemLess) + " Item Removed")
    }
    else{
        document.getElementById("final2").innerHTML= "<h5> No Item Added </h5>"
    }
}