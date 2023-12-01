function save(data) {
    $.ajax({
        url: '/process',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ 'value': data }),
        success: function (response) {
            var res = response.result;
            console.log(res);
            // document.getElementById("WOWBOX").innerHTML = res
        },
        error: function (error) {
            console.log(error);
        }
    });
}

window.onload = function () {
    document.getElementsByTagName('input').innerHTML = '';
}

var rotated = false;
var visible = false;
function dataClick() {
    var div = document.getElementById('addata'),
        deg = rotated ? 0 : 45,
        vis = visible ? 'hidden' : 'inherit',
        det = document.getElementById('det');

    div.style.webkitTransform = 'rotate(' + deg + 'deg)';
    div.style.mozTransform = 'rotate(' + deg + 'deg)';
    div.style.msTransform = 'rotate(' + deg + 'deg)';
    div.style.oTransform = 'rotate(' + deg + 'deg)';
    div.style.transform = 'rotate(' + deg + 'deg)';
    det.style.visibility = vis;
    // console.log(rotated, visible, vis)
    rotated = !rotated;
    visible = !visible;
    // disDataIn();
}

function addtask() {
    var ele = document.getElementById('names');
    data = ele.value;
    ele.value = '';
    // console.log(data);
    addtodo(data)
}

var c = 0;

function addtodo(task) {
    var ele = document.getElementById('tasks');
    // console.log(task);
    iid = 'tasks' + String(c);
    lid = 'label' + String(c);
    c++;
    ele.innerHTML += "<li class = 'tasks' id = " + iid + ">" + task + "</li>";
}

// function strike() {
//     this. 'style.textDecoration = "underline overline"';
// }

document.addEventListener("click", function (t) {
    if (t.target.className == 'tasks') {
        document.getElementById(t.target.id).style.textDecoration = "line-through";
    }
});

function saveToDo() {
    var temp = document.querySelectorAll('li');
    var done = [],
        todo = [];
    temp.forEach(ele => {
        if (ele.style.textDecoration == "line-through") {
            done.push(ele.innerHTML);
        } else {
            todo.push(ele.innerHTML);
        }
    });
    save([done, todo]);
}