# [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

Re-establishing the context of a piece of code is wasteful. We can’t avoid it completely, so our efforts should go to reducing it [as much] as possible. Commit messages can do exactly that and as a result, a commit message shows whether a developer is a good collaborator.

Reviewing others’ commits and pull requests becomes something worth doing, and suddenly can be done independently. Understanding why something happened months or years ago becomes not only possible but efficient.

A project’s long-term success rests (among other things) on its maintainability, and a maintainer has few tools more powerful than his project’s log. It’s worth taking the time to learn how to care for one properly. What may be a hassle at first soon becomes habit, and eventually a source of pride and productivity for all involved.

Style. Markup syntax, wrap margins, grammar, capitalization, punctuation. Spell these things out, remove the guesswork, and make it all as simple as possible. The end result will be a remarkably consistent log that’s not only a pleasure to read but that actually does get read on a regular basis.

Content. What kind of information should the body of the commit message (if any) contain? What should it not contain?

Metadata. How should issue tracking IDs, pull request numbers, etc. be referenced?

git log --oneline

git shortlog

Separate subject from body with a blank line 
Limit the subject line to 50 characters 
Capitalize the subject line 
Do not end the subject line with a period 
Use the imperative mood in the subject line 
Wrap the body at 72 characters 
Use the body to explain what and why vs. how

The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. One reason for this is that Git itself uses the imperative whenever it creates a commit on your behalf.

If applied, this commit will your subject line here