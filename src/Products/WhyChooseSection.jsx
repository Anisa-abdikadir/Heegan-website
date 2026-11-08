import React from "react";
import { Zap, Shield, Users, Database } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-fast performance with 99.9% uptime guarantee",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in collaboration tools for seamless teamwork",
  },
  {
    icon: Database,
    title: "Smart Data Management",
    description: "Intelligent data organization and automated backups",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-cyan-400 bg-cyan-100 px-4 py-1 text-xs font-medium text-slate-800">
            Why You Choose
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-5xl font-bold tracking-tight text-[#0f1f3d]">
          Why Choose Our Products?
        </h2>
        <p className="mt-3 text-center text-sm text-slate-500">
          Built with the latest technology and best practices in mind
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-blue-50/70 p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-400">
                <Icon className="h-5 w-5 text-white" strokeWidth={2} />
              </div>

              <h3 className="mt-6 text-base font-semibold text-[#0f1f3d]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}