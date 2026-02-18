import { motion } from "framer-motion";
import { Shield, Lock, Globe, Building2 } from "lucide-react";

const points = [
  { icon: Building2, text: "Built by CXNext Technologies" },
  { icon: Shield, text: "Secure storage" },
  { icon: Lock, text: "Data privacy focus" },
  { icon: Globe, text: "India-first, global-ready" },
];

const TrustSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Built on trust.
        </motion.h2>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <p.icon size={20} className="text-accent" />
              <span className="text-sm font-medium text-foreground">{p.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
