export default class Customer {
    id:string;
    firstName: string;
    lastName: string;
    phoneNumber:number;
    fullName: string
    constructor(id,firstName: string = "",lastName: string = "",phoneNumber: null = null) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.fullName = lastName + firstName;
    }
}