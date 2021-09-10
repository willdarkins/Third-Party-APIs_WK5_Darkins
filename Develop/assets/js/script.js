var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];;
var time = ['9AM','10AM','11AM','12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function showText(hour) {
  var row = $('<div>');
  // <div>
  var timeContainer = $('<div>');
  var textBlock = $('<textarea>');
  var divButton = $('<div>');
  var button = $('<button>');
  var svgGraphic= $('<svg>');
  row.addClass("row g-0");
  // <div class="row g-0">
  timeContainer.addClass('col-md-1 hour').text(hour);
  textBlock.addClass('col-md-10 text-task').text(tasks);
  divButton.addClass('col-md-1');
  button.addClass('btn btn-primary saveBtn');
  svgGraphic.addClass('bi-save');
  divButton.append(button);


  row.append(timeContainer);
  row.append(textBlock);
  row.append(divButton);
  row.append(button);
  row.append(svgGraphic);
  /* <div class="row g-0">
      <div></div>
      <textarea></textarea>
      <div></div>
      <button></button>
      <svg>
      </div> */

$('.container').append(row);      
}

time.forEach(hour => showText)
tasks.forEach(text => showText)

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



///call text-task and make an each function and make it so there is a variable to represetn the different blocks
//This will utilize parse.int
//