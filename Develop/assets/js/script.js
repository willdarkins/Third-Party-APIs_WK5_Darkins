
$('.saveBtn').click(function(event) {
  //try clicking on a save button now, then...

  console.log(event) //1. peruse this! What information is fed to a click-event-handler? There's a LOT.

  console.log(event.target) //2. OOH what's this?

  console.log(event.target.id) //3. Ah ha!


  // var taskText = $("#task-description").val();
  // var taskTime = $("#hour").val();

  // var completeTask = [{
  //   text: taskText,
  //   date: taskTime,
  // }];
  // tasks.push(completeTask);
  // saveTasks();
  
})