const Employee = require("../lib/Employee");

test('creates an employee', () => {
    const employee = new Employee('Dom');

    expect(employee.name).toBe('Dom');
})