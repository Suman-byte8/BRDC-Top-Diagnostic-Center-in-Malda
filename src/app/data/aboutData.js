import welcomeImg from "@/app/assets/about/welcome-to-brdc.png";
import historyImg from "@/app/assets/about/our-history.png";
import purposeImg from "@/app/assets/about/our-purpose.png";

export const aboutHeroData = {
  title: "About Us",
  imageSrc: welcomeImg, // Keeping public for now as no replacement in about folder
};

export const aboutWelcomeData = {
  title: "Welcome to BRDC",
  paragraphs: [
    "The Bisweswari Roy Diagnostic & Polyclinic Centre (BRDC — A unit of B.R. Diagnostic Centre Private Limited) is a Health Organization, with its headquarters located at 3 No. Govt. Colony, Malda, West Bengal, India — 732101. It is situated at an easy and accessible location, which is conveniently positioned adjacent to the National Highway (NH) 34.",
    "The year 2001 marks the start of the B.R. Diagnostic Centre. This health organization has, time and again, been widely regarded as one of the most progressive, scientific, and comprehensive healthcare organisations in the entirety of North Bengal.",
    "We offer Multi-Slice CT Scans, Digital X-Rays, Colour Doppler Ultrasonography, Echocardiography, EEG, TMT, Holter Monitoring, PFT, ECG (Multi-Channels), Pathology (including Histopathology and Cytopathology), among other services.",
  ],
  imageSrc: welcomeImg,
};

export const aboutHistoryPurposeData = [
  {
    title: "Our History",
    desc: "In 2001, Dr Phani Bhusan Roy laid down the groundwork for what would become B.R. Diagnostic Centre today. With our highly skilled medical team and cutting-edge diagnostic equipment, we are committed to providing high-quality healthcare services. After its inception, our organisation quickly became one of the most reputable providers of radiology and pathology services in Bengal.",
    imageSrc: historyImg,
    reverse: false,
  },
  {
    title: "Our Purpose",
    desc: "As a part of our broader mission, BRDC is committed to democratising healthcare services in Eastern India. We hope to ensure that people from all social strata have access to the highest quality of healthcare at affordable prices, and in furtherance of the same, we have increased the number of collection centres and touchpoints in semi-urban and rural areas.",
    imageSrc: purposeImg,
    reverse: true,
  },
];

export const milestonesData = [
  {
    year: "2003",
    icon: "❤️",
    text: "We significantly expanded our Radiology capabilities including portable X-Ray Machines.",
  },
  {
    year: "2004",
    icon: "🏥",
    text: "We started free health check up camps in Rural areas with penetration of health care facilities.",
  },
  {
    year: "2008",
    icon: "🏢",
    text: "We started another setup with 3 time capabilities.",
  },
];
