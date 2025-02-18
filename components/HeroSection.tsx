import React from 'react'
import MatrixBackground from './MatrixBackground'

const HeroSection: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    document
      .querySelector(`#${sectionId}`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section
      id="hero-section"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matrix Background */}
      <MatrixBackground />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
          Hi, I&apos;m Isaac Moses Bell. <br></br> I Build Scalable,
          User-Friendly Applications.
        </h1>
        <p className="text-xl md:text-2xl text-neutral-300 mb-12 tracking-wide">
          Developer | Innovator | Problem-Solver
        </p>
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => handleScroll('projects-section')}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll('contact-section')}
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <i className="fa-solid fa-chevron-down text-white text-xl"></i>
      </div>
    </section>
  )
}

export default HeroSection
