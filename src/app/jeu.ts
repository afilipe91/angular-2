export class Jeu {
    name;
    summary;
    genres;
    cover;
    screenshots;

    constructor(data)
    {
        Object.assign(this, data);
        this.cover = this.cover.url;
        // this.name = name;
        // this.summary = summary;
        // this.genres = genres;
    }

    getScreenshots() {
        if (this.screenshots != null) {
            return this.screenshots.map(screenshot => screenshot.url);
        } else {
            return [];
        }
    }
}