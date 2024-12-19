import { SOCIAL_NETWORK_LINKS, experienceProps, personalProjects } from './props';
import WorkItem from '../components/WorkItem';
import { garamond } from './font';
import SocialNetwork, { SocialNetworkIcons } from '@/components/SocialNetwork';
import Stacks from '@/components/Stacks';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10">
      {/* Left Section */}
      <div className="left lg:w-8/12">
        {/* About Section */}
        <section>
          <div className="mb-8">
            <h1
              id="about"
              className={`text-5xl lg:text-6xl font-bold dark:text-white ${garamond.className}`}
            >
              Ha Vien
            </h1>
            <h2 className="text-lg lg:text-xl mt-2 dark:text-gray-400">
              Software Engineer Intern @ Nokia | Bachelor of Automation Engineer
            </h2>
          </div>
          <div className="intro text-gray-700 dark:text-gray-200 lg:text-lg leading-relaxed">
            <p>
              Hello, I am Ha Vien, an ambitious engineering student with a passion for innovation
              and problem-solving. Now I am living and studying in Finland, pursuing my passion for
              computer science.
            </p>
            <p className="mt-4">
              I am working mostly with{' '}
              <span className="underline font-bold text-yellow-500 hover:text-yellow-600">
                JavaScript
              </span>{' '}
              and its frameworks and libraries.
            </p>
            <p className="mt-4">
              Through my projects, code repositories, and collaborations, I aim to showcase my
              proficiency in various programming languages, frameworks, and tools.
            </p>
          </div>
        </section>

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

      {/* Right Section */}
      <div className="right lg:w-3/12">
        <SocialNetwork />
        <Stacks className="hidden lg:flex mt-10" />
        <section className="education mt-14">
          <h3 className="text-3xl font-bold mb-6 dark:text-gray-200">🎓 Education</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold dark:text-gray-100">
                Seinäjoki University Of Applied Science
              </h4>
              <p>Grade: 4.89/5</p>
              <p>Bachelor of Automation Engineer</p>
              <p className="text-slate-400 text-sm dark:text-slate-500">2022 - 2025</p>
            </div>
            <div>
              <h4 className="text-lg font-bold dark:text-gray-100">
                Le Quy Don High School For The Gifted
              </h4>
              <p>Grade: 9.5/10</p>
              <p>Computer Science</p>
              <p className="text-slate-400 text-sm dark:text-slate-500">2019 - 2022</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}