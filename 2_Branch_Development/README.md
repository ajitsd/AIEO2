# 🔀 Software Engineering Using Branch Development

Classically, to use branch development, we’ll need to zoom in on two concepts we just mentioned above: [git branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) and [local repos vs. remotes](https://git-scm.com/book/ms/v2/Git-Basics-Working-with-Remotes). We will also need to understand Git commands and all that noise.

For now, though, forget memorizing Git commands. They will come naturally if we can understand the process at a higher level.

**TL;DR**

- General Flow: Upstream → Origin → Your Laptop (**Local**) → Origin
- The `main` branch in your remote repo stays synced with **Upstream** (course materials) *while upstream updates never overwrite your work*
- Feature (assignment) branches are used to do work on Local and to push work to **Origin** (your remote on GitHub)

Let’s boil it all down to 🎋 The Three Main Branch Roles:

## 🎋 The Three Main Branch Roles

1. `main`
    - “The current official story.”
    - In class: the latest course materials.
    - In industry: what’s in **production**.
    - *Deployed to users, only stable, released code.*
2. `develop` (professional Gitflow)
    - “The draft of the next chapter.”
    - In class: **Not Applicable**
    - In industry: what’s in **staging**.
    - *Where all features get integrated (feature branches get merged) before release*.
- `feature / assignment / release` **branches**
    - “Write and edit paragraphs before they go into the book.”
    - In class: e.g., `lesson1-assignment`
    - In industry: e.g., `feature/login-page` or `release/1.2.0`

**TL;DR**

- Don’t work directly on `main`.
- *Branch off* `main` (as in class) or `develop` (as in industry), do work, then merge back.

## 🏡 The Three Places Your Code Lives

For class, we don’t need to worry about having a `develop` or **staging** area. 

At the same time, 

- **Upstream**
    - The *source of truth* you don’t directly control (e.g., course materials).
- **Origin**
    - *Your* copy of the repo on GitHub (your remote).
- **Local**
    - The repo on your machine where you actually edit files (e.g., do assignments)

**TL;DR**

- You will only `pull` from **Upstream** (course materials), not `push` back to it.
- You will `push` to **Origin** (your remote repository).
- You will write code and edit files on **Local** (with assignment/feature branches).

## 🧑‍💻 Your Version Control Workflow for The AI Engineer Onramp

We can break down your specific workflow into two distinct Gitflows:

1. Initial Setup: Create your own Repository
2. Weekly Workflow: Working on Assignments

### 1️⃣ Initial Setup: Create your own Repository

1. Create a new **remote** repository on your GitHub account and clone it **locally**
    
    ```markdown
    git clone git@github.com:yourusername/yourrepo.git
    cd yourrepo
    ```
    
2. Add the class repository as an **upstream remote**
    
    ```markdown
    git remote add upstream git@github.com:AI-Maker-Space/AIEO2.git
    ```
    
3. Verify both remotes are connected. *You should see both "origin" (your repo) and "upstream" (class repo)*.
    
    ```markdown
    git remote -v
    ```
    
4. Pull course materials from upstream
    
    ```markdown
    git pull upstream main --allow-unrelated-histories #--no-rebase --no-edit -X ours
    ```
    
5. Push to your own repo
    
    ```markdown
    git push origin main
    ```
    

> During steps 4 and 5, notice the use of `main`: *in a new repo* `main` is the name given to the [default branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches#about-the-default-branch).
> 

### 2️⃣ Weekly Workflow: Working on Assignments

**Situation**: Imagine you’re about to start **week 1**’s work! Here are the steps you need to follow:

1. Pull the latest lessons and course materials that have been released

```markdown
git pull upstream main
```

1. Create **your assignment branch** for you to be able to work on

```markdown
git checkout -b lesson1-assignment
```

1. Make changes, do the homework

`... do your work ...`

1. Commit and push to your remote repository

```markdown
git add .
git commit -m "Complete lesson 1 assignment"
git push origin lesson1-assignment
```

**Situation**: Imagine you’re about to start **week 2**’s work! Here are the steps you need to follow (because now you’re a pro)

```markdown
git checkout main
git pull upstream main  # Get lesson 2 materials
git checkout -b lesson2-assignment
```

> Thinking Questions
- What is one lesson you've learned from this?
- What is one [lesson that you have not yet learned](https://www.loom.com/share/b34e4bd657f74892ac9a01f774113b4d)?
