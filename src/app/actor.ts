export class Actor {
    private _firstName : string;
    public get firstName() : string {return this._firstName;}
    public set firstName(v : string) {this._firstName = v;}
    
    private _lastName : string;
    public get lastName() : string {return this._lastName;}
    public set lastName(v : string) {this._lastName = v;}    

    constructor(private f:string, private l:string) {
        this.firstName = f;
        this.lastName = l;

        delete this.f; 
        delete this.l;
    }
}
