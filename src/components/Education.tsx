'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { education } from '@/data/education'
import { ExternalLink, BookOpen, Calendar } from 'lucide-react'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic background and related projects showcasing foundational skills
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">{edu.degree}</h3>
                  <h4 className="text-xl font-semibold mb-4">{edu.institution}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    {edu.honour && (
                      <div>
                        <strong>Honour: </strong>{edu.honour}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-6">
                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>

                {/* Coursework */}
                {edu.coursework.length > 0 && (
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen size={18} />
                      Relevant Coursework:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-xl">
                      {edu.coursework.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Related Projects */}
              {edu.projects && edu.projects.length > 0 && (
                <div>
                  <h5 className="font-semibold mb-4">Academic Projects</h5>
                  <div className="space-y-8">
                    {edu.projects.map((proj, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h6 className="text-lg font-medium text-primary-600 mb-2 flex items-center gap-2">
                          {proj.name}
                          {proj.github && (
                            <a 
                              href={proj.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-primary-600 transition-colors"
                              aria-label={`GitHub repository for ${proj.name}`}
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </h6>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">{proj.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {proj.technologies.map((tech, techIdx) => (
                            <span 
                              key={techIdx} 
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
