var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tasks = [];

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

$('.saveBtn').click(function() {
  //try clicking on a save button now, then...

  var taskText = $('.text-task').val();
  var taskTime = $('.hour').parent().siblings().html();

  var completeTask = {
    text: taskText,
    time: taskTime,
  }
  tasks.push(completeTask);
  saveTasks();
})
  
