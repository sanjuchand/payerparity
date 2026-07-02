import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-card-border bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/payerparity-logo.png"
                alt="PayerParity"
                width={200}
                height={54}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.tagline}. We find what your payer already pays comparable
              facilities — in their own disclosed files — and turn it into
              documented negotiation leverage. Same code. Same methodology.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Pages</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <p className="mt-4 text-sm text-muted">
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-accent"
              >
                {SITE.email}
              </a>
            </p>
            <Link
              href="/contact?type=report"
              className="mt-4 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Request a free Parity Report →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-card-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="text-xs">
            Hospital inpatient payments are based on MS-DRG codes, not CPT.
          </p>
        </div>
      </div>
    </footer>
  );
}
