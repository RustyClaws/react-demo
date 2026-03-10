import React  from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// 定义路由和背景颜色的映射关系
const pageBackgrounds: Record<string, string> = {
    '/': '#F3F3F3',    // 主页的颜色
    // '/Dashboard': '#F3F3F3',// c1页面的颜色
  // 你可以添加更多路由和颜色
    '/*': '#F3F3F3',  //退回颜色，到时候改
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const backgroundColor = pageBackgrounds[currentPath] || pageBackgrounds['/*'];

  return (
    <div 
      className="app-container" 
      style={{ background: backgroundColor }}
    >
      <Outlet />
    </div>
  );
};

export default MainLayout;
