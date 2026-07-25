import { useState } from 'react';
import { FiCheck, FiMail, FiPhone, FiSend } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { profile } from '../data/portfolioData';
import { sendContactMessage } from '../utils/api';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMessage, setErrorMessage] = useState('');

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please write a message.';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('sending');
    setErrorMessage('');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section id="contact" className="section">
      <SectionHeading index="06" eyebrow="Let's build something" title="Contact" />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="max-w-sm text-base leading-relaxed text-ink/70 dark:text-paper/70">
            Open to Frontend, Full-Stack, and Forward Deployed Engineer roles. If there's a fit,
            or you just want to talk shop about async pipelines and LLMs, reach out.
          </p>
          <div className="mt-6 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 font-mono text-sm text-ink/80 transition-colors hover:text-teal-dim dark:text-paper/80 dark:hover:text-teal"
            >
              <FiMail size={14} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 font-mono text-sm text-ink/80 transition-colors hover:text-teal-dim dark:text-paper/80 dark:hover:text-teal"
            >
              <FiPhone size={14} /> {profile.phone}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="card space-y-4 p-6">
          <div>
            <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink/50 dark:text-paper/50">
              name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-paper-line bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-teal-dim dark:border-ink-line dark:focus:border-teal"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-amber-dim dark:text-amber">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink/50 dark:text-paper/50">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-paper-line bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-teal-dim dark:border-ink-line dark:focus:border-teal"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-amber-dim dark:text-amber">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink/50 dark:text-paper/50">
              message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-paper-line bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-teal-dim dark:border-ink-line dark:focus:border-teal"
              placeholder="What's on your mind?"
            />
            {errors.message && <p className="mt-1 text-xs text-amber-dim dark:text-amber">{errors.message}</p>}
          </div>

          <Button as="button" type="submit" disabled={status === 'sending'} className="w-full justify-center disabled:opacity-60">
            {status === 'sending' ? (
              'sending…'
            ) : status === 'sent' ? (
              <>
                <FiCheck size={14} /> message sent
              </>
            ) : (
              <>
                <FiSend size={14} /> send message
              </>
            )}
          </Button>

          {status === 'error' && (
            <p className="text-xs text-amber-dim dark:text-amber">{errorMessage}</p>
          )}
          {status === 'sent' && (
            <p className="text-xs text-teal-dim dark:text-teal">Thanks — I'll get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
}
