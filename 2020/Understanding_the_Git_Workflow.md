# [Understanding the Git Workflow](https://sandofsky.com/workflow/git-workflow/)

With enough flags you can force Git to act the way you think it should instead of the way it wants to. 

When prototyping a feature, you should make regular checkpoint commits. However, these commits usually break the build. In a perfect world, every change in your revision history is succinct and stable. 

Feature branches seem like a happy middle ground. They solve the basic problems of parallel development. You're thinking of integration at the least important time, when you're writing the code, but it will get you by for some time.

Git is revolutionary because it gives you the best of both worlds. You can regularly check in changes while prototyping a solution but deliver a clean history when you're finished. When this is your goal, Git's defaults make a lot more sense.

Think of branches in two categories: public and private.

You should never merge a private branch directly into a public branch with a vanilla merge. First, clean up your branch with tools like reset, rebase, squash merges, and commit amending

If you treat your public history as pristine, fast-forward merges are not only safe but preferable. They keep revision history linear and easier to follow.

"People may use merge commits to represent the last deployed version of production code. That's an antipattern. Use tags.

The vast majority of the time, my cleanup is just a squash merge. Imagine I create a feature branch and create a series of checkpoint commits over the next hour:

git merge --squash private_feature_branch

Interactive mode is powerful. You can use it to edit an old commits, split them up, reorder them, and in this case squash a few.

git rebase --interactive master

Maybe my feature branch existed for a very long time, and I had to merge several branches into my feature branch to keep it up to date while I work. History is convoluted. It's easiest to grab the raw diff create a clean branch.

Treat public history as immutable, atomic, and easy to follow. Treat private history as disposable and malleable.