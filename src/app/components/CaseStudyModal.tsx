'use client';

import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment } from 'react';
import YouTube from 'react-youtube';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  category: string;
  screenshotUrls?: string[];
  features?: string[];
  youtubeVideoId?: string;
  caseStudy?: {
    overview: string;
    screenshots: string[];
    challenge?: string;
    solution?: string;
    outcome?: string;
  };
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  if (!project) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-dark border border-gray-800 shadow-2xl transition-all">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <Dialog.Title as="h3" className="text-2xl font-sora font-bold text-primary">
                    {project.title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-800"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                  {/* Video or Case Study Content */}
                  {project.youtubeVideoId ? (
                    <div className="mb-8">
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-700 bg-black">
                        <YouTube videoId={project.youtubeVideoId} opts={{ width: '100%', height: '100%' }} iframeClassName="w-full h-full" />
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Project Description / Overview */}
                      <div className="mb-8">
                        <h4 className="text-xl font-sora font-semibold text-primary mb-4">
                          Project Overview
                        </h4>
                        <p className="text-secondary font-inter leading-relaxed text-base">
                          {project.caseStudy?.overview ?? project.description}
                        </p>
                      </div>

                      {/* Visual Showcase */}
                      {(project.caseStudy?.screenshots?.length || project.screenshotUrls?.length) ? (
                        <div className="mb-8">
                          <h4 className="text-xl font-sora font-semibold text-primary mb-4">
                            Visual Showcase
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(project.caseStudy?.screenshots ?? project.screenshotUrls ?? []).map((screenshot, index) => (
                              <motion.div
                                key={index}
                                className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Image
                                  src={screenshot}
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  fill
                                  className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {/* The Challenge */}
                      {project.caseStudy?.challenge && (
                        <div className="mb-8">
                          <h3 className="text-xl font-sora font-semibold text-primary mb-4">
                            The Challenge
                          </h3>
                          <p className="text-secondary font-inter leading-relaxed text-base">
                            {project.caseStudy.challenge}
                          </p>
                        </div>
                      )}

                      {/* My Solution */}
                      {project.caseStudy?.solution && (
                        <div className="mb-8">
                          <h3 className="text-xl font-sora font-semibold text-primary mb-4">
                            My Solution
                          </h3>
                          <p className="text-secondary font-inter leading-relaxed text-base">
                            {project.caseStudy.solution}
                          </p>
                        </div>
                      )}

                      {/* The Outcome */}
                      {project.caseStudy?.outcome && (
                        <div className="mb-8">
                          <h3 className="text-xl font-sora font-semibold text-primary mb-4">
                            The Outcome
                          </h3>
                          <p className="text-secondary font-inter leading-relaxed text-base">
                            {project.caseStudy.outcome}
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xl font-sora font-semibold text-primary mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-accent text-lg mt-0.5">•</span>
                            <span className="text-secondary font-inter">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}


                  {/* Technologies Used */}
                  <div className="mb-8">
                    <h4 className="text-xl font-sora font-semibold text-primary mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm font-inter rounded-full border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Category */}
                  <div className="mb-8">
                    <h4 className="text-xl font-sora font-semibold text-primary mb-4">
                      Category
                    </h4>
                    <span className="px-3 py-1 bg-gray-800 text-primary text-sm font-inter rounded-full border border-gray-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800">
                    {project.liveDemoUrl && (
                      <motion.a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Live Demo
                        <span className="text-white">→</span>
                      </motion.a>
                    )}
                    <motion.button
                      onClick={onClose}
                      className="border border-accent text-accent px-6 py-3 rounded-lg font-inter font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
