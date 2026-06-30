import SkillBadge from "./SkillBadge";

export interface RepoLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
  /** Single repo link — use this OR `repos` for multiple */
  github?: string;
  /** Multiple repo links, e.g. for microservice/mobile + backend split */
  repos?: RepoLink[];
  live?: string;
  /** Tailwind gradient classes used as placeholder until you add a real image */
  gradient: string;
  /** Single screenshot path */
  image?: string;
  /** Multiple screenshots — shown as a strip of mobile screens */
  images?: string[];
  featured?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  const hasMultipleImages = project.images && project.images.length > 0;

  return (
    <div
      className={`group flex flex-col rounded-2xl border bg-[#0d1526] overflow-hidden transition-colors duration-300 ${
        project.featured
          ? "border-indigo-500/30 hover:border-indigo-400/50 md:col-span-2"
          : "border-white/5 hover:border-indigo-500/30"
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="flex items-center gap-2 bg-indigo-500/10 px-6 py-2 border-b border-indigo-500/20">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Featured · Final Year Research Project
          </span>
        </div>
      )}

      {/* Thumbnail(s) */}
      {hasMultipleImages ? (
        <div className={`relative w-full overflow-hidden ${project.gradient} p-6`}>
          <div className="flex justify-center gap-4 overflow-x-auto">
            {project.images!.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="h-64 w-auto rounded-xl border border-white/10 object-cover shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`relative h-48 w-full overflow-hidden ${project.gradient}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              <span className="text-3xl font-bold text-white/15 tracking-wide">
                {project.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              {/* <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] font-medium text-white/40 backdrop-blur-sm">
                Not currently deployed
              </span> */}
            </div>
          )}
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm text-slate-400 leading-relaxed">{project.description}</p>

        {/* Bullet highlights */}
        <ul className="mb-5 space-y-1.5">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-400">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
              {b}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <SkillBadge key={t} label={t} color="indigo" />
          ))}
        </div>

        {/* Links — push to bottom */}
        <div className="mt-auto flex flex-wrap gap-3">
          {project.repos ? (
            project.repos.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] rounded-lg border border-white/10 py-2 text-center text-sm font-medium text-slate-300 transition-colors hover:border-indigo-500/40 hover:text-white"
              >
                {repo.label} →
              </a>
            ))
          ) : (
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg border border-white/10 py-2 text-center text-sm font-medium text-slate-300 transition-colors hover:border-indigo-500/40 hover:text-white"
              >
                GitHub →
              </a>
            )
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-indigo-600 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}