import { FaBullseye, FaEye } from "react-icons/fa6";

const stats = [
  { value: "500+", label: "Global Customers" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "150+", label: "Companies Work with" },
  { value: "24/7", label: "Support Available" },
];

const items = [
  {
    title: "Our Mission",
    icon: FaBullseye,
    bg: "bg-[#e8f8fe] border-[#b8e6f8]",
    text: "To democratize enterprise technology by making powerful, scalable solutions accessible to organizations of all sizes. We believe that every business deserves access to world-class technology that drives growth and innovation.",
  },
  {
    title: "Our Vision",
    icon: FaEye,
    bg: "bg-[#eef0fd] border-[#c9cdf3]",
    text: "To democratize enterprise technology by making powerful, scalable solutions accessible to organizations of all sizes. We believe that every business deserves access to world-class technology that drives growth and innovation.",
  },
];

export default function StatsBar() {
  return (

    <div>
          <section className="bg-white px-5 pb-10 pt-12">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-2xl font-bold text-[#0f2440] sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs text-[#434153]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>


 <section className="bg-white px-5 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {items.map(({ title, icon: Icon, bg, text }) => (
          <div
            key={title}
            className={`rounded-2xl border p-8 text-center  ${bg}`}
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#35b9eb] shadow-sm">
              <Icon className="text-lg" />
            </div>
            <h3 className="mt-4 text-base font-bold text-[#0f2440]">{title}</h3>
            <p className="mx-auto mt-3 max-w-sm text-xs leading-6 text-[#434153]">{text}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  
  );
}




