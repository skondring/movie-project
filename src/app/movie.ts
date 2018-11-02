import { Actor } from './actor';

export class Movie {
    title: string;
    actors: Array<Actor>;
    plot: string;
    genre: Array<string>;
    rating: number;
    year: number;
    poster: string;
    
    constructor(private t:string, private a:string, private pl:string, private g:string, private r:string, private y:string, private p:string) {
        this.title = t;
        a.split(',').forEach(fullName => {
            let fullNameArray:Array<string> = fullName.trim().split(' ');
            let actor:Actor = new Actor(fullNameArray[0], fullNameArray[1]);
            if (typeof this.actors == 'undefined') this.actors = new Array<Actor>();
            this.actors.push(actor);
        });

        g.split(',').forEach(gen => {
            if (typeof this.genre == "undefined") this.genre = new Array<string>();
            this.genre.push(gen.trim());
        });

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
