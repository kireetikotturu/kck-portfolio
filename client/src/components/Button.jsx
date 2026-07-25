const base =
  'inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-all duration-200 focus-visible:outline-none';

const variants = {
  primary:
    'bg-teal-dim text-white hover:bg-teal dark:bg-teal dark:text-ink dark:hover:bg-teal/90 shadow-sm hover:shadow-md hover:-translate-y-0.5',
  ghost:
    'border border-paper-line text-ink hover:border-teal-dim hover:text-teal-dim dark:border-ink-line dark:text-paper dark:hover:border-teal dark:hover:text-teal',
};

export default function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
