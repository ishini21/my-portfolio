
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  // 1. End-to-End CI/CD Pipeline on AWS
  {
    title: "End-to-End CI/CD Pipeline on AWS",
    description:
      "Designed and implemented an automated CI/CD pipeline for a containerized React and Node.js application using Jenkins, Docker, GitHub, and AWS EC2.",
    bullets: [
      "Automated the workflow from GitHub push and testing to Docker image building, Docker Hub publishing, deployment, and health verification.",
      "Designed a multi-server AWS architecture with separate EC2 instances for Jenkins and application deployment.",
      "Implemented Jenkins Pipeline as Code, GitHub Webhooks, and versioned Docker images using Jenkins build numbers.",
      "Automated remote deployments using SSH and Docker Compose.",
      "Configured Nginx as a reverse proxy between the React frontend and Node.js backend using Docker networking.",
      "Managed deployment credentials with Jenkins Credentials and added post-deployment health checks.",
    ],
    tech: [
      "AWS EC2",
      "Jenkins",
      "Docker",
      "Docker Compose",
      "Docker Hub",
      "GitHub",
      "Linux",
      "Nginx",
      "Git",
      "SSH",
      "React",
      "Node.js",
      "Jest",
    ],
    github: "https://github.com/ishini21/devops-cicd-pipeline",
    gradient:
      "bg-gradient-to-br from-blue-600/40 via-blue-900/40 to-[#0d1526]",
  },

  // 2. AWS Infrastructure Automation with Terraform
  {
    title: "AWS Infrastructure Automation with Terraform",
    description:
      "Automated AWS infrastructure provisioning using Terraform and Infrastructure as Code (IaC), with reusable modules and remote state management.",
    bullets: [
      "Provisioned a VPC, public subnet, Internet Gateway, route table, security group, EC2 instance, and S3 bucket.",
      "Created reusable Terraform networking and S3 modules using variables and outputs.",
      "Used an AWS data source to retrieve the latest Amazon Linux 2023 AMI dynamically.",
      "Configured remote Terraform state in Amazon S3 with versioning, server-side encryption, public-access protection, and state locking.",
      "Separated remote-state bootstrap configuration from the main infrastructure configuration.",
      "Validated and deployed infrastructure using terraform init, validate, plan, and apply.",
      "Used Git and excluded Terraform state files, local variable files, and .terraform directories from version control.",
    ],
    tech: [
      "Terraform",
      "AWS",
      "VPC",
      "EC2",
      "S3",
      "IAM",
      "Git",
      "Infrastructure as Code",
    ],
    github: "https://github.com/ishini21/terraform-aws-infrastructure",
    gradient:
      "bg-gradient-to-br from-orange-600/40 via-amber-900/40 to-[#0d1526]",
  },

  // 3. Monitoring & Logging Stack for a Sample App
  {
    title: "Monitoring & Logging Stack for a Sample App",
    description:
      "Built a containerized Python application and deployed it to Kubernetes with Prometheus monitoring, Grafana dashboards, and application alerting.",
    bullets: [
      "Containerized a Flask application using Docker and deployed it to a Minikube Kubernetes cluster using Deployments and Services.",
      "Configured Prometheus to collect application metrics and used PromQL to analyze request rates, HTTP 500 errors, and response durations.",
      "Built Grafana dashboards to visualize application traffic, error rates, response times, and endpoint-level request counts.",
      "Created and tested a Prometheus alert for a sustained HTTP 500 error rate.",
      "Practiced Kubernetes health checks, Pod recovery, and troubleshooting application monitoring.",
    ],
    tech: [
      "Docker",
      "Kubernetes",
      "Minikube",
      "Prometheus",
      "PromQL",
      "Grafana",
      "Python",
      "Flask",
      "YAML",
    ],
    github: "https://github.com/ishini21/monitoring-logging-stack",
    gradient:
      "bg-gradient-to-br from-emerald-600/40 via-teal-900/40 to-[#0d1526]",
  },

  // 4. Final Year Research Project
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
    tech: [
      "Python",
      "CatBoost",
      "FastAPI",
      "Machine Learning",
      "Flutter",
      "Nodejs",
      "MongoDB",
    ],
    repos: [
      {
        label: "ML Service",
        url: "https://github.com/hxshan/Pet_Nutrition_Service.git",
      },
      {
        label: "Backend",
        url: "https://github.com/hxshan/Pet_Backend.git",
      },
      {
        label: "Mobile App",
        url: "https://github.com/hxshan/Pet_Owner_Mobile.git",
      },
    ],
    gradient:
      "bg-gradient-to-br from-rose-600/30 via-pink-900/30 to-[#0d1526]",
    images: [
      "/images/pet-nutrition-1.jpeg",
      "/images/pet-nutrition-2.jpeg",
      "/images/pet-nutrition-3.jpeg",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#0a0f1e] px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">
          Projects
        </p>

        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Things I&apos;ve built
        </h1>

        <p className="mb-12 max-w-2xl leading-relaxed text-slate-400">
          From cloud infrastructure and CI/CD automation to Kubernetes
          monitoring and AI-powered applications, these projects showcase
          my software engineering and growing DevOps skills. Explore the
          source code and implementation details on GitHub.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
