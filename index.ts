let tasksFolder = "/tasks"

function createTask() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let date = (document.getElementById("date") as HTMLInputElement).value;
    let text = (document.getElementById("text") as HTMLInputElement).value;

    let output = '{' +
        '"Name":"' + name + '",' +
        '"Date":"' + date + '",' +
        '"Text":"' + text + '' +
        '"}';

    console.log(output);
    let a = JSON.parse(output)
    console.log(a);
}