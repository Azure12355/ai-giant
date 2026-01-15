# 团队成员头像文件命名指南

本文档说明如何命名团队成员的头像文件，以确保与 `constants.tsx` 中的配置匹配。

## 文件命名规则

使用 **拼音首字母缩写** + `.png` 后缀命名。

## 创始人 (founder/)

| 姓名 | 文件名 | 路径 |
|------|--------|------|
| 七天 (王琪) | `wq-qt.png` | `/images/team/founder/wq-qt.png` |

## 核心团队 (core-team/)

| 姓名 | 职位 | 文件名 | 路径 |
|------|------|--------|------|
| 徐小敏 | CMQ 渠道运营负责 | `xxm.png` | `/images/team/core-team/xxm.png` |
| 孔洪海 | CPQ 商学院院长 | `khh.png` | `/images/team/core-team/khh.png` |
| 徐兴兰 | COO AI产品负责人 | `xxl.png` | `/images/team/core-team/xxl.png` |
| 陈洁毅 | CTO 技术负责人 | `cjy.png` | `/images/team/core-team/cjy.png` |
| 王峰 | AI培训顾问 | `wf.png` | `/images/team/core-team/wf.png` |
| 佘尚俊 | AI技术顾问 | `ssj.png` | `/images/team/core-team/ssj.png` |
| 牛聪聪 | AI解决方案负责人 | `ncc.png` | `/images/team/core-team/ncc.png` |

## 战略股东 (advisors/)

| 姓名 | 文件名 | 路径 |
|------|--------|------|
| 林敏 | `lm.png` | `/images/team/advisors/lm.png` |
| 吴晓波 | `wxp.png` | `/images/team/advisors/wxp.png` |

## 图片规格建议

| 类型 | 尺寸 | 格式 | 用途 |
|------|------|------|------|
| 创始人 | 500x600px | PNG | 展示大图 |
| 核心团队 | 200x200px | PNG | 圆形头像 |
| 战略股东 | 200x200px | PNG | 圆形头像 |

## 快速部署步骤

1. **准备图片文件**
   ```bash
   # 将图片文件放入对应目录
   cp /path/to/founder.png public/images/team/founder/wq-qt.png
   cp /path/to/xu-xiaomin.png public/images/team/core-team/xxm.png
   # ... 其他成员
   ```

2. **验证文件存在**
   ```bash
   ls -la public/images/team/founder/
   ls -la public/images/team/core-team/
   ls -la public/images/team/advisors/
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   ```

4. **访问页面验证**
   - 打开浏览器访问 http://localhost:3000
   - 滚动到 "核心团队" 区域查看效果

## 拼音缩写参考

| 汉字 | 拼音 | 首字母 |
|------|------|--------|
| 王 | Wang | W |
| 琪 | Qi | Q |
| 七 | Qi | Q |
| 天 | Tian | T |
| 徐 | Xu | X |
| 小 | Xiao | X |
| 敏 | Min | M |
| 孔 | Kong | K |
| 洪 | Hong | H |
| 海 | Hai | H |
| 兴 | Xing | X |
| 兰 | Lan | L |
| 陈 | Chen | C |
| 洁 | Jie | J |
| 毅 | Yi | Y |
| 峰 | Feng | F |
| 佘 | She | S |
| 尚 | Shang | S |
| 俊 | Jun | J |
| 牛 | Niu | N |
| 聪 | Cong | C |
| 林 | Lin | L |
| 吴 | Wu | W |
| 晓 | Xiao | X |
| 波 | Bo | B |
