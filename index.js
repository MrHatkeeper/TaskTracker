let tasksFolder = "/tasks"

function createTask() {
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let text = document.getElementById("text").value;

    let output = '{' +
        '"Name":"' + name + '",' +
        '"Date":"' + date + '",' +
        '"Text":"' + text + '' +
        '"}';

    console.log(output);
    let a = JSON.parse(output)
    console.log(a);
}