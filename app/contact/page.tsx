"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — opens the user's email client with prefilled content.
    // Swap this for an EmailJS / Formspree call later if you want it to send silently.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:ishinishavindhya@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="min-h-screen bg-[#0a0f1e] px-6 pt-32 pb-24">
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Contact
        </p>
        <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
          Let&apos;s talk
        </h1>
        <p className="mb-10 text-slate-400 leading-relaxed">
          Hiring for an internship, or just want to connect? Send a message below
          or reach me directly through email or LinkedIn.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about the opportunity..."
              className="w-full resize-none rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            Send Message
          </button>

          {sent && (
            <p className="text-center text-sm text-emerald-400">
              Opening your email client… if nothing happens, email me directly below.
            </p>
          )}
        </form>

        {/* Direct links */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/5 pt-8 text-sm">
          <a
            href="mailto:ishinishavindhya@gmail.com"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            ✉️ ishinishavindhya@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/ishini-shavindhya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            🔗 linkedin.com/in/ishini-shavindhya
          </a>
          <a
            href="https://github.com/ishini21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors"
          >
            💻 github.com/ishini21
          </a>
        </div>
      </div>
    </section>
  );
}
