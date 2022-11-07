let emp = {
    firstName:"qais",
    lastName:"darabseh",
    age: "25",
    salary : 0,
}


function employeeInfo(emp){

    document.write(`
     hi  ${emp.firstName} ${emp.lastName} you age is ${emp.age} and your salary is ${emp.salary} JD    
    `);
}

employeeInfo(emp);