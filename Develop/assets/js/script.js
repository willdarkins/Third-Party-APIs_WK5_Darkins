//Current date displayed at top of page
var todayDisplayDate = $('#currentDay').text(moment().format("dddd, MMMM Do YYYY"));

//Global variables for displayed time and corresponding military hours
var time = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//Save & load local storage
var saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function () {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    var hourChange = $('#' + task.time)
    hourChange.text(task.text)
  })
}

//Iterate through the time array in order to display time to user
time.forEach(hour => showText(hour))

//Dynamically creating elements to append to html
function showText(hour) {
  var row = $('<div>');
  var timeContainer = $('<div>');
  var textBlock = $('<textarea>');
  var divButton = $('<div>');
  var button = $('<button>');
  var svgGraphic = $('<svg>');

  row.addClass("row g-0").attr('id', hour + 'color');
  timeContainer.addClass('col-md-1 hour').text(hour);
  textBlock.addClass('col-md-10 text-task').attr('id', hour);
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

//For loop that will set conditional statements to check each row's relation to time (i.e. past, present, future)
for (var i = 0; i < hours.length; i++) {
  var currentHour = parseInt(moment().format('H'));

  if (hours[i] < currentHour) {
    $('#' + time[i] + 'color').addClass('past')
  }
  else if (hours[i] === currentHour) {
    $('#' + time[i] + 'color').addClass('present')
  }
  else {
    $('#' + time[i] + 'color').addClass('future')
  };
}

//Click event on save button that will grab user input and the corresponding hour to store in localstorage
$('.saveBtn').click(function () {

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
