const Engineer = require("../lib/Engineer");

test("return engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("dom", 1,"GitHubUser");
    expect(e.grabJob()).toBe(testValue);
  });