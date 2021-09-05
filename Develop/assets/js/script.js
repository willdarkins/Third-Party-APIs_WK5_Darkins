var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tasks = [];
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
var loadTasks = function () {
  JSON.parse(localStorage.getItem('tasks')) || [];
}

$('#save-btn').click(function() {
  var taskText = $("#task-description").val();
  var taskTime = $("#hour").val();

  var completeTask = [{
    text: taskText,
    date: taskTime,
  }];
  saveTasks();
  tasks.push(completeTask);
  
})

loadTasks();