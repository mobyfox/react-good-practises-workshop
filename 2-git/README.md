# git

### Config

```bash
$» git config --global -l
```
=> `~/.gitconfig`

```properties
[user]
	name = Manu Artero Anguita
	email = manutero.developer@gmail.com

[push]
	default = simple

[alias]
  ...

[core]
	excludesfile = /Users/cx01885/.gitignore_global

[init]
	defaultBranch = main

[commit]
	template = /Users/cx01885/.stCommitMsg
```

### .gitignore

**Local**

 - [https://www.toptal.com/developers/gitignore](Generator)
 - [https://github.com/github/gitignore](GitHub collection)

**Global** as fallback for every project

```properties
# MacOS
.DS_Store

# IDE
*~
.vscode

# deps
node_modules
.eggs/
*.pem
.mypy_cache/

# General
log/
*.log
```

### tools for VSCode

- **built-in**: SOURCE CONTROL VIEW

- **Extensions**

Name: GitLens — Git supercharged
Id: eamodio.gitlens
Description: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more
Version: 12.0.7
Publisher: GitKraken
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

### git Clients (git GUIs)

- [Fork](https://git-fork.com/) by Dan and Tanya
- [Source Tree](https://www.sourcetreeapp.com/)
- [Git Kraken](https://www.gitkraken.com/)

### Commands

- `git log`
- `git tag`
- `git rebase`
- `git rebase`
- `git stash`
- `git cherry-pick`

### Hooks

- Client (your machine)
- Server (Github, GitLab, ...)

```bash
$» ls -1 .git/hooks
  applypatch-msg.sample
  commit-msg.sample
  fsmonitor-watchman.sample
  post-update.sample
  pre-applypatch.sample
  pre-commit.sample
  pre-merge-commit.sample
  pre-push.sample
  pre-rebase.sample
  pre-receive.sample
  prepare-commit-msg.sample
  push-to-checkout.sample
  update.sample
```
