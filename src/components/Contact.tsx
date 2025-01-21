import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral mb-8"
        >
          Have questions? We'd love to hear from you.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary/50"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-neutral/20 focus:outline-none focus:border-primary/50"
          />
          <button className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};