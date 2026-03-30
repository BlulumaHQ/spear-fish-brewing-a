import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const CTA_COLOR = 'hsl(38 65% 52%)';
const CTA_HOVER = 'hsl(38 65% 45%)';

const STRIPE_299 = 'https://buy.stripe.com/9B63cu2GwaQ56zq8PXfw40o';
const STRIPE_499 = 'https://buy.stripe.com/eVq00ich66zP8Hy2rzfw40q';
const STRIPE_799 = 'https://buy.stripe.com/28EaEWch6e2he1Sc29fw40n';

const PreviewLock = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const location = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentHost = typeof window !== 'undefined' ? window.location.hostname : '';
  const isVersionB = currentHost.includes('spear-fish-brewing-b');
  const isHighlight499 = !isVersionB;
  const isHighlight799 = isVersionB;
  const isOnA = !isVersionB;

  const isHomepage = location.pathname === '/';

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (isHomepage) {
      // HARD LOCK: Never auto-open on homepage
      return;
    }
    // Internal pages only: auto-open after 1 second
    timerRef.current = setTimeout(() => setPopupOpen(true), 1000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [location.pathname, isHomepage]);

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
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
            onClick={() => setPopupOpen(false)}
          />

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
                  You are viewing 2 complete website previews. Choose the version you want to launch.
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
                      <p className="text-[11px] mb-2 flex-1" style={{ color: 'hsl(0 0% 60%)' }}>Get your website exactly as shown in this version. Fastest way to go live.</p>
                      {isOnA ? (
                        <a
                          href={STRIPE_299}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-1.5 rounded text-center text-xs font-semibold transition-colors"
                          style={{ border: `1px solid ${CTA_COLOR}`, color: CTA_COLOR, backgroundColor: 'transparent' }}
                          onMouseEnter={e => { e.currentTarget.style.backgroundColor = CTA_COLOR; e.currentTarget.style.color = 'black'; }}
                          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = CTA_COLOR; }}
                        >
                          Launch This Version
                        </a>
                      ) : (
                        <span className="block w-full py-1.5 rounded text-center text-xs font-semibold select-none" style={{ border: '1px solid hsl(0 0% 22%)', color: 'hsl(0 0% 40%)', cursor: 'default', pointerEvents: 'none' }}>
                          Launch This Version
                        </span>
                      )}
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
                      <p className="text-sm font-bold mb-1" style={{ color: 'hsl(0 0% 95%)' }}>Launch + 1 Revision — $499</p>
                      <p className="text-[11px] mb-2 flex-1" style={{ color: 'hsl(0 0% 65%)' }}>We refine your website based on your feedback before launch.</p>
                      {isOnA ? (
                        <a
                          href={STRIPE_499}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-1.5 rounded text-center text-xs font-bold transition-colors text-black"
                          style={{ backgroundColor: CTA_COLOR }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
                        >
                          Start With Revision
                        </a>
                      ) : (
                        <span className="block w-full py-1.5 rounded text-center text-xs font-bold select-none" style={{ backgroundColor: 'hsl(0 0% 20%)', color: 'hsl(0 0% 40%)', cursor: 'default', pointerEvents: 'none' }}>
                          Start With Revision
                        </span>
                      )}
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
                    {isVersionB ? (
                      <a
                        href={STRIPE_799}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 rounded text-center text-sm font-bold transition-colors text-black"
                        style={{ backgroundColor: CTA_COLOR }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
                      >
                        Get Premium Version
                      </a>
                    ) : (
                      <span className="block w-full py-2 rounded text-center text-sm font-bold select-none" style={{ backgroundColor: 'hsl(0 0% 20%)', color: 'hsl(0 0% 40%)', cursor: 'default', pointerEvents: 'none' }}>
                        Get Premium Version
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Cross-version navigation */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {isOnA ? (
                  <span
                    className="block py-2 rounded text-center text-xs font-semibold select-none"
                    style={{ border: '1px solid hsl(0 0% 18%)', color: 'hsl(0 0% 35%)', backgroundColor: 'hsl(0 0% 12%)', cursor: 'default', pointerEvents: 'none' }}
                  >
                    View Version A
                  </span>
                ) : (
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
                )}

                {isVersionB ? (
                  <span
                    className="block py-2 rounded text-center text-xs font-semibold select-none"
                    style={{ border: '1px solid hsl(0 0% 18%)', color: 'hsl(0 0% 35%)', backgroundColor: 'hsl(0 0% 12%)', cursor: 'default' }}
                  >
                    View Version B
                  </span>
                ) : (
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
                )}
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
