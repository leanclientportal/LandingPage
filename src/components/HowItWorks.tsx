import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Create a client project", desc: "Set up a dedicated workspace in seconds." },
  { num: "2", title: "Upload files, tasks & updates", desc: "Everything lives in one organized place." },
  { num: "3", title: "Share one secure link", desc: "No logins. No learning curve." },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          How It Works
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
