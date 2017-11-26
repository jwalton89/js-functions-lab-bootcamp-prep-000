// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
function happyHolidaysTo(name) {
<<<<<<< HEAD
  return `Happy holidays, ${name}!`
}
function happyHolidayTo(holiday, name) {
  return `Happy ${holiday}, ${name}!`
}
function holidayCountdown(holiday, days) {
  return `It's ${days} days until ${holiday}!`
}

happyHolidaysTo('you')
HappyHolidayTo("Mother's Day",'you')
holidayCountdown('20',"Mother's Day")
=======
  console.log(`Happy holidays, ${name}!`)
}
function happyHolidayTo(holiday, name) {
  console.log(`Happy ${holiday}, ${name}!`)
}
function holidayCountdown(days, holiday) {
  console.log(`It\'s ${days} days until ${holiday}!`)
}

happyHolidaysTo('you')
HappyHolidayTo("Mother\'s Day",'you')
holidayCountdown('20',"Mother\'s Day")
>>>>>>> 083b53702f5ba44e1b44f0bb71ce17a1dbf9b02b
