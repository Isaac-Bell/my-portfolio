import React from 'react'
import isaac from '../public/isaac.jpg'
import Image from 'next/image'

const AboutMe: React.FC = () => {
  return (
    <section
      id="about-me"
      className=" min-h-screen pb-30 bg-neutral-900 flex  items-center text-neutral-100"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Photo */}
          <div className="w-full md:w-1/2">
            <div className="bg-neutral-800 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-lg">
              <span className="text-neutral-500 text-lg">
                {/* Replace this placeholder with an actual photo */}
                <Image
                  src="/isaac.jpg"
                  width={400}
                  height={400}
                  alt="Picture of the Author"
                />
              </span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* About Me Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">About Me</h2>
              <p className="text-neutral-300 leading-relaxed">
                I'm a passionate full-stack developer with 1+ years of
                experience crafting web applications. My journey in tech started
                with a hands on intensive Full Stack Web Development bootcamp,
                and I've since worked with various startups and enterprise
                companies. I specialize in building scalable solutions and enjoy
                tackling complex problems with elegant solutions.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'React', icon: 'fa-react' },
                  { name: 'Node.js', icon: 'fa-node-js' },
                  { name: 'Python', icon: 'fa-python' },
                  { name: 'SQL', icon: 'fa-database' },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <i
                      className={`fa-brands ${skill.icon} text-3xl text-primary`}
                    ></i>
                    <span className="mt-2 text-sm text-neutral-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                Career Highlights
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Internship: Software Developer - Aimer Development',
                    date: '2024 - Present',
                  },
                  {
                    title: 'Full Stack Developer - Dev Academy Aotearoa',
                    date: '2024',
                  },
                  {
                    title: 'Construction Professional - New Zealandyy',
                    date: '2016 - 2023',
                  },
                ].map((highlight, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                    <div>
                      <h4 className="font-medium text-neutral-200">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-neutral-400">
                        {highlight.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
