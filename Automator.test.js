const Automator = require("./Automator");
const fs = require("fs");

const temporaryFileToTest = "./temporary.md";
const automator = new Automator("How is gonna be?", "http://forbes.com");

afterAll(() => {

    if (fs.existsSync(temporaryFileToTest)) {
        fs.unlinkSync(temporaryFileToTest);
    }

    if (fs.existsSync(automator.newArticleFilePath)) {
        fs.unlinkSync(automator.newArticleFilePath);
    }

});

test('should undescore filename', () => {

    expect(automator.articleTitleUnderscored).toBe("How_is_gonna_be?");

});

test('should create filepath with year', () => {

    expect(automator.newArticleFilePath).toBe("2019/How_is_gonna_be?.md");

});

test('should create title with link', () => {

    expect(automator.articleTitleForArticleFile).toBe("# [How is gonna be?](http://forbes.com)");

});

test(`create entry on readme`, () => {

    const lastEntryOnReadMe = "1. `12/18/2019` [Give Yourself The Gift Of The Greatest](2019/Give_Yourself_The_Gift_Of_The_Greatest.md)";
    const expectedLastEntryAfterCreate = "1. `"+automator.formatedDate+"` [How is gonna be?](2019/How_is_gonna_be?.md)";

    fs.writeFileSync(temporaryFileToTest, lastEntryOnReadMe);

    automator.createArticleEntryOnReadMe(temporaryFileToTest);

    const fileContent = fs.readFileSync(temporaryFileToTest).toString();

    expect(fileContent).toBe(`${lastEntryOnReadMe}\n${expectedLastEntryAfterCreate}`);

});


test(`create article file`, () => {

    automator.createArticleFile();

    const fileContent = fs.readFileSync(automator.newArticleFilePath).toString();

    expect(fileContent).toBe("# [How is gonna be?](http://forbes.com)");

});


