# Content layer

All portfolio copy lives in `src/content/portfolio.ts`. Components never hardcode
content, so this file is the only place to edit text, projects, skills, services,
certifications or SEO metadata today.

## Future admin dashboard (Lovable Cloud)

The exported shapes map 1:1 to future database tables:

| Export           | Future table        | Notes                                                   |
| ---------------- | ------------------- | ------------------------------------------------------- |
| `profile`        | `site_settings`     | name, headline, availability, social links              |
| `projects`       | `projects`          | name, category, description, tags, image, urls, featured |
| `moreProjects`   | `projects`          | same table, `featured = false`                          |
| `services`       | `services`          | ordered by `number`                                     |
| `skillGroups`    | `skill_groups` + `skills` | grouped badges                                    |
| `experience`     | `experience`        | timeline entries                                        |
| `certifications` | `certifications`    | optional `verify_url`                                   |
| `seo`            | `seo_metadata`      | title, description, og image                            |
| contact form     | `contact_messages`  | see `src/lib/contact.ts`                                |

Migration path when Cloud is enabled:

1. Create the tables with RLS: public `SELECT` on content tables,
   `INSERT` only for `contact_messages`, and admin-only writes gated by a
   separate `user_roles` table + `has_role()` security-definer function.
2. Replace the constants with loader/query reads; component props stay unchanged.
3. Add the admin dashboard under `src/routes/_authenticated/admin/*` so it is
   protected by the auth gate and never linked from public navigation.
4. Keep the service-role key server-side only.
