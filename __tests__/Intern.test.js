const Intern = require("./Intern");

test('creates an Intern', () => {
    const intern = new Intern('Dom');

    expect(intern.name).toBe('Dom');
})