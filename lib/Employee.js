class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    grabName(){
        return this.name;
    };
    grabId(){
        return this.id;
    };
    grabEmail(){
        return this.email;
    };
    grabJob(){
        return "Employee"
    };
}

module.exports = Employee;