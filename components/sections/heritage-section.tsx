"use client";

export function HeritageSection() {
  return (
    <section id="heritage" className="bg-background py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-foreground mb-12 md:mb-16 leading-[1.1]">
            Welcome to Your Extraordinary Safari Adventure
          </h2>

          <div className="space-y-12">
            {/* Who We Are Section */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                Who We Are
              </h3>
              <p className="text-2xl md:text-3xl leading-snug text-foreground/90 font-light mb-8">
                Dive into the wild elegance of Africa with Victoria Expeditions,
                your gateway to an unparalleled safari experience. Let us guide
                you through Tanzania's breathtaking landscapes and vibrant
                cultures with bespoke safari adventures, meticulously crafted to
                suit your unique desires.
              </p>
            </div>

            {/* Detailed Heritage Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Welcome to Victoria Expeditions, where adventure meets
                  heritage at the heart of Tanzania’s breathtaking landscapes.
                  Named after the majestic Lake Victoria, where our journey
                  began and where many of our dedicated team members call home,
                  we are more than just a travel company. We are custodians of a
                  rich tradition, guiding adventurers and explorers through the
                  soul of Africa.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Our founders, seasoned veterans in safari and trekking
                  expeditions, bring a wealth of experience and passion to every
                  journey. With backgrounds steeped in guiding tours up the
                  formidable peaks and across the sprawling national parks of
                  Tanzania, our management team embodies the spirit of
                  exploration and a deep love for our homeland.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Whether you’re dreaming of a classic Serengeti adventure or a
                  once-in-a-lifetime Ngorongoro Crater safari, we tailor each
                  experience to reveal the extraordinary. From witnessing the
                  Big Five in the crater’s unique ecosystem to standing on the
                  rim of an ancient caldera, a Ngorongoro Crater safari offers
                  an unforgettable encounter with nature’s grandeur.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Victoria Expeditions, we take pride in delivering safe,
                  authentic, and transformative journeys. If you’re seeking a
                  true connection to the land and its people, let us design your
                  perfect Ngorongoro Crater safari—a journey as rich and
                  timeless as the land itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
