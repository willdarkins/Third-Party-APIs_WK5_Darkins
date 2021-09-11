var todayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));
var time = ['9AM','10AM','11AM','12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var tasks = JSON.parse(localStorage.getItem('tasks')) || [];;
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

function showText(hour) {
  var row = $('<div>');
  var timeContainer = $('<div>');
  var textBlock = $('<textarea>');
  var divButton = $('<div>');
  var button = $('<button>');
  var svgGraphic= $('<svg>');

  row.addClass("row g-0");
  timeContainer.addClass('col-md-1 hour').text(hour);
  textBlock.addClass('col-md-10 text-task').text();
  divButton.addClass('col-md-1');
  button.addClass('btn btn-primary saveBtn').attr('style', "padding: 38.5px 45px", 'border-radius: 0 15px 15px 0')
  svgGraphic.addClass('bi-save');
  
  row.append(timeContainer);
  row.append(textBlock);
  button.append(svgGraphic);
  divButton.append(button);
  row.append(divButton);


$('.container').append(row);      
}

time.forEach(hour => showText)
tasks.forEach(text => showText)

$(".btn btn-primary saveBtn").each(function (index, button) {
  $(button).click(function (event) {
    var taskText = $(this).parent().siblings('textarea').val();
    var taskTime = $(this).parent().siblings('.col-md-1 hour').text();

    var completeTask = {
      text: taskText,
      time: taskTime,
    }
    tasks.push(completeTask);
    saveTasks();
  })
})

showText();