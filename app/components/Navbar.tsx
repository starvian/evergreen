'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import Image from 'next/image'; // 如果你有logo图片，可以取消注释并使用

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    // 完全匹配路径，或对于根路径单独处理
    if (path === '/') {
      return pathname === path;
    }
    // 对于其他路径，可以检查是否以该路径开头，以便子页面也能高亮父导航项
    // return pathname.startsWith(path);
    // 为了与你之前的逻辑保持一致，暂时使用精确匹配
    return pathname === path;
  };

  const yucaiNavLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/programs', label: 'OUR PROGRAMS' },
    { href: '/news', label: 'NEWS & EVENTS' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  // 移动端菜单状态 (如果需要实现功能，需要 useState)
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {' '}
      {/* 使用 header 标签，并保持 sticky */}
      {/* 顶部信息栏 */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <span>CALL +61 2 XXXX XXXX</span> {/* 替换为学校真实电话 */}
          </div>
          <div className="flex items-center space-x-3">
            {/* 替换为真实的社交媒体图标和链接 */}
            <a href="#" className="hover:text-custom-orange transition-colors">
              Fb
            </a>
            <a href="#" className="hover:text-custom-orange transition-colors">
              Tw
            </a>
            <a href="#" className="hover:text-custom-orange transition-colors">
              In
            </a>
          </div>
        </div>
      </div>
      {/* 主导航栏 */}
      <nav className="shadow-md">
        <div className="flex items-stretch justify-between min-h-[70px]">
          {' '}
          {/* items-stretch 使子元素同高 */}
          {/* Logo 和学校名称区域 */}
          <div
            className="bg-header-dark text-white flex items-center pl-4 pr-10 md:pl-6 lg:pl-8 py-2" // 调整了padding和pr来控制斜切区域大小
            style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }} // 调整斜切比例
          >
            <Link href="/" className="flex items-center space-x-3">
              {/* 如果有Logo图片: */}
              {/* <Image src="/logo.png" alt="Yucai Sydney Logo" width={50} height={50} /> */}
              <div className="flex flex-col">
                <span className="font-bold text-lg md:text-xl leading-tight">
                  育才悉尼中文学校
                </span>
                <span className="text-xs md:text-sm font-normal leading-tight">
                  Yucai Sydney Chinese School
                </span>
              </div>
            </Link>
          </div>
          {/* 导航链接区域 */}
          <div className="flex-grow bg-custom-yellow flex justify-end items-stretch">
            {/* 桌面菜单 */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 pr-4 md:pr-6 lg:pr-8">
              {yucaiNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-header-dark hover:bg-custom-orange/30 px-3 lg:px-4 py-5 rounded-md text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive(link.href) ? 'bg-custom-orange/40' : '' // 调整高亮样式
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center pr-4">
              <button
                // onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // 控制移动菜单的开关
                className="text-header-dark p-2 rounded-md hover:bg-custom-orange/30 focus:outline-none focus:bg-custom-orange/40"
                aria-label="Open main menu"
                aria-expanded="false" // 根据 mobileMenuOpen 状态改变
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 (如果实现功能，取消注释并管理状态) */}
        {/* {mobileMenuOpen && (
          <div className="md:hidden bg-custom-yellow border-t border-custom-orange/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {yucaiNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)} // 点击后关闭菜单
                  className={`block px-3 py-2 rounded-md text-base font-medium text-header-dark hover:bg-custom-orange/30 ${
                    isActive(link.href) ? 'bg-custom-orange/40' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </nav>
    </header>
  );
}
