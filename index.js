/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


// 1. Create a single employee record
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// 2. Create multiple employee records
function createEmployeeRecords(arrayOfArrays) {
  return arrayOfArrays.map(createEmployeeRecord);
}

// 3. Add a TimeIn event
function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

// 4. Add a TimeOut event
function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date
  });
  return this;
}

// 5. Calculate hours worked on a given date
function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(event => event.date === date);
  const timeOut = this.timeOutEvents.find(event => event.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

// 6. Calculate wages earned on a given date
function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

// 7. Calculate total wages for this employee
function allWagesFor() {
  return this.timeInEvents.reduce((total, e) => {
    return total + wagesEarnedOnDate.call(this, e.date);
  }, 0);
}

// 8. Find employee by first name
function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(emp => emp.firstName === firstName);
}

// 9. Calculate total payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, emp) => {
    return total + allWagesFor.call(emp);
  }, 0);
}
const employees = createEmployeeRecords([
  ["Maggie", "Coder", "Engineer", 30],
  ["Alex", "Smith", "Designer", 25]
]);

createTimeInEvent.call(employees[0], "2025-06-27 0900");
createTimeOutEvent.call(employees[0], "2025-06-27 1700");

createTimeInEvent.call(employees[1], "2025-06-27 1000");
createTimeOutEvent.call(employees[1], "2025-06-27 1800");

console.log(allWagesFor.call(employees[0])); // 240
console.log(allWagesFor.call(employees[1])); // 200
console.log(calculatePayroll(employees));    // 440

console.log(findEmployeeByFirstName(employees, "Maggie")); // Maggie's record
