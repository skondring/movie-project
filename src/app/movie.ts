import { Actor } from './actor';

export class Movie {    
    private _title : string;
    public get title() : string {return this._title;}
    public set title(v : string) {this._title = v;}

    private _actors : Array<Actor>;
    public get actors() : Array<Actor> {return this._actors;}
    public set actors(v : Array<Actor>) {this._actors = v;}
    
    private _plot : string;
    public get plot() : string {return this._plot;}
    public set plot(v : string) {this._plot = v;}
    
    private _genre : Array<string>;
    public get genre() : Array<string> {return this._genre;}
    public set genre(v : Array<string>) {this._genre = v;}
    
    private _rating : number;
    public get rating() : number {return this._rating;}
    public set rating(v : number) {this._rating = v;}
    
    private _year : number;
    public get year() : number {return this._year;}
    public set year(v : number) {this._year = v;}
    
    private _poster : string;
    public get poster() : string {return this._poster;}
    public set poster(v : string) {this._poster = v;}

    
    constructor(private t:string, private a:string, private pl:string, private g:string, private r:string, private y:string, private p:string) {
        this.title = t;
        
        try {
            a.split(',').forEach(fullName => {
                let fullNameArray:Array<string> = fullName.trim().split(' ');
                let actor:Actor = new Actor(fullNameArray[0], fullNameArray[1]);
                if (typeof this.actors == 'undefined') this.actors = new Array<Actor>();
                this.actors.push(actor);
            });
        } catch(e) {
            this.actors = new Array<Actor>();
        }

        try {
            g.split(',').forEach(gen => {
                if (typeof this.genre == "undefined") this.genre = new Array<string>();
                this.genre.push(gen.trim());
            });
        } catch(e) {
            this.genre = new Array<string>();
        }

        this.rating = Number(r);
        this.year = Number(y);
        this.poster = p;
        this.plot = pl;

        delete this.t;
        delete this.a;
        delete this.pl;
        delete this.g;
        delete this.r;
        delete this.y;
        delete this.p;
    }
}
