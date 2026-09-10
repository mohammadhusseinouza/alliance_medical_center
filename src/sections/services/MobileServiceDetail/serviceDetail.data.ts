/**
 * Per-service configuration for the ONE mobile service-detail shell
 * (`MobileServiceDetail`). This is an adapter, not a second content
 * source: every string is a key into the EXISTING i18n resources that the
 * desktop service pages already use, and every image is the SAME asset
 * module the desktop `*Content` component imports. No copy or data is
 * duplicated here.
 *
 * Occupational Health is intentionally absent — it has its own page
 * architecture and a separate mobile handoff.
 */
import { SITE } from "../../../lib/constants";
import { DIAGNOSTIC_SERVICE_ITEMS } from "../DiagnosticServicesContent/diagnosticServicesContent.data";

// Urgent Care
import ucHero from "../../../assets/urgent-care/hero.png";
import ucMain from "../../../assets/urgent-care/main-consultation.png";
import ucGalleryPediatric from "../../../assets/urgent-care/pediatric-care.png";
import ucGalleryLab from "../../../assets/urgent-care/lab-diagnostics.png";
import ucCta from "../../../assets/urgent-care/cta-portrait.png";

// Family Health
import fhHero from "../../../assets/family-health/hero.png";
import fhMain from "../../../assets/family-health/Primary care physician consulting with a patient in a bright exam room.png";
import fhGalleryConsult from "../../../assets/family-health/Primary care physician performing a routine health examination with an adult patient.png";
import fhGalleryFamily from "../../../assets/family-health/Family medicine provider meeting with a parent and child in a modern clinical environment.png";
import fhCta from "../../../assets/family-health/Family Health provider ready to help patients.png";

// Women's Health
import whHero from "../../../assets/womens-health/wh-hero.png";
import whMain from "../../../assets/womens-health/Female physician consulting with an adult female patient in a modern exam room.png";
import whGalleryConsult from "../../../assets/womens-health/Female physician consulting with a woman during a routine wellness visit.png";
import whGalleryScreening from "../../../assets/womens-health/Female healthcare professional performing a medical screening.png";
import whCta from "../../../assets/womens-health/Female healthcare provider ready to help patients.png";

// Pediatric Care
import pcHero from "../../../assets/pediatric-care/fh-hero.png";
import pcMain from "../../../assets/pediatric-care/Pediatrician warmly interacting with a child and parent in a bright exam room.png";
import pcGalleryExam from "../../../assets/pediatric-care/Pediatric physician performing a routine health examination on a young child with a parent present.png";
import pcGalleryWellness from "../../../assets/pediatric-care/Healthcare professional interacting with a child during a pediatric wellness assessment.png";
import pcCta from "../../../assets/pediatric-care/Pediatric healthcare provider ready to help patients.png";

// Diagnostic Services
import dsHero from "../../../assets/diagnostic-services/diagnostic-hero.png";
import dsMain from "../../../assets/diagnostic-services/Diagnostic imaging technician preparing a patient for a scan.png";
import dsGalleryLab from "../../../assets/diagnostic-services/Laboratory technician analyzing a blood sample.png";
import dsGalleryImaging from "../../../assets/diagnostic-services/Clinician performing an ultrasound examination.png";
import dsCta from "../../../assets/diagnostic-services/Diagnostic lab technician ready to help patients.png";

export type ServiceSlug =
  | "urgent-care"
  | "family-health"
  | "womens-health"
  | "pediatric-care"
  | "diagnostic-services";

export interface SimpleBenefitGroup {
  kind: "simple";
  /** Translation key for the "What's Included" pill label. */
  headingKey: string;
  /** Full translation keys, one per checklist line. */
  itemKeys: string[];
}

export interface RichBenefitGroup {
  kind: "rich";
  headingKey: string;
  /** Title + description key pairs — rendered single-column (Diagnostic Services). */
  items: { titleKey: string; descKey: string }[];
}

export interface ChecklistGroup {
  headingKey: string;
  itemKeys: string[];
}

export interface ProseGroup {
  headingKey: string;
  bodyKey: string;
}

export interface FaqConfig {
  eyebrowKey: string;
  idPrefix: string;
  base: string;
  keys: string[];
  /** Key whose answer interpolates `{{ phone }}`. */
  phoneKey?: string;
}

export interface GalleryImage {
  image: string;
  altKey: string;
  objectPosition?: string;
}

export interface MobileServiceConfig {
  slug: ServiceSlug;
  nameKey: string;
  href: string;
  heroImage: string;
  heroAltKey: string;
  mainImage: string;
  mainAltKey: string;
  headingKey: string;
  subheadingKey?: string;
  introKey: string;
  benefits: SimpleBenefitGroup | RichBenefitGroup;
  /** Second checklist group ("Why Choose Us") — Family, Pediatric, Diagnostic. */
  whyChoose?: ChecklistGroup;
  /** Secondary prose block ("Comprehensive Care You Can Trust") — all except Diagnostic. */
  secondary?: ProseGroup;
  gallery: GalleryImage[];
  faq: FaqConfig;
  cta: { headingKey: string; descKey: string; altKey: string; image: string };
}

const urgentCare: MobileServiceConfig = {
  slug: "urgent-care",
  nameKey: "services.items.urgentCare.title",
  href: SITE.urgentCareHref,
  heroImage: ucHero,
  heroAltKey: "servicePage.urgentCare.heroImageAlt",
  mainImage: ucMain,
  mainAltKey: "servicePage.urgentCare.mainPhotoAlt",
  headingKey: "servicePage.urgentCare.heading",
  introKey: "servicePage.urgentCare.intro",
  benefits: {
    kind: "simple",
    headingKey: "servicePage.urgentCare.whatsIncluded",
    itemKeys: [
      "minorIllnesses",
      "walkIns",
      "convenientAccess",
      "diagnostics",
      "minorInjuries",
      "commonIllnesses",
      "screenings",
      "followUp",
    ].map((k) => `servicePage.urgentCare.benefits.${k}`),
  },
  secondary: {
    headingKey: "servicePage.urgentCare.comprehensive.heading",
    bodyKey: "servicePage.urgentCare.comprehensive.description",
  },
  gallery: [
    { image: ucGalleryPediatric, altKey: "servicePage.urgentCare.pairAlt.pediatric" },
    { image: ucGalleryLab, altKey: "servicePage.urgentCare.pairAlt.lab", objectPosition: "55% center" },
  ],
  faq: {
    eyebrowKey: "servicePage.urgentCare.faq.eyebrow",
    idPrefix: "m-urgent-care",
    base: "servicePage.urgentCare.faq.items",
    keys: ["appointment", "conditions", "insurance", "hours", "emergency", "moreInformation"],
    phoneKey: "moreInformation",
  },
  cta: {
    headingKey: "servicePage.sidebarCta.heading",
    descKey: "servicePage.sidebarCta.description",
    altKey: "servicePage.sidebarCta.portraitAlt",
    image: ucCta,
  },
};

const familyHealth: MobileServiceConfig = {
  slug: "family-health",
  nameKey: "services.items.familyHealth.title",
  href: SITE.familyHealthHref,
  heroImage: fhHero,
  heroAltKey: "familyHealth.hero.imageAlt",
  mainImage: fhMain,
  mainAltKey: "familyHealth.mainPhotoAlt",
  headingKey: "familyHealth.heading",
  introKey: "familyHealth.intro",
  benefits: {
    kind: "simple",
    headingKey: "familyHealth.whatsIncluded",
    itemKeys: [
      "annualExams",
      "cholesterolManagement",
      "immunizations",
      "asthmaCare",
      "healthScreenings",
      "arthritisTreatment",
      "wellnessCounseling",
      "pediatricCare",
      "mentalHealthScreening",
      "adultMedicine",
      "diabetesCare",
      "geriatricCare",
      "hypertensionTreatment",
      "sportsMedicine",
    ].map((k) => `familyHealth.benefits.${k}`),
  },
  whyChoose: {
    headingKey: "familyHealth.whyChoose.heading",
    itemKeys: [
      "sameDay",
      "careCoordination",
      "electronicRecords",
      "prescriptionManagement",
      "specialistReferrals",
      "telehealth",
    ].map((k) => `familyHealth.whyChoose.items.${k}`),
  },
  secondary: {
    headingKey: "familyHealth.comprehensive.heading",
    bodyKey: "familyHealth.comprehensive.description",
  },
  gallery: [
    { image: fhGalleryConsult, altKey: "familyHealth.pairAlt.consultation" },
    { image: fhGalleryFamily, altKey: "familyHealth.pairAlt.familyVisit" },
  ],
  faq: {
    eyebrowKey: "familyHealth.faq.eyebrow",
    idPrefix: "m-family-health",
    base: "familyHealth.faq.items",
    keys: ["services", "allAges", "chronicConditions", "screenings", "hours", "moreInformation"],
    phoneKey: "moreInformation",
  },
  cta: {
    headingKey: "familyHealth.sidebarCta.heading",
    descKey: "familyHealth.sidebarCta.description",
    altKey: "familyHealth.sidebarCta.portraitAlt",
    image: fhCta,
  },
};

const womensHealth: MobileServiceConfig = {
  slug: "womens-health",
  nameKey: "services.items.womensHealth.title",
  href: SITE.womensHealthHref,
  heroImage: whHero,
  heroAltKey: "womensHealth.hero.imageAlt",
  mainImage: whMain,
  mainAltKey: "womensHealth.mainPhotoAlt",
  headingKey: "womensHealth.heading",
  introKey: "womensHealth.intro",
  benefits: {
    kind: "simple",
    headingKey: "womensHealth.whatsIncluded",
    itemKeys: [
      "annualExams",
      "nutritionalCounseling",
      "papSmears",
      "highRiskPregnancy",
      "breastExams",
      "menopauseManagement",
      "familyPlanning",
      "pcosTreatment",
      "stdTesting",
      "thyroidManagement",
      "pregnancyTesting",
      "osteoporosisPrevention",
      "prenatalCare",
      "wellnessCare",
    ].map((k) => `womensHealth.benefits.${k}`),
  },
  secondary: {
    headingKey: "womensHealth.comprehensive.heading",
    bodyKey: "womensHealth.comprehensive.description",
  },
  gallery: [
    { image: whGalleryConsult, altKey: "womensHealth.pairAlt.consultation" },
    { image: whGalleryScreening, altKey: "womensHealth.pairAlt.screening" },
  ],
  faq: {
    eyebrowKey: "womensHealth.faq.eyebrow",
    idPrefix: "m-womens-health",
    base: "womensHealth.faq.items",
    keys: ["services", "appointment", "pregnancy", "confidentiality", "hours", "moreInformation"],
    phoneKey: "moreInformation",
  },
  cta: {
    headingKey: "womensHealth.sidebarCta.heading",
    descKey: "womensHealth.sidebarCta.description",
    altKey: "womensHealth.sidebarCta.portraitAlt",
    image: whCta,
  },
};

const pediatricCare: MobileServiceConfig = {
  slug: "pediatric-care",
  nameKey: "services.items.pediatricCare.title",
  href: SITE.pediatricCareHref,
  heroImage: pcHero,
  heroAltKey: "pediatricCare.hero.imageAlt",
  mainImage: pcMain,
  mainAltKey: "pediatricCare.mainPhotoAlt",
  headingKey: "pediatricCare.heading",
  introKey: "pediatricCare.intro",
  benefits: {
    kind: "simple",
    headingKey: "pediatricCare.whatsIncluded",
    itemKeys: [
      "regularCheckups",
      "skinConditions",
      "growthTracking",
      "digestiveProblems",
      "immunizations",
      "minorInjuries",
      "developmentalScreening",
      "teenHealthExams",
      "schoolPhysicals",
      "mentalHealthSupport",
      "commonIllnesses",
      "sportsMedicine",
      "respiratoryCare",
      "nutritionCounseling",
    ].map((k) => `pediatricCare.benefits.${k}`),
  },
  whyChoose: {
    headingKey: "pediatricCare.whyChoose.heading",
    itemKeys: [
      "childFriendly",
      "specialists",
      "parentEducation",
      "flexibleScheduling",
      "immunizationRecords",
      "schoolCoordination",
    ].map((k) => `pediatricCare.whyChoose.items.${k}`),
  },
  secondary: {
    headingKey: "pediatricCare.comprehensive.heading",
    bodyKey: "pediatricCare.comprehensive.description",
  },
  gallery: [
    { image: pcGalleryExam, altKey: "pediatricCare.pairAlt.examination" },
    { image: pcGalleryWellness, altKey: "pediatricCare.pairAlt.wellness" },
  ],
  faq: {
    eyebrowKey: "pediatricCare.faq.eyebrow",
    idPrefix: "m-pediatric-care",
    base: "pediatricCare.faq.items",
    keys: ["services", "ages", "immunizations", "illnessesInjuries", "hours", "moreInformation"],
    phoneKey: "moreInformation",
  },
  cta: {
    headingKey: "pediatricCare.sidebarCta.heading",
    descKey: "pediatricCare.sidebarCta.description",
    altKey: "pediatricCare.sidebarCta.portraitAlt",
    image: pcCta,
  },
};

const diagnosticServices: MobileServiceConfig = {
  slug: "diagnostic-services",
  nameKey: "services.items.diagnosticServices.title",
  href: SITE.diagnosticServicesHref,
  heroImage: dsHero,
  heroAltKey: "diagnosticServices.hero.imageAlt",
  mainImage: dsMain,
  mainAltKey: "diagnosticServices.content.mainPhotoAlt",
  headingKey: "diagnosticServices.content.heading",
  subheadingKey: "diagnosticServices.content.subheading",
  introKey: "diagnosticServices.content.description",
  benefits: {
    kind: "rich",
    headingKey: "diagnosticServices.services.heading",
    items: DIAGNOSTIC_SERVICE_ITEMS.map((item) => ({
      titleKey: `diagnosticServices.services.items.${item.translationKey}.title`,
      descKey: `diagnosticServices.services.items.${item.translationKey}.description`,
    })),
  },
  whyChoose: {
    headingKey: "diagnosticServices.whyChoose.heading",
    itemKeys: [
      "sameDay",
      "digitalImaging",
      "radiologists",
      "electronicResults",
      "insurance",
      "scheduling",
    ].map((k) => `diagnosticServices.whyChoose.items.${k}`),
  },
  gallery: [
    { image: dsGalleryLab, altKey: "diagnosticServices.content.pairAlt.lab" },
    { image: dsGalleryImaging, altKey: "diagnosticServices.content.pairAlt.imaging" },
  ],
  faq: {
    eyebrowKey: "diagnosticServices.faq.eyebrow",
    idPrefix: "m-diagnostic-services",
    base: "diagnosticServices.faq.items",
    keys: ["hours", "servicesAvailable", "appointment", "resultsTiming", "insurance"],
  },
  cta: {
    headingKey: "diagnosticServices.sidebarCta.heading",
    descKey: "diagnosticServices.sidebarCta.description",
    altKey: "diagnosticServices.sidebarCta.portraitAlt",
    image: dsCta,
  },
};

export const SERVICE_DETAIL_CONFIG: Record<ServiceSlug, MobileServiceConfig> = {
  "urgent-care": urgentCare,
  "family-health": familyHealth,
  "womens-health": womensHealth,
  "pediatric-care": pediatricCare,
  "diagnostic-services": diagnosticServices,
};
