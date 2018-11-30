export default class Customer {
    public id:string;
    public firstName: string;
    public lastName: string;
    public phoneNumber? :number;
    public fullName: string
    constructor(id: string,firstName: string = "",lastName: string = "",phoneNumber: number) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.fullName = lastName + firstName;
    }
}