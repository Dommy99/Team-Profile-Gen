const Manager = require("./Manager");

test('creates an Manager', () => {
    const manager = new Manager('Dom');

    expect(manager.name).toBe('Dom');
})
