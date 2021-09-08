var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];;

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function showText() {
  for( var i = 0; i< tasks.length; i++) {
    $(`#${tasks[i].time}`).val(tasks[i].text)
  }
}


$(".saveBtn").each(function (index, btn) {
  $(btn).click(function (event) {
    var taskText = $(this).parent().siblings('textarea').val();
    var taskTime = $(this).parent().siblings('.hour').text();

    var completeTask = {
      text: taskText,
      time: taskTime,
    }
    tasks.push(completeTask);
    saveTasks();
  })
})

showText();