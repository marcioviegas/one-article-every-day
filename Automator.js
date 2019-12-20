const fs = require("fs");

class Automator {

    constructor(articleName, link) {
        this.articleTitle = articleName.trim();
        this.link = link.trim();

        this.date = new Date();
        this.year = this.date.getFullYear();
        this.formatedDate = `${this.date.getMonth()+1}/${this.date.getUTCDate()}/${this.date.getFullYear()}`;

        this.articleTitleUnderscored = this.createUnderscoreArticleTitle();
        this.newArticleFilePath = this.createArticleFilePath();
        this.articleTitleForArticleFile = this.createArticleTitleForArticleFile();

    }

    createUnderscoreArticleTitle() {
        return this.articleTitle.replace(/ /g,"_");
    }

    createArticleFilePath() {
        return `${this.year}/${this.articleTitleUnderscored}.md`
    }

    createArticleTitleForArticleFile() {
        return `# [${this.articleTitle}](${this.link})`
    }

    createArticleEntryOnReadMe(readMePath) {
        fs.appendFileSync(readMePath,`\n1. \`${this.formatedDate}\` [${this.articleTitle}](${this.newArticleFilePath})`);
    }

    createArticleFile() {
        fs.writeFileSync(`${this.newArticleFilePath}`, this.articleTitleForArticleFile);
    }

}

module.exports = Automator;