var faker = require('faker');

function getEmployees(){
    var employees = []

    for(var id = 0; id < 100; id++){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var phone = faker.phone.phoneNumber()

        employees.push({
            "first_name" : firstName,
            "last_name" : lastName,
            "phone" : phone
        })
    }
    return {"employees" : employees}
}

module.exports = getEmployees;