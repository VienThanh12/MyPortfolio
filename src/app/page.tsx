import { SOCIAL_NETWORK_LINKS, experienceProps, personalProjects } from './props';
import WorkItem from '../components/WorkItem';
import { garamond } from './font';
import SocialNetwork, { SocialNetworkIcons } from '@/components/SocialNetwork';
import Stacks from '@/components/Stacks';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div>
     

    <div className="w-full flex flex-col lg:flex-row gap-10" style={{marginTop: '-60px'}}>
      
      {/* Left Section */}
      <div className="left lg:w-8/12">
        {/* Hero Section */}
      

      {/* About Section */}
      <section>
        <h3 className="text-3xl font-bold mb-8">About Me</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left side (Profile / Avatar placeholder) */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <img 
              src="./profile_pic_2.jpeg" 
              alt="Profile Picture" 
              className="w-60 h-60 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg" 
            />
          </div>

          {/* Right side (text) */}
          <div className="md:col-span-3 leading-relaxed">
            <p>
              Hello, I am Ha Vien, an ambitious engineering student with a passion for innovation and
              problem-solving. Currently based in Finland, I am deepening my expertise in 
              
              <p className="underline font-bold text-yellow-500 hover:text-yellow-600">
              Computer Science.
              </p>{' '} 
            </p>
            
            <p className="mt-4">
              Through projects, repositories, and collaborations, I showcase my proficiency in programming
              languages, frameworks, and tools.
            </p>

            {/* Show stacks and social icons for mobile */}
            <div className="mt-8 md:hidden">
              <Stacks className="flex flex-wrap gap-4" />
              <div className="mt-4">
                <SocialNetworkIcons />
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* About Section */}


        {/* Stacks for Mobile */}
        <Stacks className="flex lg:hidden mt-6" />
        <SocialNetworkIcons className="mt-6 lg:hidden" />

        {/* Experience Section */}
        <section className="mt-14 mb-14">
          <h3 className="text-3xl font-bold mb-6 dark:text-gray-200">💼 Experience</h3>
          <div className="grid grid-cols-1 gap-6">
            {experienceProps.map((item, idx) => (
              <WorkItem key={idx} {...item} />
            ))}
          </div>
        </section>

        <section id="projects" className="mb-8">
          <div className="mt-10 pt-4">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">📁 Projects and Works</h3>
          </div>

          <div>
            {personalProjects.map((item, idx) => {
              return <ProjectCard key={idx} {...item} />;
            })}
          </div>
          
        </section>

        {/* Honors & Awards Section */}
        <section id="honors" className="mb-14">
          <h3 className="text-3xl font-bold mb-6 dark:text-gray-200">🎖 Honors & Awards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'National Level Project Management Championship',
                issuer: 'IPMA Young Crew Finland',
                date: 'Apr 2024',
                association: 'SeAMK - Seinäjoki University of Applied Sciences',
                description:
                  'Our team achieved the 1st runner-up, Silver Award 🥈 in the last round of the Project Management Championship Competition.',
              },
              {
                title: 'First Prize City Excellent Student',
                issuer: 'Ministry of Education and Training of Vietnam',
                date: 'Apr 2022',
                association: 'Le Quy Don High School for the Gifted - Danang',
                description:
                  'Competitive Programming: I solved practical challenges and translated them into programming solutions.',
              },
              {
                title: 'Second Prize City Information Technology Competition',
                issuer: 'Ministry of Education and Training of Vietnam',
                date: 'Apr 2022',
                association: 'Le Quy Don High School for the Gifted - Danang',
              },
              {
                title: 'Consolation Prize - Olympiad in Informatics (Central Highlands of Vietnam)',
                issuer: 'Ministry of Education and Training of Vietnam',
                date: 'Mar 2022',
                association: 'Le Quy Don High School for the Gifted - Danang',
              },
              {
                title: 'Silver Medal - Olympiad in Informatics (Central Highlands of Vietnam)',
                issuer: 'Ministry of Education and Training of Vietnam',
                date: 'Mar 2021',
                association: 'Le Quy Don High School for the Gifted - Danang',
              },
            ].map((award, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold dark:text-yellow-400 text-gray-700">
                  {award.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  <span className="font-medium">Issued by:</span> {award.issuer} · {award.date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  <span className="font-medium">Associated with:</span> {award.association}
                </p>
                {award.description && (
                  <p className="text-gray-700 dark:text-gray-400 mt-2">{award.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

     <div className="w-full lg:w-3/12 space-y-10 px-4 lg:px-0 mt-10 lg:mt-0">
  {/* Connect & Tech Stack Card */}
  <div className="rounded-lg shadow-md bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6">
    <h3 className="text-2xl font-bold mb-4 dark:text-white flex items-center space-x-2">
      <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h3v-2H5c-1.654 0-3-1.346-3-3V8h20v11c0 1.654-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM2 6V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v1H2z" />
      </svg>
      <span>Connect With Me</span>
    </h3>

    {/* Social Networks */}
    <div className="mb-4">
      <SocialNetwork />
    </div>

    {/* Stacks (Visible only on large screens) */}
    <div className="hidden lg:flex flex-wrap gap-2 justify-center mt-6">
      <Stacks />
    </div>
  </div>

  {/* Education Card */}
  <section className="education bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold mb-6 dark:text-white flex items-center space-x-2">
      <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L1 9l11 7 11-7-11-7zm0 9.9L3.8 9 12 4.1 20.2 9 12 11.9zM23 16v2H1v-2h22z"/>
      </svg>
      <span>Education</span>
    </h3>
    <div className="space-y-8">
      {/* University */}
      <div>
        <h4 className="text-lg font-bold dark:text-gray-100 flex items-center space-x-2">
          <svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 9l11 7 11-7-11-7zm0 9.9L3.8 9 12 4.1 20.2 9 12 11.9zM23 16v2H1v-2h22z"/>
          </svg>
          <span>Seinäjoki University Of Applied Science</span>
        </h4>
        <p className="mt-1 dark:text-gray-300">
          <span className="font-bold">Grade:</span> 4.9/5
        </p>
        <p className="dark:text-gray-300">Bachelor of Automation Engineer</p>
        <p className="text-slate-400 text-sm dark:text-slate-500 mt-1">2022 - 2025</p>
      </div>

      {/* High School */}
      <div>
        <h4 className="text-lg font-bold dark:text-gray-100 flex items-center space-x-2">
          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L1 9l11 7 11-7-11-7zm0 9.9L3.8 9 12 4.1 20.2 9 12 11.9zM23 16v2H1v-2h22z"/>
          </svg>
          <span>Le Quy Don High School For The Gifted</span>
        </h4>
        <p className="mt-1 dark:text-gray-300">
          <span className="font-bold">Grade:</span> 9.5/10
        </p>
        <p className="dark:text-gray-300">Computer Science</p>
        <p className="text-slate-400 text-sm dark:text-slate-500 mt-1">2019 - 2022</p>
      </div>
    </div>
  </section>
</div>


    </div>
    </div>
  );
}