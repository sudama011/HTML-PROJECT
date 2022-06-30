let task = document.getElementById('task')
let add = document.getElementById('add')
let clear = document.getElementById('clear')
let list = document.getElementById('list')

add.onclick = function () {
    if (task.value != "") {
        let t = '<li>' + task.value+ '</li>'       
        list.append(task.value)
    }
}