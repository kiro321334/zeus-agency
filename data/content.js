export const nav = [
  ["results", "Results"],
  ["work", "Work"],
  ["services", "Services"],
  ["contact", "Contact"],
];
export const heroStats = [
  ["7 Years", "EXPERIENCE"],
  ["13", "CERTIFICATES"],
  ["Marketing", "GRADUATE"],
];
export const metrics = [
  {
    label: "METRIC TELEMETRY / QUARTER",
    value: "3.6M",
    badge: "+69%",
    caption: "Highest verified reach, in 1 month",    
    path: "M0 38 C40 36 70 30 110 28 S190 22 220 18 S270 14 300 12",
  },
  {
    label: "28-DAY VELOCITY",
    value: "1.7M",
    badge: "+109%",
    caption: "Highest reach spike, in 28 days",
    path: "M0 40 C50 38 90 34 130 30 S200 22 240 16 S280 8 300 6",
  },
];
export const miniStats = [
  ["12M+", "Total Impressions"],
  ["28+", "Active Brands"],
  ["42%", "Avg Sales Lift"],
];
export const clients = [
  "LUXE LIVING",
  "APEX/MEDIA",
  "Veloce",
  "MAISON NOIR",
  "CHRONOS",
  "AURA STUDIO",
];
export const proofFilters = [
  ["all", "All Proof"],
  ["reach", "Reach (3.6M)"],
  ["sales", "Sales ($184K)"],
  ["followers", "Followers"],
];
export const proof = [
  {
    id: "zeus-90day",
    kind: "reach",
    tool: "FACEBOOK PROFESSIONAL DASHBOARD • INSIGHTS",
    badge: "VERIFIED",
    chip: "+69% vs prev. 90 days",
    client: "ZEUS SPORTS",
    metric: "+3.6M Reach",
    text: "Footwear and apparel content scaled to 3.6M views in 90 days, up from 2.1M in the previous 90 days.",
    img: "/proof/90day-3-6m-views.jpeg",
  },
  {
    id: "zeus-28day",
    kind: "reach",
    tool: "FACEBOOK PROFESSIONAL DASHBOARD • LAST 28 DAYS",
    badge: "VERIFIED",
    chip: "+109% vs prev. 28 days",
    client: "ZEUS SPORTS",
    metric: "+1.7M Reach",
    text: "1.7M views in 28 days with engagement up 164% and messaging conversations up 104%.",
    img: "/proof/28day-1-7m-views.jpeg",
  },
  {
    id: "zeus-90day-feb-may",
    kind: "reach",
    tool: "FACEBOOK INSIGHTS • FEB 11 – MAY 11",
    badge: "VERIFIED",
    chip: "+87.5% vs prev. 90 days",
    client: "ZEUS SPORTS",
    metric: "+2.5M Reach",
    text: "2,507,756 views across 90 days, nearly double the previous period's 1.3M.",
    img: "/proof/90day-2-5m-chart.jpeg",
    extra: "/proof/90day-2-5m-summary.jpeg",
  },
  {
    id: "zeus-reebok-post",
    kind: "reach",
    tool: "FACEBOOK POST INSIGHTS • REEBOK ZIG GORE-TEX",
    badge: "VERIFIED",
    chip: "199K Views",
    client: "ZEUS SPORTS",
    metric: "+199K Reach",
    text: "A single product post reached 199,532 views with 11,735 engagements and 191 net follows.",
    img: "/proof/reebok-post-insights.jpeg",
    extra: "/proof/reebok-post-live.jpeg",
  },
  {
    id: "zeus-28day-1m",
    kind: "reach",
    tool: "FACEBOOK INSIGHTS • TOP CONTENT",
    badge: "VERIFIED",
    chip: "+111% vs prev. 28 days",
    client: "ZEUS SPORTS",
    metric: "+1.0M Reach",
    text: "Views up 111% in 28 days, content output up 77.5% and messaging up 86.4%.",
    img: "/proof/28day-1m-top-content.jpeg",
  },
  {
    id: "apex",
    kind: "sales",
    tool: "STRIPE REVENUE AUDIT • SHOPIFY DTC",
    badge: "LIVE AUDIT",
    chip: "Confirmed DTC",
    client: "APEX SUPPLEMENTS",
    metric: "+$184K Sales",
    text: "Short-form TikTok ad hooks paired with aggressive landing page optimization driving cold audience sales directly.",
  },
  {
    id: "aura",
    kind: "followers",
    tool: "AUDIENCE GROWTH • RETENTION ENGINE",
    badge: "ORGANIC",
    chip: "+86,400 Net",
    client: "AURA SKINCARE",
    metric: "+86K Growth",
    text: "Minimalist editorial carousels and influencer co-marketing packs turning passive scrollers into devoted brand advocates.",
  },
  {
    id: "veloce",
    kind: "sales",
    tool: "GOOGLE ANALYTICS • CHECKOUT FUNNEL",
    badge: "VERIFIED",
    chip: "+42% CVR",
    client: "VELOCE",
    metric: "+$62K Sales",
    text: "Ad creative suite and retargeting hooks lifting checkout conversion across a seasonal drop.",
  },
];
const f = (id, title, sub, type, ratio, desc, m) => ({
  id,
  title,
  sub,
  type,
  ratio,
  desc,
  cover: `/work/${id}/cover.jpg`,
  media: m.map((k, i) =>
    k === "v"
      ? {
          t: "video",
          src: `/work/${id}/video.mp4`,
          poster: `/work/${id}/${i + 1}.jpg`,
        }
      : { t: "image", src: `/work/${id}/${i + 1}.jpg` },
  ),
});
export const workFilters = [
  ["video", "Videos"],
  ["photo", "Photos"],
];
const folder = (kind, dir, title, sub, count, ratio, desc, ext) => ({
  id: dir,
  kind,
  title,
  sub,
  ratio,
  desc,
  media: Array.from({ length: count }, (_, i) =>
    encodeURI(`/work/${dir}/${i + 1}.${ext}`),
  ),
});

// فولدرات الفيديو: /public/work/videos/<folder>/1.mp4, 2.mp4 ...
const vf = (dir, title, count, desc = "") =>
  folder(
    "video",
    `videos/${dir}`,
    title,
    "Video Folder",
    count,
    0.6,
    desc,
    "mp4",
  );

export const videoFolders = [
  vf("Checoo master", "Checoo Master", 2),
  vf("Kamal matar fashion designer", "Kamal Matar Fashion Designer", 2),
  vf("ngr", "NGR", 1),
  vf("orchide", "Orchide", 1),
  vf("peugeot", "Peugeot", 1),
  vf("Rawand", "Rawand", 4),
  vf("zahrati", "Zahrati", 2),
];

// فولدرات الصور: /public/work/<folder>/1.jpg, 2.jpg ...
const pf = (dir, title, count, desc = "") =>
  folder("photo", dir, title, "Photo Folder", count, 0.8, desc, "jpeg");

export const photoFolders = [
  pf("berfume", "Perfume", 7),
  pf("Social Media templates", "Social Media Templates", 12),
  pf("vegetables", "Vegetables", 7),
];
export const works = [
  f(
    "apex-brand-film",
    "Apex Brand Film",
    "Apex / Commercial Cut",
    "video",
    0.88,
    "Commercial cut with kinetic typography, sound design and cut-downs for every placement.",
    ["v", "i", "i"],
  ),
  f(
    "minimal-carousel-kit",
    "Minimal Carousel Kit",
    "Maison Noir / Social",
    "design",
    0.62,
    "Carousel system with retention loops, highlight covers and a reusable Figma kit.",
    ["i", "i", "i"],
  ),
  f(
    "timepiece-retouch",
    "Timepiece Retouch",
    "Chronos / Editorial",
    "photo",
    0.8,
    "Luxury product retouching: reflection cures, lighting composites and color grading.",
    ["i", "i", "i"],
  ),
  f(
    "viral-tiktok-hook",
    "Viral TikTok Hook",
    "Aura / Short-Form",
    "video",
    0.6,
    "Short-form series built on 3-second hooks and 80%+ hook retention.",
    ["v", "v", "i"],
  ),
  f(
    "black-friday-suite",
    "Black Friday Suite",
    "Veloce / Ad Creative",
    "design",
    0.58,
    "Static and motion ad creatives for a high-pressure sales event.",
    ["i", "i", "v"],
  ),
  f(
    "skin-glow-master",
    "Skin Glow Master",
    "Aura / Editorial Skin",
    "photo",
    0.8,
    "Natural micro-pore skin texture, contour sculpting and editorial grading.",
    ["i", "i", "i"],
  ),
  f(
    "luxury-reel-pack",
    "Luxury Reel Pack",
    "Luxe Living / Reels",
    "video",
    0.75,
    "Monthly pack of luxury lifestyle reels with consistent visual identity.",
    ["v", "i", "i"],
  ),
  f(
    "story-highlight-kit",
    "Story & Highlight Kit",
    "Apex / Social",
    "design",
    0.7,
    "Daily story templates and vector highlight covers for brand teams.",
    ["i", "i", "i"],
  ),
  f(
    "beauty-retouch-set",
    "Beauty Retouch Set",
    "Aura / Beauty",
    "photo",
    0.8,
    "High-end beauty retouching set with frequency separation and custom LUTs.",
    ["i", "i", "i"],
  ),
];
export const services = [
  [
    "trend",
    "Digital Marketing",
    "PAID & ORGANIC INFRASTRUCTURE",
    [
      "Full-funnel social media campaign strategy",
      "Meta & TikTok ad creative deployment & scaling",
      "Real-time telemetry dashboards & ROAS auditing",
    ],
  ],
  [
    "hash",
    "Social Media Design",
    "VISUAL ARCHITECTURE",
    [
      "Bespoke brand carousels with retention loops",
      "Daily stories, highlight covers & vector asset suites",
      "Turnkey Figma design systems for marketing teams",
    ],
  ],
  [
    "wand",
    "Photo Retouching",
    "HIGH-END SWISS MASTERY",
    [
      "Natural micro-pore skin texture & contour sculpting",
      "Luxury product lighting composites & reflection cures",
      "Editorial grade color grading & custom LUT creation",
    ],
  ],
  [
    "clap",
    "Short-Form Video",
    "RETENTION-FIRST MOTION",
    [
      "Reels & TikToks structured for 80%+ hook retention",
      "Kinetic typography, sound design & 3D soundscapes",
      "High-converting direct-response UGC & paid video ads",
    ],
  ],
];
export const certs = [
  [
    "linkedin-marketing-strategy",
    "LinkedIn Marketing Strategy",
    "LinkedIn Marketing Labs • 2024",
  ],
  [
    "marketing-theory-100",
    "Marketing Theory • 100/100",
    "Faculty of Economics • 2025",
  ],
  [
    "international-marketing-98",
    "International Marketing • 98/100",
    "Faculty of Economics • 2026",
  ],
  [
    "tourism-marketing-98",
    "Transport & Tourism Marketing • 98/100",
    "Faculty of Economics • 2026",
  ],
  [
    "marketing-strategies-90",
    "Marketing Strategies • 90/100",
    "Faculty of Economics • 2026",
  ],
];
export const skills = [
  "Marketing",
  "Social Design",
  "Photo Editing",
  "Video Motion",
];
export const steps = [
  [
    "Discovery & Brand Audit",
    "Deep dissection of your historical ad spend, top-performing creative assets, competitor blind spots, and latent revenue opportunities.",
  ],
  [
    "Strategy & Creative Matrix",
    "Formulating high-converting hypotheses, audience segmentation, script hooks, and storyboard architecture tailored to your target CPA.",
  ],
  [
    "High-Fidelity Production",
    "Rapid execution of video cuts, skin-perfect retouching, and bespoke graphic suites engineered to captivate scrollers within the first 1.2 seconds.",
  ],
  [
    "Deployment & Scaling",
    "Launch management, live attribution tracking, rapid iteration of winning hooks, and scaling ROAS to full operational capacity.",
  ],
];
export const faqs = [
  [
    "What results can I expect?",
    "Results vary by brand, but verified dashboards show up to a 109% reach lift in 28 days and 69% growth over 90 days. All campaigns are backed by transparent dashboard receipts and daily telemetry.",
  ],
  [
    "Do you manage ads or only creatives?",
    "Both. I build the creatives and run the Meta and TikTok campaigns, from launch to scaling and reporting.",
  ],
  [
    "How long does a project sprint take?",
    "Most sprints run 2–4 weeks from audit to launch, depending on scope. Retainers run monthly.",
  ],
  [
    "Can I order only design or photo editing?",
    "Yes. Social design, photo retouching and video editing are available as standalone services.",
  ],
];
