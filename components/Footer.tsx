import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
             <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
               <span className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center text-black text-sm">Z</span>
               智巨人 Zhijuren
             </h3>
             <p className="text-sm max-w-xs text-slate-500">
               中国领先的AI应用聚合与产业赋能平台。<br/>
               让小企业成为AI时代的小巨人。
             </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">关于我们</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#team" className="hover:text-brand-400 transition-colors">核心团队</a></li>
              <li><a href="#ecosystem" className="hover:text-brand-400 transition-colors">生态矩阵</a></li>
              <li><a href="#solutions" className="hover:text-brand-400 transition-colors">解决方案</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-sm">
              <li>杭州智巨人人工智能科技有限公司</li>
              <li>地址：杭州市余杭区...</li>
              <li>合作邮箱：contact@zhijuren.ai</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} 杭州智巨人人工智能科技有限公司. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Design by Zhijuren</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;