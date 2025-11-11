import { BedDouble, BrainCog, FileCheck, HeartPulse, NotebookPen, ShieldCheck, Smile, Target, Timer, TrendingUp } from "lucide-react";
import Depression from "@/public/static/images/depression.jpg";
import Anxiety from "@/public/static/images/anxiety.jpg";
import Stress from "@/public/static/images/stress.jpg";
import BipolarDisorder from "@/public/static/images/bipolarDisorder.webp";

export const footerData = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Support",
    items: ["FAQs", "Help Center", "Privacy Policy", "Terms of Use"],
  },
  {
    title: "Explore",
    items: [
      "Mental Health Quiz",
      "Self-Care Tools",
      "Therapist Match",
      "Progress Tracker",
    ],
  },
  {
    title: "Connect",
    items: ["Instagram", "LinkedIn", "Twitter", "YouTube"],
  },
];

export const featuresData: featureCardProps[] = [
  {
    title: "Personalized Experience",
    description:
      "Every user journey is tailored based on age, gender, and lifestyle inputs.",
  },
  {
    title: "Focus Area Detection",
    description:
      "Accurately identifies your key emotional needs like anxiety, stress, or self-esteem.",
  },
  {
    title: "Science-Backed Methods",
    description:
      "Exercises and suggestions are grounded in psychology and cognitive behavioral research.",
  },
  {
    title: "Confidential & Secure",
    description:
      "All personal data is encrypted and never shared without consent.",
  },
  {
    title: "Real-Time Progress Tracking",
    description:
      "Monitor improvements in your emotional health with easy-to-read insights.",
  },
  {
    title: "Expert Guidance",
    description:
      "Get matched with therapists or coaches based on your unique profile and focus area.",
  },
];

export const servicesData: ServiceCardPropsType[] = [
  {
    Icon: HeartPulse,
    title: "Stress Management",
    subtitle: "Reduce and manage daily stress levels",
  },
  {
    Icon: BrainCog,
    title: "Anxiety Tracker",
    subtitle: "Track anxiety triggers & responses",
  },
  {
    Icon: Timer,
    title: "Focus & Productivity",
    subtitle: "Improve attention span & work flow",
  },
  {
    Icon: BedDouble,
    title: "Sleep & Mind Relaxation",
    subtitle: "Boost sleep quality and mental calm",
  },
];

export const highlightsData: ServiceCardPropsType[] = [
  {
    Icon: Target,
    title: "Our Mission",
    subtitle: "Accessible Mental Wellness for All",
  },
  {
    Icon: Smile,
    title: "Your First Step",
    subtitle: "Free Intro Session",
  },
  {
    Icon: ShieldCheck,
    title: "Confidentiality",
    subtitle: "Your Privacy is Our Priority",
  },
];

export const introScriptsData: ServiceCardPropsType[] = [
  {
    Icon: FileCheck,
    title: "Personalized Assessments",
    subtitle:
      "Get a mental health plan based on your focus areas like anxiety or stress",
  },
  {
    Icon: NotebookPen,
    title: "Mindfulness & Journaling",
    subtitle:
      "Practice gratitude, reflect daily, and relax your mind with guided sessions",
  },
  {
    Icon: TrendingUp,
    title: "Progress Tracking",
    subtitle: "Measure your mood and mental wellness improvements over time",
  },
];

export const journeySteps: JourneyCardProps[] = [
  {
    step: "01",
    title: "Answer a Few Questions",
    description:
      "We begin with simple questions like your age, gender, and lifestyle to understand your background.",
  },
  {
    step: "02",
    title: "Discover Your Focus Area",
    description:
      "We then ask 7 smart questions that help identify your core emotional needs — stress, anxiety, self-esteem, and more.",
  },
  {
    step: "03",
    title: "Personalized Insights & Support",
    description:
      "Based on your answers, we’ll soon offer insights, exercises, or therapist matches tailored to your focus area.",
  },
];

export const mentalIssues: MentalIssueCardProps[] = [
  {
    title: "Depression",
    description: "Understand symptoms, causes, and treatment of depression.",
    imageSrc: Depression,
    href: "/",
  },
  {
    title: "Anxiety",
    description: "Learn how to manage and reduce anxiety effectively.",
    imageSrc: Anxiety,
    href: "/",
  },
  {
    title: "Stress",
    description: "Tips and techniques to manage everyday stress.",
    imageSrc: Stress,
    href: "/",
  },
  {
    title: "Bipolar Disorder",
    description: "Explore causes, signs, and therapy options.",
    imageSrc: BipolarDisorder,
    href: "/",
  },
];

export const recoveryGuideData = [
  "Personalized Insights",
  "Guided Process",
  "Backed Exercises",
  "Data Privacy",
  "Progress Tracking",
  "Therapist Match",
  "Need Detection",
  "Emotional Support",
];
