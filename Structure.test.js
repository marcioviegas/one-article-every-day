const Structure = require("./Structure");
const fs = require("fs");

const temporaryFileToTest = "./temporary.md";
const structure = new Structure("How is gonna be?", "http://forbes.com");

afterAll(() => {

    if (fs.existsSync(temporaryFileToTest)) {
        fs.unlinkSync(temporaryFileToTest);
    }

    if (fs.existsSync(structure.articleFilePath)) {
        fs.unlinkSync(structure.articleFilePath);
    }

});

test('should undescore filename', () => {

    expect(structure.articleNameUnderscored).toBe("How_is_gonna_be?");

});

test('should create filepath with year', () => {

    expect(structure.articleFilePath).toBe("2019/How_is_gonna_be?.md");

});

test('should create title with link', () => {

    expect(structure.title).toBe("# [How is gonna be?](http://forbes.com)");

});

test(`create entry on readme`, () => {

    const lastEntryOnReadMe = "1. `12/18/2019` [Give Yourself The Gift Of The Greatest](2019/Give_Yourself_The_Gift_Of_The_Greatest.md)";
    const expectedLastEntryAfterCreate = "1. `"+structure.formatedDate+"` [How is gonna be?](2019/How_is_gonna_be?.md)";

    fs.writeFileSync(temporaryFileToTest, lastEntryOnReadMe);

    structure.createEntryForReadMe(temporaryFileToTest);

    const fileContent = fs.readFileSync(temporaryFileToTest).toString();

    expect(fileContent).toBe(`${lastEntryOnReadMe}\n${expectedLastEntryAfterCreate}`);

});


test(`create article file`, () => {

    structure.createArticleFile();

    const fileContent = fs.readFileSync(structure.articleFilePath).toString();

    expect(fileContent).toBe("# [How is gonna be?](http://forbes.com)");

});


