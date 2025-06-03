import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFC107', // 示例黄色，你可以根据图片精确调整
        'custom-orange': '#FFA000', // 示例橙色，按钮等可以使用
        'header-dark': '#2C3E50', // 示例深色，用于页眉logo背景
      },
      backgroundImage: {
        // 保留你原有的 backgroundImage 配置
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typography], // 保留你原有的 typography 插件
};
export default config;
