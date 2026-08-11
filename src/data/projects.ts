import type { Project } from "../types/Section";
import PolyTrainer from "../images/polytrainer.webp";
import Stenzi from "../images/stenzi.webp";
import HorizonApp from "../images/horizon.webp";
import CarePlusApp from "../images/health.webp";
import FintechDashboard from "../images/fintech-dashboard.webp";
import Kolo from "../images/kolo.webp";

const projectsList: Project[] = [
  {
    id: 1,
    image: FintechDashboard,
    name: "Fintech Payments Platform",
    summary:
      "Built the payment layer for a fintech platform on an 18-month contract: one adapter behind four providers, with idempotency keys and a retry queue to stop double-charges and dropped payments. In production the whole time — ~150k deposits, 10k+ payouts, ~6,000 accounts. Blurred for NDA.",
    tags: ["nodejs", "payments", "stripe", "webhooks", "socketio", "fintech"],
    featured: true,
  },
  {
    id: 2,
    image: PolyTrainer,
    name: "PolyTrainer",
    summary:
      "Practice trading real Polymarket prediction markets with play money, coached by an AI that produces structured bull/bear analysis, probability estimates, and risk/reward breakdowns for every market. The interesting work was wiring live Polymarket data into a paper-trading layer that tracks portfolio P/L against real price moves and feeds the coach with consistent market context.",
    tags: [
      "nextjs",
      "react",
      "typescript",
      "nodejs",
      "express",
      "postgresql",
      "ai-coaching",
      "prediction-markets",
    ],
    featured: true,
    link: {
      web: "https://polytrainers.com/",
    },
  },
  {
    id: 3,
    image: Kolo,
    name: "Kólò",
    summary:
      "Personal finance tracker built as a real double-entry ledger, not a balance tracker with a UI on top: every transaction posts two balanced legs, money is bigint minor units (no floats), and Assets = Liabilities + Equity holds at every date. The UI hides debits/credits behind plain language while the engine underneath enforces the accounting.",
    tags: ["typescript", "supabase", "postgresql", "fintech", "cloudflare"],
    featured: true,
    link: {
      web: "https://kolo.moobarrac.workers.dev/",
      github: "https://github.com/moobarrac/kolo",
    },
  },
  {
    id: 4,
    image: Stenzi,
    name: "Stenzi",
    summary:
      "Marketing site for a digital studio offering web builds, workflow automation, and product MVPs alongside an internal ventures portfolio. Dark, service-tiered landing experience with outcome-focused copy and a clear hand-off path into each engagement type.",
    tags: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "nodejs",
      "express",
      "studio",
      "marketing-site",
    ],
    featured: true,
    link: {
      web: "https://www.stenzi.net/",
    },
  },
  {
    id: 5,
    image: HorizonApp,
    name: "Horizon",
    summary:
      "Banking dashboard that links accounts across institutions through Plaid, surfaces a unified transaction view, and supports inter-account transfers. Auth and storage on Appwrite; built with Next.js, React, and TypeScript.",
    tags: ["nextjs", "react", "typescript", "tailwindcss", "plaid", "appwrite"],
    link: {
      github: "https://github.com/moobarrac/horizon",
      web: "https://horizon-moon.vercel.app/",
    },
  },
  {
    id: 6,
    image: CarePlusApp,
    name: "CarePulse",
    summary:
      "Appointment system for patients and doctors: patients submit intake details and request slots; doctors review, accept, and schedule from a dashboard. Form-heavy flows with strict validation, built on Next.js and TypeScript.",
    tags: ["nextjs", "react", "typescript", "tailwindcss", "healthcare"],
    link: {
      github: "https://github.com/moobarrac/health_mg",
      web: "https://health-mg.vercel.app/",
    },
  },
  // {
  //   id: 7,
  //   image: PodOfCast,
  //   name: "Pod of Cast",
  //   summary:
  //     "Podcast browser: explore shows by genre, view episode metadata, and play in-app. Built with React, Redux Toolkit, and TypeScript; the interesting work was modeling the show/episode/feed shapes cleanly in TS.",
  //   tags: ["react", "typescript", "redux", "tailwindcss"],
  //   link: {
  //     web: "https://pod-of-cast.vercel.app/",
  //     github: "https://github.com/moobarrac/pod-of-cast",
  //   },
  // },
];

export default projectsList;
