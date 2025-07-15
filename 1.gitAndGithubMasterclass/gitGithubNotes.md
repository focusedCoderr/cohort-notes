# Class Links

1. https://app.eraser.io/workspace/Mb1uSbRhDKsd53ne0NX9
2. https://app.eraser.io/workspace/06oTmTiO17QjeuTDkp7O


# Git and Github Master Class

- Git - VCS (Version Control System)
- Why we need VCS -

  1. For tracking code
  2. For backup
  3. For collaboration with other developers

- git init
- 'U' in vs code besides filename - untracked
- 'A' - index Added after git add `filename`
- .git -> index file: has a track record of which files are to be tracked
- 'git status' : shows current condition: which files are tracked, which are not
- 'git log' : shows history of commits
- 'git log --oneline' : each commit is shown in one line
- 'git diff `commitX` `commitY`' : changes or difference between two commits
- 'M' - modified
- how commit id is created : git reads all the code files -> hash them with SHA1-> if no changes hash will be same as previous commit id -> so no new commit id

- 'git reset `commitID`' -> brings the head back to the 'commitID' -> all the changes after that 'commitID' are now in the staging area waiting to be commited.

- 'git reset --hard `commitID`' -> brings the head back to the 'commitID' -> all the changes after that are lost.
- If reset done, the push will not happen because remote is ahead by some commits -> in that case you CAN use "git push -f". Although other strategies might be possible depending on the situation.
- 'git remote -v' -> where to push and pull from

- 'git branch `branchname`' : new branch named 'branchname' is created, but git does not move to the newly created branch on its own. New branch only created

- 'git checkout `branchname`' : git moves to the 'branchname'

- 'git checkout -b `branchname`' : checkout to the branchname and if branch does not exist create it

- ' git commit -am "message" ' <-- git add . + git commit -m "message" . It won't work if you have made a new file and it is untracked

- 'git push -f' -> forcefully push to the github
- note: learn the command to set remote upstream
- 'git merge `branchname`' : merge the `branchname` to the current branch
- 'git merge --squash `branchname`' : squash the `branchname` and merge the changes on the current branch. But the new squashed changes are not committed automatically, but left in staging area. the developer on main has to commit it with the suitable message.
- If I am in `branchname` and i do 'git rebase main' ->it sets the base of `branchname` to the latest commit on the main. rebase basically rewrites timeline. It is used when main moved ahead when we were working on our `branchname` .

# Assignment

- Company Name : Chai Cohort
- onboarding documentation prepare
- new employee / intern -> this guide will be provided to him on how to maintain git
- make a repo named chai-cohort
- people are already working in this company
- prepare a complete documentation for the new employee/intern to make him understand how git and github is used in your company
- rules for commit message, if they are solving a ticket, ticke id should be mentioned in the commit, commands details, whenever they have to collab : they have to take care of these these things.
- you have to make an onboarding document
- #tid24 <-- sample for ticket id

- add screenshots - make repo on github --> how to push in that repo
- important git commands
- folder structure of .git folder
