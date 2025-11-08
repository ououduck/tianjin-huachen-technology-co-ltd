export type Locale = 'en' | 'zh';

export const content: Record<string, Record<Locale, string>> = {
  // Header
  nav_overview: { en: 'Overview', zh: '公司概览' },
  nav_technology: { en: 'Technology', zh: '技术实力' },
  nav_products: { en: 'Products', zh: '产品与服务' },
  nav_partners: { en: 'Partners', zh: '合作伙伴' },
  nav_contact: { en: 'Contact', zh: '联系我们' },

  // Hero Section
  hero_title: { en: 'Tianjin Huanchen Technology', zh: '欢晨科技' },
  hero_subtitle: {
    en: 'Pioneering innovative solutions with cutting-edge technology and a commitment to excellence.',
    zh: '以尖端技术和卓越承诺，开创创新解决方案。',
  },
  hero_tagline: { en: 'Leading the future of tech, creating infinite possibilities', zh: '引领科技未来, 创造无限可能' },
  hero_main_title_1: { en: 'Professional Technology', zh: '专业的科技解决方案提' },
  hero_main_title_2: { en: 'Solutions Provider', zh: '供商' },
  hero_subtitle_new: { 
    en: 'Tianjin Huanchen Technology Co., Ltd. is committed to providing innovative technical services and digital transformation solutions for enterprises, helping customers maintain a competitive edge in the digital era.', 
    zh: '天津欢晨科技有限公司致力于为企业提供创新的技术服务和数字化转型解决方案, 助力客户在数字化时代保持竞争优势' 
  },
  hero_cta_primary: { en: 'Start Cooperating', zh: '开始合作' },
  hero_cta_secondary: { en: 'Learn More', zh: '了解更多' },
  hero_scroll_text: { en: 'Scroll Down', zh: '向下滚动' },
  hero_stat_projects: { en: 'Successful Projects', zh: '成功项目' },
  hero_stat_clients: { en: 'Satisfied Customers', zh: '满意客户' },
  hero_stat_experience: { en: 'Years of Experience', zh: '行业经验' },
  hero_stat_support: { en: 'Technical Support', zh: '技术支持' },
  
  hero_cta: { en: 'Get In Touch', zh: '联系我们' },

  // Mission Section
  mission_title: { en: 'Our Mission, Vision & Values', zh: '我们的使命、愿景与价值观' },
  mission_mission_title: { en: 'Mission', zh: '使命' },
  mission_mission_text: {
    en: 'To empower businesses through transformative technology, delivering reliable and efficient solutions that drive growth and success.',
    zh: '通过变革性技术为企业赋能，提供可靠高效的解决方案，推动增长与成功。',
  },
  mission_vision_title: { en: 'Vision', zh: '愿景' },
  mission_vision_text: {
    en: 'To be a global leader in technology innovation, recognized for our quality, integrity, and customer-centric approach.',
    zh: '成为技术创新的全球领导者，以我们的质量、诚信和以客户为中心的方法而闻名。',
  },
  values_innovation_title: { en: 'Continuous Innovation', zh: '持续创新' },
  values_innovation_text: {
    en: 'We embrace change and constantly seek better ways to solve problems.',
    zh: '我们拥抱变化，不断寻求更好的方法来解决问题。',
  },
  values_customer_first_title: { en: 'Customer First', zh: '客户至上' },
  values_customer_first_text: {
    en: 'Our customers\' success is our success. We listen and deliver.',
    zh: '客户的成功就是我们的成功。我们倾听并交付价值。',
  },
  values_integrity_title: { en: 'Integrity and Openness', zh: '诚信开放' },
  values_integrity_text: {
    en: 'We operate with transparency and hold ourselves to the highest ethical standards.',
    zh: '我们以透明的方式运作，并以最高的道德标准要求自己。',
  },
  values_teamwork_title: { en: 'Teamwork', zh: '团队合作' },
  values_teamwork_text: {
    en: 'We collaborate to leverage our collective genius and achieve common goals.',
    zh: '我们通过协作来发挥集体智慧，实现共同目标。',
  },
  values_excellence_title: { en: 'Pursuit of Excellence', zh: '追求卓越' },
  values_excellence_text: {
    en: 'We are passionate about delivering the highest quality in everything we do.',
    zh: '我们热衷于在我们所做的每一件事上都追求最高品质。',
  },
  values_responsibility_title: { en: 'Social Responsibility', zh: '社会责任' },
  values_responsibility_text: {
    en: 'We are committed to making a positive impact on society and our communities.',
    zh: '我们致力于对社会和社区产生积极影响。',
  },
  values_sustainability_title: { en: 'Sustainability', zh: '可持续发展' },
  values_sustainability_text: {
    en: 'We build for the long term, considering our impact on the planet.',
    zh: '我们的建设着眼于长远，并考虑我们对地球的影响。',
  },
  values_global_outlook_title: { en: 'Global Outlook', zh: '全球视野' },
  values_global_outlook_text: {
    en: 'We think globally and act locally, embracing diverse perspectives.',
    zh: '我们放眼全球，立足本地，拥抱多元化的视角。',
  },

  // Tech Showcase
  tech_title: { en: 'Core Technologies', zh: '核心技术' },
  tech_1_title: { en: 'Cloud Computing', zh: '云计算' },
  tech_1_desc: {
    en: 'Scalable and secure cloud infrastructure for modern applications.',
    zh: '为现代应用程序提供可扩展且安全的云基础设施。',
  },
  tech_1_metric: { en: 'Uptime', zh: '正常运行时间' },
  tech_2_title: { en: 'AI & Machine Learning', zh: '人工智能与机器学习' },
  tech_2_desc: {
    en: 'Intelligent algorithms to automate processes and derive insights from data.',
    zh: '利用智能算法自动化流程并从数据中获取洞察。',
  },
  tech_2_metric: { en: 'Model Accuracy', zh: '模型准确率' },
  tech_3_title: { en: 'Big Data Analytics', zh: '大数据分析' },
  tech_3_desc: {
    en: 'Processing and analyzing massive datasets to inform business decisions.',
    zh: '处理和分析海量数据集以支持业务决策。',
  },
  tech_3_metric: { en: 'Processing Speed', zh: '处理速度' },

  // Products & Services
  products_title: { en: 'Products & Services', zh: '产品与服务' },
  product_1_title: { en: 'Enterprise Cloud Platform', zh: '企业云平台' },
  product_1_desc: {
    en: 'A comprehensive suite of cloud services for enterprise-level needs.',
    zh: '一套满足企业级需求的综合云服务。',
  },
  product_2_title: { en: 'Smart Data Solutions', zh: '智能数据解决方案' },
  product_2_desc: {
    en: 'Custom AI/ML models and data analytics consulting.',
    zh: '定制化人工智能/机器学习模型和数据分析咨询。',
  },
  product_3_title: { en: 'Managed IT Services', zh: '托管IT服务' },
  product_3_desc: {
    en: 'Proactive IT support and infrastructure management.',
    zh: '主动式IT支持和基础设施管理。',
  },
  product_4_title: { en: 'Custom Software Development', zh: '定制软件开发' },
  product_4_desc: {
    en: 'Tailor-made software to meet your unique business requirements.',
    zh: '量身定制的软件，满足您独特的业务需求。',
  },

  // Partners Section
  partners_title: { en: 'Our Partners', zh: '我们的合作伙伴' },
  partner_google_cloud: { en: 'Google Cloud', zh: '谷歌云' },
  partner_microsoft: { en: 'Microsoft', zh: '微软' },
  partner_aliyun: { en: 'Alibaba Cloud', zh: '阿里云' },
  partner_huaweicloud: { en: 'Huawei Cloud', zh: '华为云' },
  partner_aws: { en: 'AWS', zh: '亚马逊云科技' },
  partner_tencentcloud: { en: 'Tencent Cloud', zh: '腾讯云' },
  partner_cloudflare: { en: 'Cloudflare', zh: '科赋锐' },
  partner_baiducloud: { en: 'Baidu Cloud', zh: '百度智能云' },
  partner_burncloud: { en: 'BurnCloud', zh: 'BurnCloud' },
  partner_tianyi_cloud: { en: 'Tianyi Cloud', zh: '天翼云' },
  partner_siliconcloud: { en: 'Silicon Flow', zh: '硅基流动' },

  // Contact Section
  contact_title: { en: 'Contact Us', zh: '联系我们' },
  contact_subtitle: {
    en: 'Have a project in mind? We’d love to hear from you.',
    zh: '有项目想法？我们很乐意听取您的意见。',
  },
  contact_name_label: { en: 'Name', zh: '姓名' },
  contact_name_placeholder: { en: 'Your Name', zh: '您的姓名' },
  contact_email_label: { en: 'Email', zh: '邮箱' },
  contact_email_placeholder: { en: 'your@email.com', zh: '您的邮箱' },
  contact_message_label: { en: 'Message', zh: '消息' },
  contact_message_placeholder: { en: 'How can we help you?', zh: '我们能如何帮助您？' },
  contact_submit_button: { en: 'Send Message', zh: '发送消息' },
  contact_success_title: { en: 'Message Sent!', zh: '消息已发送！' },
  contact_success_desc: { en: 'Thank you for contacting us. We will get back to you shortly.', zh: '感谢您联系我们。我们会尽快回复您。' },
  contact_error_title: { en: 'Error', zh: '错误' },
  contact_error_desc: { en: 'Something went wrong. Please try again.', zh: '发生错误，请重试。' },

  // Footer
  footer_description: {
    en: 'Tianjin Huanchen Technology Co., Ltd. is committed to providing innovative technical services and digital transformation solutions for enterprises, helping customers maintain a competitive edge in the digital era.',
    zh: '天津欢晨科技有限公司致力于为企业提供创新的技术服务和数字化转型解决方案，助力客户在数字化时代保持竞争优势。'
  },
  footer_services_title: { en: 'Services', zh: '服务项目' },
  footer_services_1: { en: 'Custom Software Development', zh: '定制软件开发' },
  footer_services_2: { en: 'Cloud Computing Services', zh: '云计算服务' },
  footer_services_3: { en: 'Big Data Analysis', zh: '大数据分析' },
  footer_services_4: { en: 'Network Security Services', zh: '网络安全服务' },
  footer_services_5: { en: 'AI Solutions', zh: 'AI解决方案' },

  footer_company_title: { en: 'Company', zh: '公司信息' },
  footer_company_1: { en: 'About Us', zh: '关于我们' },
  footer_company_2: { en: 'Team Introduction', zh: '团队介绍' },
  footer_company_3: { en: 'Success Stories', zh: '成功案例' },
  footer_company_4: { en: 'News & Updates', zh: '新闻动态' },
  footer_company_5: { en: 'Join Us', zh: '加入我们' },

  footer_support_title: { en: 'Support', zh: '技术支持' },
  footer_support_1: { en: 'Help Center', zh: '帮助中心' },
  footer_support_2: { en: 'Technical Documentation', zh: '技术文档' },
  footer_support_3: { en: 'API Documentation', zh: 'API文档' },
  footer_support_4: { en: 'Service Status', zh: '服务状态' },
  footer_support_5: { en: 'Contact Us', zh: '联系我们' },

  footer_company_name: { en: 'Tianjin Huanchen Technology Co., Ltd.', zh: '天津欢晨科技有限公司' },
  footer_rights: { en: 'All rights reserved.', zh: '保留所有权利' },
  footer_policy: { en: 'Privacy Policy', zh: '隐私政策' },
  footer_terms: { en: 'Terms of Service', zh: '服务条款' },
  footer_cookie: { en: 'Cookie Policy', zh: 'Cookie政策' },
  footer_icp: { en: '津ICP备2025039905号', zh: '津ICP备2025039905号' },
};
