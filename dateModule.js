

module.exports.dayName=function()
{
var today=new Date();
var option={
  weekday:"long"
  // month:"long",
  // day:"numeric"
}
var day=today.toLocaleDateString("en-Us",option);
return day;
}
