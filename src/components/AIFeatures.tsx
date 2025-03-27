"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-16 md:py-24 bg-gradient-to-b from-light to-white">
      <div className="container">
        <div className="mb-8 flex flex-col items-start">
          <div className="w-16 h-1 bg-primary mb-3 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 relative">AI-Powered Intelligence</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Well Read leverages artificial intelligence to enhance your reading experience and help you learn more effectively.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-2xl self-start">
                  <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                    <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Summaries</h3>
                  <p className="text-gray-600">
                    Generate customised summaries based on your content type - whether you're reading fiction, non-fiction, technical documents, news articles, academic papers, or educational materials.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-2xl self-start">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 4H6C4.9 4 4 4.9 4 6v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z" />
                    <path d="M7.5 13h2v2H11v-2h2v-1.5h-2v-2H9.5v2h-2V13zm8 2h-4v-1.5h4V15z" />
                    <path d="M15 9h-4V7.5h4V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reading Recap</h3>
                  <p className="text-gray-600">
                    Never lose track of your reading progress. When returning to a book after a break, the AI provides a personalised recap of what you've already read, helping you quickly refresh your memory before continuing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-2xl self-start">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Quiz Generation</h3>
                  <p className="text-gray-600">
                    Create custom quizzes from any text you're reading. Choose the number of questions and test your comprehension with automatically generated multiple-choice questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-2xl self-start">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Track Learning Progress</h3>
                  <p className="text-gray-600">
                    Keep track of your quiz scores and comprehension metrics to see how well you understand different reading materials over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white max-w-xs mx-auto">
                <div className="aspect-[9/19.5] relative overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-full w-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4">Smart Summaries</h3>
                      <p className="text-gray-600">Get customized summaries for any content type</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 