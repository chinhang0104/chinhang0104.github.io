'use client'

import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [text, setText] = useState('')
  const titles = ['Data Scientist', 'Software Developer', 'ML Engineer', 'Full Stack Developer']
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let charIndex = 0
    const typing = setInterval(() => {
      setText(currentTitle.slice(0, charIndex))
      charIndex++
      if (charIndex > currentTitle.length) {
        clearInterval(typing)
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typing)
  }, [titleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='5' cy='5' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="section-container z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Eric Wong</span>
            </h1>
            <div className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 h-12">
              I'm a <span className="text-primary-600 font-semibold">{text}</span>
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Passionate about transforming data into insights and building scalable software solutions. 
            I specialize in machine learning, web development, and cloud technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="/resume.pdf" className="btn-secondary flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a href="https://github.com/chinhang0104" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chin-hang-wong-6276a6109/" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:chinhang0104@gmail.com" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-primary-600" />
      </motion.div>
    </section>
  )
}
