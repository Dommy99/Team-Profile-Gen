const Engineer = require("./Engineer");

test('creates an engineer', () => {
    const engineer = new Engineer('Dom');

    expect(engineer.name).toBe('Dom');
})