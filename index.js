var tasksFolder = "/tasks";
function createTask() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var text = document.getElementById("text").value;
    var output = '{' +
        '"Name":"' + name + '",' +
        '"Date":"' + date + '",' +
        '"Text":"' + text + '' +
        '"}';
    console.log(output);
    var a = JSON.parse(output);
    console.log(a);
}
