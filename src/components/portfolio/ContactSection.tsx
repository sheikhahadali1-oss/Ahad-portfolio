import { useState } from "react";
import { Linkedin, Loader2, Mail, MapPin, Send } from "lucide-react";
import { budgetOptions, profile, serviceOptions } from "@/content/portfolio";
import { submitContactMessage, type ContactFormValues } from "@/lib/contact";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

type Errors = Partial<Record<keyof ContactFormValues, string>>;

const emptyForm: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = <K extends keyof ContactFormValues>(key: K, value: string) => {
    setValues((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select a service.";
    if (values.details.trim().length < 15)
      next.details = "Please share a little more about the project (15+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }
    setStatus("submitting");
    try {
      await submitContactMessage(values);
      setStatus("success");
      setValues(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring";

  return (
    <section id="contact" className="scroll-mt-24 bg-surface/60 py-20 md:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Have a Project in Mind?"
            subtitle="Whether you need a new website, an e-commerce store, SEO support, or a complete digital presence, let's discuss your project."
          />

          <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a Project
              <Send className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
            </a>
          </Reveal>

          <Reveal delay={180} className="mt-10 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">Based in {profile.basedIn}</p>
                <p className="text-sm text-muted-foreground">
                  Working with clients remotely, worldwide
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">Project enquiries</p>
                <p className="text-sm text-muted-foreground">
                  Send details through the form and I'll get back to you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <form
            id="contact-form"
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-7 shadow-lift md:p-9"
          >
            <h3 className="font-display text-xl font-semibold">Tell me about your project</h3>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name" error={errors.name} required>
                <input
                  id="name"
                  name="name"
                  className={inputClass}
                  placeholder="Your full name"
                  value={values.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>

              <Field label="Email" htmlFor="email" error={errors.email} required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(event) => update("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>

              <Field label="Company / Business" htmlFor="company">
                <input
                  id="company"
                  name="company"
                  className={inputClass}
                  placeholder="Optional"
                  value={values.company}
                  onChange={(event) => update("company", event.target.value)}
                />
              </Field>

              <Field label="Service Needed" htmlFor="service" error={errors.service} required>
                <select
                  id="service"
                  name="service"
                  className={inputClass}
                  value={values.service}
                  onChange={(event) => update("service", event.target.value)}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Budget Range" htmlFor="budget" className="sm:col-span-2">
                <select
                  id="budget"
                  name="budget"
                  className={inputClass}
                  value={values.budget}
                  onChange={(event) => update("budget", event.target.value)}
                >
                  <option value="">Select a range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Project Details"
                htmlFor="details"
                error={errors.details}
                required
                className="sm:col-span-2"
              >
                <textarea
                  id="details"
                  name="details"
                  rows={5}
                  className={`${inputClass} resize-y`}
                  placeholder="What are you building, and what would success look like?"
                  value={values.details}
                  onChange={(event) => update("details", event.target.value)}
                  aria-invalid={Boolean(errors.details)}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "submitting" ? (
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              ) : (
                <Send className="h-4 w-4" aria-hidden="true" />
              )}
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            <p aria-live="polite" className="mt-4 text-sm">
              {status === "success" ? (
                <span className="text-primary">
                  Thank you — your message has been received. I'll reply as soon as possible.
                </span>
              ) : null}
              {status === "error" ? (
                <span className="text-destructive">
                  Something went wrong sending your message. Please try again or reach out on
                  LinkedIn.
                </span>
              ) : null}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
        {required ? (
          <span className="text-accent-foreground" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
