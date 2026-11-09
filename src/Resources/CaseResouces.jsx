
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../assets/assets";
import { TiTick } from "react-icons/ti";
import SectionHeader from "../components/SectionHeader";

const projects = [
  {
    id: 1,
    featured: true,
    category: "System",
    title: "SOMECO ERP System",
    desc: "SOMECO ERP System is a centralized business management platform designed to help SOMECO manage its daily operations from one place. The system brings together customers, orders, payments, expenses, HR and more.",
    tags: [
      "Payroll Accounting",
      "Expense Management",
      "Attendance",
      "Human Resources",
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000",
  },
  {
    id: 2,
    category: "System",
    title: "PrimeVisa Application Center System",
    desc: "A complete system for managing visa applications, documents and customer status from start to finish.",
    image: "https://assets.heegantechnology.com/heegan/case-studies/1787053435225-8955f619-1280-49b8-93da-e3faf90640b0.png",
  },
  {
    id: 3,
    category: "Mobile App",
    title: "Sarmaan Coffee App",
    desc: "A simple and convenient mobile app designed to make ordering your favorite coffee and drinks easier.",
    image: "https://assets.heegantechnology.com/heegan/case-studies/1787053340758-5410bb62-fa4e-48c5-8dbe-22ffd6b32c53.png",
  },
  {
    id: 4,
    category: "Mobile App",
    title: "A2Z Sports House App",
    desc: "A modern sports shopping platform designed to help customers discover and purchase sportswear, footwear, equipment and accessories.",
    image: "https://assets.heegantechnology.com/heegan/case-studies/1787053278699-a3b59e87-6945-4c48-8012-d4cf46216ed6.png",
  },
  {
    id: 5,
    category: "Mobile App",
    title: "A2Z Sports Shopping App",
    desc: "An online shopping experience that makes it easier for customers to explore sports products and shop from their mobile devices.",
    image: "https://assets.heegantechnology.com/heegan/case-studies/1787053210450-d175c6aa-32af-46da-8292-443daf3a3e00.png",
  },
  {
    id: 6,
    category: "ERP System",
    title: "Ministry of Climate & Environment ERP",
    desc: "A digital management platform designed to support ministry operations, improve information management and organize institutional workflows.",
    image: "https://assets.heegantechnology.com/heegan/case-studies/1787052626907-37fd4fc7-363d-4534-b940-9897dd05487f.png",
  },
  {
    id: 7,
    category: "Web Application",
    title: "Business Management Platform",
    desc: "A business platform designed to simplify daily operations, organize information and improve team productivity.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000",
  },
  {
    id: 8,
    category: "Web Development",
    title: "Digital Business Website",
    desc: "A modern and responsive website that helps businesses showcase their services, connect with customers and grow their online presence.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
  },
];

// Circle Button
function CircleButton({ className = "" }) {
  return (
    <button
      aria-label="Open project"
      className={`flex h-10 w-10 cursor-pointer shrink-0 items-center justify-center rounded-full border border-[#35b9eb] text-[#35b9eb] transition-all duration-300 group-hover:bg-[#35b9eb] group-hover:text-white ${className}`}
    >
      <FiArrowUpRight size={18} />
    </button>
  );
}

// Featured Card
function FeaturedCard({ project }) {
  return (
    <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-2">
      <div className="overflow-hidden bg-gray-50 p-5 sm:p-6">
        <img
          src={project.image}
          alt={project.title}
          className="h-full min-h-[260px] w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="relative flex flex-col p-6 sm:p-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#35b9eb]">
          {project.category}
        </span>

        <h2 className="mt-3 text-2xl font-bold text-black transition-colors duration-300 hover:text-[#35b9eb]">
          {project.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#434153]">
          {project.desc}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-gray-200 pt-5 pb-12">
          {project.tags?.map((tag) => (
            <li key={tag} className="flex items-center gap-2 text-xs font-medium">
              <div className="rounded-full bg-[#EBF8FE] p-2">
                <TiTick className="text-[#35b9eb]" />
              </div>
              {tag}
            </li>
          ))}
        </ul>

        <CircleButton className="absolute bottom-6 right-6 border-none bg-sky-300 text-white shadow-lg hover:-translate-y-1 hover:shadow-2xl" />
      </div>
    </div>
  );
}

// Small Project Card
function ProjectCard({ project }) {
  return (
    <div className="group flex min-h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#35b9eb] hover:shadow-lg">
      {/* Image */}
      <div className="overflow-hidden bg-gray-50 p-4">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col p-5 pb-20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#35b9eb]">
          {project.category}
        </span>

        <h3 className="mt-3 text-lg font-bold leading-7 text-black transition-colors duration-300 group-hover:text-[#35b9eb]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#434153]">
          {project.desc}
        </p>

        <CircleButton className="absolute bottom-5 right-5" />
      </div>
    </div>
  );
}

export default function CaseResouces() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
      <SectionHeader
        badge="Case Studies"
        title="Transforming Ideas into Reality"
        description="Heegan Technology provides advanced, industry-specific platforms designed to improve efficiency, automate workflows, and drive business success."
      />

      <div className="mx-auto mt-8 max-w-6xl space-y-6">
        {featured && <FeaturedCard project={featured} />}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
