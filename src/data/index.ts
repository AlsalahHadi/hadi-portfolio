const website =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://hadi-alsalah.vercel.app';

export const about = {
  name: 'Hadi Al Salah',
  description:
    "Master’s holding in data science, experienced certified procurement manager and experienced in market intelligence & insights who's been actively involved in large language model, machine learning, deep learning projects and visualization projects.",
  role: 'Data Analytics & Insights Specialist',
  website,
  photo: `/images/about/photo.jpg`,
  phone: '+966 58 320 6145',
  email: 'AlsalahHadi@gmail.com',
};

export const socials = [
  {
    name: 'Linkedin',
    icon: '/images/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/HadiAlsalah',
  },
];

export const tabs = [
  { name: 'About', path: '/' },
  { name: 'Skills', path: '/skills' },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const expreriences = [
    {
    role: 'Data Analysis Specialist',
    company: 'Saudi Water Authority',
    description:
      'Answered business questions by data driven analysis',
    date: '08/2025 - PRESENT',
    is_current: true,
  },
  {
    role: ' Power BI Data Visualization Specialist',
    company: 'Freelance (Upwork)',
    description:
      'Transformed complex data into actionable insights through compelling dashboards and reports. This involves designing and developing interactive Power BI solutions, optimizing data models, and collaborating with stakeholders to ensure visual analytics directly support strategic decision-making and drive business performance. They are adept at translating data into clear, impactful narratives that empower users and foster a data-driven culture.',
    date: '08/2025 - PRESENT',
    is_current: true,
  },
  {
    role: 'Analytics & Insights Manager',
    company: 'Procter & Gamble',
    description:
      'Drove execution excellence by identifying a $0.6M opportunity and establishing its action plan. I built a local data hub and transformed key performance dashboards into Power BI, while also developing a multi-linear regression model for sales forecasting. My work involved conducting in-depth product analysis to diagnose performance and generate growth, alongside mining critical market insights to directly fuel business expansion.',
    date: '01/2025 - 07/2025',
    is_current: false,
  },
  {
    role: 'Sr. Buyer',
    company: 'Exiros',
    description:
      'I significantly improved the liquidity of supply for critical materials, generating a potential annual savings of $0.5M and boosting on-time delivery from 70% to 95%. This was achieved by qualifying competitive local suppliers, thereby enhancing overall supply chain security.',
    date: '05/2023 - 01/2025',
    is_current: false,
  },
  {
    role: 'Sr. Market Intelligence Analyst',
    company: 'Tenaris',
    description:
      "Executed comprehensive market and sales analysis, identifying a $0.6M opportunity and developing an action plan to increase market share. This involved deep dives into market dynamics, competitor behavior, and industry giants like Tenaris and Aramco, coupled with O&G market opportunity identification. I further developed a multi-linear regression model for sales forecasting, transformed key performance dashboards into Power BI, and managed business unit controls, ultimately issuing strategic reports and actionable plans to company management to drive growth.",
    date: '08/2021 - 04/2023',
    is_current: false,
  },
  {
    role: 'Buyer',
    company: 'Exiros',
    description:
      'Successfully achieved over $150K in annual savings by negotiating and issuing 35+ contracts, significantly streamlining procurement processes. I further enhanced system efficiency by analyzing purchase requests and identifying trends to launch strategic frame agreements. As the technical leader for the procurement team, I mastered and was the first to successfully implement a new procurement system, driving operational excellence.',
    date: '01/2020 - 07/2021',
    is_current: false,
  },
];

export const educations = [
  {
    degree: "Master's Degree in Data Science and Analytics",
    school: 'King Fahd University of Petroleum and Minerals',
    date: '2022 - 2024',
    courses: ['Big Data Analytics', 'Machine Learning & Deep Learning', 'Statistical Modeling', 'Forecasting Methods'],
  },
  {
    degree: 'Bachlor of Science in Electrical Engineering',
    school: 'King Fahd University of Petroleum and Minerals',
    date: '2014 - 2019',
    courses: ['2nd place in Senior Design Expo', 'TOEFL - iBT: 527/677'],
  },
];

export const projects = [
  {
    name: 'Sales Fundemntals Dashboard (02/2025)',
    description:
      'Developed a Power BI dashboard to track key product fundamentals, enabling data-driven execution and operational excellence.',
  },
  {
    name: 'KSA Logistics Oriented Large Language Model (08/2023 - 05/2024)',
    description:
      'Fine-tuned an LLM for a Saudi-based logistics company, pinpointing bottlenecks and improvement areas. Developed a user-friendly interface enabling top management to generate reports and recommendations, significantly enhancing company performance.',
  },
  {
    name: 'Product Market Scouting (01/2022 - 06/2022)',
    description:
      "Cleaned and analyzed a third-party database using Power BI to identify current and future customer projects, successfully pinpointing potential markets for specific company products and increasing market share.",
  },
  {
    name: 'Visualization of Pipes Worldwide Trade Database (11/2021 - 12/2021)',
    description:
      'Cleaned and performed data wrangling on an acquired third-party database to identify critical trends. Through Power BI analysis, drew key conclusions on the impact of pipes trading on the company market share, both domestically and internationally.',
  },
  {
    name: "Data Visualization of Tenaris' Sales (09/2021 - 10/2021)",
    description:
      'Managed and cleansed the company sales database, identifying key trends and correlating them with market news to provide a holistic view of company performance within the broader market context.',
  },
];

export const skills = {
  skills: [
    {
      name: 'Python',
      description: 'My favorite for data science and machine learning.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      name: 'R Programming',
      description: '',
      link: 'https://www.r-project.org',
    },
    {
      name: 'Spark',
      description: '',
      link: 'https://spark.apache.org',
    },
    {
      name: 'SAP',
      description: '',
      link: 'https://www.sap.com',
    },
    {
      name: 'Knime',
      description: '',
      link: '',
    },
    {
      name: 'Power BI',
      description: '',
      link: '',
    },
    {
      name: 'Tableau',
      description: '',
      link: '',
    },
    {
      name: 'Data Visualization',
      description: '',
      link: '',
    },
    {
      name: 'Data Anlaytics',
      description: '',
      link: '',
    },
    {
      name: 'Market Research',
      description: '',
      link: '',
    },
    {
      name: 'Business Intelligence',
      description: '',
      link: '',
    },
    
  ],
};
