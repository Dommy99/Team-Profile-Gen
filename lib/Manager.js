const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email,officeNumber,){
        super(name, id, email,);
        this.officeNumber = officeNumber;
    };
    
    grabOfficeNumber() {
        return this.officeNumber;
    }

    grabJob(){
        return "Manager"
    };
    
}

module.exports = Manager;