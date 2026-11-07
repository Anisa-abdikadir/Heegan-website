// HeeganPlatforms.jsx
import {
  FaDesktop,
  FaUsers,
  FaCashRegister,
  FaCalculator,
  FaHeartPulse,
  FaBoxesStacked,
  FaHouse,
  FaChartLine,
  FaWallet,
  FaCartShopping,
 
  FaStethoscope,
  FaBuilding,
} from "react-icons/fa6";
import businessIcon from "../assets/business.png";
import healthIcon from "../assets/health.png";
import propertyIcon from "../assets/property.png";
import shidaalIcon from "../assets/shidaal.png";

// Adeegyada ku dhinaca ah. side = "left" (magaca icon-ka ka dambeeya) ama "right" (magaca icon-ka ka hore)
const services = [
  { name: "ERP", icon: FaDesktop, side: "right", position: "right-[29%] top-[35%] sm:left-[15%] sm:top-[37%]" },
  { name: "HR Management", icon: FaUsers, side: "left", position: "right-[1%] top-[35%] sm:right-[7%] sm:top-[37%]" },
  { name: "POS", icon: FaCashRegister, side: "right", position: "left-[1%] top-[57%] sm:left-[16%] sm:top-[59%]" },
  { name: "Accounting", icon: FaCalculator, side: "left", position: "right-[1%] top-[57%] sm:right-[12%] sm:top-[59%]" },
  { name: "Healthcare", icon: FaHeartPulse, side: "right", position: "left-[7%] top-[76%] sm:left-[20%] sm:top-[75%]" },
  { name: "Inventory", icon: FaBoxesStacked, side: "left", position: "right-[5%] top-[76%] sm:right-[20%] sm:top-[76%]" },
];

// Tiles-ka (ShapeBadge)
const tiles = [
  {
    title: "Beec Business",
    icon: businessIcon,
    color: "#31b9ed",
    left: "35%",
    top: "40%",
    rotate: "-rotate-[-110deg]",
  },
  {
    title: "eCilim",
    icon: healthIcon,
    color: "#197b91",
    left: "65%",
    top: "50%",
    rotate: "rotate-[-80deg]",
  },
  {
    title: "True Property",
    icon: propertyIcon,
    color: "#239b64",
    left: "37%",
    top: "59%",
    rotate: "rotate-[60deg]",
  },
  {
    title: "eShidaal",
    icon: shidaalIcon,
    color: "#ed202c",
    left: "59%",
    top: "65%",
    rotate: "-rotate-[40deg]",
  },
  {
    title: "eCaafi",
    icon: FaStethoscope,
    color: "#8bc878",
    left: "47%",
    top: "70%",
    rotate: "-rotate-[-10deg]",
  },
];

// Shape badge: qaabka organic-ka ah, icon, iyo cinwaan
function ShapeBadge({ icon: Icon, title, bgColor, className = "" }) {
  const isImage = typeof Icon === "string";

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <svg
        viewBox="0 0 300 260"
        className="absolute inset-0 h-full w-full drop-shadow-xl"
        preserveAspectRatio="none"
      >
        <path
          d="M 75 20 Q 150 35 225 20 Q 245 25 255 45 L 290 200 Q 300 230 260 240 Q 150 255 40 240 Q 0 230 10 200 L 45 45 Q 55 25 75 20 Z"
          fill={bgColor}
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center justify-center">
        {isImage ? (
          <img
            src={Icon}
            alt={title}
            className="mb-1 h-7 w-7 object-contain sm:h-10 sm:w-10"
          />
        ) : (
          <Icon className="mb-1 text-[22px] text-white sm:text-[28px]" />
        )}

        <h3 className="px-2 text-center text-[8px] font-medium leading-tight tracking-wide text-white sm:text-[11px]">
          {title}
        </h3>
      </div>
    </div>
  );
}
// Phone-ka sare (z-40: wuxuu ka sarreeyaa wareegga)
function PhoneMockup() {
  const dashboardItems = [
    ["90k", "Sales"],
    ["53", "Orders"],
    ["24", "Customers"],
    ["82", "Products"],
  ];
  const dashboardIcons = [FaChartLine, FaWallet, FaCartShopping, FaUsers];

  return (
    <div className="absolute left-1/2 top-[3%] z-40 h-36 w-15.5 -translate-x-1/2 rounded-[11px] border-[3px] border-[#252b35] bg-white p-[3px] shadow-lg sm:h-40 sm:w-[70px]">
      <div className="h-full overflow-hidden rounded-[7px] bg-[#f8fbfd] px-1">
        <div className="flex items-center justify-between text-[5px] font-bold sm:text-[6px]">
          <span className="text-[#1687a7]">●</span>
          <span>9:30</span>
          <span>● ●</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-[6px] font-bold text-slate-800">Dashboard</span>
          <span className="text-[5px] text-slate-400">•••</span>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1">
          {dashboardItems.map(([number, label]) => (
            <div key={label} className="rounded-sm bg-white p-1 shadow-sm">
              <div className="text-[7px] font-bold text-[#28a9d5]">{number}</div>
              <div className="text-[4px] text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-2 flex justify-between">
          {dashboardIcons.map((Icon, index) => (
            <div
              key={index}
              className="flex h-3 w-3 items-center justify-center rounded-sm bg-sky-400 text-white"
            >
              <Icon className="text-[6px]" />
            </div>
          ))}
        </div>

        <div className="mt-2 rounded-sm bg-white p-1">
          <p className="text-[5px] font-bold text-gray-600">Statistics</p>
          <svg viewBox="0 0 100 35" className="mt-1 w-full">
            <path
              d="M0 29 L12 20 L25 25 L38 8 L50 19 L65 10 L78 18 L90 4 L100 9"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <path
              d="M0 29 L12 20 L25 25 L38 8 L50 19 L65 10 L78 18 L90 4 L100 9 L100 35 L0 35Z"
              fill="#38bdf8"
              opacity=".12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Magaca adeega ku dhinaca ah (bidix: magac ka dambeeya, midig: magac ka hore)
function Service({ service }) {
  const Icon = service.icon;
  const isLeft = service.side === "left";

  return (
    <div
      className={`absolute z-40 flex items-center gap-1.5 text-[9px]   leading-tight text-[#167b92] sm:gap-2 sm:text-xs ${service.position}`}
    >
      {!isLeft && (
        <span className="max-w-21.25 text-left font-medium sm:max-w-none">{service.name}</span>
      )}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1B6E84] text-white shadow-sm sm:h-15 sm:w-15">
        <Icon className="text-[12px] sm:text-2xl" />
      </div>
      {isLeft && (
        <span className="max-w-21.25 text-right font-medium sm:max-w-none">{service.name}</span>
      )}
    </div>
  );
}

export default function HeeganPlatforms() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-12">
      <div className="relative mx-auto h-140 w-full max-w-225 sm:h-150">
        {/* Wareegyada (z-0: ugu hoosa) */}
                {/* Outer Circle - Biggest */}
                <div className="absolute left-1/2 top-[47%]
                h-125 w-125
                -translate-x-1/2 -translate-y-1/2
                rounded-full border border-slate-200"
                />       
                 <div className="absolute left-1/2 top-[47%] h-70 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 sm:h-90 sm:w-90" />
        <div className="absolute left-1/2 top-[47%] h-42.5 w-42.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 sm:h-57 sm:w-57" />

        {/* Tiles-ka ShapeBadge (z-20) */}
        {tiles.map((tile) => (
          <div
            key={tile.title}
            className="absolute z-20 h-16 w-20 -translate-x-1/2 -translate-y-1/2 sm:h-30 sm:w-28"
            style={{ left: tile.left, top: tile.top }}
          >
            <ShapeBadge icon={tile.icon} title={tile.title} bgColor={tile.color} className={tile.rotate} />
          </div>
        ))}

        {/* Wareegga dhexe (z-30: dul sar tiles-ka) */}
        <div className="absolute left-1/2 top-[47%] z-30 flex h-28.75 w-28.75 bg- -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-[#d7f5fc] bg-[#32b9e8] shadow-md transition-transform duration-300 hover:scale-105 sm:h-[150px] sm:w-[150px] sm:border-[7px]">
          <div className="text-center text-white">
            <FaBuilding className="mx-auto mb-2 text-xl sm:text-2xl" />
            <h2 className="text-sm font-semibold leading-tight sm:text-base">
              Heegan
              <br />
              Platforms
            </h2>
          </div>
        </div>

        {/* Property Management: icon hoose, magaca hoos ka yaal (z-30) */}
        <div className="absolute left-1/2 top-[89%] z-30 flex -translate-x-1/2  mt-3 -translate-y-1/2 flex-col items-center gap-1 text-[#167b92]">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B6E84] text-white shadow-md sm:h-15 sm:w-15">
            <FaHouse className="text-base sm:text-lg" />
          </div>
          <span className="whitespace-nowrap text-[9px] font-medium sm:text-xs">Property Management</span>
        </div>

        {/* Telefon (z-40) */}
        <PhoneMockup />

        {/* Magacyada adeegyada (z-40) */}
        {services.map((service) => (
          <Service key={service.name} service={service} />
        ))}

       

       
      </div>
    </section>
  );
}