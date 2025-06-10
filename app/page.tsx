import Image from 'next/image';
import Link from 'next/link'; // 引入 Link 组件
import ChineseScrollText from './components/ChineseScrollText';
// 1. 从 next/font/google 导入字体
import { ZCOOL_XiaoWei } from 'next/font/google';

// 2. 配置并加载字体
const zcoolXiaoWei = ZCOOL_XiaoWei({
  weight: '400', // 毛笔字通常只有 '400' 这个字重
  subsets: ['latin'], // Next.js 要求必须有 subsets
  display: 'swap', // 字体加载策略
});

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/school-banner.jpg" // 确保你有这张图片在 public 文件夹
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
            Discover the beauty of Chinese language and culture at Yucai Sydney.
            We are dedicated to providing high-quality education for a brighter
            future.
          </p>

        </div>
      </div>

      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-header-dark">
          Welcome to Yucai Sydney Chinese School
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              We are a professional school dedicated to promoting Chinese
              language education and cultural understanding in Sydney. Since our
              establishment, we have adhered to the philosophy of
              &quot;Inspiring Minds, Shaping Futures,&quot; offering
              high-quality Chinese language services to students from diverse
              backgrounds.
            </p>
            <p>
              Our experienced teachers and immersive learning environment help
              students develop fluency and a deep appreciation for Chinese
              traditions.
            </p>
            <Link href="/about" legacyBehavior>
              <a className="inline-block mt-4 bg-header-dark hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
                Learn More About Us
              </a>
            </Link>
          </div>
          <div className="p-10 bg-gray-100 flex items-center justify-center">
            <ChineseScrollText
              text="莽莽天宇，八万里云驰飙作；恢恢地轮，五千年治乱兴亡。邙砀脊脉，逶迤远连昆岗；河洛清波，浩荡奔注海澨。涉彼洪荒，文明肇创；万代千秋蒙庥，厥功在我炎黄。

曩昔混沌未开之时，含哺而无釜甑，结绳不见文字。伐檀有人，莫及舟车；蚕桑未采，何来垂裳。《礼》云：“故人者，其天地之德、阴阳之交、鬼神之会、五行之秀气也。”伟哉炎黄，据天地之大德，值阴阳之交会，通灵鬼神之际，会道五行之秀。礼行赤县，情系苍生。仰畏天，俯畏人，惟宽仁恭俭，出于自然；而忠恕诚悫，始终如一。不蔽奸佞之谗，不用取容之士。天下咸归，百姓安乐。是以列星随旋，日月递照，风雨博施，万物得和以生，得养以成。

嫘祖，黄帝之妃，始创黼织；仓颉，黄帝之臣，以立文字。炎帝之女精卫，衔石而填沧海；炎帝之臣夸父，逐日以迎霞光。乃神乃人，惟载远古；是传是说，宜辅信史。

岁月迁流，穷奇斯生，涿鹿风云突变，域中归于一统，百族聚为中华，自中原而滂沛十方。从兹以还，历三代二千余年而入于秦，再历二千余年而有今。天不欲亡我中华，必不亡中华之文化。中华文化，有源以之开流；神州百族，有秩以之共理。炎黄脊梁遍列九州，姓氏血脉，扬辉全球。龙从云起，先民图腾，乃往昔五千年文明之大标识，亦兹后亿万年之大旌纛。

大道之行，讲信修睦，故国之兴，端赖和谐。宇内各族，世界侨属，齐献瓣香，恭祭先祖。历万万代，共众芳之所在，固信美而永驻。刻石再拜，以颂以祷，斯馨无恙。"
              className={`w-[520px] h-[600px] ${zcoolXiaoWei.className}`}
              speed={380}
              columnsPerScreen={8}
              charsPerColumn={10}
            />
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-header-dark">
            Our Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* <Image src="/icon-course-1.svg" alt="Language Icon" width={60} height={60} className="mb-4" /> */}
              <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-header-dark">
                Chinese Language Courses
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Systematic language training from beginner to advanced levels,
                covering speaking, listening, reading, and writing.
              </p>
            </div>
            {/* Program Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* <Image src="/icon-course-2.svg" alt="Culture Icon" width={60} height={60} className="mb-4" /> */}
              <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93s.844-.024 1.142-.33l.648-.647c.374-.374.983-.374 1.357 0l.775.775a.96.96 0 010 1.357l-.647.648c-.306.306-.42.752-.33 1.142s.506.71.93.78l.894.149c.542.09.94.56.94 1.11v1.093c0 .55-.398 1.02-.94 1.11l-.894.149c-.424.07-.764.384-.93.78s.024.844.33 1.142l.647.648c.374.374.374.983 0 1.357l-.775.775a.96.96 0 01-1.357 0l-.648-.647c-.306-.306-.752-.42-1.142-.33s-.71.506-.78.93l-.149.894c-.09.542-.56.94-1.11.94h-1.093c-.55 0-1.02-.398-1.11-.94l-.149-.894c-.07-.424-.384-.764-.78-.93s-.844.024-1.142.33l-.648.647c-.374.374-.983.374-1.357 0l-.775-.775a.96.96 0 010-1.357l.647-.648c.306-.306.42-.752.33-1.142s-.506-.71-.93-.78l-.894-.149c-.542-.09-.94-.56-.94-1.11v-1.093c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.384.93-.78s-.024-.844-.33-1.142l-.647-.648c-.374-.374-.374-.983 0-1.357l.775-.775a.96.96 0 011.357 0l.648.647c.306.306.752.42 1.142.33s.71-.506.78-.93l.149-.894z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-header-dark">
                Chinese Cultural Workshops
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore calligraphy, painting, traditional music, and more to
                deepen your understanding of Chinese heritage.
              </p>
            </div>
            {/* Program Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              {/* <Image src="/icon-course-3.svg" alt="HSK Icon" width={60} height={60} className="mb-4" /> */}
              <div className="w-16 h-16 bg-custom-yellow rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-header-dark">
                HSK Exam Preparation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Professional HSK test preparation courses to help students
                succeed in achieving internationally recognized Chinese
                proficiency certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Optional) */}
      <section className="bg-custom-yellow py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-header-dark mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our community and experience the joy of learning Chinese. We
            offer programs for all ages and levels.
          </p>
          <Link href="/contact" legacyBehavior>
            <a className="bg-header-dark hover:bg-gray-700 text-white font-bold py-4 px-10 rounded-md text-lg uppercase transition duration-300">
              Contact Us Today
            </a>
          </Link>
        </div>
      </section>
    </main>
  );
}
