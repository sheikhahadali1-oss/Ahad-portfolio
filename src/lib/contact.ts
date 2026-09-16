/**
 * Contact submission boundary.
 *
 * Today this resolves on the frontend only. When Lovable Cloud is enabled,
 * replace the body of `submitContactMessage` with an insert into a
 * `contact_messages` table (RLS: public insert, admin-only select) or a
 * server function — no component changes required.
 */

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};

export async function submitContactMessage(values: ContactFormValues): Promise<{ ok: true }> {
  // Placeholder transport: keeps UI states realistic until a backend is connected.
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (import.meta.env.DEV) {
    console.info("[contact] submission", values);
  }
  return { ok: true };
}
