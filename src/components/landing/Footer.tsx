import { Link } from "@tanstack/react-router";
import { MdEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

export function Footer() {
  return (
    <footer className="relative bg-ink text-background pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 pb-16 border-b border-background/10">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-full bg-gradient-warm shadow-glow" />
              <span className="font-display text-3xl">Bao Bao</span>
            </div>
            <p className="mt-5 max-w-sm text-background/70 leading-relaxed">
              A Chennai-born street-food brand revolutionising the humble bao with bold Indian flavour.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-4">Explore</div>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/" className="hover:text-primary">Story</Link></li>
              <li><Link to="/locations" className="hover:text-primary">Locations</Link></li>
              <li><Link to="/franchise" className="hover:text-primary">Franchise</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-4">Cities</div>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Chennai</li>
              <li>Singapore</li>
              <li>Pondicherry</li>
              <li>Bengaluru</li>
              <li>Tirupati · Madurai · Thanjavur</li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="mailto:baobaooperation@gmail.com" className="hover:text-primary inline-flex items-center gap-2">
                  <MdEmail size={20} />
                  baobaooperation@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-background/50 mb-4">Follow along</div>
            <div className="mt-2 flex gap-3 text-sm text-background/70">
              <a
                href="https://www.instagram.com/baobao.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary inline-flex items-center gap-2"
              >
                <SiInstagram size={20} />
                Instagram
              </a>
            </div>
            <Link
              to="/franchise"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow-glow"
            >
              Partner with us →
            </Link>
          </div>
        </div>

        <div className="py-12 flex items-center justify-center text-center select-none">
          <span className="font-brand text-[14vw] md:text-[9vw] leading-none text-gradient-warm">Bao Bao</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} Bao Bao. Made in Chennai.</div>
          <div className="flex gap-6">

          </div>
        </div>
      </div>
    </footer>
  );
}
