
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";

function Portfolio () {
    return (
    <div className="min-h-screen flex flex-col lg:flex-row">
         <div className="min-h-1/3 lg:min-h-screen flex">
                    <div className="relative flex flex-col justify-start lg:justify-center p-6 w-full h-1/3 lg:h-screen lg:fixed lg:top-0 lg:left-8 lg:w-1/2">
                      <div className="max-w-md">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-black bg-clip-text">
                          Hi, I'm Tyler!
                        </h1>
                        
                        <p className="text-md mb-6 lg:text-lg text-neutral-900 lg:mb-12 leading-relaxed text-wrap">
                         Come learn a little bit about me and my experiences!
                        </p>
                        
                        <div className="flex items-center lg:gap-6 mb-6 lg:gap-16 lg:mb-12">
                        <nav className="hidden lg:block lg:ml-12 lg:space-y-6">
                          <a href="#aboutMe" className="block text-lg font-medium transition-all duration-300 hover:translate-x-2 text-neutral-700 hover:underline underline-offset-4 ">About Me</a>
                          <a href="#experience" className="block text-lg font-medium transition-all duration-300 hover:translate-x-2 text-neutral-700 hover:underline underline-offset-4">Experience</a>
                          <a href="#projects" className="block text-lg font-medium transition-all duration-300 hover:translate-x-2 text-neutral-700 hover:underline underline-offset-4">Projects</a>
                          <a href="/resume.pdf" className='block text-lg font-medium transition-all duration-300 hover:translate-x-2 text-neutral-700 hover:underline underline-offset-4' rel='noopener' target='_blank'>My full resume</a>
                        </nav>
                        
                          <div className="w-32 h-48 lg:w-48 lg:h-64 lg:ml-6 flex ml-20 items-center justify-center text-4xl font-bold">
                              <img src="/gradPhoto.jpg" className="rounded-xl" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-row gap-6 mb-4 ml-10 lg:ml-2 lg:mb-10 lg:ml-20 '>
                        <a href="https://github.com/TylerWatkins0513" className="text-4xl text-black hover:text-neutral-700" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/tylerwatkins0513/" className="text-4xl text-black hover:text-neutral-700" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
                        <a href="mailto:TylerWatkins0513@gmail.com" className="text-4xl text-black hover:text-neutral-700" target='_blank' rel='noopener noreferrer'><MdEmail/></a>
                        <a href="/resume.pdf" className="text-3xl text-black hover:text-neutral-700 block lg:hidden" target='_blank' rel='noopener noreferrer'><FaFileAlt/></a>
                      </div>
                    </div>
            </div>

            {/* Content */}
            <div className="w-full min-h-screen justify-start lg:ml-[48%] lg:w-1/2">
            <section id="aboutMe" className="min-h-screen p-8 lg:p-16 flex flex-col justify-center">
            <div className="max-w-2xl">
            <h2 className="text-xl text-left mb-2 lg:text-3xl lg:text-center font-bold text-neutral-900 lg:mb-8">About Me</h2>
            
            <p className="lg:text-lg text-sm text-neutral-900 mb-6 leading-relaxed text-justify tracking-tighter">
           I recently graduated from Towson University with a Bachelor's degree in Computer Science.
          During my time there, I developed a strong foundation in software development, data structures, and systems design, all of which fueled my growing passion for building impactful technology.
            </p>
            
            <p className="lg:text-lg text-sm text-neutral-900 mb-6 leading-relaxed text-justify tracking-tighter">
          I am currently seeking a full-time role as a software engineer where I can apply my technical skills and continue growing as a developer.
          I am particularly passionate about creating efficient and scalable software solutions, whether that involves writing automation scripts to optimize internal operations or designing full-stack web applications 
          that address real-world problems. I enjoy bringing ideas to life through clean and purposeful code.
            </p>
            
            <p className="lg:text-lg text-sm text-neutral-900 mb-6 leading-relaxed text-justify tracking-tighter">
           In the past, I have had the opportunity to intern as a Software Engineer at Johns Hopkins Home Care Group and as a Data Analytics Intern at Towson University. 
           Both experiences provided invaluable hands-on exposure to the software development lifecycle, collaborative teamwork, and problem-solving in real-world environments. 
           They shaped my understanding of how thoughtful engineering can drive meaningful outcomes, and I am eager to bring that experience into a full-time role.
            </p>
            
            <p className="lg:text-lg text-sm text-neutral-900 mb-4 leading-relaxed text-justify tracking-tighter">
            Outside of programming, I enjoy unwinding with TV shows, hitting the gym, or diving into competitive video games. 
            I have a long-standing love-hate relationship with FIFA 😤, one moment it's a fun escape and the next it's a test of patience and mental capacity.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-xl text-left mb-6 lg:text-3xl lg:text-center font-bold text-neutral-900 lg:mb-8">Experience</h2>
            
            <div className="space-y-12">
              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-md text-nowrap lg:text-2xl font-semibold text-black">Software Development Intern</h3>
                  <p className="text-neutral-700 text-sm lg:text-lg">Johns Hopkins Care at Home • 2024 - Present</p>
                </div>
                <p className="lg:text-lg text-sm text-neutral-900 mb-6 leading-relaxed text-justify tracking-tighter">
                  Led the development of a Python-based modular desktop application for inventory tracking, increasing workflow efficiency by 45% 
                  and ensuring clean, efficient code. Automated new-hire ticket creation using REST APIs, eliminating manual processing time. 
                  Executed SQL queries to identify and catalog hundreds of previously unrecognized telecom lines, resulting in monthly savings of approximately $3,000.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-black">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
                <div className="mb-2">
                  <h3 className="text-md text-nowrap lg:text-2xl font-semibold text-black">Data Analytic Intern</h3>
                  <p className="text-neutral-700 text-sm lg:text-lg">Towson University • 2023 - 2024</p>
                </div>
                <p className="lg:text-lg text-sm text-neutral-900 mb-6 leading-relaxed text-justify tracking-tighter">
               Architected a MySQL database to track and manage information on graduates from Towson University's College of Liberal Arts, enabling more efficient and agile data management.
              Implemented data validation and cleaning techniques using Pandas, improving overall data accuracy by 40%.
              Developed interactive Power BI dashboards with DAX to provide actionable insights into alumni relations data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen p-16 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-xl text-left mb-2 lg:text-3xl lg:text-center font-bold text-neutral-900 lg:mb-8">Projects</h2>
            
            <div className="space-y-6 lg:space-y-10">
              {/* Project 1 */}
              <div className="p-4 rounded-xl shadow-xl lg:p-8 lg:rounded-2xl lg:shadow-2xl inset-shadow-sm inset-shadow-neutral-400 transition-shadow duration-300">
                <h3 className="text-sm lg:text-2xl font-semibold text-gray-800 mb-3 text-left">Johns Hopkins Invertory Management <p className='text-xs'>*Production Application*</p></h3>
                <p className="text-neutral-900 mb-4 leading-relaxed text-sm tracking-tighter text-left lg:text-base lg:font-normal">
                Developed a Tkinter-based inventory management application for tracking and managing high-end electronics and peripherals, 
                featuring interactive in-app dashboards and tables with data visualizations built using Matplotlib and Seaborn.
                </p>
                <div className="flex lg:flex-wrap flex-wrap gap-2">
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Tkinter</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">SQL</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Seaborn</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Matplotlib</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl shadow-xl lg:p-8 lg:rounded-2xl lg:shadow-2xl inset-shadow-sm inset-shadow-neutral-400 transition-shadow duration-300">
                <h3 className="text-sm lg:text-2xl font-semibold text-gray-800 mb-3 text-left">JIRA Ticket Automation <p className='text-xs'>*Production system*</p></h3>
                <p className="text-neutral-900 mb-4 leading-relaxed text-sm tracking-tighter text-left lg:text-base lg:font-normal">
                Designed and implemented a Python, SQL, and Power Automate-based system to streamline JIRA new-hire ticket creation using Atlassian's REST API, 
                dynamically assigning issues and setting priorities based on ticket parameters.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Python</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">SQL</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Power Automate</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">RESTful APIs</span>
                </div>
              </div>

              {/* Project 3 */}
              <a href="https://cosc-484-project-front.vercel.app" target='_blank' rel='nooponer noreferrer'>
              <div className="p-4 rounded-xl shadow-xl lg:p-8 lg:rounded-2xl lg:shadow-2xl inset-shadow-sm inset-shadow-neutral-400 transition-shadow duration-300">
                <h3 className="text-sm lg:text-2xl font-semibold text-gray-800 mb-3 text-left">Towson University Marketplace</h3>
                <p className="text-neutral-900 mb-4 leading-relaxed text-sm tracking-tighter text-left lg:text-base lg:font-normal">
                   Launched a marketplace platform specifically for Towson University students to buy and sell items within the campus community, 
                   featuring secure authentication and verification, intuitive search and filtering, and real-time direct messaging between buyers and sellers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">MongoDB</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">React.js</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Express.js</span>
                  <span className="px-2 lg: px-3 py-1 bg-black text-white rounded-full lg:text-sm lg:font-medium text-xs font-medium">Node.js</span>
                  </div>
                </div>
                </a>
              </div>
          </div>
        </section>
            </div>
        </div>
            
    )

}

export default Portfolio;