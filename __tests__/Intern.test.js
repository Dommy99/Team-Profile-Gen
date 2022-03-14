const Intern = require("../lib/Intern");

test("return intern", () => {
    const testValue = "Intern";
    const e = new Intern("dom", 1, "uni");
    expect(e.grabJob()).toBe(testValue);
  });