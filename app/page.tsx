import Hero from "@/components/Hero";
import SkillBadge from "@/components/SkillBadge";

const skillGroups = [
  {
    title: "Frontend",
    color: "sky" as const,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    color: "indigo" as const,
    skills: ["Node.js", "Express.js", "ASP.NET", "C#", "PHP", "Python", "Java"],
  },
  {
    title: "Databases",
    color: "violet" as const,
    skills: ["MongoDB", "MySQL", "Microsoft SQL Server"],
  },
  {
    title: "DevOps & Tools",
    color: "emerald" as const,
    skills: ["Docker", "Git", "Linux", "Shell Scripting", "Visual Studio Code","Figma"],
  },
  {
    title: "Currently Learning",
    color: "amber" as const,
    skills: ["Kubernetes", "Ansible", "Terraform", "Prometheus", "Grafana", "CI/CD"],
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
            The person behind the code
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
                I&apos;m a fresh BSc (Hons) IT graduate from{" "}
                <span className="text-slate-200 font-medium">SLIIT</span>, specialised in
                Software Engineering. Over four years I built everything from REST APIs and
                full-stack MERN apps.
              </p>
              <p>
                Right now I&apos;m seeking a{" "}
                <span className="text-indigo-300 font-medium">Software Engineering internship</span>{" "}
                where I can contribute to real products and grow with a team. In parallel, I&apos;m
                working through a structured DevOps curriculum (Linux → Docker → Kubernetes →
                Ansible/Terraform).
              </p>
              <p>
                I communicate clearly in both English and Sinhala,care about writing code that is readable and maintainable.
              </p>
            </div>

            {/* Quick facts card */}
            <div className="rounded-2xl border border-white/5 bg-[#0d1526] p-6 space-y-4">
              {[
                { label: "Degree", value: "BSc (Hons) IT - Software Engineering" },
                { label: "University", value: "SLIIT, Malabe" },
                { label: "Graduation", value: "2026" },
                { label: "Location", value: "Colombo, Sri Lanka" },
                { label: "Seeking", value: "SE Internship" },
                // { label: "Next goal", value: "DevOps Engineer (4–5 months)" },
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