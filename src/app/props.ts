export type SocialNetworkType = 'linkedin' | 'github';
export interface ExperienceItem {
  time: string;
  company: string;
  companyURL?: string;
  location: string;
  title: string;
  startDate: string;
  endData?: string;
  companyLogo?: string;
  content: {
    intro: string;
    list: string[];
    stack?: string[];
  };
  link?: {
    url: string;
    text: string;
  }[];
}

export const SOCIAL_NETWORK_LINKS: Record<SocialNetworkType, string> = {
  linkedin: 'https://www.linkedin.com/in/vien-ha-bb5391264/',
  github: 'https://github.com/VienThanh12',
};

export const techStacks: string[] = [
  'React.js',
  'Material UI',
  'Redux',
  'React Bootstrap',
  'SQL',
  'Containerization',
  'Microsoft Azure', 
  'Kubernetes (k8s)',
  'AWS',
  'E2E Testing (Cypress)',
  'Integration, unit testing (Jest)',
  'Git/Gitlab',
  'C/C++',
  'Next.js',
  'Node.js',
  'Python',
  'C#',
  'Ant Design',
  'Google Cloud Platform',
  'Tailwind CSS',
  'Typescript',
  'Javascript',
  'HTML',
  'CSS',
  'Postman',
];

export const experienceProps: ExperienceItem[] = [
  {
    time: 'May 2024 - Present',
    startDate: '2024-5-20',
    company: 'Nokia Corporation',
    companyURL: 'https://www.nokia.com',
    location: 'Full-time | Espoo, Finland',
    title: 'Software Engineer Intern',
    companyLogo: '/nokia_logo_2.jpeg',
    content: {
      intro:
        'The Advanced Technology and Incubation Group (ATI) at Nokia drives the exploration and prototyping of innovative approaches and design concepts for future networking technologies. Collaborating closely with CNS and Nokia as a whole, ATI focuses on technology incubation and engagement, fostering a "Build the Future Now" mindset. Our work not only includes evaluating and demonstrating advanced technologies but also nurturing skills in presentation, communication, and leadership among our trainees. Insights from our initiatives guide technology recommendations, standardization, patents, and iterative concept development.        ',
      list: [
        'Aligned with this mission, I am dedicated to developing GenAI recipes and architectures to support them, sharing these with R&D to accelerate generative AI capabilities.',
        'This initiative aims to strengthen our collective intelligence and ability to better serve customer needs.',
      ],
      stack: [
        'React',
        'Javascript',
        'Python',
        'Large Languae Model',
        'Docker',
        'Ubuntu (WSL 2)', 
        'Postman / Bruno',
        'Notion',
        'Figma',
        'Microsoft Office',
        'Microsoft Teams',
        'Rest API',
        'Git/Gitlab'
      ],
    },
    
  },
  {
    time: 'May 2023 - May 2024',
    startDate: '2023-05-01',
    company: 'Lockness Limited',
    companyURL: 'https://www.linkedin.com/company/lockness-limited/posts/?feedView=all',
    location: 'Remote | Viet Nam',
    title: 'Software Engineer',
    companyLogo: '/Lockness_Limited.jpeg',
    content: {
      intro: "Decentralized Lableling Platform",
      list: [
        'We’re developing a platform dedicated to decentralized data labeling, designed to transform data for the future of machine learning.',
        'Implemented features using modern web technologies and optimized system performance.',
        'Worked on both pre-silicon software development and active silicon bring-up phases.',
      ],
      stack: [
        'Python',
        'FastAPI',
        'Redis',
        'RabbitMQ',
        'MySQL',
        'Yolo',
      ],
    },
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
}

export const personalProjects: ProjectItem[] = [
  {
    title: "Vien Ha's Porfolio",
    description:
      'Personal portfolio website showcasing  my diverse skillset in web development, with a collection of projects and work experiences.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    url: '',
    image: '/Portfolio_project.png',
  },
  {
    title: 'Hackathon Junction Project',
    description:
      'Easily visualize and quickly generate simple 3D building models with basic inputs from 2D images.',
    stack: ['React.js', 'Ant Design', 'Neural Networks', 'Spartial AI', 'Machine Learning', 'Python', '2D to 3D Conversion'],
    url: 'https://hackathon-junction-projects.vercel.app',
    image: '/hackathon_project.png',
  },
  {
    title: 'Country Project',
    description:
      'Getting some basic information of a country with ReactJS.',
    stack: ['React.js', 'Rest-api', 'Render'],
    url: 'https://github.com/VienThanh12/Country-Project',
    image: '/Country_Project.png',
  },
  {
    title: 'Blog Project',
    description:
      'An online website where individuals regularly publish written content in the form of posts or articles.',
    stack: ['React.js', 'NodeJS', 'Express.js', 'Mongoose', 'MongoDB'],
    url: 'https://github.com/VienThanh12/Blog-Project',
    image: '/Blog_Project.png',
  },
  {
    title: 'Phone Book Project',
    description:
      'A phonebook to save name and number of a person.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
    url: 'https://github.com/VienThanh12/Phone-Book-Project',
    image: '/Phonebook_Project.png',
  },
];
