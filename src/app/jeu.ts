export class Jeu {
    id;
    name;
    summary;
    genres;
    cover;
    screenshots;
    constructor(data)
    {
        Object.assign(this, data);
        this.cover = this.cover.url;
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
