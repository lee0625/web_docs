# Node 实战

## 生成文件夹结构树

### 参数

*   **rootPath**：根目录路径
*   **padding**: 缩进字符串（可选，默认为空字符串）
*   **level**: 层级深度（可选，默认为0）
*   **excludeFiles**: 需要排除的文件名数组（可选，默认为空数组）

### 方法

```javascript
const fs = require("fs");
/**
 * 生成文件树结构
 * @param {string} rootPath - 根目录路径
 * @param {string} padding - 缩进字符串（可选，默认为空字符串）
 * @param {number} level - 层级深度（可选，默认为0）
 * @param {string[]} excludeFiles - 需要排除的文件名数组（可选，默认为空数组）
 */
function generateTree(rootPath, padding = "", level = 0, excludeFiles = []) {
  // 读取目录下的文件和文件夹
  const files = fs.readdirSync(rootPath, { withFileTypes: true });
  
  // 遍历文件和文件夹
  files.forEach((file, index) => {
    const isLast = index === files.length - 1;
    const prefix = isLast ? "└── " : "├── ";
    const fileName = file.name;
    
    // 打印文件名（带缩进）
    console.log(padding + prefix + fileName);
    
    // 如果文件不在排除列表中
    if (!excludeFiles.includes(fileName)) {
      // 如果是文件夹且层级大于0，则递归生成子文件树
      if (file.isDirectory() && level > 0) {
        const newPadding = padding + (isLast ? "    " : "│   ");
        generateTree(
          rootPath + "/" + fileName,
          newPadding,
          level - 1,
          excludeFiles
        );
      }
    }
  });
}
```

### 示例

```javascript
// 生成根目录下的文件树结构，层级深度为2，排除名为"exclude.txt"的文件
const excludeFiles = ["node_modules", ".yalc", "yarn.lock", ".git", ".vscode", "package-lock.json"]
generateTree("./", "", 2, excludeFiles);
```

