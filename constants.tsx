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
import { NavItem, TeamMember, Feature, Benefit } from './types';

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
  description: "前淘宝大学达人学院院长，薇娅、李佳琦启蒙导师。阿里十年经验，中国AI百强年会创业领袖。见证直播电商从0到1，单年营收破亿。",
  tags: ["领路人", "阿里系", "电商专家", "AI创业领袖"]
};

export const CORE_TEAM: TeamMember[] = [
  {
    name: "徐小敏",
    role: "CMO",
    description: "原抖商大学实战讲师，AIGC讲师联盟执行副院长。",
    tags: ["营销", "讲师"]
  },
  {
    name: "孔洪海",
    role: "CPQ",
    description: "前抖音电商学习中心负责人，淘宝大学资深产品经理。",
    tags: ["产品", "电商"]
  },
  {
    name: "徐兴兰",
    role: "COO",
    description: "共有家园创始人，阿里本地生活高级运营专家。",
    tags: ["运营", "阿里系"]
  },
  {
    name: "陈洁毅",
    role: "CTO",
    description: "前平安科技、阿里云、百度智能云技术专家。",
    tags: ["技术", "云架构"]
  },
  {
    name: "王峰",
    role: "AI培训顾问",
    description: "原阿里CIO学院执行院长，原阿里云研究院总监。",
    tags: ["培训", "顾问"]
  },
  {
    name: "牛聪聪",
    role: "AI解决方案负责人",
    description: "前纳爱斯集团副总经理，深耕企业数字化转型。",
    tags: ["解决方案", "管理"]
  },
  {
    name: "佘尚俊",
    role: "AI技术顾问",
    description: "阿里云·达摩院高级AI架构师。",
    tags: ["技术顾问", "达摩院"]
  }
];

export const ADVISORS: TeamMember[] = [
  {
    name: "林敏",
    role: "战略股东",
    description: "全域电商营销领军者，服务800万+达人。",
    tags: ["电商营销"]
  },
  {
    name: "吴晓波",
    role: "战略股东",
    description: "著名财经作家，蓝狮子出版机构创始人。",
    tags: ["财经", "出版"]
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
