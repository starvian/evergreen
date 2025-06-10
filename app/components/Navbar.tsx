'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname === path;
  };

  const yucaiNavLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/programs', label: 'OUR PROGRAMS' },
    { href: '/news', label: 'NEWS & EVENTS' },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* 顶部信息栏 */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <span>CALL 0416682288</span>
          </div>
          <div className="flex items-center space-x-3">
            {/* 社交媒体图标链接 */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="Twitter"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://weixin.qq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              title="WeChat"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.932 7.621-.55-.302-2.676-2.476-4.81-5.722-6.04C10.85 2.462 9.78 2.188 8.691 2.188zm-2.363 2.58c.55 0 .995.445.995.995s-.445.995-.995.995-.995-.445-.995-.995.445-.995.995-.995zm4.726 0c.55 0 .995.445.995.995s-.445.995-.995.995-.995-.445-.995-.995.445-.995.995-.995zm5.538 6.561c-2.213 0-4.129.876-5.186 2.321-.302.414-.48.865-.48 1.328 0 2.363 2.134 4.282 4.766 4.282.39 0 .770-.054 1.141-.14a.64.64 0 0 1 .53.07l1.347.785a.24.24 0 0 0 .118.04c.115 0 .209-.094.209-.209 0-.051-.023-.102-.034-.15l-.275-1.048a.413.413 0 0 1 .15-.47c1.296-.906 2.134-2.266 2.134-3.76 0-2.75-2.32-4.99-5.186-4.99v-.009zm-2.635 1.817c.414 0 .749.336.749.749s-.335.749-.749.749-.749-.336-.749-.749.335-.749.749-.749zm5.271 0c.414 0 .749.336.749.749s-.335.749-.749.749-.749-.336-.749-.749.335-.749.749-.749z" />
              </svg>
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
                  悉尼中国育才学校
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
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-header-dark p-2 rounded-md hover:bg-custom-orange/30 focus:outline-none focus:bg-custom-orange/40"
                aria-label="Open main menu"
                aria-expanded={mobileMenuOpen}
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

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-custom-yellow border-t border-custom-orange/50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {yucaiNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-header-dark hover:bg-custom-orange/30 ${
                    isActive(link.href) ? 'bg-custom-orange/40' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
