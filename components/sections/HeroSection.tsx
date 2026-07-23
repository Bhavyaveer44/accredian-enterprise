"use client";

import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import { heroTags } from "@/lib/mockData";
import { useLeadModal } from "@/components/LeadModalProvider";

export default function HeroSection() {
  const { openLeadModal } = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-blue-50/80 px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-blue-100/80 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-white/90 px-3 py-1.5 rounded-full shadow-sm ring-1 ring-blue-100">
            <Sparkles size={14} />
            Empowering Fortune 500 Workforce
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.05]">
            Cultivate high-performance teams through expert learning
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-xl">
            Enterprise learning programs built around your team's real skill gaps — designed with industry experts and delivered with measurable outcomes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button className="px-8 py-3 text-base" onClick={openLeadModal}>
              Talk to an Expert
            </Button>
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <Play size={14} fill="currentColor" />
              </span>
              Watch Story
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white bg-slate-100 shadow-2xl">
            <img src="/hero-team.jpg" alt="Team collaborating" className="w-full h-full object-cover" />
          </div>

          <div className="absolute -bottom-6 -left-6 flex flex-wrap gap-2 max-w-[78%]">
            {heroTags.map((tag) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xs font-semibold bg-white shadow-md rounded-full px-3 py-1.5 border border-slate-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
