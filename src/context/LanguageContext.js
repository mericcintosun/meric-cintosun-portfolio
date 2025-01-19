"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    aboutMe: "About Me",
    projects: "Projects",
    skills: "Skills",
    experience: "My Experience",
    blog: "Blog",
    contactMe: "Contact Me",
    greeting: "Hi, I'm",
    specialization: "A Frontend Developer specializing in",
    web2web3: "Web2 and Web3",
    graduationText: "technologies. Since graduating from",
    university: "Istanbul University",
    graduationYear: "in 2024, I've built applications with",
    technologies: "React, Next.js, and React Native",
    blockchainText: "and developed blockchain projects focused on Layer 2 solutions and",
    dapps: "dApps",
    finalText: "Let's build the future together!",
    contactButton: "Contact Me!",
    downloadCV: "Download CV!",
    github: "GitHub",
    linkedin: "LinkedIn",
    copyright: "Copyright",
    allRightsReserved: "All rights reserved",
    openSource: "Open Source",
    builtWith: "Built with",
    and: "and",
    fullStackDev: "Full Stack Developer",
    aboutIntro: "Hi! I'm Meriç Cintosun, a software developer specializing in blockchain and web technologies. My journey, fueled by a deep curiosity about how technology shapes the world, has led me to delve into software development and the blockchain ecosystem. After graduating from Istanbul University's Faculty of Communication, I became an active member of ITU Blockchain, contributing to both research and development. I focus on Layer 2 solutions, decentralized applications (dApps), and blockchain protocols, developing projects using technologies like Solidity, CosmWasm, and Rust.",
    aboutCareer: "Throughout my career, I have gained expertise in both frontend and mobile application development. I enjoy creating modern, user-centric interfaces and building projects that make technology more accessible. Using tools like React, Next.js, TailwindCSS, React Native, and Expo, I develop dynamic and user-friendly applications, while TypeScript and Framer Motion allow me to elevate my designs to a modern and professional level. Currently, I work as a Mid Frontend & Mobile Developer at Flalingo, a language learning application, where I focus on AI-powered mobile solutions.",
    aboutPassion: "I am passionate about continuous learning and self-improvement. I am motivated by the opportunity to work with new technologies, create innovative projects, and use technology to make the world a better place. In my spare time, I participate in hackathons and share knowledge with communities through content creation. Beyond software, I am deeply committed to working on projects that combine design, creativity, and technology. If you're looking to collaborate on something inspiring, I'm always open to connecting!",
    newsTrackerTitle: "News Tracker Real Time Application",
    newsTrackerDesc: "News Tracker is a modern and responsive web and mobile application built with Next.js and NewsAPI, offering real-time news tracking across categorized sections. It features push notifications, a user-friendly interface, and a time graph for tracking news updates interactively.",
    
    nonoTitle: "Nono (zK Nonogram Game)",
    nonoDesc: "zk Nonogram Game is an innovative puzzle game powered by zero-knowledge proof (zk-SNARK) technology, allowing players to solve logic-based puzzles while preserving their privacy. The game offers a secure and engaging experience with a modern, user-friendly interface.",
    
    mediaAgencyTitle: "Digital Media Agency Blog Website",
    mediaAgencyDesc: "This digital media agency website enables users to create personalized training programs tailored to their needs and track progress in real-time. It offers interactive content, performance analytics, and a user-friendly interface to enhance the learning experience.",
    
    kittyTodoTitle: "Kitty Todo List",
    kittyTodoDesc: "Kitty Todo List is a simple and fun task management app with an adorable cat theme, allowing users to organize their to-dos effortlessly. Its minimalist interface and pastel colors provide a functional yet visually delightful experience.",
    
    personaTitle: "Persona (Wallet App)",
    personaDesc: "Persona is a platform that allows users to connect their Web3 wallets and view transaction data and scores on various Layer 2 networks. The project is built using modern frontend technologies like React, Tailwind CSS, and Wagmi.",
    
    eduflowTitle: "Eduflow (Blockchain Education App)",
    eduflowDesc: "Eduflow is a blockchain education app that allows users to learn about blockchain technology and earn rewards for completing courses. The app is built using modern frontend technologies like React, Tailwind CSS, and Wagmi.",
    
    alvinTitle: "Alvin New Year Progress",
    alvinDesc: "Alvin New Year Progress is a simple and fun task management app with an adorable cat theme, allowing users to organize their to-dos effortlessly. Its minimalist interface and pastel colors provide a functional yet visually delightful experience.",
    
    gencFlamingoTitle: "Genç Flamingolar",
    gencFlamingoDesc: "I can't share the details of the project because it is a private project within the company, but the project is generally a chrome extension that facilitates the work of the company's support team. You can reach the technologies I use.",
    projectDetails: "Project Details",
    softwareSkills: "Software Skills",
    softSkills: "Soft Skills",
    softSkillsCertificate: "Soft skills are proven with YetGen certificate.",
    // Soft Skills
    communication: "Communication",
    problemSolving: "Problem-solving",
    leadership: "Leadership",
    timeManagement: "Time management",
    empathy: "Empathy",
    emotionalIntelligence: "Emotional intelligence",
    selfAwareness: "Self-awareness",
    mentorship: "Mentorship",
    teamwork: "Teamwork",
    creativity: "Creativity",
    adaptability: "Adaptability",
    selfMotivation: "Self-motivation",
    conflictManagement: "Conflict management",
    myExperiences: "My Experiences",
    // Experience translations
    flalingoTitle: "Flalingo (USA - Remote)",
    flalingoSubtitle: "Mid Frontend & Developer",
    flalingoDate: "November 2024 - Present",
    flalingoDesc: "At Flalingo, a California-based company, I focus on delivering seamless user experiences for English language learning platforms. I develop scalable, high-performance web and mobile applications using React.js, Next.js, React Native, and Expo. With a focus on UX design, responsive interfaces, and efficient coding practices, I create innovative solutions for both web and mobile projects.",
    
    ituTitle: "ITU Blockchain Community",
    ituSubtitle: "Developer Member",
    ituDate: "January 2024 - Present",
    ituDesc: "Joined the ITU Blockchain community, participating in hackathons and contributing to projects like 'Persona.' Gained experience with React, Next.js, TailwindCSS, Postman, Docker, Firebase, Node.js, MongoDB, Solidity, and Rust. Worked on blockchain-based projects, dApps, and Layer 2 solutions, deepening my full-stack development skills. I stay updated with the latest Web3 and blockchain advancements.",
    
    viviencyTitle: "Viviency Digital Media Agency",
    viviencySubtitle: "Full Stack Developer",
    viviencyDate: "2023",
    viviencyDesc: "Developed web projects using a modern tech stack: React, Next.js, TailwindCSS, Firebase, WordPress, and Node.js. Integrated WordPress as a CMS, leveraged Next.js for SSR (improving SEO and performance), utilized Firebase for real-time database management and authentication, and created user-friendly UIs with a mobile-first approach.",
    
    yetgenTitle: "Yetkin Gençler Training Program",
    yetgenSubtitle: "Participant",
    yetgenDate: "April - July 2023",
    yetgenDesc: "YetGen is a 12-week 21st-century skills training program. I took courses such as Effective Presentation Techniques, Teamwork, Career Planning, Excel, Information, Media, Financial Literacy, Social Innovation, and the GirişGen Entrepreneurship Module. Through this experience, I learned how to establish a startup focused on the UN Sustainable Development Goals.\n\nSkills: Entrepreneurship, Sustainability, Career Management, Information Literacy, Teamwork, Presentation Skills, Microsoft Excel",
    
    studioPMTitle: "Studio PM",
    studioPMSubtitle: "Graphic Designer (Short-Term)",
    studioPMDate: "2022 (Short-Term)",
    studioPMDesc: "Created visual content using Figma and Adobe Creative Suite (Photoshop, Illustrator, InDesign). Edited and retouched photos, developed creative solutions for social media, collaborated with photographers and the marketing team, and produced promotional materials for both print and digital media, maintaining the brand's visual consistency.",
    
    universityTitle: "Istanbul University",
    universitySubtitle: "Student / Communication Faculty",
    universityDate: "2020 - 2024",
    universityDesc: "Studied at Istanbul University (Communication Faculty), gaining Communication, Leadership, Time Management, Empathy, and Self-Motivation skills. My education in the Faculty of Communication significantly enhanced my soft skills.",
    
    extraTitle: "Extra",
    extraSubtitle: "Other Details in My LinkedIn Profile",
    extraDate: "N/A",
    extraDesc: "- HSD Figma Workshop\n- Blockchain Academy Rise In\n- ITU Blockchain Community\n- My enthusiasm for the future of Web3 and blockchain technology :)",
    searchInBlogs: "Search in blogs...",
    sortByDate: "Sort by Date",
    newestFirst: "Newest First",
    oldestFirst: "Oldest First",
    blogNote: "Note: I write my blogs in English.",
    noBlogs: 'No blogs found matching "',
    contact: "Contact",
    getInTouch: "Fill out the form below to get in touch",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent",
    successMessage: "Your message has been sent successfully. I will get back to you as soon as possible.",
    errorMessage: "An error occurred. Please try again later.",
    placeholderFullName: "Meric Cintosun",
    placeholderEmail: "mericcintosunn@email.com",
    placeholderPhone: "+90 530 954 7890",
    placeholderMessage: "Write your message here..."
  },
  tr: {
    home: "Ana Sayfa",
    aboutMe: "Hakkımda",
    projects: "Projeler",
    skills: "Yetenekler",
    experience: "Deneyim",
    blog: "Blog",
    contactMe: "İletişim",
    greeting: "Merhaba, ben",
    specialization: "Frontend Geliştirici olarak",
    web2web3: "Web2 ve Web3",
    graduationText: "teknolojilerinde uzmanlaşıyorum.",
    university: "İstanbul Üniversitesi",
    graduationYear: "'nden 2024'te mezun olduktan sonra",
    technologies: "React, Next.js ve React Native",
    blockchainText: "ile uygulamalar geliştirdim ve Layer 2 çözümleri ve",
    dapps: "dApps",
    finalText: "odaklı blockchain projeleri üzerinde çalıştım. Geleceği birlikte inşa edelim!",
    contactButton: "İletişime Geç!",
    downloadCV: "CV'mi İndir!",
    github: "GitHub",
    linkedin: "LinkedIn",
    copyright: "Telif Hakkı",
    allRightsReserved: "Tüm hakları saklıdır",
    openSource: "Açık Kaynak",
    builtWith: "Kullanılan teknolojiler:",
    and: "ve",
    fullStackDev: "Full Stack Geliştirici",
    aboutIntro: "Merhaba! Ben Meriç Cintosun, blockchain ve web teknolojileri konusunda uzmanlaşmış bir yazılım geliştiricisiyim. Teknolojinin dünyayı nasıl şekillendirdiğine dair derin merakımla başlayan yolculuğum, beni yazılım geliştirme ve blockchain ekosistemine yönlendirdi. İstanbul Üniversitesi İletişim Fakültesi'nden mezun olduktan sonra, ITU Blockchain'in aktif bir üyesi oldum ve hem araştırma hem de geliştirme alanlarında katkıda bulundum. Layer 2 çözümleri, merkeziyetsiz uygulamalar (dApps) ve blockchain protokolleri üzerine odaklanıyor, Solidity, CosmWasm ve Rust gibi teknolojileri kullanarak projeler geliştiriyorum.",
    aboutCareer: "Kariyerim boyunca hem frontend hem de mobil uygulama geliştirme konusunda uzmanlık kazandım. Modern, kullanıcı odaklı arayüzler oluşturmaktan ve teknolojiyi daha erişilebilir kılan projeler geliştirmekten keyif alıyorum. React, Next.js, TailwindCSS, React Native ve Expo gibi araçları kullanarak dinamik ve kullanıcı dostu uygulamalar geliştirirken, TypeScript ve Framer Motion ile tasarımlarımı modern ve profesyonel bir seviyeye taşıyorum. Şu anda, bir dil öğrenme uygulaması olan Flalingo'da Mid Frontend & Mobile Developer olarak çalışıyor, yapay zeka destekli mobil çözümler üzerine odaklanıyorum.",
    aboutPassion: "Sürekli öğrenme ve kendimi geliştirme konusunda tutkulu biriyim. Yeni teknolojilerle çalışma, yenilikçi projeler oluşturma ve teknolojiyi dünyayı daha iyi bir yer haline getirmek için kullanma fırsatı beni motive ediyor. Boş zamanlarımda hackathonlara katılıyor ve içerik oluşturarak topluluklarla bilgi paylaşıyorum. Yazılımın ötesinde, tasarım, yaratıcılık ve teknolojiyi birleştiren projeler üzerinde çalışmaya derinden bağlıyım. İlham verici bir şey üzerinde işbirliği yapmak istiyorsanız, her zaman iletişime açığım!",
    newsTrackerTitle: "Gerçek Zamanlı Haber Takip Uygulaması",
    newsTrackerDesc: "News Tracker, Next.js ve NewsAPI ile oluşturulmuş, kategorize edilmiş bölümlerde gerçek zamanlı haber takibi sunan modern ve duyarlı bir web ve mobil uygulamadır. Push bildirimleri, kullanıcı dostu arayüz ve haber güncellemelerini interaktif olarak takip etmek için zaman grafiği özellikleri bulunmaktadır.",
    
    nonoTitle: "Nono (zK Nonogram Oyunu)",
    nonoDesc: "zk Nonogram Oyunu, sıfır bilgi ispatı (zk-SNARK) teknolojisi ile güçlendirilmiş, oyuncuların gizliliklerini koruyarak mantık tabanlı bulmacaları çözmelerine olanak tanıyan yenilikçi bir bulmaca oyunudur. Oyun, modern ve kullanıcı dostu bir arayüzle güvenli ve ilgi çekici bir deneyim sunmaktadır.",
    
    mediaAgencyTitle: "Dijital Medya Ajansı Blog Sitesi",
    mediaAgencyDesc: "Bu dijital medya ajansı web sitesi, kullanıcıların ihtiyaçlarına göre özelleştirilmiş eğitim programları oluşturmalarına ve ilerlemeyi gerçek zamanlı olarak takip etmelerine olanak tanır. Öğrenme deneyimini geliştirmek için interaktif içerik, performans analitiği ve kullanıcı dostu bir arayüz sunar.",
    
    kittyTodoTitle: "Kedi Temalı Yapılacaklar Listesi",
    kittyTodoDesc: "Kitty Todo List, sevimli bir kedi temasına sahip, kullanıcıların yapılacaklar listelerini zahmetsizce düzenlemelerine olanak tanıyan basit ve eğlenceli bir görev yönetimi uygulamasıdır. Minimalist arayüzü ve pastel renkleri ile fonksiyonel ve görsel açıdan keyifli bir deneyim sunar.",
    
    personaTitle: "Persona (Cüzdan Uygulaması)",
    personaDesc: "Persona, kullanıcıların Web3 cüzdanlarını bağlamalarına ve çeşitli Layer 2 ağlarındaki işlem verilerini ve skorlarını görüntülemelerine olanak tanıyan bir platformdur. Proje, React, Tailwind CSS ve Wagmi gibi modern frontend teknolojileri kullanılarak oluşturulmuştur.",
    
    eduflowTitle: "Eduflow (Blockchain Eğitim Uygulaması)",
    eduflowDesc: "Eduflow, kullanıcıların blockchain teknolojisi hakkında bilgi edinmelerine ve kursları tamamlayarak ödüller kazanmalarına olanak tanıyan bir blockchain eğitim uygulamasıdır. Uygulama, React, Tailwind CSS ve Wagmi gibi modern frontend teknolojileri kullanılarak oluşturulmuştur.",
    
    alvinTitle: "Alvin Yeni Yıl İlerleme Takibi",
    alvinDesc: "Alvin Yeni Yıl İlerleme Takibi, sevimli bir kedi temasına sahip, kullanıcıların yapılacaklar listelerini zahmetsizce düzenlemelerine olanak tanıyan basit ve eğlenceli bir görev yönetimi uygulamasıdır. Minimalist arayüzü ve pastel renkleri ile fonksiyonel ve görsel açıdan keyifli bir deneyim sunar.",
    
    gencFlamingoTitle: "Genç Flamingolar",
    gencFlamingoDesc: "Şirket içinde özel bir proje olduğu için projenin detaylarını paylaşamıyorum, ancak proje genel olarak şirketin destek ekibinin işini kolaylaştıran bir chrome uzantısıdır. Kullandığım teknolojilere ulaşabilirsiniz.",
    projectDetails: "Proje Detayları",
    softwareSkills: "Yazılım Becerileri",
    softSkills: "Kişisel Beceriler",
    softSkillsCertificate: "Kişisel becerilerime YetGen sertifikası referanstır.",
    // Soft Skills
    communication: "İletişim",
    problemSolving: "Problem çözme",
    leadership: "Liderlik",
    timeManagement: "Zaman yönetimi",
    empathy: "Empati",
    emotionalIntelligence: "Duygusal zeka",
    selfAwareness: "Öz farkındalık",
    mentorship: "Mentorluk",
    teamwork: "Takım çalışması",
    creativity: "Yaratıcılık",
    adaptability: "Uyum sağlama",
    selfMotivation: "Öz motivasyon",
    conflictManagement: "Çatışma yönetimi",
    myExperiences: "Deneyimlerim",
    // Experience translations
    flalingoTitle: "Flalingo (ABD - Uzaktan)",
    flalingoSubtitle: "Mid Frontend & Geliştirici",
    flalingoDate: "Kasım 2024 - Günümüz",
    flalingoDesc: "Kaliforniya merkezli Flalingo'da, İngilizce dil öğrenme platformları için kusursuz kullanıcı deneyimleri sunmaya odaklanıyorum. React.js, Next.js, React Native ve Expo kullanarak ölçeklenebilir, yüksek performanslı web ve mobil uygulamalar geliştiriyorum. UX tasarımı, duyarlı arayüzler ve verimli kodlama pratiklerine odaklanarak hem web hem de mobil projeler için yenilikçi çözümler üretiyorum.",
    
    ituTitle: "İTÜ Blockchain Topluluğu",
    ituSubtitle: "Geliştirici Üye",
    ituDate: "Ocak 2024 - Günümüz",
    ituDesc: "İTÜ Blockchain topluluğuna katıldım, hackathonlara katılıyor ve 'Persona' gibi projelere katkıda bulunuyorum. React, Next.js, TailwindCSS, Postman, Docker, Firebase, Node.js, MongoDB, Solidity ve Rust ile deneyim kazandım. Blockchain tabanlı projeler, dApps ve Layer 2 çözümleri üzerinde çalışarak full-stack geliştirme becerilerimi derinleştirdim. Web3 ve blockchain alanındaki en son gelişmeleri takip ediyorum.",
    
    viviencyTitle: "Viviency Dijital Medya Ajansı",
    viviencySubtitle: "Full Stack Geliştirici",
    viviencyDate: "2023",
    viviencyDesc: "Modern teknoloji yığını kullanarak web projeleri geliştirdim: React, Next.js, TailwindCSS, Firebase, WordPress ve Node.js. WordPress'i CMS olarak entegre ettim, Next.js'i SSR için kullandım (SEO ve performansı iyileştirerek), Firebase'i gerçek zamanlı veritabanı yönetimi ve kimlik doğrulama için kullandım ve mobil öncelikli yaklaşımla kullanıcı dostu arayüzler oluşturdum.",
    
    yetgenTitle: "Yetkin Gençler Eğitim Programı",
    yetgenSubtitle: "Katılımcı",
    yetgenDate: "Nisan - Temmuz 2023",
    yetgenDesc: "YetGen, 12 haftalık 21. yüzyıl becerileri eğitim programıdır. Etkili Sunum Teknikleri, Takım Çalışması, Kariyer Planlama, Excel, Bilgi, Medya, Finansal Okuryazarlık, Sosyal İnovasyon ve GirişGen Girişimcilik Modülü gibi dersler aldım. Bu deneyim sayesinde BM Sürdürülebilir Kalkınma Hedeflerine odaklanan bir startup kurmanın yollarını öğrendim.\n\nKazanılan Beceriler: Girişimcilik, Sürdürülebilirlik, Kariyer Yönetimi, Bilgi Okuryazarlığı, Takım Çalışması, Sunum Becerileri, Microsoft Excel",
    
    studioPMTitle: "Studio PM",
    studioPMSubtitle: "Grafik Tasarımcı (Kısa Dönem)",
    studioPMDate: "2022 (Kısa Dönem)",
    studioPMDesc: "Figma ve Adobe Creative Suite (Photoshop, Illustrator, InDesign) kullanarak görsel içerikler oluşturdum. Fotoğrafları düzenledim ve rötuşladım, sosyal medya için yaratıcı çözümler geliştirdim, fotoğrafçılar ve pazarlama ekibiyle işbirliği yaptım, markanın görsel tutarlılığını koruyarak hem basılı hem de dijital medya için promosyon materyalleri ürettim.",
    
    universityTitle: "İstanbul Üniversitesi",
    universitySubtitle: "Öğrenci / İletişim Fakültesi",
    universityDate: "2020 - 2024",
    universityDesc: "İstanbul Üniversitesi (İletişim Fakültesi)'nde eğitim gördüm, İletişim, Liderlik, Zaman Yönetimi, Empati ve Öz Motivasyon becerileri kazandım. İletişim Fakültesi'ndeki eğitimim kişisel becerilerimi önemli ölçüde geliştirdi.",
    
    extraTitle: "Ekstra",
    extraSubtitle: "Diğer Detaylar LinkedIn Profilimde",
    extraDate: "N/A",
    extraDesc: "- HSD Figma Workshop\n- Blockchain Academy Rise In\n- İTÜ Blockchain Topluluğu\n- Web3 ve blockchain teknolojisinin geleceğine olan tutkum :)",
    searchInBlogs: "Bloglarda ara...",
    sortByDate: "Tarihe Göre Sırala",
    newestFirst: "En Yeniler Önce",
    oldestFirst: "En Eskiler Önce",
    blogNote: "Not: Bloglarımı İngilizce yazıyorum.",
    noBlogs: 'Eşleşen blog bulunamadı "',
    contact: "İletişim",
    getInTouch: "İletişime geçmek için aşağıdaki formu doldurun",
    fullName: "Ad Soyad",
    emailAddress: "E-posta Adresi",
    phoneNumber: "Telefon Numarası",
    yourMessage: "Mesajınız",
    sendMessage: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    messageSent: "Mesaj Gönderildi",
    successMessage: "Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağım.",
    errorMessage: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    placeholderFullName: "Meriç Cintosun",
    placeholderEmail: "mericcintosunn@email.com",
    placeholderPhone: "+90 530 954 7890",
    placeholderMessage: "Mesajınızı buraya yazın..."
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 