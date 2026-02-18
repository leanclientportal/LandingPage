import { motion } from "framer-motion";
import { Mail, MessageSquare, Eye, Frown } from "lucide-react";

const pains = [
  { icon: Mail, text: "Files spread across email, WhatsApp, Drive" },
  { icon: MessageSquare, text: "Clients asking for updates repeatedly" },
  { icon: Eye, text: "No clear visibility on tasks or invoices" },
  { icon: Frown, text: "Work feels unprofessional despite your effort" },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Client work shouldn't feel scattered.
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background"
            >
              <div className="mt-0.5 shrink-0 w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                <p.icon size={20} className="text-accent" />
              </div>
              <p className="text-foreground font-medium">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
