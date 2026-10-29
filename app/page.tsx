import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";

const skillGroups = [
  {
    title: "DevOps & Cloud",
    color: "emerald" as const,
    skills: [
      "Linux",
      "Shell Scripting",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Terraform",
      "AWS",
      "Nginx",
      "Git & GitHub",
    ],
  },
  {
    title: "Monitoring & Observability",
    color: "amber" as const,
    skills: ["Prometheus", "Grafana", "PromQL", "Alerting"],
  },
  {
    title: "Software Development",
    color: "sky" as const,
    skills: ["Python", "JavaScript", "TypeScript", "Node.js", "React", "Next.js", "ASP.NET Core", "Java"],
  },
  {
    title: "Databases",
    color: "violet" as const,
    skills: ["MongoDB", "MySQL", "Microsoft SQL Server"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── About ── */}
      <section id="about" className="bg-[#0a0f1e] py-24 px-6">
        <div className="mx-auto max-w-4xl">

          {/* Section label */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">About me</p>
          <h2 className="mb-8 text-3xl font-bold text-white">
            From building software to shipping it reliably
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Bio */}
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {/* Headshot + name row */}
              <div className="flex items-center gap-4 mb-2">
                <img
                  src="/images/profile.jpg"
                  alt="Ishini Shavindhya"
                  className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500/30"
                />
                <div>
                  <p className="text-slate-200 font-semibold">Ishini Shavindhya</p>
                  <p className="text-sm text-slate-500">Colombo, Sri Lanka</p>
                </div>
              </div>

              <p>
                I&apos;m a BSc (Hons) IT graduate from{" "}
                <span className="text-slate-200 font-medium">SLIIT</span>, specialised in
                Software Engineering, with internship experience building production
                full-stack systems and APIs.
              </p>
              <p>
                I&apos;m now focused on becoming an{" "}
                <span className="text-indigo-300 font-medium">entry-level DevOps Engineer</span>.
                Keep growing through self-directed learning in CI/CD, containerization,
                Kubernetes and Infrastructure as Code.
              </p>
              <p>
                My software engineering background helps me work closely with developers and
                understand the applications I help deliver. I communicate clearly in English
                and Sinhala, and I care about automation, reliability and maintainable
                systems.
              </p>
            </div>

            {/* Quick facts card */}
            <div className="rounded-2xl border border-white/5 bg-[#0d1526] p-6 space-y-4">
              {[
                { label: "Degree", value: "BSc (Hons) IT - Software Engineering" },
                { label: "University", value: "SLIIT, Malabe" },
                { label: "Graduation", value: "2026" },
                { label: "Location", value: "Colombo, Sri Lanka" },
                { label: "Seeking", value: "Entry-level DevOps Engineer" },
                { label: "Languages", value: "English · Sinhala" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-slate-500">{label}</span>
                  <span className="text-sm text-slate-200 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills" className="bg-[#080d1a] py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">Skills</p>
          <h2 className="mb-10 text-3xl font-bold text-white">What I work with</h2>

          <div className="space-y-8">
            {skillGroups.map(({ title, color, skills }) => (
              <div key={title}>
                <p className="mb-3 text-sm font-semibold text-slate-300">{title}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <SkillBadge key={s} label={s} color={color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}