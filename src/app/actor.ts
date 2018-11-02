export class Actor {
    firstName:string;
    lastName:string;

    constructor(private f:string, private l:string) {
        this.firstName = f;
        this.lastName = l;

        delete this.f; 
        delete this.l;
    }
}
