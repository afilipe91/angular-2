// export class Jeu {
//     screenshots: Array<string>;
//     cover: Array<string>;
//
//     constructor(public name:string, public summary:string, public genres:number){
//         for(let screenshot of screenshots) {
//             this.screenshots = screenshots.url;
//         }
//         this.cover = cover.url;
//     }
// }
export class Jeu {
    name;
    summary;
    genres;
    cover;
    screenshots;
    constructor(data)
    {
        Object.assign(this, data);
    }

    getScreenshots()
    {
        if(this.screenshots != null) {
            return this.screenshots.map(screenshot => screenshot.url);
        } else {
            return [];
        }
    }
}