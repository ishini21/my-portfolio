type BadgeColor = "indigo" | "violet" | "sky" | "emerald" | "amber" | "slate";

interface SkillBadgeProps {
  label: string;
  color?: BadgeColor;
}

const colorMap: Record<BadgeColor, string> = {
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  sky:    "bg-sky-500/10    text-sky-300    border-sky-500/20",
  emerald:"bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  amber:  "bg-amber-500/10  text-amber-300  border-amber-500/20",
  slate:  "bg-slate-500/10  text-slate-300  border-slate-500/20",
};

export default function SkillBadge({ label, color = "slate" }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colorMap[color]}`}
    >
      {label}
    </span>
  );
}
