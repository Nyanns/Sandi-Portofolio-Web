import React from 'react';

export const PortfolioBrowser: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-0 w-full bg-surface-container-lowest">
      {/* Address Bar / Sub-Nav */}
      <nav className="bg-surface-container px-4 py-2 flex items-center gap-4 border-b border-surface-dim">
        <div className="flex gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">arrow_back</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">arrow_forward</span>
        </div>
        <div className="flex-1 bg-white border border-outline-variant rounded-full px-3 py-1 text-xs text-on-surface-variant flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">lock</span>
          https://www.sandiworks.io/portfolio
        </div>
        <div className="flex gap-3 text-on-surface-variant">
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">refresh</span>
          <span className="material-symbols-outlined cursor-pointer hover:text-primary">home</span>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex min-h-0 bg-surface">
        {/* Side Navigation */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-surface-container-low border-r border-surface-dim p-6 z-10 overflow-y-auto custom-scrollbar">
          <div className="mb-8">
            <h2 className="font-headline font-bold text-primary text-lg mb-1">Welcome</h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">SandiWorks Studio</p>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="text-[#0040ae] border-l-4 border-[#0040ae] pl-2 font-bold flex items-center gap-3 py-2 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">home</span>
              Home
            </a>
            <a className="text-[#434655] pl-3 flex items-center gap-3 py-2 hover:bg-[#dddaca]/50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">folder_special</span>
              Projects
            </a>
            <a className="text-[#434655] pl-3 flex items-center gap-3 py-2 hover:bg-[#dddaca]/50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">description</span>
              Resume
            </a>
            <a className="text-[#434655] pl-3 flex items-center gap-3 py-2 hover:bg-[#dddaca]/50 transition-all duration-200" href="#">
              <span className="material-symbols-outlined">mail</span>
              Contact
            </a>
          </nav>
          <div className="mt-auto pt-6 border-t border-surface-dim">
            <button className="w-full bg-secondary-container text-on-secondary-container font-bold py-3 px-4 rounded-lg shadow-sm hover:brightness-105 active:scale-95 transition-all">
              Start Tour
            </button>
          </div>
        </aside>

        {/* Content Canvas */}
        <div className="flex-1 h-full overflow-y-auto custom-scrollbar p-8 lg:p-12 relative">
          {/* Hero Section */}
          <section className="mb-16 flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary tracking-tight mb-6 leading-none">
                The Digital Pastoral.
              </h2>
              <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Reimagining the optimism of the early 2000s through editorial precision and tonal layering. A space where vibrant nostalgia meets high-end modern design.
              </p>
            </div>
            <div className="w-48 h-48 rounded-xl bg-surface-container-highest overflow-hidden shadow-lg border-4 border-white shrink-0">
              <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNzHd0B9ObqrYgXSl8XP3Olaod80z3gflZi2Nr7PbrxrpeeQJSesqFd_fj4wVfxa2BzZbM_RGk2u4BcjXwcWAiUwVdvMfN4TZ4vFZ1puuAEDTMlGSE2A4b50u06TkK7qTOWyYn2PNj3vN6HUHE12ZhgGrf3k9ojSIXB3pRdGFsiJ4P3XNKioEwOMDnO90so-k9jYHNkOyYLD42tq_6l0yrqyClIseVCWNAeK3j5uHe4aiLdrmd8yNwP_9rLfOqI_BJBgyXY4fFg"/>
            </div>
          </section>

          {/* Projects Bento Grid */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-headline text-2xl font-bold text-on-surface">Selected Works</h3>
              <span className="text-sm font-bold text-primary cursor-pointer hover:underline">View Archive (12)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Project */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl aspect-[16/9] bg-surface-container-highest shadow-sm cursor-pointer">
                <img alt="Project 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMkXy80ZyS-9IaNM7dy2P-QbgrZVQJzWlRJeMenLTW5dI2AqwdffpMBtT4B7krr1lO1pDFKyGyOLifFUUEAlaRTM4uGz0QArAtLGc6Gkr3g3-C8P8P04N_bq1rnWh8g8xq_AB6quj83HC-V67jTeEtTISSjvtrypIxESYw2k3ijssv_Fx5H5Z530WHfxieU8k9jFH5fpT_w6qk_pmCmyqXxJ5pkuIIyzObK2s85mVW6VyWV-i8tXdJxxZBTS0iBX8gqL3BEdjSUQ"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-2xl">SandiOS™ Redux</h4>
                  <p className="text-white/80 text-sm">UI Framework & Design System</p>
                </div>
              </div>
              {/* Small Project 1 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-surface-container-highest shadow-sm cursor-pointer">
                <img alt="Project 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvFw05zDSkLK9b6KfbkjUMXezrXRQ6c6zKapG4UABaHgGIWogQPU-B6ikaCh1OHqtQzfARSGXMmRXqPOdf7VR5dtxP8ZFyYUZFiWPcCUu19FlM7JinMqZrkCHngfJbsNSehUi-vJLYG66VvB4hmdhZfXwH0eQiCJKTffUXz681HzTbnrm0-inWL4FmvUSXTwnDJ191J4MLGT6ruEhpjDaKK85PP8pepUrpvpl0t3hym8bwhq3_gYOt1NV8ti8fOwXx_rNWKsOAMA"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold">Pastoral Grid</h4>
                  <p className="text-white/80 text-xs">Web Application</p>
                </div>
              </div>
              {/* Small Project 2 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-surface-container-highest shadow-sm cursor-pointer">
                <img alt="Project 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXWfB6pM-QH_Vs0RbXCdxmoXfaB4ZxdxqKI4ah8UmxntNhm6BCr2-YZD4pMarsoattBd9cAFZG4eBS6mpcdMwV9R9aCEBurvhRQHEe5UoA2EmtYUB2od3cR38KHJxKe6y5Fof1iKltGnQU3w8R_ouzA1U0KFhW_b5U-Z_lDBix3METldvN2Hb0NOp-urw_BFCu6Rti5huLIvkuRH4sPb2LBsUpURxV78tqdUgo4I9z-A3e3v7YxJSoYyhpf8qX9NhL61UhCkXvCA"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold">SonicLayers</h4>
                  <p className="text-white/80 text-xs">Iconography Set</p>
                </div>
              </div>
              {/* Medium Project */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl aspect-[21/9] bg-surface-container-highest shadow-sm cursor-pointer">
                <img alt="Project 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA97iWKUaLARcR3vy3tkkfMkz4hzdM9HJ292RwwNRjHVoLbi8dm8K-LjiSmNKB2lr4mi4T5rCiQxmKFvYa1PgJ157EuJUeINfT0Jcj-UxhpUEJeSgFcWLsOJbMj9brJUQft_9dz6x-hEd3RPut2Pj_vjjUmwUc7Y_BXRZozLRokEWOujMyRAz2RE_vkU7piRlK87qh9cnOp0z08-ac2Rp2F6em92pMWM64IRKeD4XIYh6g_Ta5Egy7h-sz12fqaArld6AqGGrupkA"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-xl">Nexus Dashboard</h4>
                  <p className="text-white/80 text-sm">Experimental Interface</p>
                </div>
              </div>
              {/* Small Project 3 */}
              <div className="group relative overflow-hidden rounded-xl aspect-square bg-surface-container-highest shadow-sm cursor-pointer">
                <img alt="Project 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCY_N3I6_A-89V673M63YkE41T1067Z-1W8z6C-W3A-89V673M63YkE41T1067Z-1W8z6C-W3A"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold">Skyline Photography</h4>
                  <p className="text-white/80 text-xs">Landscape Architecture</p>
                </div>
              </div>
              {/* Medium Project 2 */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl aspect-[21/9] bg-surface-container-highest shadow-sm cursor-pointer">
                <img alt="Project 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Y_N3I6_A-89V673M63YkE41T1067Z-1W8z6C-W3A-89V673M63YkE41T1067Z-1W8z6C-W3A"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-xl">Pixel Perfect</h4>
                  <p className="text-white/80 text-sm">Mobile App</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="max-w-2xl bg-surface-container-low p-8 rounded-xl border border-surface-dim mb-16">
            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Get in Touch</h3>
            <p className="text-on-surface-variant text-sm mb-6">Send a message to start a new project or just say hi.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary transition-all p-3 text-sm" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary transition-all p-3 text-sm" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Message</label>
                <textarea className="w-full bg-surface-container-highest border-none rounded-lg focus:ring-2 focus:ring-primary transition-all p-3 text-sm" placeholder="How can I help you?" rows={4}></textarea>
              </div>
              <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] hover:brightness-110 active:scale-95 transition-all">
                Send Message
              </button>
            </form>
          </section>

          {/* Scrolling Long Content Test */}
          <section className="bg-white p-8 rounded-xl border border-surface-dim opacity-70">
            <h3 className="font-headline text-2xl font-bold text-primary mb-4">Scrolling Area Test</h3>
            {Array.from({ length: 15 }).map((_, i) => (
              <p key={i} className="mb-4 text-on-surface-variant text-sm leading-relaxed">
                Ini adalah paragraf percobaan nomor {i + 1} untuk mendemonstrasikan bahwa bagian utama (Content Canvas) ini dapat di-*scroll* secara independen ke bawah. Menu di sebelah kiri akan tetap terpasang dengan kuat pada posisinya (fixed/sticky effect) karena tinggi keseluruhan dibatasi oleh jendela (window constraints), dan hanya div ini yang diberikan property `overflow-y-auto`. Kamu bisa mengisi area ini sepanjang apa pun nanti!
              </p>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
