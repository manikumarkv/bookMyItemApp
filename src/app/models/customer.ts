export default class Customer {
    public id:string;
    public _id:string;
    public firstName: string;
    public lastName: string;
    public phoneNumber? :number;
    public fullName: string;
    public address: string;
    constructor(id: string,firstName: string = "",lastName: string = "",phoneNumber: number,address: string) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.fullName = firstName +" "+ lastName;
        this.address= address;
        this._id = ''
    }
}