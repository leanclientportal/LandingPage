import { motion } from "framer-motion";
import { Briefcase, Users, Scale, Lightbulb } from "lucide-react";

const cases = [
  { icon: Briefcase, title: "Freelancers", desc: "Deliver polished, professional client experiences — solo." },
  { icon: Users, title: "Agencies", desc: "Manage multiple clients without juggling tools." },
  { icon: Scale, title: "CAs & Lawyers", desc: "Keep documents and timelines audit-ready." },
  { icon: Lightbulb, title: "Consultants", desc: "Share progress and deliverables with clarity." },
];

const UseCases = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Built for service professionals.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                <c.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-semibold text-base">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
