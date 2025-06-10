'use client';

import Image from 'next/image';
import { ZCOOL_XiaoWei } from 'next/font/google';

// 配置中文字体
const zcoolXiaoWei = ZCOOL_XiaoWei({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function ProgramsPage() {
  const campuses = [
    {
      name: 'Marrickville',
      nameZh: '马瑞克维尔分校',
      address: 'Marrickville Campus',
      features: ['中文课程', '数学', '美术']
    },
    {
      name: 'Summer Hill',
      nameZh: '夏山分校',
      address: 'Summer Hill Campus',
      features: ['中文课程', '小提琴', '美术']
    },
    {
      name: 'Kogarah',
      nameZh: '科加拉分校',
      address: 'Kogarah Campus',
      features: ['中文课程', '数学', '小提琴']
    },
    {
      name: 'Hornsby South',
      nameZh: '霍恩斯比南分校',
      address: 'Hornsby South Campus',
      features: ['中文课程', '数学', '美术', '小提琴']
    }
  ];

  const ageGroups = [
    {
      ageRange: '4-5岁',
      ageRangeEn: '4-5 years',
      level: '学前班',
      levelEn: 'Pre-school',
      description: '基础汉字认知，拼音启蒙，简单对话',
      descriptionEn: 'Basic Chinese character recognition, pinyin introduction, simple conversations',
      subjects: ['中文基础', '拼音', '儿歌'],
      subjectsEn: ['Chinese Basics', 'Pinyin', 'Children\'s Songs']
    },
    {
      ageRange: '6-8岁',
      ageRangeEn: '6-8 years',
      level: '小学低年级',
      levelEn: 'Lower Primary',
      description: '汉字书写，基础语法，简单阅读',
      descriptionEn: 'Chinese character writing, basic grammar, simple reading',
      subjects: ['中文', '数学', '美术'],
      subjectsEn: ['Chinese', 'Mathematics', 'Art']
    },
    {
      ageRange: '9-11岁',
      ageRangeEn: '9-11 years',
      level: '小学高年级',
      levelEn: 'Upper Primary',
      description: '词汇扩展，阅读理解，写作训练',
      descriptionEn: 'Vocabulary expansion, reading comprehension, writing training',
      subjects: ['中文', '数学', '美术', '小提琴'],
      subjectsEn: ['Chinese', 'Mathematics', 'Art', 'Violin']
    },
    {
      ageRange: '12-14岁',
      ageRangeEn: '12-14 years',
      level: '初中',
      levelEn: 'Junior High',
      description: '文言文入门，作文写作，文化学习',
      descriptionEn: 'Introduction to classical Chinese, essay writing, cultural studies',
      subjects: ['中文', '数学', '小提琴'],
      subjectsEn: ['Chinese', 'Mathematics', 'Violin']
    },
    {
      ageRange: '15-17岁',
      ageRangeEn: '15-17 years',
      level: '高中',
      levelEn: 'Senior High',
      description: 'HSC考试准备，HSK认证，高级写作',
      descriptionEn: 'HSC exam preparation, HSK certification, advanced writing',
      subjects: ['中文', '数学'],
      subjectsEn: ['Chinese', 'Mathematics']
    }
  ];

  const stats = [
    { number: '25', label: '经验丰富的教师', labelEn: 'Experienced Teachers' },
    { number: '527', label: '在校学生', labelEn: 'Students Enrolled' },
    { number: '92', label: '每周教学小时', labelEn: 'Weekly Teaching Hours' },
    { number: '4', label: '分校区', labelEn: 'Campus Locations' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/school-banner.jpg"
          alt="Our Programs - Yucai Sydney Chinese School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
            Our Programs
          </h1>
          <h2 className={`text-3xl md:text-4xl text-custom-yellow mb-4 ${zcoolXiaoWei.className}`}>
            我们的课程
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            从学前班到高中毕业班的完整中文教学体系，多样化课程满足不同年龄段学习需求
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-header-dark text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="">
                <div className="text-4xl md:text-5xl font-bold text-custom-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Age Groups Table Section */}
        <section className="mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 text-header-dark ${zcoolXiaoWei.className}`}>
            课程设置
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark">
            Course Structure
          </h3>
          
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-header-dark text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">年龄段 / Age Range</th>
                  <th className="px-6 py-4 text-left font-semibold">年级 / Level</th>
                  <th className="px-6 py-4 text-left font-semibold">课程描述 / Description</th>
                  <th className="px-6 py-4 text-left font-semibold">开设科目 / Subjects</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((group, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-header-dark">{group.ageRange}</div>
                      <div className="text-sm text-gray-600">{group.ageRangeEn}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-header-dark">{group.level}</div>
                      <div className="text-sm text-gray-600">{group.levelEn}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-700 mb-1">{group.description}</div>
                      <div className="text-sm text-gray-600">{group.descriptionEn}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {group.subjects.map((subject, idx) => (
                          <span key={idx} className="bg-custom-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                            {subject}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {group.subjectsEn.map((subject, idx) => (
                          <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-custom-orange">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-header-dark mb-1">{group.ageRange} - {group.level}</h4>
                  <p className="text-gray-600">{group.ageRangeEn} - {group.levelEn}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-700 mb-1">{group.description}</p>
                  <p className="text-sm text-gray-600">{group.descriptionEn}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-header-dark mb-2">开设科目 / Subjects:</h5>
                  <div className="flex flex-wrap gap-2">
                    {group.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-custom-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Campus Locations Section */}
        <section className="mb-20">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 text-header-dark ${zcoolXiaoWei.className}`}>
            分校信息
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark">
            Campus Locations
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campuses.map((campus, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-header-dark mb-1">{campus.name}</h4>
                  <p className={`text-lg text-custom-orange ${zcoolXiaoWei.className}`}>{campus.nameZh}</p>
                  <p className="text-sm text-gray-600 mt-2">{campus.address}</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-header-dark mb-3 text-center">开设课程 / Available Courses</h5>
                  <div className="space-y-2">
                    {campus.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-8 text-header-dark ${zcoolXiaoWei.className}`}>
            教学特色
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark">
            Teaching Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-header-dark mb-2">连贯教学体系</h4>
              <p className="text-gray-600">从学前班到高中毕业班的完整中文教学体系</p>
              <p className="text-sm text-gray-500 mt-1">Continuous curriculum from pre-school to graduation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-header-dark mb-2">经验丰富师资</h4>
              <p className="text-gray-600">25名经验丰富的专业中文教师团队</p>
              <p className="text-sm text-gray-500 mt-1">25 experienced professional Chinese teachers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-custom-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-header-dark mb-2">多样化课程</h4>
              <p className="text-gray-600">中文、数学、美术、小提琴等多元化课程设置</p>
              <p className="text-sm text-gray-500 mt-1">Diverse courses including Chinese, Math, Art, Violin</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}