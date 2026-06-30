"use client";

import { useEffect, useState } from "react";

const roles = ["Software Engineer", "Full Stack Developer", "DevOps Learner"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex((c) => c + 1); }, 60);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex)); setCharIndex((c) => c - 1); }, 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e] px-6 pt-24">
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="relative z-10 max-w-3xl w-full">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
          </span>
          Open to SE Internships
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Ishini</span>
        </h1>

        <div className="h-12 mb-6 flex items-center">
          <span className="text-2xl sm:text-3xl font-semibold text-slate-300">
            {displayed}
            <span className="ml-0.5 inline-block w-0.5 h-7 bg-indigo-400 align-middle animate-pulse" />
          </span>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-3">
          BSc (Hons) IT graduate from{" "}
          <span className="text-slate-200 font-medium">SLIIT</span>, specialised in Software Engineering.
          I build full-stack web apps and RESTful APIs and I&apos;m actively levelling up in{" "}
          <span className="text-indigo-300 font-medium">DevOps &amp; Cloud (Linux → Docker → K8s)</span>{" "}
          
        </p>

        <div className="mb-10 max-w-xs">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>DevOps Learning Path</span>
            <span className="text-indigo-400">~38%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: "38%" }} />
          </div>
          <p className="text-xs text-slate-600 mt-1">Linux · Shell scripting · Docker → Ansible · K8s</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <a href="/projects" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/25">
            View My Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors">
            Download Resume ↓
          </a>
          <a href="https://github.com/ishini21" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors">
            GitHub →
          </a>
        </div>

        <div className="flex items-center gap-6 text-slate-500 text-sm">
          <a href="https://linkedin.com/in/ishini-shavindhya" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <span className="w-px h-4 bg-slate-700" />
          <a href="mailto:ishinishavindhya@gmail.com" className="hover:text-indigo-400 transition-colors">ishinishavindhya@gmail.com</a>
        </div>
      </div>
    </section>
  );
}