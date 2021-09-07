var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tasks = [];

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

  JSON.parse(localStorage.getItem('tasks')) || [];


$(".saveBtn").each(function (index, btn) {
  $(btn).click(function (event) {
   var taskText = $(this).parent().siblings('textarea').val();
   var taskTime = $(this).parent().siblings('.hour').html();

    var completeTask = {
      text: taskText,
      time: taskTime,
    }
    tasks.push(completeTask);
    saveTasks();
  })
})

