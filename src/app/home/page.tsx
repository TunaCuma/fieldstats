"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const FieldStatsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 font-sans text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-green-400">FieldStats</div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:flex">
            <a href="#features" className="transition hover:text-green-400">
              Features
            </a>
            <a href="#technology" className="transition hover:text-green-400">
              Technology
            </a>
            <a href="#team" className="transition hover:text-green-400">
              Team
            </a>
            <a href="#repositories" className="transition hover:text-green-400">
              Repositories
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 space-y-3 md:hidden">
            <a
              href="#features"
              className="block transition hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#technology"
              className="block transition hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </a>
            <a
              href="#team"
              className="block transition hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#repositories"
              className="block transition hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Repositories
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center px-6 py-16 md:flex-row md:py-24">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Affordable Football Analytics Powered by AI
          </motion.h1>
          <motion.p
            className="mb-8 text-xl text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Professional-grade match analysis, accessible to teams at all levels
          </motion.p>
          <motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://app.fieldstats.pro"
              className="rounded-lg bg-green-500 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-green-600"
            >
              Sign Up
            </a>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div
            className="overflow-hidden rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg bg-gray-700 p-4">
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded bg-black">
                <img
                  src="/figure-8.webp"
                  alt="2D View of the field"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Info Bar */}
      <section className="border-b border-t border-gray-700 bg-gray-800 py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">2</div>
              <div className="text-gray-300">Standard cameras needed</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">
                Affordable
              </div>
              <div className="text-gray-300">Subscription pricing</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-400">
                Detailed
              </div>
              <div className="text-gray-300">Performance insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="container mx-auto px-6 py-16">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How FieldStats Works
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Turning simple camera footage into powerful performance analytics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold">
              1
            </div>
            <h3 className="mb-4 text-xl font-semibold">Record Your Match</h3>
            <p className="text-gray-300">
              Capture your match from two angles using standard mobile phones or
              cameras - one for each half of the field.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold">
              2
            </div>
            <h3 className="mb-4 text-xl font-semibold">Upload to FieldStats</h3>
            <p className="text-gray-300">
              Upload your videos to our platform, where our AI processing
              pipeline automatically analyzes the footage.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl font-bold">
              3
            </div>
            <h3 className="mb-4 text-xl font-semibold">Get Insights</h3>
            <p className="text-gray-300">
              View detailed analytics reports with player metrics, heatmaps, and
              performance data to improve your strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Powerful Technology
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Advanced AI and computer vision technology makes
              professional-grade analysis accessible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg bg-gray-800">
                <div className="flex items-center justify-center rounded bg-black">
                  <div className="p-4 text-center">
                    <img
                      src="/figure-11.webp"
                      alt="Figure 11: Modules"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-2xl font-bold text-green-400">
                Advanced AI Pipeline
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-green-500 p-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="mb-1 block font-semibold">
                      YOLO Object Detection
                    </span>
                    <span className="text-gray-300">
                      Real-time player and ball detection with high accuracy
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-green-500 p-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="mb-1 block font-semibold">
                      ByteTrack Tracking
                    </span>
                    <span className="text-gray-300">
                      Multi-object tracking to maintain player identities across
                      frames
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-green-500 p-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="mb-1 block font-semibold">
                      Homography Transformation
                    </span>
                    <span className="text-gray-300">
                      Merges two camera angles into a single 2D field view
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-green-500 p-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="mb-1 block font-semibold">
                      Google Cloud Processing
                    </span>
                    <span className="text-gray-300">
                      GPU-accelerated video analysis for fast, affordable
                      results
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 rounded-full bg-green-500 p-1">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="mb-1 block font-semibold">
                      Next.js & Tailwind Frontend
                    </span>
                    <span className="text-gray-300">
                      Modern, responsive, and intuitive user interface
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Key Features</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Everything you need to analyze your team's performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Player Tracking</h3>
            <p className="text-gray-300">
              Automatically track all players on the field across the entire
              match
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Performance Metrics</h3>
            <p className="text-gray-300">
              Distance covered, sprint frequency, average and maximum speeds,
              and more
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              Heatmap Visualizations
            </h3>
            <p className="text-gray-300">
              Visual representation of player movement and team positioning
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Team Management</h3>
            <p className="text-gray-300">
              Create and manage teams, players, and match data in one place
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Match History</h3>
            <p className="text-gray-300">
              Track progress over time with comprehensive match archives
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
              <svg
                className="h-6 w-6 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold">Cloud Storage</h3>
            <p className="text-gray-300">
              Secure storage for all your match videos and analysis data
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to transform your team's performance?
          </motion.h2>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-6 py-16">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet Our Team</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            The talented developers behind FieldStats
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-1 text-xl font-semibold">İsmail Kaan Özer</h3>
            <p className="mb-4 text-gray-400">Developer</p>
            <p className="text-sm text-gray-300">kaan.ozer@ug.bilkent.edu.tr</p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-1 text-xl font-semibold">Rıfat Altaş</h3>
            <p className="mb-4 text-gray-400">Developer</p>
            <p className="text-sm text-gray-300">
              rifat.altas@ug.bilkent.edu.tr
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-1 text-xl font-semibold">Tuna Cuma</h3>
            <p className="mb-4 text-gray-400">Developer</p>
            <p className="text-sm text-gray-300">tuna.cuma@ug.bilkent.edu.tr</p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-1 text-xl font-semibold">Umut Arda Tuncar</h3>
            <p className="mb-4 text-gray-400">Developer</p>
            <p className="text-sm text-gray-300">
              arda.tuncar@ug.bilkent.edu.tr
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-1 text-xl font-semibold">Ahmet Faik Utku</h3>
            <p className="mb-4 text-gray-400">Developer</p>
            <p className="text-sm text-gray-300">faik.utku@ug.bilkent.edu.tr</p>
          </motion.div>

          <motion.div
            className="rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-1 text-xl font-semibold">
              Shervin Rahimzadeh Arashloo
            </h3>
            <p className="mb-4 text-gray-400">Supervisor</p>
            <p className="text-sm text-gray-300">Bilkent University</p>
          </motion.div>
        </div>
      </section>

      {/* GitHub Repositories */}
      <section id="repositories" className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Open Source Repositories
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Explore our public repositories and see what powers FieldStats
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.a
              href="https://github.com/FieldStats/GoogleCloudInstance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">GoogleCloudInstance</h3>
                  <p className="text-gray-400">Python</p>
                </div>
              </div>
              <p className="text-gray-300">
                Configuration and scripts for the Google Cloud VM that runs our
                video processing pipeline.
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/FieldStats/algorithms-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">algorithms-backend</h3>
                  <p className="text-gray-400">Python</p>
                </div>
              </div>
              <p className="text-gray-300">
                Backend API and processing algorithms for video analysis,
                including YOLO detection and ByteTrack integration.
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/FieldStats/Website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Website</h3>
                  <p className="text-gray-400">TypeScript</p>
                </div>
              </div>
              <p className="text-gray-300">
                Next.js frontend for the FieldStats platform, featuring
                responsive design and interactive visualizations.
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/FieldStats/backblaze-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">backblaze-sdk</h3>
                  <p className="text-gray-400">Python</p>
                </div>
              </div>
              <p className="text-gray-300">
                Custom SDK for interacting with Backblaze B2 cloud storage,
                handling video and analysis file uploads.
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/FieldStats/LocalPanel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">LocalPanel</h3>
                  <p className="text-gray-400">C#</p>
                </div>
              </div>
              <p className="text-gray-300">
                Unity-based tool for manual tracking correction and validation,
                providing an interactive interface for data refinement.
              </p>
            </motion.a>

            <motion.a
              href="https://github.com/FieldStats/Algorithms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-750 rounded-lg border border-gray-700 bg-gray-800 p-6 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Algorithms</h3>
                  <p className="text-gray-400">Python</p>
                </div>
              </div>
              <p className="text-gray-300">
                Core tracking and analysis algorithms, including homography
                transformation and metric calculation functions.
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Start analyzing your matches today
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-2xl text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join teams across Turkey and beyond who are using FieldStats to gain
            a competitive edge through affordable, accessible analytics.
          </motion.p>
          <motion.div
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://app.fieldstats.pro"
              className="rounded-lg bg-white px-8 py-3 text-lg font-bold text-green-600 hover:bg-gray-100"
            >
              Sign Up
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="mb-8 md:mb-0">
              <div className="mb-4 text-2xl font-bold text-green-400">
                FieldStats
              </div>
              <p className="max-w-xs text-gray-400">
                Making professional-grade football analytics accessible to teams
                at all levels.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#features"
                      className="text-gray-400 hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#technology"
                      className="text-gray-400 hover:text-white"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="text-gray-400 hover:text-white">
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#repositories"
                      className="text-gray-400 hover:text-white"
                    >
                      Repositories
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">Repositories</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/FieldStats/GoogleCloudInstance"
                      className="text-gray-400 hover:text-white"
                    >
                      GoogleCloudInstance
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/FieldStats/algorithms-backend"
                      className="text-gray-400 hover:text-white"
                    >
                      algorithms-backend
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/FieldStats/Website"
                      className="text-gray-400 hover:text-white"
                    >
                      Website
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/FieldStats/Algorithms"
                      className="text-gray-400 hover:text-white"
                    >
                      Algorithms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <p className="mb-4 text-sm text-gray-400 md:mb-0">
              &copy; 2025 FieldStats. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FieldStatsLanding;
