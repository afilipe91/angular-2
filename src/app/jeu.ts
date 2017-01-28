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
