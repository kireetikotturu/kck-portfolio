import { motion } from 'framer-motion';

export default function SectionHeading({ index, title, eyebrow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 flex items-baseline gap-4"
    >
      {index && (
        <span className="font-mono text-sm text-ink/30 dark:text-paper/30">{index}</span>
      )}
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="heading-lg">{title}</h2>
      </div>
    </motion.div>
  );
}
