import {
  FaLightbulb,
  FaUsers,
  FaHandshake,
  FaAward,
  FaCheck,
} from "react-icons/fa6";

const values = [
  {
    title: "Innovation",
    text: "We use new ideas and modern tech to create better solutions.",
    icon: FaLightbulb,
  },
  {
    title: "Customer Focus",
    text: "We put client needs first to deliver real business value.",
    icon: FaUsers,
  },
  {
    title: "Integrity",
    text: "We work honestly and responsibly in every project we handle.",
    icon: FaHandshake,
  },
  {
    title: "Excellence",
    text: "We aim for high quality and always improve our work.",
    icon: FaAward,
  },
];

export default function OurValues() {
  return (
    <section className="bg-white px-5 py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">

        {/* Left Side - Content */}
        <div>
          <span className="inline-flex items-center rounded-full border border-[#35b9eb] bg-[#CFEEFA] px-3 py-1 text-[10px] font-semibold text-[#0F284D]">
            Our Core Values
          </span>

          <h2 className="mt-4 text-2xl font-bold text-[#0F284D] sm:text-3xl lg:text-4xl">
            The Values That Define Who We Are
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#434153]">
            At Heegan Technology, our values guide everything we do.
            They shape how we work, serve our clients, and create
            innovative technology solutions that make a difference.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Innovation in technology solutions",
              "Commitment to customer satisfaction",
              "Honesty and transparency in every project",
              "Excellence in everything we deliver",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[#434153]"
              >
                <div className="rounded-full bg-[#EAF8FD] p-2">
                  <FaCheck className="text-sm text-[#35b9eb]" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Values Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {values.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl bg-[#EAF8FD] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* React Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                <Icon className="text-xl text-[#35B9EB]" />
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#0F284D]">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#434153]">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}