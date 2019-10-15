//using faker to get dummy data to play with

var faker = require('faker');

function generateEmployees(){
    var employees = []

    for(var id = 0; id = 100; id++){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var jobTitle = faker.name.jobTitle()
        var jobDescriptor = faker.name.jobDescriptor()
        var email = faker.internet.email()
        var phone = faker.phone.phoneNumber()
        var dateOfBirth = faker.date.past()
        var address = faker.address.zipCode()
        var image = faker.image.avatar()

        employees.push({
            "id" : id,
            "first_name" : firstName,
            "last_name" : lastName,
            "job_title" : jobTitle,
            "email" : email,
            "job_descriptor" : jobDescriptor,
            "phone" : phone,
            "date_of_birth" : dateOfBirth,
            "address" : address,
            "photo" : image
        })

        
    }
    return{"employees": employees}
}

module.exports = generateEmployees;