## 提交信息规范（Conventional Commits）

### 基本格式

- `type(scope): subject`
- 可选：空行后写正文；再空行写 Footer（关联 issue / 重大变更）

### 常用 type

- **feat**: 新功能
- **fix**: 修复缺陷
- **docs**: 文档变更
- **style**: 代码风格（不影响逻辑）
- **refactor**: 重构（非新增功能、非修复 bug）
- **perf**: 性能优化
- **test**: 测试相关
- **build**: 构建/依赖
- **ci**: CI 配置
- **chore**: 其他杂项
- **revert**: 回滚

### 书写要求

- `subject` 用祈使句，简洁明了，末尾不加句号
- `scope` 可选：指影响范围，如 `ui`、`api`、`auth` 等

### 通过的示例

- 功能和修复
  - `feat(ui): 新增主题切换开关`
  - `feat(router): 支持动态路由与 404 页`
  - `fix(api): 修复用户列表 500 错误`
  - `fix(types): 补全 AppProps 的可选字段`

- 文档与样式
  - `docs(readme): 添加快速开始与常见问题`
  - `style: 统一 Prettier 格式（无逻辑变更）`

- 重构与性能
  - `refactor(table): 抽离渲染逻辑到 hooks`
  - `perf(image): 懒加载首屏外图片，降低 LCP`

- 测试与构建
  - `test(auth): 增加登录成功与失败用例`
  - `build: 升级 webpack 到 v5 并优化分包`
  - `ci: 在 main 分支启用缓存加速`

- 杂项与回滚
  - `chore(deps): 升级 react 到 19.1.0`
  - `revert: 回滚 feat: 新增主题切换开关`

### 多行提交示例（含正文与 Footer）

```
fix(login): 处理空密码导致的崩溃

修复了当用户未输入密码时的前端校验缺失问题。
- 增加必填校验
- 优化错误提示文案

Closes #123
```

### 重大变更（Breaking Change）

- 方式1（在 type 后加 `!`）

```
feat(auth)!: 移除旧版 token 存储方案
```

- 方式2（在 Footer 中写 `BREAKING CHANGE:`）

```
feat(auth): 移除旧版 token 存储方案

BREAKING CHANGE: 删除了 localStorage token，请改用 cookie + httpOnly。
```

### 提交前自查清单

- 是否符合 `type(scope): subject` 格式？
- type 是否选择正确？
- subject 是否简洁、无句号？
- 若为重大变更，是否加了 `!` 或写了 `BREAKING CHANGE:`？
