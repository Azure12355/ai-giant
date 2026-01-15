# 项目图片文件夹结构

本目录用于存放智巨人 AI 商业平台的所有图片资源。

## 目录结构

```
public/images/
├── team/              # 团队成员图片
│   ├── founder/       # 创始人照片 (500x600)
│   ├── core-team/     # 核心团队成员照片 (200x200)
│   └── advisors/      # 战略股东照片 (200x200)
├── mentors/           # 特邀导师头像 (200x200)
│   ├── rowA/          # 第一行导师头像
│   └── rowB/          # 第二行导师头像
├── partners/          # 合作伙伴 Logo
├── logos/             # 品牌相关 Logo
├── backgrounds/       # 背景图片
└── icons/             # 图标资源

```

## 使用说明

### 1. 团队成员图片 (team/)

#### 创始人 (founder/)
- 尺寸: 500x600 像素
- 格式: JPG/PNG
- 命名: `founder.jpg` 或 `wang-qi.jpg`
- 配置位置: `constants.tsx` -> `FOUNDER.avatarUrl`

```typescript
// constants.tsx
export const FOUNDER: TeamMember = {
  name: "七天 (王琪)",
  avatarUrl: "/images/team/founder/founder.jpg",  // 修改为此路径
  // ...
};
```

#### 核心团队 (core-team/)
- 尺寸: 200x200 像素
- 格式: JPG/PNG
- 命名建议: 使用姓名拼音或姓名
  - `xu-xiaomin.jpg` (徐小敏)
  - `kong-honghai.jpg` (孔洪海)
  - 等...

```typescript
// constants.tsx
export const CORE_TEAM: TeamMember[] = [
  {
    name: "徐小敏",
    avatarUrl: "/images/team/core-team/xu-xiaomin.jpg",
    // ...
  },
  // ...
];
```

#### 战略股东 (advisors/)
- 尺寸: 200x200 像素
- 格式: JPG/PNG
- 命名建议: 使用姓名拼音
  - `lin-min.jpg` (林敏)
  - `wu-xiaobo.jpg` (吴晓波)

```typescript
// constants.tsx
export const ADVISORS: TeamMember[] = [
  {
    name: "林敏",
    avatarUrl: "/images/team/advisors/lin-min.jpg",
    // ...
  },
  // ...
];
```

### 2. 导师头像 (mentors/)

建议创建子文件夹以便管理:

```
mentors/
├── rowA/  # 第一行导师 (30个)
└── rowB/  # 第二行导师 (30个)
```

- 尺寸: 200x200 像素
- 格式: JPG/PNG
- 命名: `mentor-001.jpg`, `mentor-002.jpg`, ...

```typescript
// constants.tsx
export const MENTOR_AVATARS = {
  rowA: [
    '/images/mentors/rowA/mentor-001.jpg',
    '/images/mentors/rowA/mentor-002.jpg',
    // ... 共30个
  ],
  rowB: [
    '/images/mentors/rowB/mentor-001.jpg',
    '/images/mentors/rowB/mentor-002.jpg',
    // ... 共30个
  ],
};
```

### 3. 合作伙伴 (partners/)
- 尺寸: 建议 200x80 或透明背景 PNG
- 用途: 客户案例、生态伙伴展示

### 4. 品牌 Logo (logos/)
- 项目 Logo
- 智巨人品牌相关标识

### 5. 背景图片 (backgrounds/)
- 页面背景图
- 装饰性背景元素

### 6. 图标 (icons/)
- 功能图标
- 装饰性图标

## 图片优化建议

1. **压缩图片**: 使用 TinyPNG 或类似工具压缩图片
2. **统一格式**: 优先使用 WebP 格式，PNG/JPG 作为备选
3. **命名规范**: 使用小写字母和连字符，避免空格和特殊字符
4. **尺寸规范**: 按照上述尺寸准备图片，避免加载过大图片

## 快速替换示例

将现有占位图替换为真实图片的步骤:

1. 将图片放入对应文件夹
2. 修改 `constants.tsx` 中的 `avatarUrl` 路径
3. 重新运行 `pnpm dev` 查看效果

```bash
# 示例: 替换创始人照片
# 1. 将照片放到 public/images/team/founder/founder.jpg
# 2. 修改 constants.tsx:
FOUNDER.avatarUrl = "/images/team/founder/founder.jpg"
```

## 注意事项

- 所有路径从 `/images/` 开始，因为 `public` 目录在构建时会被放到根目录
- 不要使用中文文件名，可能导致某些服务器部署问题
- 保持图片文件大小合理 (建议单张图片 < 500KB)
