let timeHour
let timeMinute
let numPersons
let tollAmount

timeHour = window.prompt("25")
timeMinute = window.prompt("25")
numPersons = window.prompt("25")

if (timeHour < 6)
   console. log ("tollAmount = 1.50")
if (timeHour < 10)
   console. log ("tollAmount = 4.60")
if (timeHour < 18)
   console. log ("tollAmount = 2.30")
console. log  ("tollAmount  = 1.50")
//Check for carpool(3 or more persons) and update toll if numPersons>= 3
if (timeHour >= 6) and (timeHour<= 10)
   console. log ("tollAmount = tollAmount *0.5")
console. log ("tollAmount = 0.0" )