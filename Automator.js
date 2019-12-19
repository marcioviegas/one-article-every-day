const fs = require("fs");

class Automator {

    constructor(articleName, link) {
        this.articleTitle = articleName.trim();
        this.link = link;

        this.date = new Date();
        this.year = this.date.getFullYear();

        this.articleNameUnderscored = this.createUnderscoreFile();
        this.articleFilePath = this.createFilePath();

        this.title = this.createTitle();
        this.formatedDate = `${this.date.getMonth()+1}/${this.date.getUTCDate()}/${this.date.getFullYear()}`;

    }

    createUnderscoreFile() {
        return this.articleTitle.replace(/ /g,"_");
    }

    createFilePath() {
        return `${this.year}/${this.articleNameUnderscored}.md`
    }

    createTitle() {
        return `# [${this.articleTitle}](${this.link})`
    }

    createEntryForReadMe(readMePath) {
        fs.appendFileSync(readMePath,`\n1. \`${this.formatedDate}\` [${this.articleTitle}](${this.articleFilePath})`);
    }

    createArticleFile() {
        fs.writeFileSync(`${this.articleFilePath}`, this.title);
    }

}

module.exports = Automator;