# Git and Github Master Class

- Git - VCS (Version Control System)
- Why we need VCS - 
  1. For tracking code
  2. For backup
  3. For collaboration with other developers

- git init
- 'U' in vs code besides filename - untracked
- 'A' - index Added after git add <filename>
- .git -> index file: has a track record of which files are to be tracked
- 'git status' : shows current condition: which files are tracked, which are not
- 'git log' : shows history of commits
- 'git diff <commitX>  <commitY>' : changes or difference between two commits
- 'M' - modified
- how commit id is created : git reads all the code files -> hash them with SHA1-> if no changes hash will be same as previous commit id -> so no new commit id

- 'git reset <commitID>' -> brings the head back to the 'commitID' -> all the changes after that 'commitID' are now in the staging area waiting to be commited.

- 'git reset --hard <commitID>' -> brings the head back to the 'commitID' -> all the changes after that are lost.