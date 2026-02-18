import { motion } from "framer-motion";
import { FolderKanban, FileText, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: FolderKanban,
    title: "Projects",
    desc: "One workspace per client project",
  },
  {
    icon: FileText,
    title: "Documents",
    desc: "Two-way file exchange, always in context",
  },
  {
    icon: BarChart3,
    title: "Progress",
    desc: "Tasks, updates, and invoices in one view",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          UdyamiHub brings everything together.
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4">
                <p.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
