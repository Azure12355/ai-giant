import {
  Zap,
  TrendingUp,
  ShieldCheck,
  Users,
  Globe,
  Cpu,
  Award,
  BookOpen,
  Briefcase,
  Layers,
  Search,
  AlertTriangle,
  HelpCircle,
  Target
} from 'lucide-react';
import { NavItem, TeamMember, Feature, Benefit, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '首页', href: '#home' },
  { label: '市场趋势', href: '#market' },
  { label: '解决方案', href: '#solutions' },
  { label: '生态矩阵', href: '#ecosystem' },
  { label: '核心团队', href: '#team' },
  { label: '合作加盟', href: '#join' },
];

export const MARKET_STATS = [
  { year: '2018', value: 100 },
  { year: '2020', value: 250 },
  { year: '2022', value: 450 },
  { year: '2024', value: 800 },
  { year: '2025', value: 1200 },
  { year: '2027', value: 2500 }, // Projected
];

export const PAIN_POINTS: Feature[] = [
  {
    title: '找不到 (Can\'t Find)',
    description: '海量工具信息过载，难以甄别适合的AI应用。',
    icon: Search
  },
  {
    title: '玩不转 (Can\'t Master)',
    description: '技术门槛高，学习成本大，缺乏专业指导。',
    icon: Layers
  },
  {
    title: '用不好 (Can\'t Use Well)',
    description: '通用工具与业务场景不匹配，缺乏深度陪跑。',
    icon: AlertTriangle
  },
  {
    title: '不敢信 (Dare Not Believe)',
    description: '市场鱼龙混杂，效果承诺难兑现，决策风险高。',
    icon: HelpCircle
  }
];

export const SOLUTIONS: Feature[] = [
  {
    title: '领袖基因',
    description: '阿里+直播电商实战背景，懂流量、懂变现、懂生态。',
    icon: Users
  },
  {
    title: '产业联盟',
    description: '100+顶尖专家与工具方背书，资源护城河深厚。',
    icon: Globe
  },
  {
    title: '全链路服务',
    description: '独家“体验-交付-陪跑”闭环，不做一锤子买卖。',
    icon: ShieldCheck
  },
  {
    title: '市场窗口',
    description: '率先卡位“线下体验中心”，抢占AI落地第一入口。',
    icon: Target
  }
];

export const ECOSYSTEM_ITEMS = [
  { title: 'AI培训', desc: '累计培训5000+人次，服务企业120+', icon: BookOpen },
  { title: 'AI证书', desc: '工信部/微软/英伟达/钉钉等权威认证', icon: Award },
  { title: 'AI研学', desc: '沉浸式体验，涵盖近100个标杆企业', icon: Users },
  { title: 'AI工具', desc: '严选全球2000+应用，全场景覆盖', icon: Cpu },
  { title: 'AI解决方案', desc: '定制化开发，私有化部署，深度陪跑', icon: Briefcase },
];

export const FOUNDER: TeamMember = {
  name: "七天 (王琪)",
  role: "创始人",
  description: "杭州智巨人人工智能科技有限公司创始人。前淘宝大学达人学院院长，薇娅、李佳琦启蒙导师。中国AI百强年会-AI创业领袖人物，中韩首尔峰会中方嘉宾，工信部尚工行动AIGC证书电商技能研发总负责，创业黑马AI加速导师。",
  tags: ["AI创业领袖", "淘宝大学达人学院院长", "薇娅李佳琦启蒙导师", "工信部AIGC总负责"],
  avatarUrl: "/images/team/founder/wq-qt.png"
};

export const CORE_TEAM: TeamMember[] = [
  {
    name: "徐小敏",
    role: "CMQ 渠道运营负责 / 联合创始人",
    description: "原抖商大学实战讲师，优质抖音视频创作者；七天学会研学&培训部负责人，AIGC讲师联盟执行副院长，AIGC工具联盟理事会成员。",
    tags: ["渠道运营", "AIGC讲师联盟", "培训部负责人"],
    avatarUrl: "/images/team/core-team/xxm.png"
  },
  {
    name: "孔洪海",
    role: "CPQ 商学院院长 / 联合创始人",
    description: "前抖音电商学习中心负责人、淘宝大学资深产品经理。拥有13年电商平台行业经验及10余年电商培训运营经验，曾负责数十大型培训项目，服务众多国内知名品牌企业。",
    tags: ["商学院院长", "13年电商经验", "产品专家"],
    avatarUrl: "/images/team/core-team/khh.png"
  },
  {
    name: "徐兴兰",
    role: "COO AI产品负责人 / 联合创始人",
    description: "共有家园（杭州）科技有限公司创始人，AIGC电商应用联盟首席品牌顾问，阿里巴巴本地生活高级运营专家，阿里巴巴本地生活开战实战专家，易到用车（杭州）分公司总经理。",
    tags: ["AI产品负责人", "阿里本地生活", "品牌顾问"],
    avatarUrl: "/images/team/core-team/xxl.png"
  },
  {
    name: "陈洁毅",
    role: "CTO 技术负责人 / 联合创始人",
    description: "杭州金源数语科技有限公司创始人，曾就职平安科技、阿里云、百度智能云，企业公有云和AI行业解决方案专家，阿里云大学讲师。",
    tags: ["技术负责人", "AI解决方案", "阿里云认证讲师"],
    avatarUrl: "/images/team/core-team/cjy.png"
  },
  {
    name: "王峰",
    role: "AI培训顾问",
    description: "专注于企业数字化与智能化转型的资深专家，拥有15年行业经验。中组部干部培训基地认证讲师，工信部领军人才项目讲师，阿里AI大模型指定讲师，原阿里CIO学院创始合伙人、执行院长。",
    tags: ["15年行业经验", "阿里CIO学院", "工信部讲师"],
    avatarUrl: "/images/team/core-team/wf.png"
  },
  {
    name: "佘尚俊",
    role: "AI技术顾问",
    description: "阿里巴巴工作十五年高级架构师，擅长云平台搭建，阿里云·达摩院高级AI架构师，北京理工大学校外博士生导师，资深架构师，10年以上大型系统开发经验。",
    tags: ["达摩院AI架构师", "15年阿里", "北理博士生导师"],
    avatarUrl: "/images/team/core-team/ssj.png"
  },
  {
    name: "牛聪聪",
    role: "AI解决方案负责人",
    description: "前案例自身运营专家，前纳爱斯集团副总经理，杭州人社局认知导师，操盘过亿级年GMV项目，擅长用户增长与商业化闭环设计。",
    tags: ["解决方案负责人", "亿级GMV", "用户增长专家"],
    avatarUrl: "/images/team/core-team/ncc.png"
  }
];

export const ADVISORS: TeamMember[] = [
  {
    name: "林敏",
    role: "战略股东",
    description: "全域电商营销领军者，服务800万+达人，年执行直播500+场，智能短视频月产1万条，2025年营收8亿，天猫、抖音、小红书、京东等头部服务商。",
    tags: ["全域电商营销", "800万+达人", "年营收8亿"],
    avatarUrl: "/images/team/advisors/lm.png"
  },
  {
    name: "吴晓波",
    role: "战略股东",
    description: "著名财经作家，出版多部畅销书，创办蓝狮子出版机构，年营收超千万，推动商业知识普及，2025年举办AI闪耀中国。",
    tags: ["著名财经作家", "蓝狮子出版", "AI闪耀中国"],
    avatarUrl: "/images/team/advisors/wxb.png"
  }
];


export const BENEFITS: Benefit[] = [
  { title: 'ROI', value: '1:5', icon: TrendingUp },
  { title: '效率提升', value: '30%', icon: Zap },
  { title: '成本降低', value: '50%', icon: Layers },
];

export const PARTNERS = [
  "阿里巴巴", "科大讯飞", "钉钉", "商汤科技", "字节跳动", "百度文心", "微软", "Midjourney", "ChatGPT"
];

// ==================== 导师配置 ====================
// 导师头像 URL 配置
// 将导师图片放到 public/images/mentors/rowA/ 和 rowB/ 目录
// 然后取消注释下面的本地路径，或替换为真实图片 URL
export const MENTOR_AVATARS = {
  // 第一行导师头像 (从左到右滚动) - 30个
  rowA: [
    // '/images/mentors/rowA/mentor-001.jpg',  // 使用本地图片时取消注释
    'https://picsum.photos/seed/mentorA0/200',
    'https://picsum.photos/seed/mentorA1/200',
    'https://picsum.photos/seed/mentorA2/200',
    'https://picsum.photos/seed/mentorA3/200',
    'https://picsum.photos/seed/mentorA4/200',
    'https://picsum.photos/seed/mentorA5/200',
    'https://picsum.photos/seed/mentorA6/200',
    'https://picsum.photos/seed/mentorA7/200',
    'https://picsum.photos/seed/mentorA8/200',
    'https://picsum.photos/seed/mentorA9/200',
    'https://picsum.photos/seed/mentorA10/200',
    'https://picsum.photos/seed/mentorA11/200',
    'https://picsum.photos/seed/mentorA12/200',
    'https://picsum.photos/seed/mentorA13/200',
    'https://picsum.photos/seed/mentorA14/200',
    'https://picsum.photos/seed/mentorA15/200',
    'https://picsum.photos/seed/mentorA16/200',
    'https://picsum.photos/seed/mentorA17/200',
    'https://picsum.photos/seed/mentorA18/200',
    'https://picsum.photos/seed/mentorA19/200',
    'https://picsum.photos/seed/mentorA20/200',
    'https://picsum.photos/seed/mentorA21/200',
    'https://picsum.photos/seed/mentorA22/200',
    'https://picsum.photos/seed/mentorA23/200',
    'https://picsum.photos/seed/mentorA24/200',
    'https://picsum.photos/seed/mentorA25/200',
    'https://picsum.photos/seed/mentorA26/200',
    'https://picsum.photos/seed/mentorA27/200',
    'https://picsum.photos/seed/mentorA28/200',
    'https://picsum.photos/seed/mentorA29/200',
  ],
  // 第二行导师头像 (从右到左滚动) - 30个
  rowB: [
    // '/images/mentors/rowB/mentor-001.jpg',  // 使用本地图片时取消注释
    'https://picsum.photos/seed/mentorB0/200',
    'https://picsum.photos/seed/mentorB1/200',
    'https://picsum.photos/seed/mentorB2/200',
    'https://picsum.photos/seed/mentorB3/200',
    'https://picsum.photos/seed/mentorB4/200',
    'https://picsum.photos/seed/mentorB5/200',
    'https://picsum.photos/seed/mentorB6/200',
    'https://picsum.photos/seed/mentorB7/200',
    'https://picsum.photos/seed/mentorB8/200',
    'https://picsum.photos/seed/mentorB9/200',
    'https://picsum.photos/seed/mentorB10/200',
    'https://picsum.photos/seed/mentorB11/200',
    'https://picsum.photos/seed/mentorB12/200',
    'https://picsum.photos/seed/mentorB13/200',
    'https://picsum.photos/seed/mentorB14/200',
    'https://picsum.photos/seed/mentorB15/200',
    'https://picsum.photos/seed/mentorB16/200',
    'https://picsum.photos/seed/mentorB17/200',
    'https://picsum.photos/seed/mentorB18/200',
    'https://picsum.photos/seed/mentorB19/200',
    'https://picsum.photos/seed/mentorB20/200',
    'https://picsum.photos/seed/mentorB21/200',
    'https://picsum.photos/seed/mentorB22/200',
    'https://picsum.photos/seed/mentorB23/200',
    'https://picsum.photos/seed/mentorB24/200',
    'https://picsum.photos/seed/mentorB25/200',
    'https://picsum.photos/seed/mentorB26/200',
    'https://picsum.photos/seed/mentorB27/200',
    'https://picsum.photos/seed/mentorB28/200',
    'https://picsum.photos/seed/mentorB29/200',
  ],
} as const;

// 导师数量配置
export const MENTOR_CONFIG = {
  rowA_Count: 30,  // 第一行导师数量
  rowB_Count: 30,  // 第二行导师数量
  scrollDuration_A: 40,  // 第一行滚动时间(秒)
  scrollDirection_A: 'left',  // 第一行滚动方向
  scrollDuration_B: 45,  // 第二行滚动时间(秒)
  scrollDirection_B: 'right',  // 第二行滚动方向
} as const;

// 额外支持的导师与机构 (显示在底部的文字)
export const ADDITIONAL_MENTORS = [
  "极客湾创始人",
  "强脑科技",
  "清华校友会"
];

// ==================== 客户案例配置 ====================
export const TESTIMONIALS: Testimonial[] = [
  {
    logo: "小红书",
    color: "bg-red-500",
    quote: "小红书作为一家海外购物一站式发现平台，采用了智巨人的云服务器等IaaS资源，快速开发产品，缩短了开发周期，提升了产品品质。",
    author: "小红书"
  },
  {
    logo: "bilibili",
    color: "bg-pink-400",
    quote: "bilibili 是国内最大的年轻人潮流文化娱乐社区。通过使用智巨人的资源与服务，bilibili 极大提升了服务可用性和用户体验。",
    author: "bilibili"
  },
  {
    logo: "人民日报",
    color: "bg-red-600",
    quote: "人民日报社将携手智巨人共同建设中国媒体融合云平台，向全国媒体行业提供安全的云服务体系和媒体融合平台、应用工具。",
    author: "人民日报"
  }
];

// 合作伙伴配置 (跑马灯用)
export const PARTNERS_ROW_1 = [
  "New Oriental", "WeBank", "Tongcheng", "Tencent Games", "Mini World", "Mogu", "Douyu",
  "Yonghui", "GF Securities", "Lizhi", "Tencent Class", "Kuaishou", "People's Daily", "YuanTik"
];

export const PARTNERS_ROW_2 = [
  "China Export", "PUBG", "58.com", "People.cn", "Parametrix.ai", "Didi", "WeDoctor",
  "Alibaba", "iFlytek", "DingTalk", "SenseTime", "ByteDance", "Baidu", "Microsoft"
];
