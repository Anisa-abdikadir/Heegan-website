
import React, { useMemo, useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import { assets } from "../assets/assets";

/* ================= VALIDATION ================= */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME_REGEX = /^[\p{L}][\p{L}\s'.-]*$/u;
const PHONE_REGEX = /^[0-9+\-()\s]+$/;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+252",
  phone: "",
  message: "",
  subscribe: false,
};

const validate = (values) => {
  const errors = {};

  ["firstName", "lastName"].forEach((name) => {
    const value = values[name].trim();

    if (!value) errors[name] = "This field is required";
    else if (value.length < 2)
      errors[name] = "At least 2 characters required";
    else if (!NAME_REGEX.test(value))
      errors[name] = "Only letters are allowed";
  });

  const email = values.email.trim();

  if (!email) errors.email = "Email is required";
  else if (!EMAIL_REGEX.test(email))
    errors.email = "Enter a valid email address";

  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");

  if (!phone) errors.phone = "Phone number is required";
  else if (!PHONE_REGEX.test(phone))
    errors.phone = "Invalid phone number";
  else if (digits.length < 7 || digits.length > 12)
    errors.phone = "Enter 7 to 12 digits";

  const message = values.message.trim();

  if (!message) errors.message = "Message is required";
  else if (message.length < 10)
    errors.message = "At least 10 characters required";

  return errors;
};
//  WORLD MAP DATA 

const LAND = [
  [
    [-168,66],[-156,71],[-140,70],[-128,70],[-115,68],
    [-95,72],[-85,70],[-80,68],[-75,63],[-68,59],
    [-62,58],[-56,52],[-60,47],[-66,44],[-70,42],
    [-74,40],[-76,37],[-76,35],[-80,32],[-81,30],
    [-80,25],[-82,27],[-83,29],[-89,30],[-94,29],
    [-97,26],[-97,21],[-95,18],[-91,19],[-88,21],
    [-88,16],[-83,15],[-83,10],[-79,9],[-78,8],
    [-81,8],[-86,12],[-92,15],[-97,16],[-105,20],
    [-110,24],[-112,29],[-115,31],[-117,33],
    [-120,34],[-124,40],[-124,46],[-127,50],
    [-130,55],[-136,58],[-142,60],[-150,61],
    [-157,58],[-164,55],[-160,60],[-165,62],[-168,66],
  ],
  [
    [-55,60],[-48,61],[-40,65],[-22,70],[-20,77],
    [-30,83],[-60,82],[-72,78],[-60,76],[-56,70],
    [-52,66],
  ],
  [
    [-120,72],[-100,74],[-90,77],[-80,74],[-95,70],[-110,69],
  ],
  [
    [-80,9],[-74,11],[-68,11],[-62,10],[-52,5],
    [-50,0],[-44,-2],[-35,-5],[-39,-13],[-41,-22],
    [-48,-26],[-53,-34],[-58,-38],[-62,-40],
    [-65,-42],[-68,-50],[-70,-54],[-74,-52],
    [-72,-45],[-73,-38],[-71,-30],[-70,-18],
    [-76,-14],[-80,-6],[-81,-2],[-80,2],
  ],
  [
    [-10,36],[-9,43],[-2,44],[-4,48],[2,51],[8,54],
    [9,57],[12,55],[20,55],[21,57],[24,59],[29,60],
    [22,64],[18,68],[28,71],[45,68],[60,70],[80,73],
    [104,78],[140,72],[160,70],[180,68],[178,64],
    [162,60],[156,52],[142,46],[130,42],[122,38],
    [120,28],[108,21],[105,10],[100,13],[98,8],
    [100,2],[104,1],[98,15],[92,22],[80,15],
    [77,8],[72,20],[66,25],[58,25],[56,26],[52,28],
    [48,30],[56,24],[52,16],[43,13],[38,20],
    [35,28],[33,31],[27,37],[22,37],[15,38],
    [12,44],[8,44],[3,43],[-2,37],
  ],
  [
    [-17,21],[-16,28],[-10,30],[-6,36],[10,37],
    [11,33],[20,31],[32,31],[34,28],[38,18],
    [43,12],[51.2,11.8],[48.5,8],[46.5,5],
    [45.2,2],[44,1],[41.5,-1.5],[40,-3],[40,-15],
    [35,-24],[33,-28],[27,-34],[20,-35],[18,-30],
    [12,-17],[13,-6],[9,4],[4,6],[-4,5],
    [-10,6],[-15,11],
  ],
  [[44,-13],[50,-15],[49,-25],[44,-24]],
  [
    [114,-22],[122,-18],[130,-12],[137,-12],
    [142,-11],[146,-19],[153,-26],[150,-37],
    [141,-38],[135,-34],[125,-32],[115,-34],
  ],
  [[172,-35],[178,-38],[174,-42],[167,-46],[170,-44]],
  [[130,31],[135,34],[140,36],[142,40],[141,44],[139,40],[134,35]],
  [[-5,50],[1,51],[0,53],[-2,57],[-5,58],[-6,55],[-3,53]],
  [[95,5],[105,-6],[114,-8],[106,-7],[98,0]],
];

// AP CONSTANTS  

const MAP_W = 800;
const MAP_H = 400;
const LON_MIN = -180;
const LON_MAX = 180;
const LAT_MAX = 85;
const LAT_MIN = -60;
const GRID_STEP = 2.2;
const DOT_RADIUS = 1.6;

const MOGADISHU = { lon: 45.34, lat: 2.05 };

const MAP_LINK =
  "https://www.google.com/maps?q=2.0469,45.3182";

const project = (lon, lat) => [
  ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W,
  ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H,
];

const pointInPolygon = (lon, lat, poly) => {
  let inside = false;

  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];

    if (
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    ) {
      inside = !inside;
    }
  }

  return inside;
};

const isLand = (lon, lat) =>
  LAND.some((poly) => pointInPolygon(lon, lat, poly));

/*  WORLD DOT MAP */

const WorldDotMap = () => {
  const [showCard, setShowCard] = useState(true);

  const dots = useMemo(() => {
    const result = [];

    for (let lat = LAT_MAX - 1; lat >= LAT_MIN; lat -= GRID_STEP) {
      for (let lon = LON_MIN + 1; lon <= LON_MAX; lon += GRID_STEP) {
        if (isLand(lon, lat)) {
          const [x, y] = project(lon, lat);
          result.push({ x, y });
        }
      }
    }

    return result;
  }, []);

  const [mx, my] = project(MOGADISHU.lon, MOGADISHU.lat);

  const leftPct = (mx / MAP_W) * 100;
  const topPct = (my / MAP_H) * 100;

  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#d3eef9] p-2 sm:p-3 md:p-4">
      <div className="relative mx-auto w-full">

        <svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="block h-auto w-full"
          role="img"
          aria-label="World map showing Mogadishu, Somalia"
        >
          {dots.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r={DOT_RADIUS}
              fill="#8ab9cb"
            />
          ))}

          <circle cx={mx} cy={my} r={10} fill="#32b0df" opacity="0.3">
            <animate
              attributeName="r"
              values="6;18;6"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx={mx}
            cy={my}
            r={6}
            fill="#32b0df"
            stroke="#fff"
            strokeWidth={2}
          />
        </svg>

        <button
          type="button"
          onClick={() => setShowCard((prev) => !prev)}
          aria-label="Toggle Mogadishu office details"
          aria-expanded={showCard}
          className="absolute z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ left: `${leftPct}%`, top: `${topPct}%` }}
        />

        {showCard && (
          <div
            className="absolute z-20 w-28 xs:w-32 sm:w-36"
            style={{
              left: `${leftPct}%`,
              top: `${topPct}%`,
              transform: "translate(-50%, calc(-100% - 14px))",
            }}
          >
            <div className="overflow-hidden rounded-md bg-white shadow-lg">
              <img
                src={assets.jowhara_apartment}
                alt="C5 Jowhara Apartments"
                className="h-10 w-full object-cover sm:h-14"
              />

              <div className="p-1.5">
                <p className="text-[8px] font-bold leading-tight text-[#0f1a2e] sm:text-[9px]">
                  C5, Jowhara Apartments
                </p>

                <p className="mt-0.5 text-[7px] leading-tight text-slate-500">
                  Hodan District, Mogadishu, Somalia
                </p>

                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block rounded-sm bg-[#32b0df] py-1 text-center text-[8px] font-semibold text-white hover:bg-[#2aa0cc]"
                >
                  Open in Map
                </a>
              </div>
            </div>

            <div className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
          </div>
        )}
      </div>
    </div>
  );
};

/*  FIELD  */

const Field = ({ id, label, error, children }) => (
  <div className="flex min-w-0 flex-col gap-1">
    <label
      htmlFor={id}
      className="text-[10px] font-semibold text-slate-800 sm:text-[11px]"
    >
      {label}
    </label>

    {children}

    {error && (
      <p className="text-[9px] text-red-500 sm:text-[10px]">
        {error}
      </p>
    )}
  </div>
);

/*  INPUT STYLE */

const inputClass = (error) =>
  `w-full min-w-0 rounded-md border bg-white px-2.5 py-2 text-[11px] text-slate-700 outline-none placeholder:text-slate-400 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-100 sm:text-xs ${
    error ? "border-red-400" : "border-slate-300"
  }`;

/*  CONTACT PAGE  */

const ContactPage = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => validate(values), [values]);

  const showError = (name) =>
    (touched[name] || submitted) && errors[name];

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSuccess(false);
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) return;

    console.log("Form submitted:", {
      ...values,
      fullPhone: `${values.countryCode}${values.phone.trim()}`,
    });

    setSuccess(true);
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 pt-24 sm:px-6 sm:py-10 md:px-8 lg:px-10">

      {/* TOP CONTENT */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_190px] md:gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">

        {/* CONTACT FORM */}
        <div className="min-w-0">
          <h1 className="text-xl font-bold text-[#0f1a2e] sm:text-2xl">
            Get in touch
          </h1>

          <p className="mt-1 max-w-md text-[11px] leading-relaxed text-slate-600 sm:text-xs">
            Our friendly team is here to help. Fill out the form
            and we&apos;ll be in touch as soon as possible.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-5 flex flex-col gap-3 sm:gap-4"
          >
            {/* NAME */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              <Field
                id="firstName"
                label="First name"
                error={showError("firstName")}
              >
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="First name"
                  autoComplete="given-name"
                  className={inputClass(showError("firstName"))}
                />
              </Field>

              <Field
                id="lastName"
                label="Last name"
                error={showError("lastName")}
              >
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Last name"
                  autoComplete="family-name"
                  className={inputClass(showError("lastName"))}
                />
              </Field>
            </div>

            {/* EMAIL */}
            <Field
              id="email"
              label="Email"
              error={showError("email")}
            >
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@company.com"
                autoComplete="email"
                className={inputClass(showError("email"))}
              />
            </Field>

            {/* PHONE */}
            <Field
              id="phone"
              label="Phone number"
              error={showError("phone")}
            >
              <div className="flex min-w-0 gap-2">
                <select
                  name="countryCode"
                  value={values.countryCode}
                  onChange={handleChange}
                  aria-label="Country code"
                  className="w-[100px] shrink-0 rounded-md border border-slate-300 bg-white px-2 py-2 text-[10px] text-slate-700 outline-none focus:border-sky-400 sm:w-[115px] sm:text-xs"
                >
                  <option value="+252">🇸🇴 +252</option>
                  <option value="+251">🇪🇹 +251</option>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>

                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="123456789"
                  autoComplete="tel-national"
                  className={`${inputClass(showError("phone"))} flex-1`}
                />
              </div>
            </Field>

            {/* MESSAGE */}
            <Field
              id="message"
              label="Message"
              error={showError("message")}
            >
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={500}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Include a message..."
                className={`${inputClass(showError("message"))} min-h-20 resize-y`}
              />

              <p className="text-right text-[9px] text-slate-400">
                {values.message.length}/500
              </p>
            </Field>

            {/* CONSENT */}
            <label className="flex items-start gap-2 text-[10px] leading-relaxed text-slate-600 sm:text-[11px]">
              <input
                type="checkbox"
                name="subscribe"
                checked={values.subscribe}
                onChange={handleChange}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-sky-500"
              />

              <span>
                Send me occasional product updates. You can unsubscribe
                at any time.
              </span>
            </label>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div
                role="status"
                className="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-[11px] text-emerald-700"
              >
                <FiCheckCircle size={14} />
                <span>
                  Your message has been sent. We will get back to you soon.
                </span>
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-[#32b0df] py-2.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#2aa0cc] sm:text-xs"
            >
              Send message
            </button>
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        <aside className="grid grid-cols-1 gap-5 border-t border-slate-100 pt-5 text-[11px] sm:grid-cols-2 md:flex md:flex-col md:gap-6 md:border-0 md:pt-1 sm:text-xs">

          {/* PHONE */}
          <div className="flex items-start gap-2.5">
            <FiPhone
              className="mt-0.5 shrink-0 text-sky-500"
              size={15}
            />

            <div className="min-w-0">
              <p className="font-bold text-[#0f1a2e]">Call</p>

              <a
                href="tel:+252613336781"
                className="mt-1 block text-slate-600 hover:text-sky-600"
              >
                +252 (613) 336781
              </a>

              <a
                href="tel:+252613336741"
                className="mt-0.5 block text-slate-600 hover:text-sky-600"
              >
                +252 (613) 336741
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-2.5">
            <FiMail
              className="mt-0.5 shrink-0 text-sky-500"
              size={15}
            />

            <div className="min-w-0">
              <p className="font-bold text-[#0f1a2e]">Email</p>

              <a
                href="mailto:info@heegantechnology.com"
                className="mt-1 block break-all text-sky-600 hover:underline"
              >
                info@heegantechnology.com
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-start gap-2.5">
            <FiMapPin
              className="mt-0.5 shrink-0 text-sky-500"
              size={15}
            />

            <div>
              <p className="font-bold text-[#0f1a2e]">Location</p>

              <p className="mt-1 leading-relaxed text-slate-600">
                C5, Jowhara Apartments,
                <br />
                Mogadishu, Somalia
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* WORLD MAP */}
      <div className="mt-7 sm:mt-9">
        <WorldDotMap />
      </div>

    </section>
  );
};

export default ContactPage;
