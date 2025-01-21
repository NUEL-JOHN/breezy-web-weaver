import { motion } from "framer-motion";
import { Sparkles, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Beautiful Design",
    description: "Crafted with attention to every detail for a premium experience.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for seamless interaction and quick loading.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security in mind to protect your data and privacy.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral max-w-2xl mx-auto"
          >
            Discover the features that make our platform stand out
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};