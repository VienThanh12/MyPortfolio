import { SOCIAL_NETWORK_LINKS, experienceProps, personalProjects } from './props';
import WorkItem from '../components/WorkItem';
import { garamond } from './font';
import SocialNetwork, { SocialNetworkIcons } from '@/components/SocialNetwork';
import Stacks from '@/components/Stacks';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="left lg:w-8/12">
        <section>
          <div className="mb-8">
            <h1
              id="about"
              className={'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white ' + garamond.className}
            >
              Ha Vien
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-xl mt-1 dark:text-grey-400"> Software Engineer Intern @Nokia | Bacherlor of Automation Engineer</h2>
          </div>

          <div className="intro dark:text-gray-200 lg:text-lg">
            <p className=" mb-2">
              I&apos;m an experienced Software Engineer with a demonstrated history of working in the internet industry.
              Worked mostly with{' '}
              <span className="underline font-bold decoration-yellow-400 transition duration-200 hover:decoration-yellow-600">
                JavaScript
              </span>
              , its frameworks and libraries.
            </p>
            <p className="">
              Through my projects, code repositories, and collaborations, I hope to demonstrate my proficiency in various programming languages, frameworks, and tools.
              <a target="_blank" href={SOCIAL_NETWORK_LINKS.unsplash}>
                {/* <span className="underline font-bold decoration-sky-400 transition duration-200 hover:decoration-sky-600">
                  Unsplash
                </span> */}
              </a>
              .
            </p>
          </div>
        </section>

        <Stacks className="flex lg:hidden mt-6" />

        <SocialNetworkIcons className="mt-6 lg:hidden" />

        <div className="mt-14 mb-14">
          <h3 className="text-2xl font-bold mb-6 dark:text-gray-200"> Experience </h3>
          {experienceProps.map((item, idx) => {
            return <WorkItem key={idx} {...item} />;
          })}
        </div>

        <section id="projects" className="mb-8">
          <div className="mt-10 pt-4">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Projects and Works</h3>
          </div>

          <div>
            {personalProjects.map((item, idx) => {
              return <ProjectCard key={idx} {...item} />;
            })}
          </div>
        </section>
      </div>
      <div className="mid lg:w-1/12" />
      <div className="right lg:w-3/12">
        <SocialNetwork />
        <Stacks className="hidden lg:flex" />

        <div className="education mt-14 ">
          <h3 className="text-2xl font-bold mb-6 dark:text-gray-100"> Education </h3>
          <div className="mb-8">
            <h4 className="text-lg font-bold dark:text-gray-100"> Seinäjoki University Of Applied Science</h4>
            <p> Bachelor of Automation Engineer </p>
            <p className="text-slate-400 text-sm dark:text-slate-500"> 2022 - 2025 </p>
          </div>
          <div>
            <h4 className="text-lg font-bold dark:text-gray-100"> Le Quy Don High School For The Gifted </h4>
            <p> Computer Science </p>
            <p className="text-slate-400 text-sm dark:text-slate-500"> 2019 - 2022 </p>
          </div>
        </div>

        <div className="mt-14"></div>
      </div>
    </div>
  );
}
