import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

const CTA_COLOR = 'hsl(38 65% 52%)';
const CTA_HOVER = 'hsl(38 65% 45%)';

const PreviewLock = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const location = useLocation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-trigger popup on every internal page (not homepage) after 1 second
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const isHome = location.pathname === '/';
    if (!isHome) {
      timerRef.current = setTimeout(() => {
        setPopupOpen(true);
      }, 1000);
    } else {
      setPopupOpen(false);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [location.pathname]);

  return (
    <>
      {/* TOP BAR — z-[9999] ensures highest layer */}
      <div
        className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 py-2"
        style={{
          zIndex: 9999,
          backgroundColor: 'hsl(0 0% 8%)',
          borderBottom: '1px solid hsl(0 0% 15%)',
          color: 'hsl(0 0% 85%)',
          fontSize: '13px',
        }}
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
        style={{
          zIndex: 9998,
          bottom: '90px',
          backgroundColor: CTA_COLOR,
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
      >
        Activate Now
      </button>

      {/* POPUP + OVERLAY */}
      {popupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 10000 }}
        >
          {/* Dim overlay — NO blur */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            onClick={() => setPopupOpen(false)}
          />

          {/* Popup card */}
          <div
            className="relative w-[95vw] max-w-xl mx-auto rounded-xl shadow-2xl overflow-y-auto"
            style={{
              backgroundColor: 'hsl(0 0% 10%)',
              border: '1px solid hsl(0 0% 20%)',
              color: 'hsl(0 0% 90%)',
              maxHeight: '90vh',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full transition-colors cursor-pointer"
              style={{ color: 'hsl(0 0% 60%)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'hsl(0 0% 90%)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'hsl(0 0% 60%)')}
            >
              <X size={20} />
            </button>

            <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
              {/* Headline */}
              <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: CTA_COLOR }}>
                This Website Preview is Ready.
              </h2>
              <p className="text-sm sm:text-base mb-1" style={{ color: 'hsl(0 0% 75%)' }}>
                Activate your website anytime — everything is already built and ready to go.
              </p>
              <p className="text-xs mb-6" style={{ color: 'hsl(0 0% 55%)' }}>
                You've already seen the result. Everything is ready.
              </p>

              {/* Process steps — horizontal */}
              <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 text-xs sm:text-sm font-medium" style={{ color: 'hsl(0 0% 70%)' }}>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold" style={{ backgroundColor: CTA_COLOR }}>1</div>
                  <span className="text-center max-w-[80px]">Payment Confirmed</span>
                </div>
                <div className="w-6 sm:w-10 h-px" style={{ backgroundColor: 'hsl(0 0% 30%)' }} />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold" style={{ backgroundColor: CTA_COLOR }}>2</div>
                  <span className="text-center max-w-[80px]">Submit Your Revisions</span>
                </div>
                <div className="w-6 sm:w-10 h-px" style={{ backgroundColor: 'hsl(0 0% 30%)' }} />
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-black font-bold" style={{ backgroundColor: CTA_COLOR }}>3</div>
                  <span className="text-center max-w-[80px]">Launch Your Website</span>
                </div>
              </div>

              {/* CTA buttons — Preview A */}
              <div className="flex flex-col gap-3 mb-6">
                <button
                  className="w-full py-3 rounded-lg font-bold text-base text-black transition-colors cursor-pointer"
                  style={{ backgroundColor: CTA_COLOR }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = CTA_HOVER)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = CTA_COLOR)}
                >
                  Activate with Revisions – $499
                </button>
                <button
                  className="w-full py-3 rounded-lg font-bold text-base transition-colors cursor-pointer"
                  style={{
                    backgroundColor: 'transparent',
                    border: `1px solid ${CTA_COLOR}`,
                    color: CTA_COLOR,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = CTA_COLOR;
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = CTA_COLOR;
                  }}
                >
                  Or launch as-is – $299
                </button>
              </div>

              {/* A/B Navigation — opens in new tabs */}
              <div className="flex items-center justify-center gap-4 mb-5">
                <a
                  href="https://spear-fish-brewing-a.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-2 transition-colors"
                  style={{ color: CTA_COLOR }}
                >
                  View Version A
                </a>
                <a
                  href="https://spear-fish-brewing-b.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-2 transition-colors"
                  style={{ color: CTA_COLOR }}
                >
                  View Version B
                </a>
              </div>

              {/* Stripe text */}
              <p className="text-[11px]" style={{ color: 'hsl(0 0% 45%)' }}>
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
