import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["1 active project", "Basic file sharing", "Client link access"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    features: ["5 active projects", "Task tracking", "Invoice sharing", "Email support"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹999",
    period: "/month",
    features: ["Unlimited projects", "Branded portals", "Priority support", "Team collaboration"],
    cta: "Start Free Trial",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Simple, transparent pricing.
        </motion.h2>
        <p className="mt-3 text-muted-foreground">No surprises. Scale when you're ready.</p>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl border p-8 text-left flex flex-col ${
                p.highlighted
                  ? "border-accent bg-background shadow-lg ring-2 ring-accent/20"
                  : "border-border bg-background"
              }`}
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground ml-1">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={p.highlighted ? "default" : "outline"}
              >
                {p.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
