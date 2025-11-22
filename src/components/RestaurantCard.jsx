import React from 'react'

// --- Icon Components ---

function IconMenu(){
  return (
    <img
      src="/assets/icon.png"
      alt="Menu Icon"
      className="w-6 h-6 object-contain"
    />
  )
}

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconEmail() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconFacebook(){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.06 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.83c0-2.5 1.49-3.87 3.77-3.87 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.9h-2.3V22C18.34 21.24 22 17.06 22 12.07z" fill="#1877F2"/>
    </svg>
  )
}

function IconInstagram(){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="25%" stopColor="#feda77" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="75%" stopColor="#8134af" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="6" ry="6" fill="url(#instagramGradient)" />
      <rect x="4" y="4" width="16" height="16" rx="4" ry="4" fill="none" stroke="#fff" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="2.5" />
      <circle cx="17" cy="7" r="1.2" fill="#fff" />
    </svg>
  )
}

function IconMap(){
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="block">
      <path d="M12 2C9.24 2 7 4.24 7 7c0 5.25 5 11 5 11s5-5.75 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="1.8" fill="currentColor" />
    </svg>
  )
}

function IconGoogle(){
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.35 11.1h-9.18v2.92h5.26c-.23 1.36-.93 2.51-1.98 3.28v2.72h3.2c1.87-1.72 2.95-4.25 2.95-7.16 0-.52-.05-1.02-.25-1.76z" fill="#4285F4"/>
      <path d="M12.17 22c2.7 0 4.98-.9 6.64-2.44l-3.2-2.72c-.88.6-2.02.99-3.44.99-2.6 0-4.8-1.76-5.59-4.12H3.2v2.59C4.86 19.98 8.22 22 12.17 22z" fill="#34A853"/>
      <path d="M6.58 13.72a6.44 6.44 0 010-3.44V7.69H3.2a10 10 0 000 8.62l3.38-2.59z" fill="#FBBC05"/>
      <path d="M12.17 6.1c1.47 0 2.8.5 3.84 1.46l2.83-2.83C16.98 2.9 14.69 2 12.17 2 8.22 2 4.86 4.02 3.2 7.69l3.38 2.59c.79-2.36 2.99-4.18 5.59-4.18z" fill="#EA4335"/>
    </svg>
  )
}

// --- Reusable Button Component ---

function ActionButton({ href = '#', label, Icon, variant = 'secondary', ariaLabel, onClick }){
  const base = "flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 focus:outline-none transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md";
  const style = variant === 'primary'
    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
    : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200 hover:border-slate-300';

  const iconClass = 'flex-shrink-0 w-8 h-8 flex items-center justify-center';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={(e) => {
          onClick();
          e.currentTarget.blur();
        }}
        onMouseLeave={(e) => {
          if (document.activeElement === e.currentTarget) {
            e.currentTarget.blur();
          }
        }}
        className={`${base} ${style}`}
        aria-label={ariaLabel || label}
      >
        <div className={iconClass}>
          {Icon ? <Icon /> : null}
        </div>
        <span className="flex-1 text-left font-medium">{label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-60">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    )
  }

  const isInternalLink = href.startsWith('/') || href.startsWith('#');

  return (
    <a
      href={href}
      className={`${base} ${style}`}
      {...(!isInternalLink && { target: "_blank", rel: "noopener noreferrer" })}
      aria-label={ariaLabel || label}
      onMouseLeave={(e) => {
        if (document.activeElement === e.currentTarget) {
          e.currentTarget.blur();
        }
      }}
      onClick={(e) => {
        setTimeout(() => {
          if (document.activeElement === e.currentTarget) {
            e.currentTarget.blur();
          }
        }, 150);
      }}
    >
      <div className={iconClass}>
        {Icon ? <Icon /> : null}
      </div>
      <span className="flex-1 text-left font-medium">{label}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-60">
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}

// --- Main Restaurant Card Component ---

export default function RestaurantCard(){
  const [isAnimated, setIsAnimated] = React.useState(false)
  const [showContent, setShowContent] = React.useState(false)

  React.useEffect(() => {
    const timer1 = setTimeout(() => setIsAnimated(true), 500)
    const timer2 = setTimeout(() => setShowContent(true), 2000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center pt-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Initial Logo Animation Screen */}
      <div className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-all duration-1000 z-50 ${
        showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <div className="text-center">
            <div className={`transform transition-all duration-1000 ${
            isAnimated ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}>
            <div className="relative mb-8">
              <div className="absolute -inset-20 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-10 right-1/4 w-1 h-1 bg-blue-200/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-10 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
              </div>
              
              <div className="w-44 h-44 mx-auto rounded-full bg-white/25 backdrop-blur-md border-2 border-white/40 shadow-2xl flex items-center justify-center p-3 relative overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent transform rotate-45"></div>
                <img
                  src="/assets/lesaphir.webp"
                  alt="Le Saphir Bleu profile"
                  className="w-full h-full rounded-full object-cover relative z-10"
                />
              </div>
              
              <div className={`absolute inset-0 rounded-full border-2 border-white/20 ${isAnimated ? 'animate-ping' : ''}`} style={{ animationDuration: '2s' }}></div>
              <div className={`absolute inset-2 rounded-full border border-blue-200/30 ${isAnimated ? 'animate-pulse' : ''}`} style={{ animationDuration: '3s' }}></div>
            </div>
            <h1 className={`text-5xl font-bold text-white drop-shadow-2xl mb-3 transition-all duration-1000 delay-500 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
              Le Saphir Bleu
            </h1>
            <p className={`text-blue-200 text-xl drop-shadow-xl transition-all duration-1000 delay-700 ${
              isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.4)' }}>
              Restaurant Authentique
            </p>
            <div className={`flex justify-center mt-8 space-x-2 transition-all duration-1000 delay-1000 ${
              isAnimated ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <article className={`w-full max-w-lg mx-4 card-3d rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-200/20 transform transition-all duration-1000 ${
        showContent ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
      }`}>
        <header className="relative">
          <div className="relative h-44 bg-cover bg-center" style={{ backgroundImage: "url('/assets/cover.jpg')" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="absolute left-1/2 -bottom-12 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl border-4 border-white">
              <img src="/assets/saphir.jpg" alt="Le Saphir Bleu profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </header>

        <div className={`pt-16 pb-8 px-6 transition-all duration-800 delay-300 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">Le Saphir Bleu</h1>
            <p className="text-base text-slate-600 leading-relaxed font-medium max-w-sm mx-auto">Une expérience gastronomique unique dans le cœur de Ksour Essef</p>
          </div>

          <nav className={`mt-6 space-y-3 transition-all duration-800 delay-500 ${
            showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} aria-label="Liens rapides">
            <ActionButton href="/menu" label="Notre Menu" Icon={IconMenu} variant="primary" ariaLabel="Voir notre menu" />

            <ActionButton href="https://www.facebook.com/share/1G5Mk1hLoE/" label="Facebook" Icon={IconFacebook} ariaLabel="Visiter Facebook" />
            <ActionButton href="https://www.instagram.com/le.saphir.bleu?igsh=MWxsaTJuYmMybGYyag==" label="Instagram" Icon={IconInstagram} ariaLabel="Visiter Instagram" />

            {/* Phone & Email placed after social links per request */}
            <ActionButton href="tel:+21626363180" label="Appeler (26 363 180)" Icon={IconPhone} ariaLabel="Appeler le restaurant" />
            <ActionButton href="mailto:lesaphireblue@gmail.com" label="Envoyer un Email" Icon={IconEmail} ariaLabel="Envoyer un email au restaurant" />

            <div className={`mt-8 transition-all duration-1000 delay-700 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 rounded-2xl p-6 shadow-lg border border-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="text-center mb-5 relative z-10">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">Notre Localisation</h3>
                      <p className="text-sm text-slate-500">Nous vous attendons</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-slate-200/50">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-slate-700 font-medium">plage salakta, Ksour Essef 5126</span>
                  </div>
                </div>

                <div className="relative bg-white rounded-lg overflow-hidden shadow-sm mb-3">
                  <div className="w-full h-48 sm:h-56 lg:h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8!2d11.036570!3d35.387264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzUuMzg3MjY0LCAxMS4wMzY1NzA!5e0!3m2!1sfr!2stn!4v1698672800000!5m2!1sfr!2stn"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  
                  <div className="absolute top-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-slate-800">Le Saphir Bleu</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-green-300 active:scale-95"
                    onClick={(e) => {
                      if (navigator.share) {
                        navigator.share({
                          title: 'Le Saphir Bleu - Localisation',
                          text: 'Retroувez-nous au restaurant Le Saphir Bleu',
                          url: `https://www.google.com/maps?q=35.387264,11.036570`
                        });
                      } else {
                        navigator.clipboard.writeText(`Le Saphir Bleu - [https://www.google.com/maps?q=35.387264](https://www.google.com/maps?q=35.387264),11.036570`);
                      }
                      e.currentTarget.blur();
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement === e.currentTarget) {
                        e.currentTarget.blur();
                      }
                    }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    Partager la localisation
                  </button>
                </div>
              </div>
            </div>

            <div className={`mt-8 transition-all duration-1000 delay-900 ${
              showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-4 border border-slate-200/50">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-800">Horaires d'ouverture</h3>
                </div>
                <div className="text-center space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Lun - Dim</span>
                    <span className="font-medium text-slate-800">8h00 - 23h00</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    Ouvert maintenant
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">laissez nous votre avis sur Google</p>
            <ActionButton href="https://www.google.com/search?q=Le+Saphir+Bleu+Ksour+Essef" label="Avis Google ★" Icon={IconGoogle} ariaLabel="Laisser un avis sur Google" />
          </nav>
        </div>
      </article>
    </main>
  )
}
