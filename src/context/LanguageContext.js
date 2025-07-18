"use client";

import { createContext, useContext, useState, useEffect } from "react";

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
    blockchainText:
      "and developed blockchain projects focused on Layer 2 solutions and",
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
    aboutIntro:
      "Hi! I'm Meriç Cintosun, a Full Stack Developer with 3+ years of experience in Web2 and Web3 technologies. Skilled in building responsive web and mobile applications using React, Next.js, Flutter, and Node.js. My journey, fueled by a deep curiosity about how technology shapes the world, has led me to delve into software development and the blockchain ecosystem.",
    aboutCareer:
      "After graduating from Istanbul University's Faculty of Communication, I became passionate about decentralized applications and actively contribute to blockchain projects as a developer at ITU Blockchain Club. I frequently participate in hackathons and enjoy bridging traditional and decentralized software ecosystems. Throughout my career, I have gained expertise in both frontend and mobile application development, creating modern, user-centric interfaces and building projects that make technology more accessible.",
    aboutPassion:
      "Currently, I work as a Mid Frontend & Mobile Developer at Flalingo, a language learning application, where I focus on AI-powered mobile solutions. Using tools like React, Next.js, TailwindCSS, React Native, Flutter, and Expo, I develop dynamic and user-friendly applications, while TypeScript and Framer Motion allow me to elevate my designs to a modern and professional level. I am passionate about continuous learning and self-improvement, always motivated by the opportunity to work with new technologies and create innovative projects that make the world a better place.",
    newsTrackerTitle: "News Tracker",
    newsTrackerDesc: "real-time news tracking app.",
    newsTrackerDetailedDesc:
      "A comprehensive news tracking application that provides real-time news updates with interactive charts and data visualization. Features notification system for breaking news and trending topics analysis.",

    nonoTitle: "Nono",
    nonoDesc: "zero-knowledge puzzle game.",
    nonoDetailedDesc:
      "An innovative puzzle game built with zero-knowledge proofs using RISC0 technology. Combines gaming with advanced cryptography, allowing players to solve puzzles while maintaining privacy and verifiable solutions on-chain.",

    mediaAgencyTitle: "Digital Agency",
    mediaAgencyDesc: "digital media agency website.",
    mediaAgencyDetailedDesc:
      "A professional digital media agency website featuring blog functionality, content management system integration, and modern responsive design. Showcases agency services and portfolio with dynamic content delivery.",

    kittyTodoTitle: "Kitty Todo",
    kittyTodoDesc: "cute todo list application.",
    kittyTodoDetailedDesc:
      "A delightful and user-friendly todo list application with a charming cat theme. Features local storage persistence, intuitive task management, and engaging animations to make productivity fun and enjoyable.",

    personaTitle: "Persona",
    personaDesc: "web3 wallet interface.",
    personaDetailedDesc:
      "A modern Web3 wallet interface that provides seamless blockchain interactions with enhanced user experience. Features multi-chain support, secure transaction handling, and intuitive design for both beginners and advanced users.",

    eduflowTitle: "Eduflow",
    eduflowDesc: "educational learning platform.",
    eduflowDetailedDesc:
      "A blockchain-based educational platform that revolutionizes learning through decentralized technology. Features smart contracts for course validation, secure credential storage, and transparent educational transactions.",

    alvinTitle: "Alvin New Year Progress",
    alvinDesc: "productivity app for tracking yearly progress.",
    alvinDetailedDesc:
      "A comprehensive productivity application that helps users track and visualize their progress throughout the year. Features email notifications, progress analytics, and motivational insights to keep users engaged with their goals.",

    axisTitle: "Axis",
    axisDesc: "AI-powered assistant application.",
    axisDetailedDesc:
      "A sophisticated AI assistant built on blockchain technology, leveraging MultiverseX integration. Provides intelligent responses and automated assistance while maintaining decentralized principles and user privacy.",

    riskonTitle: "Riskon",
    riskonDesc: "DeFi risk management platform.",
    riskonDetailedDesc:
      "An advanced DeFi risk management platform built on Stellar blockchain, utilizing AI and machine learning for risk assessment. Provides intelligent investment insights and automated risk monitoring for cryptocurrency portfolios.",

    aurascendTitle: "Aurascend",
    aurascendDesc: "emotion AI analysis platform.",
    aurascendDetailedDesc:
      "An advanced emotion AI platform that analyzes user emotions through various inputs and provides detailed emotional intelligence insights. Built with modern web technologies and machine learning capabilities.",

    makeCloneTitle: "Make Clone",
    makeCloneDesc: "workflow automation tool.",
    makeCloneDetailedDesc:
      "A powerful no-code automation platform inspired by Make.com, featuring AI-powered workflow creation, visual flow builder, and seamless integrations. Enables users to automate complex processes without coding knowledge.",

    digitalAgencyTitle: "Digital Agency",
    digitalAgencyDesc: "digital media agency website.",
    digitalAgencyDetailedDesc:
      "A professional digital media agency website featuring blog functionality, content management system integration, and modern responsive design. Showcases agency services and portfolio with dynamic content delivery.",

    harryPotterTitle: "Harry Potter dApp",
    harryPotterDesc: "Harry Potter NFT marketplace.",
    harryPotterDetailedDesc:
      "A magical NFT marketplace dedicated to Harry Potter collectibles, built on blockchain technology. Users can mint, trade, and collect unique digital artifacts from the Wizarding World with smart contract functionality and Web3 integration.",

    gencFlamingoTitle: "Genç Flamingolar",
    gencFlamingoDesc:
      "I can't share the details of the project because it is a private project within the company, but the project is generally a chrome extension that facilitates the work of the company's support team. You can reach the technologies I use.",
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
    softitoTitle: "SoftIto Software & IT Academy",
    softitoSubtitle: "Mobile Application Developer Trainee",
    softitoDate: "May 2025 – Present",
    softitoDesc:
      "320-hour mobile development program: 140h Dart, 180h Flutter. Built cross-platform apps with Firebase, REST API, and state management.",

    ituTitle: "ITU Blockchain",
    ituSubtitle: "Developer",
    ituDate: "June 2023 – Present",
    ituDesc:
      "Developed award-winning dApps using Next.js, Web3.js, MongoDB. Created technical reports and contributed to research on blockchain.",

    medyanesTitle: "Medyanes 360",
    medyanesSubtitle: "Tech Lead",
    medyanesDate: "November 2024 – May 2025",
    medyanesDesc:
      "Led sprints, code reviews, and team coordination using Agile/JIRA. Boosted team efficiency through mentoring and daily standups.",

    flalingoTitle: "Flalingo",
    flalingoSubtitle: "Mid Frontend & Mobile Developer",
    flalingoDate: "November 2024 – March 2025",
    flalingoDesc:
      "Enhanced AI-powered mobile app with React Native + Expo. Updated website UI/UX; debugged and maintained performance. Collaborated with design and product teams across time zones. | USA - California",

    viviencyTitle: "Viviency Digital Media Agency",
    viviencySubtitle: "Full Stack Developer",
    viviencyDate: "January 2024 - October 2024",
    viviencyDesc:
      "Built SEO-optimized websites using WordPress (Headless), Next.js. Delivered client-ready websites and technical consulting.",

    yetgenTitle: "Yetkin Gençler Training Program",
    yetgenSubtitle: "Participant",
    yetgenDate: "April - July 2023",
    yetgenDesc:
      "YetGen is a 12-week 21st-century skills training program. I took courses such as Effective Presentation Techniques, Teamwork, Career Planning, Excel, Information, Media, Financial Literacy, Social Innovation, and the GirişGen Entrepreneurship Module. Through this experience, I learned how to establish a startup focused on the UN Sustainable Development Goals.\n\nSkills: Entrepreneurship, Sustainability, Career Management, Information Literacy, Teamwork, Presentation Skills, Microsoft Excel",

    studioPMTitle: "Studio PM",
    studioPMSubtitle: "Graphic Designer (Short-Term)",
    studioPMDate: "2022 (Short-Term)",
    studioPMDesc:
      "Created visual content using Figma and Adobe Creative Suite (Photoshop, Illustrator, InDesign). Edited and retouched photos, developed creative solutions for social media, collaborated with photographers and the marketing team, and produced promotional materials for both print and digital media, maintaining the brand's visual consistency.",

    universityTitle: "Istanbul University",
    universitySubtitle: "Student / Communication Faculty",
    universityDate: "2020 - 2024",
    universityDesc:
      "Studied at Istanbul University (Communication Faculty), gaining Communication, Leadership, Time Management, Empathy, and Self-Motivation skills. My education in the Faculty of Communication significantly enhanced my soft skills.",

    extraTitle: "Extra",
    extraSubtitle: "Other Details in My LinkedIn Profile",
    extraDate: "N/A",
    extraDesc:
      "- HSD Figma Workshop\n- Blockchain Academy Rise In\n- ITU Blockchain Community\n- My enthusiasm for the future of Web3 and blockchain technology :)",
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
    successMessage:
      "Your message has been sent successfully. I will get back to you as soon as possible.",
    errorMessage: "An error occurred. Please try again later.",
    placeholderFullName: "Meric Cintosun",
    placeholderEmail: "mericcintosunn@email.com",
    placeholderPhone: "+90 530 954 7890",
    placeholderMessage: "Write your message here...",
    // HeroShowcase translations
    portfolioShowcase: "Portfolio Showcase",
    showcaseDescription:
      "Discover my journey as a full-stack developer specializing in modern web technologies, blockchain development, and innovative digital solutions that make a difference.",
    viewPortfolio: "View Portfolio",
    githubProjects: "GitHub Projects",
    developerBadge: "#1 Developer",
    ratingLabel: "RATING",
    projectsCompleted: "50+",
    projectsLabel: "PROJECTS COMPLETED",
    technologiesUsed: "15+",
    technologiesLabel: "TECHNOLOGIES USED",
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
    finalText:
      "odaklı blockchain projeleri üzerinde çalıştım. Geleceği birlikte inşa edelim!",
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
    aboutIntro:
      "Merhaba! Ben Meriç Cintosun, Web2 ve Web3 teknolojilerinde 3+ yıl deneyime sahip bir Full Stack Geliştiriciyim. React, Next.js, Flutter ve Node.js kullanarak duyarlı web ve mobil uygulamalar geliştirme konusunda uzmanım. Teknolojinin dünyayı nasıl şekillendirdiğine dair derin merakımla başlayan yolculuğum, beni yazılım geliştirme ve blockchain ekosistemine yönlendirdi.",
    aboutCareer:
      "İstanbul Üniversitesi İletişim Fakültesi'nden mezun olduktan sonra, merkeziyetsiz uygulamalar konusunda tutkulu hale geldim ve ITU Blockchain Kulübü'nde geliştirici olarak blockchain projelerine aktif katkıda bulunuyorum. Sık sık hackathonlara katılıyor ve geleneksel ile merkeziyetsiz yazılım ekosistemlerini köprülemeyi seviyorum. Kariyerim boyunca hem frontend hem de mobil uygulama geliştirme konusunda uzmanlık kazandım, modern, kullanıcı odaklı arayüzler oluşturuyor ve teknolojiyi daha erişilebilir kılan projeler geliştiriyorum.",
    aboutPassion:
      "Şu anda, bir dil öğrenme uygulaması olan Flalingo'da Mid Frontend & Mobile Developer olarak çalışıyor, yapay zeka destekli mobil çözümler üzerine odaklanıyorum. React, Next.js, TailwindCSS, React Native, Flutter ve Expo gibi araçları kullanarak dinamik ve kullanıcı dostu uygulamalar geliştirirken, TypeScript ve Framer Motion ile tasarımlarımı modern ve profesyonel bir seviyeye taşıyorum. Sürekli öğrenme ve kendimi geliştirme konusunda tutkulu biriyim, her zaman yeni teknolojilerle çalışma ve dünyayı daha iyi bir yer haline getiren yenilikçi projeler oluşturma fırsatı beni motive ediyor.",


    // Proje başlıkları ve açıklamaları
    alvinTitle: "Alvin Yıllık İlerleme Takibi",
    alvinDesc: "yıllık ilerleme takibi için üretkenlik uygulaması.",
    alvinDetailedDesc:
      "Kullanıcıların yıl boyunca ilerlemelerini takip etmelerine ve görselleştirmelerine yardımcı olan kapsamlı bir üretkenlik uygulaması. E-posta bildirimleri, ilerleme analitiği ve kullanıcıları hedefleriyle meşgul tutmak için motivasyon içgörüleri içerir.",

    aurascendTitle: "Aurascend",
    aurascendDesc: "duygu AI analiz platformu.",
    aurascendDetailedDesc:
      "Çeşitli girdiler aracılığıyla kullanıcı duygularını analiz eden ve ayrıntılı duygusal zeka içgörüleri sunan gelişmiş bir duygu AI platformu. Modern web teknolojileri ve makine öğrenmesi yetenekleri ile oluşturulmuştur.",

    axisTitle: "Axis",
    axisDesc: "AI destekli asistan uygulaması.",
    axisDetailedDesc:
      "MultiverseX entegrasyonunu kullanan blockchain teknolojisi üzerine kurulmuş sofistike bir AI asistanı. Merkezi olmayan ilkeleri ve kullanıcı gizliliğini koruyarak akıllı yanıtlar ve otomatik yardım sağlar.",

    digitalAgencyTitle: "Digital Agency",
    digitalAgencyDesc: "dijital medya ajansı web sitesi.",
    digitalAgencyDetailedDesc:
      "Blog işlevselliği, içerik yönetim sistemi entegrasyonu ve modern duyarlı tasarım özelliklerine sahip profesyonel bir dijital medya ajansı web sitesi. Ajans hizmetlerini ve portföyünü dinamik içerik dağıtımı ile sergiler.",

    eduflowTitle: "Eduflow",
    eduflowDesc: "eğitim öğrenme platformu.",
    eduflowDetailedDesc:
      "Merkezi olmayan teknoloji aracılığıyla öğrenmeyi devrimleştiren blockchain tabanlı bir eğitim platformu. Kurs doğrulama için akıllı sözleşmeler, güvenli kimlik bilgisi depolama ve şeffaf eğitim işlemleri içerir.",

    kittyTodoTitle: "Kitty Todo",
    kittyTodoDesc: "sevimli yapılacaklar listesi uygulaması.",
    kittyTodoDetailedDesc:
      "Büyüleyici bir kedi temasına sahip keyifli ve kullanıcı dostu bir yapılacaklar listesi uygulaması. Yerel depolama kalıcılığı, sezgisel görev yönetimi ve üretkenliği eğlenceli ve keyifli hale getiren ilgi çekici animasyonlar içerir.",

    makeCloneTitle: "Make Clone",
    makeCloneDesc: "iş akışı otomasyon aracı.",
    makeCloneDetailedDesc:
      "Make.com'dan ilham alan, AI destekli iş akışı oluşturma, görsel akış oluşturucu ve sorunsuz entegrasyonlar içeren güçlü bir kod yazmadan otomasyon platformu. Kullanıcıların kodlama bilgisi olmadan karmaşık süreçleri otomatikleştirmelerini sağlar.",

    newsTrackerTitle: "News Tracker",
    newsTrackerDesc: "gerçek zamanlı haber takip uygulaması.",
    newsTrackerDetailedDesc:
      "İnteraktif grafikler ve veri görselleştirme ile gerçek zamanlı haber güncellemeleri sağlayan kapsamlı bir haber takip uygulaması. Son dakika haberleri için bildirim sistemi ve trend konular analizi içerir.",

    nonoTitle: "Nono",
    nonoDesc: "sıfır bilgi ispat bulmaca oyunu.",
    nonoDetailedDesc:
      "RISC0 teknolojisi kullanarak sıfır bilgi ispatları ile oluşturulmuş yenilikçi bir bulmaca oyunu. Oyunculaların gizliliği koruyarak bulmacalar çözmelerini ve zincir üzerinde doğrulanabilir çözümler elde etmelerini sağlayarak oyunu gelişmiş kriptografi ile birleştirir.",

    personaTitle: "Persona",
    personaDesc: "web3 cüzdan arayüzü.",
    personaDetailedDesc:
      "Gelişmiş kullanıcı deneyimi ile sorunsuz blockchain etkileşimleri sağlayan modern bir Web3 cüzdan arayüzü. Çoklu zincir desteği, güvenli işlem işleme ve hem başlangıç seviyesi hem de ileri düzey kullanıcılar için sezgisel tasarım içerir.",

    riskonTitle: "Riskon",
    riskonDesc: "DeFi risk yönetim platformu.",
    riskonDetailedDesc:
      "Risk değerlendirmesi için AI ve makine öğrenmesi kullanan Stellar blockchain üzerine kurulmuş gelişmiş bir DeFi risk yönetim platformu. Kripto para portföyleri için akıllı yatırım içgörüleri ve otomatik risk izleme sağlar.",

    harryPotterTitle: "Harry Potter dApp",
    harryPotterDesc: "Harry Potter NFT pazaryeri.",
    harryPotterDetailedDesc:
      "Blockchain teknolojisi üzerine kurulmuş Harry Potter koleksiyonlarına adanmış büyülü bir NFT pazaryeri. Kullanıcılar akıllı sözleşme işlevselliği ve Web3 entegrasyonu ile Büyücülük Dünyası'ndan benzersiz dijital eserler basabilir, takas edebilir ve toplayabilir.",

    makeCloneTitle: "Make Clone",
    makeCloneDesc: "iş akışı otomasyon aracı.",
    makeCloneDetailedDesc:
      "Make.com'dan ilham alan, AI destekli iş akışı oluşturma, görsel akış oluşturucu ve sorunsuz entegrasyonlar içeren güçlü bir kod yazmadan otomasyon platformu. Kullanıcıların kodlama bilgisi olmadan karmaşık süreçleri otomatikleştirmelerini sağlar.",

    gencFlamingoTitle: "Genç Flamingolar",
    gencFlamingoDesc:
      "Şirket içinde özel bir proje olduğu için projenin detaylarını paylaşamıyorum, ancak proje genel olarak şirketin destek ekibinin işini kolaylaştıran bir chrome uzantısıdır. Kullandığım teknolojilere ulaşabilirsiniz.",
    projectDetails: "Proje Detayları",
    softwareSkills: "Yazılım Becerileri",
    softSkills: "Kişisel Beceriler",
    softSkillsCertificate:
      "Kişisel becerilerime YetGen sertifikası referanstır.",
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
    softitoTitle: "SoftIto Yazılım & BT Akademisi",
    softitoSubtitle: "Mobil Uygulama Geliştirici Stajyeri",
    softitoDate: "Mayıs 2025 – Günümüz",
    softitoDesc:
      "320 saatlik mobil geliştirme programı: 140s Dart, 180s Flutter. Firebase, REST API ve state management ile çapraz platform uygulamaları geliştirdim.",

    ituTitle: "İTÜ Blockchain",
    ituSubtitle: "Geliştirici",
    ituDate: "Haziran 2023 – Günümüz",
    ituDesc:
      "Next.js, Web3.js, MongoDB kullanarak ödüllü dApps geliştirdim. Teknik raporlar oluşturdum ve blockchain araştırmalarına katkıda bulundum.",

    medyanesTitle: "Medyanes 360",
    medyanesSubtitle: "Teknoloji Lideri",
    medyanesDate: "Kasım 2024 – Mayıs 2025",
    medyanesDesc:
      "Agile/JIRA kullanarak sprintleri, kod incelemelerini ve takım koordinasyonunu yönettim. Mentorluk ve günlük standup'lar ile takım verimliliğini artırdım.",

    flalingoTitle: "Flalingo",
    flalingoSubtitle: "Mid Frontend & Mobil Geliştirici",
    flalingoDate: "Kasım 2024 – Mart 2025",
    flalingoDesc:
      "React Native + Expo ile AI destekli mobil uygulamayı geliştirdim. Website UI/UX güncelledim; hata ayıklama ve performans bakımı yaptım. Zaman dilimi farklılıklarıyla tasarım ve ürün ekipleriyle işbirliği yaptım. | ABD - California",

    viviencyTitle: "Viviency Dijital Medya Ajansı",
    viviencySubtitle: "Full Stack Geliştirici",
    viviencyDate: "Ocak 2024 - Ekim 2024",
    viviencyDesc:
      "WordPress (Headless), Next.js kullanarak SEO optimize edilmiş web siteleri oluşturdum. Müşteriye hazır web siteleri ve teknik danışmanlık hizmeti sundum.",

    yetgenTitle: "Yetkin Gençler Eğitim Programı",
    yetgenSubtitle: "Katılımcı",
    yetgenDate: "Nisan - Temmuz 2023",
    yetgenDesc:
      "YetGen, 12 haftalık 21. yüzyıl becerileri eğitim programıdır. Etkili Sunum Teknikleri, Takım Çalışması, Kariyer Planlama, Excel, Bilgi, Medya, Finansal Okuryazarlık, Sosyal İnovasyon ve GirişGen Girişimcilik Modülü gibi dersler aldım. Bu deneyim sayesinde BM Sürdürülebilir Kalkınma Hedeflerine odaklanan bir startup kurmanın yollarını öğrendim.\n\nKazanılan Beceriler: Girişimcilik, Sürdürülebilirlik, Kariyer Yönetimi, Bilgi Okuryazarlığı, Takım Çalışması, Sunum Becerileri, Microsoft Excel",

    studioPMTitle: "Studio PM",
    studioPMSubtitle: "Grafik Tasarımcı (Kısa Dönem)",
    studioPMDate: "2022 (Kısa Dönem)",
    studioPMDesc:
      "Figma ve Adobe Creative Suite (Photoshop, Illustrator, InDesign) kullanarak görsel içerikler oluşturdum. Fotoğrafları düzenledim ve rötuşladım, sosyal medya için yaratıcı çözümler geliştirdim, fotoğrafçılar ve pazarlama ekibiyle işbirliği yaptım, markanın görsel tutarlılığını koruyarak hem basılı hem de dijital medya için promosyon materyalleri ürettim.",

    universityTitle: "İstanbul Üniversitesi",
    universitySubtitle: "Öğrenci / İletişim Fakültesi",
    universityDate: "2020 - 2024",
    universityDesc:
      "İstanbul Üniversitesi (İletişim Fakültesi)'nde eğitim gördüm, İletişim, Liderlik, Zaman Yönetimi, Empati ve Öz Motivasyon becerileri kazandım. İletişim Fakültesi'ndeki eğitimim kişisel becerilerimi önemli ölçüde geliştirdi.",

    extraTitle: "Ekstra",
    extraSubtitle: "Diğer Detaylar LinkedIn Profilimde",
    extraDate: "N/A",
    extraDesc:
      "- HSD Figma Workshop\n- Blockchain Academy Rise In\n- İTÜ Blockchain Topluluğu\n- Web3 ve blockchain teknolojisinin geleceğine olan tutkum :)",
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
    successMessage:
      "Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağım.",
    errorMessage: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    placeholderFullName: "Meriç Cintosun",
    placeholderEmail: "mericcintosunn@email.com",
    placeholderPhone: "+90 530 954 7890",
    placeholderMessage: "Mesajınızı buraya yazın...",
    // HeroShowcase translations
    portfolioShowcase: "Portfolio Vitrin",
    showcaseDescription:
      "Modern web teknolojileri, blockchain geliştirme ve fark yaratan yenilikçi dijital çözümler konusunda uzmanlaşmış bir full-stack geliştirici olarak yolculuğumu keşfedin.",
    viewPortfolio: "Portfolyoyu Görüntüle",
    githubProjects: "GitHub Projeleri",
    developerBadge: "#1 Geliştirici",
    ratingLabel: "PUAN",
    projectsCompleted: "50+",
    projectsLabel: "TAMAMLANAN PROJE",
    technologiesUsed: "15+",
    technologiesLabel: "KULLANILAN TEKNOLOJİ",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
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
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
