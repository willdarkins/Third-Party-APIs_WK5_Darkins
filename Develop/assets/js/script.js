var todayDisplayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

var tasks = [];
var time = ['9AM','10AM','11AM','12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
var hours =[9, 10, 11, 12, 13, 14, 15, 16, 17]

var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    var hourChange = $('#' + task.time)
    hourChange.text(task.text)
  })
}

time.forEach(hour => showText(hour))

function showText(hour) {
  var row = $('<div>');
  var timeContainer = $('<div>');
  var textBlock = $('<textarea>');
  var divButton = $('<div>');
  var button = $('<button>');
  var svgGraphic= $('<svg>');

  row.addClass("row g-0").attr('id', hour + 'color');
  timeContainer.addClass('col-md-1 hour').text(hour);
  textBlock.addClass('col-md-10 text-task').attr('id',hour);
  divButton.addClass('col-md-1');
  button.addClass('btn btn-primary saveBtn').attr('style', "padding: 38.5px 45px", 'border-radius: 0 15px 15px 0')
  svgGraphic.addClass('bi-save').attr('style', 'color:white')
  
  row.append(timeContainer);
  row.append(textBlock);
  divButton.append(button);
  button.append(svgGraphic);
  row.append(divButton);


$('.container').append(row);
}



$('.saveBtn').click(function(){

    var taskText = $(this).parent().siblings('.text-task').val();
    var taskTime = $(this).parent().siblings('.hour').text();

    var completeTask = {
      text: taskText,
      time: taskTime,
    }
    tasks.push(completeTask);
    saveTasks();
})
loadTasks();
showText();


 
var currentHour = parseInt(moment().format('H'));

console.log(currentHour);

if(hours[0] < currentHour) {
  $('#3PMcolor').addClass('past')
}
else if(hours[0] === currentHour) {
  $('#3PMcolor').addClass('present')
}
else { 
  $('#3PMcolor').addClass('future')
};

