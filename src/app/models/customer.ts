export default class Customer {
    public id: string;
    public _id: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber?: number;
    public address: string;
    public _rev: string;
    constructor(id: string,
        firstName: string = "",
        lastName: string = "",
        phoneNumber: number,
        address: string, _id:
            string = id,
        _rev: string = '') {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this._id = id
        this._rev = _rev;
    }

    public get fullName(): string {
        return this.firstName + " " + this.lastName;;
    }
}