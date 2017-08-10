function getMessage() {
    var name = document.getElementById('name').value;
    var firstLetter = name.substring(0, 1);
    var result = " ";


    if (firstLetter == "J" || firstLetter == "j") {
        result = "Goodbye " + name;
    } else {
        result = "Hello " + name;
    }
    document.getElementById("result").innerHTML = result;



}