'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChineseScrollText from './components/ChineseScrollText';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/school-banner.jpg"
          alt="Yucai Sydney Chinese School Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
            Unlock Your Potential with Chinese Language
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Join Sydney's premier Chinese language school and discover the
            beauty of Chinese culture while mastering one of the world's most
            important languages.
          </p>
          <Link href="/enrol" legacyBehavior>
            <a className="bg-custom-orange hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-md text-lg uppercase transition duration-300">
              Enrol Now
            </a>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-header-dark">
          Welcome to Yucai Sydney Chinese School
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Established in 1996, Yucai Sydney Chinese School is a weekend
              Chinese school primarily serving children of Chinese heritage. We
              are committed to promoting Chinese language and culture while
              enriching Australia's multicultural landscape.
            </p>
            <p>
              Our comprehensive curriculum spans from preschool (ages 4-5) to
              Year 12 graduation (ages 16-17), offering Chinese language courses
              alongside mathematics, art, and violin classes.
            </p>
            <Link href="/about" legacyBehavior>
              <a className="inline-block mt-4 bg-header-dark hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                Learn More About Us
              </a>
            </Link>
          </div>
          <div className="p-10 bg-gray-100 flex items-center justify-center">
            <ChineseScrollText 
              className="font-xiaowei text-lg leading-relaxed h-[400px] w-full"
              text="莽莽天宇八万里云驰飙作恢恢地轮五千年治乱兴亡邙砀脊脉逶迤远连昆岗河洛清波浩荡奔注海澨涉彼洪荒文明肇创万代千秋蒙庥厥功在我炎黄

曩昔混沌未开之时含哺而无釜甑结绳不见文字伐檀有人莫及舟车蚕桑未采何来垂裳礼云故人者其天地之德阴阳之交鬼神之会五行之秀气也伟哉炎黄据天地之大德值阴阳之交会通灵鬼神之际会道五行之秀礼行赤县情系苍生仰畏天俯畏人惟宽仁恭俭出于自然而忠恕诚悫始终如一不蔽奸佞之谗不用取容之士天下咸归百姓安乐是以列星随旋日月递照风雨博施万物得和以生得养以成

嫘祖黄帝之妃始创黼织仓颉黄帝之臣以立文字炎帝之女精卫衔石而填沧海炎帝之臣夸父逐日以迎霞光乃神乃人惟载远古是传是说宜辅信史

岁月迁流穷奇斯生涿鹿风云突变域中归于一统百族聚为中华自中原而滂沛十方从兹以还历三代二千余年而入于秦再历二千余年而有今天不欲亡我中华必不亡中华之文化中华文化有源以之开流神州百族有秩以之共理炎黄脊梁遍列九州姓氏血脉扬辉全球龙从云起先民图腾乃往昔五千年文明之大标识亦兹后亿万年之大旌纛

大道之行讲信修睦故国之兴端赖和谐宇内各族世界侨属齐献瓣香恭祭先祖历万万代共众芳之所在固信美而永驻刻石再拜以颂以祷斯馨无恙"
              speed={50}
              pauseDuration={3000}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-header-dark">
            Why Choose Yucai Sydney Chinese School?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-header-dark">
                Experienced Teachers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of 25 qualified teachers brings years of experience in
                Chinese language education, ensuring high-quality instruction
                for all students.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-header-dark">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From preschool to Year 12, our structured curriculum covers
                Chinese language, mathematics, art, and violin, providing a
                well-rounded education.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-header-dark">
                Cultural Heritage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We foster deep appreciation for Chinese culture and traditions,
                helping students connect with their heritage while building
                global perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-custom-yellow py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-header-dark mb-6">
            Ready to Begin Your Chinese Learning Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our community of learners and discover the richness of Chinese
            language and culture. Contact us today to learn more about our
            programs.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="bg-header-dark hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-md text-lg uppercase transition duration-300">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
