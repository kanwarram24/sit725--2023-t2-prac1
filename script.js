function changeTextAbove(){
    var texts = ["So", "What", "Do", "You", "See"]
    var rand = Math.ceil(Math.random() * texts.length-1);
    document.getElementById("h2").innerHTML = texts[rand]
}