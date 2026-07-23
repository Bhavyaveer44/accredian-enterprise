import { footerBrand, footerContact, footerLinks, copyrightText } from "@/lib/mockData";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">{footerBrand.name}</p>
          <h2 className="mt-4 text-2xl font-bold text-white">Enterprise learning for modern teams.</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">{footerBrand.description}</p>
          <p className="mt-6 max-w-sm text-sm text-slate-500">Contact our team for a tailored learning program or a brief discovery call.</p>
        </div>

        {footerLinks.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{column.title}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              {column.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</p>
          <div className="mt-6 space-y-4 text-sm text-slate-400">
            <p>{footerContact.location}</p>
            <p>
              <a href={`mailto:${footerContact.email}`} className="hover:text-white transition-colors">
                {footerContact.email}
              </a>
            </p>
            <p>
              <a href={`tel:${footerContact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                {footerContact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 text-sm text-slate-500 text-center">
        {copyrightText}
      </div>
    </footer>
  );
}
