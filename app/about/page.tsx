'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/school-banner.jpg"
          alt="About Yucai Sydney Chinese School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
            About Us
          </h1>
          <h2 className="text-3xl md:text-4xl text-custom-yellow mb-4 font-chinese">
            关于我们
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            悉尼中国学校是一所成立于1996年的周末中文学校，主要面向华裔子女。我们致力于弘扬中华语言文化，丰富澳大利亚的多元文化。
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Chinese Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-header-dark font-chinese">
            关于我们
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl leading-relaxed">
              悉尼中国学校创办于1996年，是一所专为华裔子女提供中文教育的周末学校。我们开设了从学前班（4-5岁）到高中毕业班（16-17岁）的中文课程，以及数学、美术、小提琴等多样化课程，形成了一个连贯的中文教学体系。学校设有Marrickville、Summer Hill、Kogarah和Hornsby South分校，拥有25名经验丰富的教师，为527名学生提供每周92小时的优质教学。
            </p>
            
            <p>
              我们的办学宗旨是弘扬中华民族语言文化，并促进澳大利亚的多元文化繁荣。我们希望通过老师和家长的引导，让海外出生的孩子们有机会近距离甚至亲身体验、理解和欣赏中国文化。为此，我们汇聚了几十位在国内教学经验丰富、责任心强、教学成果显著的中文高级教师和特级教师，其中多位曾被国侨办授予"优秀教育工作者"称号。他们凭借丰富的海外中文教学经验，以活泼、生动、幽默的教学风格，让学生在快乐中掌握汉语知识。我们秉持先进的理念和科学的方法，致力于为每个孩子提供优质的中文教育，帮助他们从中华文明中汲取养分，拓展视野，成为兼具中华底蕴和国际视野的人才。
            </p>
          </div>
        </section>

        {/* Goals Section */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark font-chinese">
            我们的目标
          </h3>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              为了确保学生在高中毕业时取得优异成绩，并具备实际运用汉语的能力，我们以帮助十二年级毕业生达到以下目标：
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-custom-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-header-dark">HSC优异成绩</h4>
                <p className="text-gray-600">在澳洲纽省高中毕业（HSC）中文科目考试中取得优良成绩。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-custom-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-header-dark">HSK认证</h4>
                <p className="text-gray-600">通过中国国家汉语水平考试（HSK）6级或以上。</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-custom-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-header-dark">实用能力</h4>
                <p className="text-gray-600">具备在日常生活、学习和工作中运用汉语的能力，包括掌握汉语听、说、读、写技能，并能进行基本的人际交往。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Approach Section */}
        <section className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark font-chinese">
            教学特色
          </h3>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              我们主要采用国内人教版语文教材，并辅以部分自编教材，强调语文基础知识和基本技能的训练，鼓励多读多练，读写结合。我们的教学特色是科学系统地发展学生的语言能力，融合中外教育精髓，注重培养学生的个性和能力，通过字、词、句的训练，优化读写，并体现教学的灵活性。
            </p>
            
            <p>
              悉尼中国学校作为依据澳大利亚社团法注册的非政治性、非宗教性、非盈利性民族社区语言学校，始终坚持"德才兼备"、"品学兼优"的教育理念，将德育置于首位。我们致力于培养学生关爱社会的情怀和理性认识社会的能力，帮助他们理解并传承中华文明中关于人与社会、他人、自我、家庭、自然、传统和生死等重要议题的智慧。我们将不断端正办学方向，确保学校的长期、稳定和健康发展。
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-16"></div>

        {/* English Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-header-dark">
            About Us
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl leading-relaxed">
              Sydney Chinese School was founded in 1996 as a weekend Chinese language school dedicated to serving children of Chinese heritage. We offer a continuous Chinese language curriculum spanning from pre-school (4-5 years old) to high school graduation (16-17 years old), alongside diverse courses in mathematics, art, and violin. With campuses in Marrickville, Summer Hill, Kogarah, and Hornsby South, we have a team of 25 experienced teachers providing 92 hours of quality instruction weekly to 527 students.
            </p>
            
            <p>
              Our mission is to promote Chinese language and culture and foster Australia's multiculturalism. We aim to provide opportunities for overseas-born children to experience, understand, and appreciate Chinese culture firsthand, guided by our teachers and parents. To achieve this, we've gathered dozens of highly experienced, responsible, and effective Chinese language teachers, many of whom have been recognized as "Outstanding Educators" by the Overseas Chinese Affairs Office. Their extensive experience in teaching Chinese abroad allows them to employ lively, engaging, and humorous teaching styles, ensuring students master Chinese language basics in an enjoyable environment. We are committed to delivering high-quality Chinese education with advanced methodologies and scientific approaches, helping every child draw nourishment from Chinese civilization, broaden their horizons, and become individuals with both Chinese roots and a global outlook.
            </p>
          </div>
        </section>

        {/* English Goals Section */}
        <section className="mt-16 mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark">
            Our Goals
          </h3>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              We strive to ensure our Year 12 graduates achieve excellent results in their Chinese language studies and possess practical Chinese proficiency. Our goals for them are:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-custom-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-header-dark">HSC Excellence</h4>
                <p className="text-gray-600">To achieve excellent results in the Chinese language examination of the NSW Higher School Certificate (HSC).</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-custom-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-header-dark">HSK Certification</h4>
                <p className="text-gray-600">To attain HSK Level 6 or above in the Chinese Proficiency Test.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-custom-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-lg mb-2 text-header-dark">Practical Proficiency</h4>
                <p className="text-gray-600">To be capable of using Chinese in daily life, study, and work, encompassing proficiency in listening, speaking, reading, and writing, and the ability to engage in general interpersonal communication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* English Teaching Approach Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-header-dark">
            Our Teaching Approach
          </h3>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              We primarily utilize the People's Education Press Chinese textbooks from China, supplemented by some of our self-compiled materials. Our curriculum emphasizes foundational language knowledge and skill training, encouraging extensive reading, practice, and the integration of reading and writing. Our distinctive approach involves scientifically and systematically developing students' language abilities, integrating the best of Chinese and foreign educational experiences, and nurturing individual strengths. We focus on language development, enhancing vocabulary, sentence structure, and optimizing reading and writing, while offering a flexible learning pace.
            </p>
            
            <p>
              As a non-political, non-religious, non-profit community language school registered under Australian association laws, Sydney Chinese School has always upheld the traditional Chinese values of "integrity and talent" and "moral and academic excellence," prioritizing moral character. We are dedicated to cultivating students' empathy for society and their ability to rationally understand it. This includes helping them grasp the profound wisdom within ancient Chinese civilization regarding their relationship with society, others, themselves, family, nature, tradition, and life and death. We will continuously refine our educational direction to ensure the school's long-term, stable, and healthy development.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}