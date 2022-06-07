## GitFLow

[https://datasift.github.io/gitflow/IntroducingGitFlow.html]()

```bash
brew install git-flow

git flow init
```

```bash
git flow {feature|release|hot_fix} {start|finish} name
```

---

### Git flow adaptation at the industry

> [Github workflow](https://githubflow.github.io/)

- Anything in the master branch is deployable
- To work on something new, create a descriptively named branch off of master (ie: new-oauth2-scopes)
- Commit to that branch locally and regularly push your work to the same named branch on the server
- When you need feedback or help, or you think the branch is ready for merging, open a pull request
- After someone else has reviewed and signed off on the feature, you can merge it into master
- Once it is merged and pushed to 'master', you can and should deploy immediately
