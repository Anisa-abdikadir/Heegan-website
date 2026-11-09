import React, { useMemo, useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";

/* ------------------------------------------------------------------
   VALIDATION
------------------------------------------------------------------- */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Letters only (any language), with spaces, apostrophes, dots and hyphens allowed
const NAME_REGEX = /^[\p{L}][\p{L}\s'.-]*$/u;
// Digits, optionally with +, spaces, hyphens and brackets
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

  const firstName = values.firstName.trim();
  if (!firstName) {
    errors.firstName = "First name is required";
  } else if (firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  } else if (!NAME_REGEX.test(firstName)) {
    errors.firstName = "First name can only contain letters";
  }

  const lastName = values.lastName.trim();
  if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  } else if (!NAME_REGEX.test(lastName)) {
    errors.lastName = "Last name can only contain letters";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address";
  }

  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");
  if (!phone) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_REGEX.test(phone)) {
    errors.phone = "Phone number can only contain numbers";
  } else if (digits.length < 7 || digits.length > 12) {
    errors.phone = "Phone number must be 7 to 12 digits";
  }

  const message = values.message.trim();
  if (!message) {
    errors.message = "Message is required";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (values.message.length > 500) {
    errors.message = "Message must be 500 characters or less";
  }

  return errors;
};

/* ------------------------------------------------------------------
   MAP DATA (simplified continent outlines as [lon, lat])
------------------------------------------------------------------- */
const LAND = [
  // North America
  [[-168,66],[-156,71],[-140,70],[-128,70],[-115,68],[-95,72],[-85,70],[-80,68],[-75,63],[-68,59],[-62,58],[-56,52],[-60,47],[-66,44],[-70,42],[-74,40],[-76,37],[-76,35],[-80,32],[-81,30],[-80,25],[-82,27],[-83,29],[-89,30],[-94,29],[-97,26],[-97,21],[-95,18],[-91,19],[-88,21],[-88,16],[-83,15],[-83,10],[-79,9],[-78,8],[-81,8],[-86,12],[-92,15],[-97,16],[-105,20],[-110,24],[-112,29],[-115,31],[-117,33],[-120,34],[-124,40],[-124,46],[-127,50],[-130,55],[-136,58],[-142,60],[-150,61],[-157,58],[-164,55],[-160,60],[-165,62],[-168,66]],
  // Greenland
  [[-55,60],[-48,61],[-40,65],[-22,70],[-20,77],[-30,83],[-60,82],[-72,78],[-60,76],[-56,70],[-52,66]],
  // Canadian arctic islands (simplified)
  [[-120,72],[-100,74],[-90,77],[-80,74],[-95,70],[-110,69]],
  // South America
  [[-80,9],[-74,11],[-68,11],[-62,10],[-52,5],[-50,0],[-44,-2],[-35,-5],[-39,-13],[-41,-22],[-48,-26],[-53,-34],[-58,-38],[-62,-40],[-65,-42],[-68,-50],[-70,-54],[-74,-52],[-72,-45],[-73,-38],[-71,-30],[-70,-18],[-76,-14],[-80,-6],[-81,-2],[-80,2]],
  // Europe & Asia
  [[-10,36],[-9,43],[-2,44],[-4,48],[2,51],[8,54],[9,57],[12,55],[20,55],[21,57],[24,59],[29,60],[22,64],[18,68],[28,71],[45,68],[60,70],[80,73],[104,78],[140,72],[160,70],[180,68],[178,64],[162,60],[156,52],[142,46],[130,42],[122,38],[120,28],[108,21],[105,10],[100,13],[98,8],[100,2],[104,1],[98,15],[92,22],[80,15],[77,8],[72,20],[66,25],[58,25],[56,26],[52,28],[48,30],[56,24],[52,16],[43,13],[38,20],[35,28],[33,31],[27,37],[22,37],[15,38],[12,44],[8,44],[3,43],[-2,37]],
  // Africa (with Horn of Africa / Somalia coast)
  [[-17,21],[-16,28],[-10,30],[-6,36],[10,37],[11,33],[20,31],[32,31],[34,28],[38,18],[43,12],[51.2,11.8],[48.5,8],[46.5,5],[45.2,2],[44,1],[41.5,-1.5],[40,-3],[40,-15],[35,-24],[33,-28],[27,-34],[20,-35],[18,-30],[12,-17],[13,-6],[9,4],[4,6],[-4,5],[-10,6],[-15,11]],
  // Madagascar
  [[44,-13],[50,-15],[49,-25],[44,-24]],
  // Australia
  [[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[153,-26],[150,-37],[141,-38],[135,-34],[125,-32],[115,-34]],
  // New Zealand
  [[172,-35],[178,-38],[174,-42],[167,-46],[170,-44]],
  // Japan
  [[130,31],[135,34],[140,36],[142,40],[141,44],[139,40],[134,35]],
  // UK & Ireland
  [[-5,50],[1,51],[0,53],[-2,57],[-5,58],[-6,55],[-3,53]],
  // Indonesia (simplified)
  [[95,5],[105,-6],[114,-8],[106,-7],[98,0]],
];

const MAP_W = 800;
const MAP_H = 400;
const LON_MIN = -180;
const LON_MAX = 180;
const LAT_MAX = 85;
const LAT_MIN = -60;
const GRID_STEP = 2.2;
const DOT_RADIUS = 1.6;
const MOGADISHU = { lon: 45.34, lat: 2.05 };

const project = (lon, lat) => [
  ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * MAP_W,
  ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * MAP_H,
];

const pointInPolygon = (lon, lat, poly) => {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
};

const isLand = (lon, lat) => LAND.some((poly) => pointInPolygon(lon, lat, poly));

const WorldDotMap = () => {
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

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-[#d3eef9] p-4 sm:p-6">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="h-auto w-full"
        role="img"
        aria-label="World map showing Mogadishu, Somalia"
      >
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={DOT_RADIUS} fill="#6f97ab" />
        ))}

        {/* PULSE MARKER */}
        <circle cx={mx} cy={my} r={10} fill="#32b0df" opacity="0.3">
          <animate attributeName="r" values="6;18;6" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* CENTER MARKER */}
        <circle cx={mx} cy={my} r={6} fill="#32b0df" stroke="#ffffff" strokeWidth={2} />
      </svg>
    </div>
  );
};

/* ------------------------------------------------------------------
   FIELD WRAPPER
------------------------------------------------------------------- */
const Field = ({ label, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[11px] font-semibold text-slate-800">{label}</label>
    {children}
    {error && <p className="text-[10px] text-red-500">{error}</p>}
  </div>
);

const inputClass = (error) =>
  `w-full rounded-md border bg-white px-3 py-2 text-xs text-slate-700 outline-none placeholder:text-slate-400 transition-colors focus:border-sky-400 focus:ring-2 focus:ring-sky-100 ${
    error ? "border-red-400" : "border-slate-300"
  }`;

/* ------------------------------------------------------------------
   CONTACT PAGE
------------------------------------------------------------------- */
const ContactPage = () => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const errors = useMemo(() => validate(values), [values]);

  const showError = (name) => (touched[name] || submitted) && errors[name];

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
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length > 0) return;

    // TODO: send values to your API here
    console.log("Form submitted:", values);

    setSuccess(true);
    setValues(initialValues);
    setTouched({});
    setSubmitted(false);
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-6 pt-32 pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_200px]">
        {/* FORM */}
        <div>
          <h1 className="text-xl font-bold text-[#0f1a2e]">Get in touch</h1>
          <p className="mt-1 text-[11px] text-slate-600">
            Our friendly team is here to help. Fill out the form and we&apos;ll be in
            touch as soon as possible.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 flex flex-col gap-4">
            {/* NAME */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="First name" error={showError("firstName")}>
                <input
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

              <Field label="Last name" error={showError("lastName")}>
                <input
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
            <Field label="Email" error={showError("email")}>
              <input
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
            <Field label="Phone number" error={showError("phone")}>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={values.countryCode}
                  onChange={handleChange}
                  className="rounded-md border border-slate-300 bg-white px-2 py-2 text-xs text-slate-700 outline-none focus:border-sky-400"
                >
                  <option value="+252">🇸🇴 +252</option>
                  <option value="+251">🇪🇹 +251</option>
                  <option value="+254">🇰🇪 +254</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
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
            <Field label="Message" error={showError("message")}>
              <textarea
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Include a message..."
                className={`${inputClass(showError("message"))} resize-none`}
              />
            </Field>

            {/* CONSENT */}
            <label className="flex items-start gap-2 text-[11px] text-slate-600">
              <input
                type="checkbox"
                name="subscribe"
                checked={values.subscribe}
                onChange={handleChange}
                className="mt-0.5 h-3.5 w-3.5 accent-sky-500"
              />
              Send me occasional product updates. You can unsubscribe at any time.
            </label>

            {/* SUCCESS */}
            {success && (
              <div className="flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-700">
                <FiCheckCircle size={14} />
                Your message has been sent. We will get back to you soon.
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-[#32b0df] py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#2aa0cc]"
            >
              Send message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <aside className="flex flex-col gap-6 text-[11px]">
          <div className="flex gap-3">
            <FiPhone className="mt-0.5 shrink-0 text-sky-500" size={14} />
            <div>
              <p className="font-bold text-[#0f1a2e]">Call</p>
              <p className="mt-1 text-slate-600">+252 (613) 336781</p>
              <p className="text-slate-600">+252 (613) 336741</p>
            </div>
          </div>

          <div className="flex gap-3">
            <FiMail className="mt-0.5 shrink-0 text-sky-500" size={14} />
            <div>
              <p className="font-bold text-[#0f1a2e]">Email</p>
              <a
                href="mailto:info@heegantechnology.com"
                className="mt-1 block text-sky-600 hover:underline"
              >
                info@heegantechnology.com
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <FiMapPin className="mt-0.5 shrink-0 text-sky-500" size={14} />
            <div>
              <p className="font-bold text-[#0f1a2e]">Location</p>
              <p className="mt-1 text-sky-600">
                C5, Joohara Apartments,
                <br />
                Mogadishu, Somalia
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* MAP */}
      <div className="mt-14">
        <WorldDotMap />
      </div>
    </section>
  );
};

export default ContactPage;