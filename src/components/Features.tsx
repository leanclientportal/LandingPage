import { motion } from "framer-motion";
import {
  FolderOpen,
  Upload,
  CheckSquare,
  Bell,
  Receipt,
  Palette,
} from "lucide-react";

const features = [
  { icon: FolderOpen, title: "Project-level document sharing" },
  { icon: Upload, title: "Two-way file uploads" },
  { icon: CheckSquare, title: "Task lists with progress tracking" },
  { icon: Bell, title: "Client updates & timelines" },
  { icon: Receipt, title: "Invoice sharing" },
  { icon: Palette, title: "Branded client portals" },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Key Features
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-lg border border-border bg-background text-left"
            >
              <f.icon size={22} className="text-accent shrink-0" />
              <span className="font-medium text-sm">{f.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
