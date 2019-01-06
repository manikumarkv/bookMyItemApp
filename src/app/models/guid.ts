export class Guid {
    /**
     * returns emptyguid.
     */
    public static get EmptyGuid(): Guid {
        return new Guid("00000000-0000-0000-0000-000000000000");
    }

    private guid: string;	
    constructor(public guidString: string) {
        //8-4-4-4-12
        let regexp: RegExp = new RegExp(`[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$`);
        if (regexp.test(guidString)) {
            this.guid = guidString;
        }
    }

    public ToString(): string {
        return this.guid;
    }

    public static NewGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}