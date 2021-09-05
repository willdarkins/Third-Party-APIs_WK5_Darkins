var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tasks = {};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };