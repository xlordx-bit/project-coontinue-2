import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Book, Terminal, Brain } from 'lucide-react';

export function LearnPage() {
  const learningPaths = [
    {
      title: "Web Development",
      icon: Code2,
      description: "Master HTML, CSS, JavaScript, and modern frameworks",
      topics: ["HTML5 & CSS3", "JavaScript ES6+", "React", "Node.js"]
    },
    {
      title: "Data Structures",
      icon: Brain,
      description: "Understanding fundamental computer science concepts",
      topics: ["Arrays & Objects", "Trees & Graphs", "Algorithms", "Big O Notation"]
    },
    {
      title: "Backend Development",
      icon: Terminal,
      description: "Build robust server-side applications",
      topics: ["API Design", "Database Management", "Security", "Performance"]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Learning Paths</h2>
          <p className="text-xl text-gray-300">Choose your journey in software development</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {learningPaths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 hover:bg-gray-700/50 transition-colors"
            >
              <path.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{path.title}</h3>
              <p className="text-gray-300 mb-6">{path.description}</p>
              <ul className="space-y-2">
                {path.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <Book className="h-4 w-4 text-orange-500" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}