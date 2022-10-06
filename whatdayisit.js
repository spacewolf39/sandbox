"use strict";
function whichDayIsIt(name) {
    const dayOptions = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const day = date.getDay();
    console.log(`Hello ${name}. Today is ${dayOptions[day]}.`);
}
whichDayIsIt("Bryan");
