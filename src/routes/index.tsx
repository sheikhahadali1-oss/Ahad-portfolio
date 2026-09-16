import { createFileRoute } from "@tanstack/react-router";
import { profile, seo } from "@/content/portfolio";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { TrustStrip } from "@/components/portfolio/TrustStrip";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Process } from "@/components/portfolio/Process";
import { WhyWorkWithMe } from "@/components/portfolio/WhyWorkWithMe";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      {
        name: "keywords",
        content:
          "Sheikh Ahad Ali, web designer, web developer, SEO specialist, digital marketing, WordPress developer, e-commerce website, Pakistan",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: profile.name,
              jobTitle: "Web Designer & Developer, SEO & Digital Marketing Specialist",
              description: seo.description,
              address: { "@type": "PostalAddress", addressCountry: "PK" },
              sameAs: [profile.linkedin],
              knowsAbout: [
                "Web Design",
                "Web Development",
                "WordPress",
                "E-commerce",
                "SEO",
                "Local SEO",
                "Digital Marketing",
              ],
            },
            {
              "@type": "ProfessionalService",
              name: `${profile.name} — Web Design, Development & SEO`,
              description: profile.positioning,
              areaServed: "Worldwide",
              serviceType: [
                "Website Design",
                "Website Development",
                "WordPress Development",
                "E-commerce Website Development",
                "SEO",
                "Local SEO",
                "Digital Marketing",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <WhyWorkWithMe />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
