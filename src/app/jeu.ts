export class Jeu {
    screenshots: Array<string>;
    cover: Array<string>;

    constructor(public name:string, public summary:string, public genres:number){
        for(let screenshot of screenshots) {
            this.screenshots = screenshots.url;
        }
        this.cover = cover.url;
    }
}
