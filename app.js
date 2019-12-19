const Automator = require("./Automator");

const [articleName, link] = process.argv.slice(2);

const structure = new Automator(articleName, link);

structure.createEntryForReadMe("./README.md");
structure.createArticleFile();