let input = document.getElementById("birth__date");
let button = document.getElementById("click");

button.onclick = () => {
    let curnetYear = new Date(2021);
    let birthDate = document.getElementById("birth__date").value ;
    let age = curnetYear - birthDate;
   
    if (isNaN(birthDate)) {
        alert("this feild accepet numbers only");
    } else if (birthDate === null || birthDate === "") {
        alert("this feild cant be empty");
    } else if (birthDate.length > 3) {
        document.getElementById("myAge").innerHTML = "your age is " + age;
        button.style.border = "2px solid green";
    } else if (birthDate.length < 4) {
        button.style.border = "2px solid red";
    }
};
