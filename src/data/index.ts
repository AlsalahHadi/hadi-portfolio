const website =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://hadi-alsalah.vercel.app';

export const about = {
  name: 'Hadi Al Salah',
  description:
    "Master’s holding in data science, experienced certified procurement manager and experienced in market intelligence who's been actively involved in large language model, machine learning and deep learning projects.",
  role: 'Data Scientist',
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
    role: 'Analytics & Insights Manager',
    company: 'Procter & Gamble',
    description:
      '- Drove execution excellence by identifying 0.6 MUSD opportunity and established its action plan.\
      - Built a local data hub and transformed key performance dashboards into Power Bi.\
      - Developed multi-linear regression model to forecast products sales.\
      - Conducted products analysis to diagnose performance and drive growth.\
      - Mined market insights basis data that drive Business growth.',
    date: '01/2025 - 07/2025',
    is_current: false,
  },
  {
    role: 'Sr. Buyer',
    company: 'Exiros',
    description:
      '- Improved liquidity of supply for critical materials generating a potential saving of 0.5 MUSD/year.\
      - Improved on time delivery KPI of critical materials from 70% to 95%.\
      - Improved supply chain security of critical materials by qualifying local suppliers with competitive economical position.',
    date: '05/2023 - 01/2025',
    is_current: false,
  },
  {
    role: 'Sr. Market Intelligence Analyst',
    company: 'Tenaris',
    description:
      "- Analyzed sales segments and initiated market share increasing plan.\
      - Analyzed the Market dynamics, competitors' behavior and Tenaris' impact and positioning .\
      - Monitored and analyzed Aramco’s activities.\
      - Analyzed O&G market and identified potential market. \
      Carried out BU management control, interacted and collaborated with BU Management. \
      Issued reports to the company management with conclusions and proposed plan actions.",
    date: '08/2021 - 04/2023',
    is_current: false,
  },
  {
    role: 'Buyer',
    company: 'Exiros',
    description:
      'Achieved Savings of 150+ kUSD /year through the issued contracts.\nNegotiated and issued 35+ contracts to smoothen the procurement process in Tenaris.\nAnalyzed purchase requests and identify trends to launch frame agreements to increase the system efficiency.\nMastered the new system and acted as technical leader for the team.\nFirst to successfully implement the procurement new system.',
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
    name: 'Sales Fundemntals Dashboard',
    description:
      'Developed a Power BI dashboard to track key product fundamentals, enabling data-driven execution and operational excellence.',
  },
  {
    name: 'KSA Logistics Oriented Large Language Model (08/2023 - 05/2024)',
    description:
      '- Fine-tuned LLM on Saudi based logistics company to identify bottlenecks, room of improvements, generate reports and recommendations to improve the company performance.\
      - Developed user friendly interface for the model to allow top management to generate the desired reports and recommendations effectively.',
  },
  {
    name: 'Product Market Scouting (01/2022 - 06/2022)',
    description:
      "- Cleaned and Analyzed 3rd Party DB through PowerBI to identify current and future customers' projects.\
      - Identified the potential market for specific products of the company portfolio to increase its market share.",
  },
  {
    name: 'Visualization of Pipes Worldwide Trade Database (11/2021 - 12/2021)',
    description:
      '- Cleaned an acquired 3rd party database and identify trends through the data wrangling process.\
      - Performed data analysis through PowerBI to draw conclusions on how the pipes trading affecting the company market share within the country and worldwide.',
  },
  {
    name: "Data Visualization of Tenaris' Sales (09/2021 - 10/2021)",
    description:
      '- Cleanse and maintain the company sales database.\
      - Identify trends and correlate them to market news to integrate both company performance and market context.\n',
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
