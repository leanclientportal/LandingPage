import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Bring order to your client work.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <Button size="lg" className="mt-8 gap-2">
            Start using UdyamiHub today <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
