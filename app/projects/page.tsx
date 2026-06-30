import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Unified Pet Care Ecosystem - AI Nutrition Engine",
    featured: true,
    description:
      "Final year research project: an AI-driven pet nutrition and diet recommendation system that generates personalized, adaptive meal plans for cats and dogs.",
    bullets: [
      "Compared CatBoost, Random Forest, XGBoost & LightGBM CatBoost selected for best accuracy and native categorical handling",
      "Multi-output regression predicting protein, carbs, fats, calories, and meals/day from breed, age, weight, activity level & health conditions",
      "Real-time alerts for harmful foods and nutritional imbalances, built into a mobile-first meal planning flow",
      "Dataset and system outputs clinically validated by licensed veterinary professionals",
      "Architecture: Mobile/Web UI → FastAPI backend → CatBoost model → diet generation engine",
    ],
    tech: ["Python", "CatBoost", "FastAPI", "Machine Learning", "Flutter", "Nodejs","MongoDB"],
    repos: [
      { label: "ML Service", url: "https://github.com/hxshan/Pet_Nutrition_Service.git" },
      { label: "Backend", url: "https://github.com/hxshan/Pet_Backend.git" },
      { label: "Mobile App", url: "https://github.com/hxshan/Pet_Owner_Mobile.git" },
    ],
    gradient: "bg-gradient-to-br from-rose-600/30 via-pink-900/30 to-[#0d1526]",
    images: [
      "/images/pet-nutrition-1.jpeg",
      "/images/pet-nutrition-2.jpeg",
      "/images/pet-nutrition-3.jpeg",
    ],
  },
  {
    title: "Personal Finance Tracker (RESTful API)",
    description:
      "A secure RESTful API for managing personal finances built as my 3rd year individual project.",
    bullets: [
      "JWT-based authentication with role-based access (Admin & Regular User)",
      "Tag-based filtering, recurring transactions with reminders, and auto-savings",
      "Multi-currency support via a 3rd party exchange rate API",
      "Personalized dashboards with real-time budget & spending alerts",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/ishini21",
    gradient: "bg-gradient-to-br from-indigo-600/40 via-indigo-900/40 to-[#0d1526]",
  },
  {
    title: "Full Stack Food Delivery App",
    description:
      "A complete food ordering platform with live order tracking and secure payments.",
    bullets: [
      "User authentication, cart functionality, and Stripe payment integration",
      "Real-time order tracking and status updates for users & admins",
      "Responsive UI built with React and custom CSS",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/ishini21",
    gradient: "bg-gradient-to-br from-emerald-600/40 via-emerald-900/40 to-[#0d1526]",
  },
  {
    title: "Online Supplier Management Web App",
    description:
      "A 2nd year group project a single system to manage suppliers, orders, and stock.",
    bullets: [
      "Live stock updates and automated ordering processes",
      "MVC architecture for clean separation of concerns",
    ],
    tech: ["Java (MVC)", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ishini21",
    gradient: "bg-gradient-to-br from-violet-600/40 via-violet-900/40 to-[#0d1526]",
  },
  {
    title: "Hotel Reservation System for Weddings",
    description:
      "A 1st year group project a web platform for booking wedding venues.",
    bullets: [
      "Streamlined availability checks, reservations, and payments",
      "Admin controls for bookings, pricing, and customer data",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/ishini21",
    gradient: "bg-gradient-to-br from-amber-600/40 via-amber-900/40 to-[#0d1526]",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#0a0f1e] px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Projects
        </p>
        <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
          Things I&apos;ve built
        </h1>
        <p className="mb-12 max-w-2xl text-slate-400 leading-relaxed">
          A mix of full-stack apps and APIs from my degree,stronger projects in progress as I keep building. Source code and
          full details are on GitHub for each one below.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Placeholder for upcoming projects */}
        <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-[#0d1526]/50 p-8 text-center">
          {/* <p className="text-sm text-slate-500">
            🚧 2 more projects coming soon — including a DevOps-focused build.
          </p> */}
        </div>
      </div>
    </section>
  );
}