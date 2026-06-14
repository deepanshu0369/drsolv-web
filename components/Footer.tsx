import Link from "next/link";
import Logo from "./ui/Logo";

const productLinks = [
  { label: "QR Emergency Band", href: "#qr-band" },
  { label: "Medical-Grade Biosensing Wearable", href: "#wearable" },
  { label: "How it works", href: "#how-it-works" },
];

const companyLinks = [
  { label: "About", href: "#team" },
  { label: "Programme status", href: "#pilots" },
  { label: "Partner with us", href: "#partner" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo height={56} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              Building India&rsquo;s emergency response infrastructure.
            </p>
          </div>

          <FooterCol title="Product" items={productLinks} />
          <FooterCol title="Company" items={companyLinks} />
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-subtle">
            Disclaimer
          </p>
          <p className="text-xs leading-relaxed text-fg-muted">
            The data presented on this website is sourced from official Government of India
            publications and databases. All statistics and figures are subject to periodic
            revision by the respective implementing agencies and government authorities, and
            may differ from previously published values.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-fg-muted">
            While we strive to maintain accurate and current information, we make no
            representations or warranties — express or implied — regarding the completeness,
            accuracy, or timeliness of any data displayed. Users are encouraged to consult
            the relevant official Government of India portals for authoritative and
            up-to-date information.
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-fg-muted">
            © 2025–{new Date().getFullYear()} DRSOLV Healthcare Pvt Ltd.
            Incorporated November 2025. CIN: U86909UP2025PTC235770.
            Registered in Uttar Pradesh, India.
          </p>
          <p className="mt-2 text-xs text-fg-subtle">
            DPIIT-recognised startup · DIPP233670
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-subtle">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
