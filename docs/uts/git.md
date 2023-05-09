# Git

## 常用命令

### 初始化Git仓库

使用`git init`命令初始化Git仓库，将当前目录转换为Git仓库。

```bash
git init
```

### 克隆Git仓库

使用`git clone`命令克隆远程Git仓库到本地。

```bash
git clone <remote_url>
```

### 查看Git仓库状态

使用`git status`命令查看Git仓库当前状态。

```bash
git status
```

### 添加文件到Git仓库

使用`git add`命令将文件添加到Git仓库的暂存区。

```bash
git add <file>
// 如果将工作区的所有文件添加到暂存区 使用
git add .
```

### 提交文件到Git仓库

使用`git commit`命令将文件提交到Git仓库的版本库。

```bash
git commit -m "commit message"
```

### 查看Git提交历史

使用`git log`命令查看Git提交历史。

```bash
git log
```

### 撤销Git仓库中的修改

使用`git checkout`命令撤销工作区中的修改。

```bash
git checkout <file>
```

### 撤销Git暂存区中的修改

使用`git reset`命令撤销暂存区中的修改。

```bash
git reset <file>
```

### 合并Git分支

使用`git merge`命令将指定的分支合并到当前分支。

```bash
git merge <branch>
```

### 推送Git提交到远程仓库

使用`git push`命令将本地Git仓库的提交推送到远程仓库。

`<remote>`指的是远程仓库的别名，

`<branch>`指的是本地仓库中的分支名。

```bash
git push <remote> <branch>
```

