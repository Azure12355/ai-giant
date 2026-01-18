import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: '智巨人 | AI时代的商业新物种',
  description: '重构商业逻辑，打造AI超市。打破技术壁垒，推动人工智能在千行百业的高效渗透与价值重塑。',
  keywords: ['AI', '人工智能', '商业转型', '智巨人', 'AI工具'],
  authors: [{ name: '智巨人' }],
  openGraph: {
    title: '智巨人 | AI时代的商业新物种',
    description: '让小企业成为AI时代的小巨人',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
