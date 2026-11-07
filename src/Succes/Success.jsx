// ProjectsSection.jsx
import { FiArrowUpRight } from "react-icons/fi";
import { assets } from "../assets/assets";
import { TiTick } from "react-icons/ti";
import SectionHeader from "../components/SectionHeader"


const projects = [
  {
    id: 1,
    featured: true,
    category: "System",
    title: "SOMECO ERP System",
    desc: "SOMECO ERP System is a centralized business management platform designed to help SOMECO manage its daily operations from one place. The system brings together key areas such as customers, orders, payments, expenses, HR.",
    tags: ["Payroll Accounting", "Expense Management", "Attendance Human Resources"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000", // beddel sawirkaaga
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
    desc: "Sarmaan Coffee App is a simple and convenient mobile app designed to make ordering your favorite coffee and drinks easier.",
    image: "https://assets.heegantechnology.com/heegan/case-studies/1787053340758-5410bb62-fa4e-48c5-8dbe-22ffd6b32c53.png", 
  },
  {
    id: 4,
    category: "A2Z Sports House App",
    title: "A2Z Sports House App",
    desc: "A2Z Sports House App is a modern sports shopping platform designed to make it easy for customers to discover, browse, and purchase sportswear, footwear, equipment, and accessories.",
    image:"https://assets.heegantechnology.com/heegan/case-studies/1787053278699-a3b59e87-6945-4c48-8012-d4cf46216ed6.png",
  },
];

// Circle button: hover kasta wuu buuxiyaa midabka buluugga
function CircleButton({ className = "" }) {
  return (
    <button
      aria-label="Open project"
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#35b9eb] text-[#35b9eb] transition-all duration-300 group-hover:bg-[#35b9eb]  group-hover:text-white ${className}`}
    >
      <FiArrowUpRight size={18} />
    </button>
  );
}

function FeaturedCard({ project }) {
  return (
    <div className=" grid overflow-hidden rounded-2xl border mt-8 border-gray-200 bg-white md:grid-cols-2">
      {/* Sawirka */}
      <div className="overflow-hidden bg-gray-50 p-6">
        <img
          src={assets.laptop}
          alt=""
          className="h-full w-full rounded-xl object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Qoraalka */}
      <div className="relative flex flex-col p-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#35b9eb]">
          {project.category}
        </span>

        <h1 className="mt-3 text-2xl font-bold text-black transition-colors duration-300 hover:text-[#35b9eb]">
          {project.title}
        </h1>

        <p className="mt-4 text-sm leading-7  text-[#434153]">{project.desc}</p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-gray-200 pt-5">
          {project.tags.map((tag) => (
            <li key={tag} className="flex items-center gap-2 text-xs font-medium">
              <div className="px-2 py-2 rounded-full bg-[#EBF8FE]" ><TiTick  className="text-[#35b9eb] "/></div>
              {tag}
            </li>
          ))}
        </ul>

        <CircleButton className="absolute bottom-6 border-none bg-sky-300 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#35b9eb] hover:shadow-2xl hover:bg-sky-300 right-6 text-white" />
      </div>
    </div>
  );
}

// Kaarka yar
function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border  border-gray-200 b transition-all duration-300 hover:border-[#35b9eb] hover:shadow-lg">
      {/* Sawirka */}
      <div className="overflow-hidden bg-gray-50 p-4">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-4/3 w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Qoraalka */}
      <div className="relative flex flex-1 flex-col p-5 pb-6">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black">
          {project.category}
        </span>

        <h3 className="mt-2 text-base font-bold text-black transition-colors duration-300 group-hover:text-[#35b9eb]">
          {project.title}
        </h3>

        <p className="mt-2 pr-12 text-xs leading-6 text-[#434153]">{project.desc}</p>

        <CircleButton className="absolute bottom-5 right-5" />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="bg-white px-6 py-16">
        <section className="">
      <SectionHeader
        badge="Our Services"
        title="Transforming Ideas into Reality"
        description="Heegan Technology provides advanced, industry-specific platforms designed to improve efficiency, automate workflows, and drive business success."
      />
    </section>
      <div className="mx-auto max-w-5xl space-y-6">
        {featured && <FeaturedCard project={featured} />}

        <div className="grid gap-6 md:grid-cols-3">
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}