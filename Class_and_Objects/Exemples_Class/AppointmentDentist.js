class Appointment{
    constructor(){
        this.client = '',
        this.service = '',
        this.data = '',
        this.time = '',
        this.dentist = ''
    }

    ToSchedule(){
        console.log("Schedule appointment!");
    }

    ToMeet(){
        console.log("Client to serviced!")
    }

    Payment(){
        console.log("Pay service!");
    }

    Cancel(){
        console.log("Cancel appointment!");
    }

    Reschecule(){
    console.log("Reschedule appointment!")
    }
}