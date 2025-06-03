'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的留言，我们会尽快回复！');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">联系我们</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* 联系信息 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">联系方式</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">地址</h3>
              <p className="text-gray-600">北京市海淀区中关村大街1号</p>
            </div>
            <div>
              <h3 className="font-medium">电话</h3>
              <p className="text-gray-600">+86 10 1234 5678</p>
            </div>
            <div>
              <h3 className="font-medium">邮箱</h3>
              <p className="text-gray-600">contact@chineseschool.com</p>
            </div>
            <div>
              <h3 className="font-medium">工作时间</h3>
              <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
              <p className="text-gray-600">周六至周日: 10:00 - 16:00</p>
            </div>
          </div>
        </div>

        {/* 联系表单 */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">发送消息</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                姓名
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                邮箱
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                留言
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              发送消息
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
