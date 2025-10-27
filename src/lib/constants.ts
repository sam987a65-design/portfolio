export const SITE_CONFIG = {
  name: 'Aryan',
  title: 'Aryan — AI & Data Science Engineer',
  description:
    'Portfolio of Aryan — AI & Data Science Engineer specializing in Machine Learning, Deep Learning, and Data Analytics. Building intelligent systems and predictive models with Python, TensorFlow, and advanced ML algorithms.',
  url: 'https://aryankumbhare.com',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/aryankumbhare',
    linkedin: 'https://linkedin.com/in/aryan-kumbhare-9969732a4',
    email: 'mailto:aryankumbhare137@gmail.com',
  },
}

export const SKILLS = {
  'Languages & Frameworks': [
    { name: 'Python', level: 'Advanced', icon: '🐍' },
    { name: 'Rust', level: 'Intermediate', icon: '🦀' },
    { name: 'C++', level: 'Intermediate', icon: '⚙️' },
    { name: 'Java', level: 'Intermediate', icon: '☕' },
    { name: 'Django', level: 'Advanced', icon: '🎯' },
  ],
  'Libraries & Tools': [
    { name: 'Pandas', level: 'Advanced', icon: '🐼' },
    { name: 'NumPy', level: 'Advanced', icon: '🔢' },
    { name: 'Scikit-learn', level: 'Advanced', icon: '📊' },
    { name: 'Matplotlib', level: 'Advanced', icon: '📈' },
    { name: 'Seaborn', level: 'Advanced', icon: '🎨' },
    { name: 'Tableau', level: 'Intermediate', icon: '📊' },
  ],
  'DevOps & Cloud': [
    { name: 'Git', level: 'Advanced', icon: '🔀' },
    { name: 'GitHub', level: 'Advanced', icon: '🐙' },
    { name: 'Docker', level: 'Intermediate', icon: '🐳' },
    { name: 'AWS', level: 'Intermediate', icon: '☁️' },
  ],
  'ML Algorithms': [
    { name: 'Linear Regression', level: 'Advanced', icon: '📉' },
    { name: 'Logistic Regression', level: 'Advanced', icon: '📊' },
    { name: 'Decision Tree', level: 'Advanced', icon: '🌳' },
    { name: 'Random Forest', level: 'Advanced', icon: '🌲' },
    { name: 'XGBoost', level: 'Advanced', icon: '🚀' },
    { name: 'K-Means Clustering', level: 'Advanced', icon: '🎯' },
    { name: 'DBSCAN', level: 'Intermediate', icon: '🔍' },
  ],
  'Core Concepts': [
    { name: 'EDA', level: 'Advanced', icon: '🔬' },
    { name: 'Feature Engineering', level: 'Advanced', icon: '⚡' },
    { name: 'Data Preprocessing', level: 'Advanced', icon: '🧹' },
    { name: 'Model Evaluation', level: 'Advanced', icon: '✅' },
    { name: 'OOP', level: 'Advanced', icon: '🏗️' },
    { name: 'Exception Handling', level: 'Advanced', icon: '🛡️' },
    { name: 'ETL', level: 'Advanced', icon: '🔄' },
    { name: 'Statistical Modeling', level: 'Advanced', icon: '📐' },
  ],
  'Soft Skills': [
    { name: 'Public Speaking', level: 'Advanced', icon: '🎤' },
    { name: 'Leadership', level: 'Advanced', icon: '👑' },
    { name: 'Team Management', level: 'Advanced', icon: '👥' },
    { name: 'Cross-functional Collaboration', level: 'Advanced', icon: '🤝' },
    { name: 'Analytical Thinking', level: 'Advanced', icon: '🧠' },
    { name: 'Communication', level: 'Advanced', icon: '💬' },
  ],
}

export const PROJECTS = [
  {
    id: 'oyo-clone',
    title: 'OYO Clone',
    description: 'Django-based hotel booking platform with responsive UI and secure authentication',
    thumbnail: '/projects/oyo-clone.png',
    tags: ['Django', 'Python', 'PostgreSQL', 'GitHub Actions'],
    highlights: [
      'Reduced page load times by 30% through optimization',
      'Implemented role-specific dashboards with secure OTP authentication',
      'Supported 1,000+ simulated users with 99% login success rate',
    ],
    kpis: [
      { label: 'Performance', value: '30% faster' },
      { label: 'Success Rate', value: '99%' },
      { label: 'Testing Reduction', value: '50%' },
    ],
    links: {
      live: 'https://oyo-clone-demo.vercel.app',
      repo: 'https://github.com/aryankumbhare/oyo-clone',
      caseStudy: '#',
    },
    date: 'Mar 2025',
    organization: 'DYPCOE',
    challenge:
      'Build a scalable hotel booking platform with secure authentication and role-based access control.',
    approach:
      'Implemented Django REST framework with PostgreSQL, optimized queries, added Redis caching, and set up CI/CD with GitHub Actions.',
    result:
      'Delivered a production-ready platform handling 1000+ concurrent users with 30% faster load times and automated testing pipeline.',
  },
  {
    id: 'ml-pipeline',
    title: 'ML Data Pipeline',
    description: 'End-to-end machine learning pipeline for real-time data processing',
    thumbnail: '/projects/ml-pipeline.png',
    tags: ['Python', 'TensorFlow', 'Apache Airflow', 'Docker'],
    highlights: [
      'Automated data ingestion from multiple sources',
      'Real-time model inference with 95% accuracy',
      'Scalable architecture handling 10M+ records daily',
    ],
    kpis: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Daily Records', value: '10M+' },
      { label: 'Latency', value: '<100ms' },
    ],
    links: {
      repo: 'https://github.com/aryankumbhare/ml-pipeline',
      caseStudy: '#',
    },
    date: 'Jan 2025',
    organization: 'Personal Project',
    challenge:
      'Create a robust ML pipeline that can handle large-scale data processing with minimal latency.',
    approach:
      'Built modular pipeline using Apache Airflow for orchestration, implemented feature engineering, and deployed models with TensorFlow Serving.',
    result:
      'Achieved 95% model accuracy with sub-100ms inference latency, processing 10M+ records daily.',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive visualizations',
    thumbnail: '/projects/analytics-dashboard.png',
    tags: ['React', 'D3.js', 'FastAPI', 'WebSocket'],
    highlights: [
      'Real-time data updates using WebSocket connections',
      'Interactive charts with drill-down capabilities',
      'Responsive design supporting mobile and desktop',
    ],
    kpis: [
      { label: 'Load Time', value: '<1s' },
      { label: 'Data Points', value: '1M+' },
      { label: 'Users', value: '500+' },
    ],
    links: {
      live: 'https://analytics-dashboard-demo.vercel.app',
      repo: 'https://github.com/aryankumbhare/analytics-dashboard',
    },
    date: 'Dec 2024',
    organization: 'Personal Project',
    challenge:
      'Build an intuitive dashboard for visualizing complex datasets in real-time.',
    approach:
      'Used React with D3.js for visualizations, FastAPI backend with WebSocket support, and implemented efficient data aggregation.',
    result:
      'Delivered a high-performance dashboard with <1s load time, serving 500+ users with real-time updates.',
  },
]

export const EDUCATION = [
  {
    institution: 'DY Patil College of Engineering',
    degree: 'Bachelor of Engineering',
    field: 'Electronics and Telecommunication',
    period: '2023 - 2027',
    location: 'Pune, India',
    highlights: [],
  },
  {
    institution: 'Indian Institute of Technology',
    degree: 'Bachelor of Science (Minor)',
    field: 'Data Science',
    period: '2025 - 2029',
    location: 'India',
    highlights: [],
  },
]

export const EXPERIENCE = [
  {
    title: 'Full-Stack Developer',
    organization: 'DYPCOE',
    period: 'Mar 2025',
    description: 'Led development of OYO Clone project',
    achievements: [
      'Reduced page load times by 30% through code optimization',
      'Implemented secure OTP authentication system',
      'Set up CI/CD pipeline reducing manual testing by 50%',
    ],
  },
]

export const ABOUT_TEXT = `I'm Aryan — an AI & Data Science Engineer passionate about transforming data into actionable insights and building intelligent systems. I specialize in Machine Learning, Deep Learning, and Data Analytics, leveraging advanced algorithms to solve complex real-world problems.

With expertise in Python, TensorFlow, Scikit-learn, and statistical modeling, I develop predictive models, perform exploratory data analysis, and create data-driven solutions. From feature engineering to model deployment, I combine technical excellence with analytical thinking to deliver measurable business impact. I'm driven by the power of data, innovation, and the transformative potential of artificial intelligence.`

export const CONTACT_SUCCESS_MESSAGE =
  "Thanks! I'll review your message and get back within 3 business days."
