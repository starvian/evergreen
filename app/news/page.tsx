'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: 'news' | 'event';
  excerpt: string;
  image: string;
  slug: string;
  featured?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: '2024年春季学期开学典礼圆满举行',
    date: '2024-02-15',
    category: 'news',
    excerpt: '育才悉尼中文学校2024年春季学期开学典礼在学校礼堂隆重举行，全校师生及家长代表共同参与了这一重要时刻。',
    image: '/news/opening-ceremony.jpg',
    slug: 'spring-semester-opening-ceremony-2024',
    featured: true
  },
  {
    id: 2,
    title: '中华文化节活动即将开始',
    date: '2024-03-20',
    category: 'event',
    excerpt: '我校将于4月举办中华文化节，届时将有书法、绘画、传统音乐表演等丰富多彩的文化活动，欢迎全校师生和家长参与。',
    image: '/news/cultural-festival.jpg',
    slug: 'chinese-cultural-festival-2024',
    featured: true
  },
  {
    id: 3,
    title: 'HSK考试辅导班报名开始',
    date: '2024-02-28',
    category: 'news',
    excerpt: '为帮助学生更好地准备HSK考试，我校特开设HSK考试辅导班，由经验丰富的教师授课，现已开始接受报名。',
    image: '/news/hsk-preparation.jpg',
    slug: 'hsk-preparation-class-enrollment'
  },
  {
    id: 4,
    title: '优秀学生表彰大会',
    date: '2024-01-30',
    category: 'event',
    excerpt: '学校将举行优秀学生表彰大会，表彰在学习和品德方面表现突出的学生，激励更多学生努力学习。',
    image: '/news/student-awards.jpg',
    slug: 'outstanding-students-ceremony'
  },
  {
    id: 5,
    title: '新教师培训圆满结束',
    date: '2024-01-15',
    category: 'news',
    excerpt: '为期一周的新教师培训活动圆满结束，新加入的教师们通过培训更好地了解了学校的教学理念和方法。',
    image: '/news/teacher-training.jpg',
    slug: 'new-teacher-training-completion'
  },
  {
    id: 6,
    title: '家长开放日活动',
    date: '2024-04-10',
    category: 'event',
    excerpt: '学校将举办家长开放日活动，家长可以走进课堂，了解孩子的学习情况，与老师面对面交流。',
    image: '/news/parent-open-day.jpg',
    slug: 'parent-open-day-2024'
  }
];

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'news' | 'event'>('all');

  const filteredNews = newsData.filter(item => 
    activeFilter === 'all' || item.category === activeFilter
  );

  const featuredNews = newsData.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/news-banner.jpg"
          alt="News and Events Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            新闻与活动
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            了解学校最新动态，参与丰富多彩的校园活动
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-header-dark text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setActiveFilter('news')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeFilter === 'news'
                  ? 'bg-header-dark text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              学校新闻
            </button>
            <button
              onClick={() => setActiveFilter('event')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeFilter === 'event'
                  ? 'bg-header-dark text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              活动预告
            </button>
          </div>
        </div>

        {/* Featured News Section */}
        {activeFilter === 'all' && featuredNews.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-header-dark mb-8 text-center">
              精选新闻
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.category === 'news' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {item.category === 'news' ? '学校新闻' : '活动预告'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {new Date(item.date).toLocaleDateString('zh-CN')}
                    </div>
                    <h3 className="text-xl font-bold text-header-dark mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.slug}`}
                      className="inline-flex items-center text-custom-orange hover:text-yellow-600 font-semibold transition-colors duration-300"
                    >
                      阅读更多
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular News Grid */}
        <section>
          <h2 className="text-3xl font-bold text-header-dark mb-8 text-center">
            {activeFilter === 'news' ? '学校新闻' : activeFilter === 'event' ? '活动预告' : '最新动态'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeFilter === 'all' ? regularNews : filteredNews).map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.category === 'news' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.category === 'news' ? '学校新闻' : '活动预告'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {new Date(item.date).toLocaleDateString('zh-CN')}
                  </div>
                  <h3 className="text-lg font-bold text-header-dark mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center text-custom-orange hover:text-yellow-600 font-semibold transition-colors duration-300"
                  >
                    阅读更多
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-16 bg-header-dark rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            订阅学校新闻
          </h3>
          <p className="text-gray-300 mb-6">
            第一时间获取学校最新动态和活动信息
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="请输入您的邮箱地址"
              className="flex-1 px-4 py-3 rounded-l-md border-0 focus:ring-2 focus:ring-custom-orange focus:outline-none"
            />
            <button className="bg-custom-orange hover:bg-yellow-500 text-white px-6 py-3 rounded-r-md font-semibold transition-colors duration-300">
              订阅
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}