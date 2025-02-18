import '@fortawesome/fontawesome-free/css/all.min.css'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import MatrixBackground from '@/components/MatrixBackground'
import CareerJourneyTimeline from '@/components/CareerJourneyTimeline'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { duration: 1.5, ease: 'easeInOut', delay: 0.9 },
  },
}

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-container">
        <motion.div layout>
          <motion.section
            className="h-screen snap-start  section-transition"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <HeroSection />
          </motion.section>

          <motion.section
            className="h-screen snap-start   section-transition  "
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div> */}
            <AboutMe />
          </motion.section>

          <motion.section
            id="projects-section"
            className="h-screen snap-start section-transition bg-gray-800"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Projects />
          </motion.section>

          <motion.section
            className="h-screen snap-start section-transition"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Skills />
          </motion.section>

          <motion.section
            className="h-screen snap-start overflow-auto scroll-smooth"
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <CareerJourneyTimeline />
          </motion.section>

          <motion.section
            id="contact-section"
            className="h-screen snap-start section-transition"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Contact />
          </motion.section>
        </motion.div>
      </div>
    </>
  )
}
