function findCube() {
    let num = document.getElementById('num').value

    let cube = num * num * num;
    alert("Cube = " + cube);
}
function doClear() {
    let flag = confirm("Are you sure you want to clear?")
    if (flag) {
        document.getElementById('num').value = ""
    }
}