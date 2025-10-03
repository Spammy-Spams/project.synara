javascript
import React, { useState } from "react";
import { motion } from "framer-motion";
import ButterflySVG from "./components/ButterflySVG";
import SynapseSVG from "./components/SynapseSVG";
import MoonSVG from "./components/MoonSVG";
import "./styles.css";

export default function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="min-h-screen flex flex-col items-center text-center p-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ButterflySVG className="w-12 h-12 text-purple-300" />
        </motion.div>
        <nav className="space-x-4">
          <button onClick={() => setSection("home")} className="hover:text-purple-300">Home</button>
          <button onClick={() => setSection("about")} className="hover:text-purple-300">About</button>
          <button onClick={() => setSection("learn")} className="hover:text-purple-300">Learn</button>
        </nav>
      </header>

      {/* Hero */}
      {section === "home" && (
        <motion.div className="flex flex-col items-center mt-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MoonSVG className="w-32 h-32 text-yellow-200 mb-6" />
          <h1 className="text-5xl font-bold">Synara</h1>
          <p className="text-lg text-purple-200 mt-4 max-w-xl">
            A safe place to learn and share about epilepsy — shining light through the eclipse.
          </p>
        </motion.div>
      )}

      {/* About */}
      {section === "about" && (
        <motion.div className="max-w-2xl mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-semibold mb-4">About Epilepsy</h2>
          <p className="text-lg text-gray-300">
            Epilepsy is a neurological condition affecting millions worldwide. Our goal is to bring awareness, compassion, and accessible resources to those who live with it.
          </p>
        </motion.div>
      )}

      {/* Learn */}
      {section === "learn" && (
        <motion.div className="max-w-2xl mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-semibold mb-4">Learn More</h2>
          <ul className="list-disc text-left text-gray-300 space-y-2">
            <li>Epilepsy is not the same for everyone — seizures vary in type and severity.</li>
            <li>Triggers can include lack of sleep, stress, and flashing lights.</li>
            <li>Support, understanding, and awareness make a huge difference.</li>
          </ul>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="mt-auto py-6 text-gray-400">
        <SynapseSVG className="w-10 h-10 mx-auto mb-2" />
        <p>© 2025 Synara. All rights reserved.</p>
      </footer>
    </div>
  );
}
