const Manager = require("../lib/Manager");

test("return manager", () => {
    const testValue = "Manager";
    const e = new Manager("dom", 1, 1);
    expect(e.grabJob()).toBe(testValue);
  });
