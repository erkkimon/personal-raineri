function getReps(moveNumber, moveName)
{
  var result = parseFloat($("#"+moveNumber).find("#"+moveName+"_reps_goal").html().replace("3 x ", ""));
  return result;
}
function getWeight(moveNumber, moveName)
{
  var result = parseFloat($("#"+moveNumber).find("#"+moveName+"_weight_goal").html());
  return result;
}
function writeIfNewRecord(moveName, moveNumber)
{
  if($("#"+moveNumber).find("#"+moveName+"_goal_reached").is(":checked"))
  {
    writeNewRecord(moveName, getReps(moveNumber, moveName), getWeight(moveNumber, moveName), 0);
  }
  else
  {
    console.log("Record box isn't checked.");
  }
}
function editMode(element)
{
  $(".edit-buttons").fadeIn("fast");
  $(".toggle-edit").removeClass("icon-pencil", 700).addClass("icon-checkmark", 700).addClass("navi-icon-active");    
}
function defaultMode(element)
{
  $(".edit-buttons").fadeOut("fast");
  $(".toggle-edit").removeClass("icon-checkmark", 700).addClass("icon-pencil", 700).removeClass("navi-icon-active");
  
}
function goalsPlus(moveNumber, moveName, interval)
{
  var reps = parseFloat($("#"+moveNumber).find("#"+moveName+"_reps_goal").html().replace("3 x ", ""));
  var weight = parseFloat($("#"+moveNumber).find("#"+moveName+"_weight_goal").html());
  if (reps == 12)
  {
    console.log("Increasing "+moveName+" weight goal and reducing reps to 6.");
    reps = 6;
    weight = weight + interval;
    $("#"+moveNumber).find("#"+moveName+"_weight_goal").html(weight+" kg");
    $("#"+moveNumber).find("#"+moveName+"_reps_goal").html("3 x 6");
  }
  else
  {
    reps = reps + 2;
    $("#"+moveNumber).find("#"+moveName+"_reps_goal").html("3 x "+reps);
  }
}
function goalsMinus(moveNumber, moveName, interval)
{
  var reps = parseFloat($("#"+moveNumber).find("#"+moveName+"_reps_goal").html().replace("3 x ", ""));
  var weight = parseFloat($("#"+moveNumber).find("#"+moveName+"_weight_goal").html());
  if (reps == 6)
  {
    console.log("Reducing "+moveName+" weight goal and increasing reps to 6.");
    reps = 12;
    weight = weight - interval;
    $("#"+moveNumber).find("#"+moveName+"_weight_goal").html(weight+" kg");
    $("#"+moveNumber).find("#"+moveName+"_reps_goal").html("3 x 12");
  }
  else if (weight <= 0)
  {
    reps = 0;
    $("#"+moveNumber).find("#"+moveName+"_weight_goal").html(weight+" kg");
  }
  else
  {
    reps = reps - 2;
    $("#"+moveNumber).find("#"+moveName+"_reps_goal").html("3 x "+reps);
  }
}
