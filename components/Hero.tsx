
"use client";

import { useEffect, useState } from "react";

const roles = [
  "Aspiring DevOps Engineer",
  "CI/CD & Automation",
  "Docker & Kubernetes",
  "Infrastructure as Code",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const isFullyTyped = !deleting && displayed === currentRole;
    const isFullyDeleted = deleting && displayed === "";

    const timeout = setTimeout(
      () => {
        if (isFullyTyped) {
          setDeleting(true);
          return;
        }

        if (isFullyDeleted) {
          const nextIndex = (roleIndex + 1) % roles.length;

          setRoleIndex(nextIndex);
          setDisplayed("");
          setDeleting(false);
          return;
        }

        if (deleting) {
          setDisplayed(currentRole.slice(0, displayed.length - 1));
        } else {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }
      },
      isFullyTyped ? 1800 : deleting ? 35 : 60
    );

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1e] px-6 pt-24">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="relative z-10 max-w-3xl w-full">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
          </span>
          Open to DevOps Engineer roles
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Ishini
          </span>
        </h1>

        {/* Animated roles */}
        <div className="h-12 mb-6 flex items-center">
          <span className="text-2xl sm:text-3xl font-semibold text-slate-300">
            {displayed}
            <span className="ml-0.5 inline-block w-0.5 h-7 bg-indigo-400 align-middle animate-pulse" />
          </span>
        </div>

        {/* Introduction */}
        <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
          BSc (Hons) IT graduate from{" "}
          <span className="text-slate-200 font-medium">SLIIT</span>,
          specialised in Software Engineering. I&apos;m building a career in{" "}
          <span className="text-indigo-300 font-medium">DevOps</span>,
          automating how software is built, deployed and monitored with Linux,
          Docker, Kubernetes, Terraform, Jenkins and AWS.
        </p>

        {/* Main buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-indigo-600/25"
          >
            View My Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
          >
            Download Resume ↓
          </a>

          <a
            href="https://github.com/ishini21"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-colors"
          >
            GitHub →
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6 text-slate-500 text-sm">
          <a
            href="https://linkedin.com/in/ishini-shavindhya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>

          <span className="w-px h-4 bg-slate-700" />

          <a
            href="mailto:ishinishavindhya@gmail.com"
            className="hover:text-indigo-400 transition-colors"
          >
            ishinishavindhya@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
