import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const CTA_COLOR = 'hsl(38 65% 52%)';
const CTA_HOVER = 'hsl(38 65% 45%)';

const PreviewLock = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const location = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
  const isVersionB = currentHost.includes('spear-fish-brewing-b');
  const isHighlight499 = !isVersionB;
  const isHighlight799 = isVersionB;

  // Auto-trigger popup on EVERY page after 1 second
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPopupOpen(true), 1000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [location.pathname]);

  return (
    <>
      {/* TOP BAR */}
      <div
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 py-2"
        style={{ zIndex: 9999, backgroundColor: 'hsl(0 0% 8%)', borderBottom: '1px solid hsl(0 0% 15%)', color: 'hsl(0 0% 85%)', fontSize: '13px' }}
      >
        <span className="truncate">This preview is valid for 72 hours</span>
        <button
          onClick={() => setPopupOpen(true)}
          className="ml-4 shrink-0 px-4 py-1.5 rounded text-sm font-semibold text-black transition-colors cursor-pointer"
          style={{ backgroundColor: CTA_COLOR }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
        >
          Activate Now
        </button>
      </div>

      {/* STICKY BUTTON — desktop only */}
      <button
        onClick={() => setPopupOpen(true)}
        className="hidden md:block fixed right-6 cursor-pointer px-5 py-3 rounded-lg text-sm font-bold text-black shadow-lg transition-colors"
        style={{ zIndex: 9998, bottom: '90px', backgroundColor: CTA_COLOR }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
      >
        Activate Now
      </button>

      {/* POPUP + OVERLAY */}
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 10000 }}>
          {/* Dim overlay — NO blur */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
            onClick={() => setPopupOpen(false)}
          />

          {/* Popup card */}
          <div
            className="relative w-[95vw] max-w-2xl mx-auto rounded-xl shadow-2xl overflow-y-auto"
            style={{ backgroundColor: 'hsl(0 0% 10%)', border: '1px solid hsl(0 0% 20%)', color: 'hsl(0 0% 90%)', maxHeight: '90vh' }}
          >
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full transition-colors cursor-pointer"
              style={{ color: 'hsl(0 0% 60%)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0 0% 90%)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0 0% 60%)')}
            >
              <X size={20} />
            </button>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              {/* Headline */}
              <div className="text-center mb-2">
                <h2 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: CTA_COLOR }}>
                  This Website Preview is Ready.
                </h2>
                <p className="text-sm mb-1" style={{ color: 'hsl(0 0% 75%)' }}>
                  Activate your website anytime — everything is already built and ready to go.
                </p>
              </div>

              {/* Process steps */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 text-[11px] sm:text-xs font-medium" style={{ color: 'hsl(0 0% 70%)' }}>
                {['Payment Confirmed', 'Submit Your Revisions', 'Launch Your Website'].map((step, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    {i > 0 && <div className="w-4 sm:w-8 h-px" style={{ backgroundColor: 'hsl(0 0% 30%)' }} />}
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-black text-xs font-bold" style={{ backgroundColor: CTA_COLOR }}>{i + 1}</div>
                      <span className="text-center max-w-[70px] leading-tight">{step}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm font-semibold mb-4" style={{ color: 'hsl(0 0% 80%)' }}>
                Choose Your Website Version
              </p>

              {/* Two grouped columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {/* GROUP A */}
                <div
                  className="rounded-lg p-3 sm:p-4 flex flex-col"
                  style={{
                    backgroundColor: isHighlight499 ? 'hsl(38 10% 11%)' : 'hsl(0 0% 12%)',
                    border: isHighlight499 ? `2px solid ${CTA_COLOR}` : '1px solid hsl(0 0% 20%)',
                    boxShadow: isHighlight499 ? '0 0 20px hsl(38 65% 52% / 0.15)' : 'none',
                    opacity: isHighlight499 ? 1 : 0.7,
                  }}
                >
                  <div className="text-center mb-3">
                    <p className="text-sm font-bold" style={{ color: isHighlight499 ? CTA_COLOR : 'hsl(0 0% 80%)' }}>Preview A</p>
                    <p className="text-[11px]" style={{ color: 'hsl(0 0% 55%)' }}>Clean, functional version</p>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    {/* $299 */}
                    <div className="rounded-md p-3 flex flex-col" style={{ backgroundColor: 'hsl(0 0% 14%)', border: '1px solid hsl(0 0% 22%)' }}>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: 'hsl(0 0% 55%)' }}>BASIC</p>
                      <p className="text-sm font-bold mb-1" style={{ color: 'hsl(0 0% 90%)' }}>Launch As-Is — $299</p>
                      <p className="text-[11px] mb-2 flex-1" style={{ color: 'hsl(0 0% 60%)' }}>Get your website exactly as shown in this preview. Fastest way to go live.</p>
                      <a
                        href="https://spear-fish-brewing-a.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-1.5 rounded text-center text-xs font-semibold transition-colors"
                        style={{ border: `1px solid ${CTA_COLOR}`, color: CTA_COLOR, backgroundColor: 'transparent' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = CTA_COLOR; e.currentTarget.style.color = 'black'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = CTA_COLOR; }}
                      >
                        Launch This Version
                      </a>
                    </div>

                    {/* $499 */}
                    <div
                      className="rounded-md p-3 flex flex-col relative"
                      style={{
                        backgroundColor: isHighlight499 ? 'hsl(38 20% 13%)' : 'hsl(0 0% 14%)',
                        border: isHighlight499 ? `1.5px solid ${CTA_COLOR}` : '1px solid hsl(0 0% 22%)',
                      }}
                    >
                      {isHighlight499 && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold px-2 py-0.5 rounded-full text-black whitespace-nowrap" style={{ backgroundColor: CTA_COLOR }}>
                          ⭐ Most Popular
                        </span>
                      )}
                      <p className="text-xs font-semibold mb-0.5 mt-1" style={{ color: isHighlight499 ? CTA_COLOR : 'hsl(0 0% 55%)' }}>REVISION</p>
                      <p className="text-sm font-bold mb-1" style={{ color: 'hsl(0 0% 95%)' }}>Launch + 2 Revisions — $499</p>
                      <p className="text-[11px] mb-2 flex-1" style={{ color: 'hsl(0 0% 65%)' }}>We refine your website based on your feedback before launch.</p>
                      <a
                        href="https://spear-fish-brewing-a.lovable.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-1.5 rounded text-center text-xs font-bold transition-colors text-black"
                        style={{ backgroundColor: CTA_COLOR }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
                      >
                        Start With Revision
                      </a>
                    </div>
                  </div>
                </div>

                {/* GROUP B */}
                <div
                  className="rounded-lg p-3 sm:p-4 flex flex-col"
                  style={{
                    backgroundColor: isHighlight799 ? 'hsl(38 10% 11%)' : 'hsl(0 0% 12%)',
                    border: isHighlight799 ? `2px solid ${CTA_COLOR}` : '1px solid hsl(0 0% 20%)',
                    boxShadow: isHighlight799 ? '0 0 20px hsl(38 65% 52% / 0.15)' : 'none',
                    opacity: isHighlight799 ? 1 : 0.7,
                  }}
                >
                  <div className="text-center mb-3">
                    <p className="text-sm font-bold" style={{ color: isHighlight799 ? CTA_COLOR : 'hsl(0 0% 80%)' }}>Preview B</p>
                    <p className="text-[11px]" style={{ color: 'hsl(0 0% 55%)' }}>Premium conversion version</p>
                  </div>

                  <div
                    className="rounded-md p-3 sm:p-4 flex flex-col flex-1 relative"
                    style={{
                      backgroundColor: isHighlight799 ? 'hsl(38 20% 13%)' : 'hsl(0 0% 14%)',
                      border: isHighlight799 ? `1.5px solid ${CTA_COLOR}` : '1px solid hsl(0 0% 22%)',
                    }}
                  >
                    {isHighlight799 && (
                      <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] font-bold px-2 py-0.5 rounded-full text-black whitespace-nowrap" style={{ backgroundColor: CTA_COLOR }}>
                        👑 Premium
                      </span>
                    )}
                    <p className="text-xs font-semibold mb-0.5 mt-1" style={{ color: isHighlight799 ? CTA_COLOR : 'hsl(0 0% 55%)' }}>PREMIUM</p>
                    <p className="text-sm font-bold mb-1" style={{ color: 'hsl(0 0% 95%)' }}>Premium Conversion — $799</p>
                    <p className="text-[11px] mb-3 flex-1" style={{ color: 'hsl(0 0% 65%)' }}>The upgraded version designed to improve conversions and customer engagement.</p>
                    <a
                      href="https://spear-fish-brewing-b.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2 rounded text-center text-sm font-bold transition-colors text-black"
                      style={{ backgroundColor: isHighlight799 ? CTA_COLOR : 'hsl(0 0% 25%)', color: isHighlight799 ? 'black' : 'hsl(0 0% 80%)' }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = CTA_COLOR; e.currentTarget.style.color = 'black'; }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = isHighlight799 ? CTA_COLOR : 'hsl(0 0% 25%)'; e.currentTarget.style.color = isHighlight799 ? 'black' : 'hsl(0 0% 80%)'; }}
                    >
                      Get Premium Version
                    </a>
                  </div>
                </div>
              </div>

              {/* Cross-version navigation */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <a
                  href="https://spear-fish-brewing-a.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 rounded text-center text-xs font-semibold transition-colors"
                  style={{ border: '1px solid hsl(0 0% 30%)', color: 'hsl(0 0% 70%)', backgroundColor: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = CTA_COLOR; e.currentTarget.style.color = CTA_COLOR; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'hsl(0 0% 30%)'; e.currentTarget.style.color = 'hsl(0 0% 70%)'; }}
                >
                  View Version A
                </a>
                <a
                  href="https://spear-fish-brewing-b.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 rounded text-center text-xs font-semibold transition-colors"
                  style={{ border: '1px solid hsl(0 0% 30%)', color: 'hsl(0 0% 70%)', backgroundColor: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = CTA_COLOR; e.currentTarget.style.color = CTA_COLOR; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'hsl(0 0% 30%)'; e.currentTarget.style.color = 'hsl(0 0% 70%)'; }}
                >
                  View Version B
                </a>
              </div>

              <p className="text-center text-[11px]" style={{ color: 'hsl(0 0% 45%)' }}>
                Secure checkout powered by Stripe
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewLock;
