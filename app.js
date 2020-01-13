import Automator from "./Automator.js";

const [articleName, link] = process.argv.slice(2);

const automator = new Automator(articleName, link);

automator.createArticleEntryOnReadMe("./README.md");
automator.createArticleFile();