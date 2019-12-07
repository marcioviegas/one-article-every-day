# [Testing Microservices, the sane way](https://medium.com/@copyconstruct/testing-microservices-the-sane-way-9bb31d158c16)

* The testing code must stay dead-simple, with minimal dependencies, abstractions, and levels of indirection. One should look at a test and get the intent instantly. Most of the advice below are derivatives of this principle

* Code the expectation in a human-like language, declarative BDD style using expect or should and not using custom code

* Testing the internals brings huge overhead for almost nothing. If your code/API deliver the right results, should you really invest your next 3 hours in testing HOW it worked internally and then maintain these fragile tests? 

* Before using test doubles, ask a very simple question: Do I use it to test functionality that appears, or could appear, in the requirements document? If no, it’s a smell of white-box testing.

* Often production bugs are revealed under some very specific and surprising input — the more realistic the test input is, the greater the chances are to catch bugs early. Use dedicated libraries like Faker to generate pseudo-real data that resembles the variety and form of production data  You can run property-based testing using your favorite test runner (Mocha, Jest, etc) using libraries like js-verify or testcheck (much better documentation).

* Suddenly found yourself with 4 helpers per test suite, 2 of them inheriting from base util, a lot of setup and tearing-up hooks? congratulation, you just won another challenging project to maintain, you might write tests soon against your test suite

* Tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with Mocha: mocha — grep ‘sanity’

* The TDD argument in the software world takes a typical false-dichotomy face, some preach to use it everywhere, others think it’s the devil. Everyone who speaks in absolutes is wrong.

* Component testing is the unsung song of the testing world — they provide the best from both worlds: reasonable performance and a possibility to apply TDD patterns + realistic and great coverage.

* Many avoid Middleware testing because they represent a small portion of the system and require a live Express server. Both reasons are wrong — Middlewares are small but affect all or most of the requests and can be tested easily as pure functions that get {req,res} JS objects.

* Although most of the testing enthusiasts claim that the right coverage threshold is contextual, most of them also mention the number 80% as a thumb of a rule (Fowler: “in the upper 80s or 90s”) that presumably should satisfy most of the applications.

* Mutation-based testing is here to help by measuring the amount of code that was actually TESTED not just VISITED. Stryker is a JavaScript library for mutation testing and the implementation is really neat:

* Alternatively, you may just add npm script to package.json that runs all the quality commands (e.g. test, lint, vulnerabilities) — use tools like concurrently for parallelization and non-zero exit code if one of the tools failed. Now the developer should just invoke one command — e.g. ‘npm run quality’ — to get instant feedback. Consider also aborting a commit if the quality check failed using a githook (husky can help)

* A bunch of npm packages like license check and plagiarism check (commercial with free plan) can be easily baked into your CI pipeline and inspect for sorrows like dependencies with restrictive licenses or code that was copy-pasted from Stackoverflow and apparently violates some copyrights

* Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community tools such as npm audit.

* ncu can be used manually or within a CI pipeline to detect to which extent the code lag behind the latest versions
