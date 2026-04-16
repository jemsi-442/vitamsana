import React from 'react';
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';

const AboutUs = () => {
  const { language } = useLanguage();
  const text = {
    en: {
      title: 'About Us',
      description: 'Learn more about Vitamsana, a warmer restaurant brand built around fresh meals, smooth ordering, and local flavor.',
      aboutLabel: 'About Vitamsana',
      heading: 'A warmer food brand with local soul and a modern feel.',
      paragraphOne: 'Vitamsana is shaped around fresh meals, welcoming service, and a smooth ordering flow for guests who want quality without friction. We leaned the brand toward a polished restaurant identity instead of a generic online store.',
      paragraphTwo: 'Whether guests are walking in, sending a WhatsApp order, or checking the menu from home, the experience should feel calm, appetizing, and unmistakably Vitamsana.',
      visitLabel: 'Visit us',
      visitHeading: 'Dar es Salaam energy, plated with intention.',
      visitParagraphOne: 'The messaging now avoids mixed naming and keeps Vitamsana front and center. If you want, we can later plug in the exact verified address and contact wording you prefer for production.',
      visitParagraphTwo: 'Current contact channels stay visible so guests can move from discovery to ordering without hunting for links.',
      locationLabel: 'Location details',
      locationHeading: 'Address confirmation is the last big production task.',
      locationParagraphOne: 'I removed the placeholder map embed so the live site does not point visitors to an unverified location. For now, guests can use WhatsApp or call to request directions directly.',
      locationParagraphTwo: 'Once you have the exact business address or Google Maps embed, this block can be swapped back to a real map in a few minutes.',
      requestLocation: 'Request location on WhatsApp',
      callDirections: 'Call for directions',
      call: 'Call',
      location: 'Location',
    },
    sw: {
      title: 'Kutuhusu',
      description: 'Fahamu zaidi kuhusu Vitamsana, restaurant brand yenye ladha ya nyumbani, huduma laini, na oda rahisi.',
      aboutLabel: 'Kuhusu Vitamsana',
      heading: 'Brand ya chakula yenye joto la nyumbani na hisia ya kisasa.',
      paragraphOne: 'Vitamsana imejengwa juu ya chakula fresh, huduma ya ukarimu, na mfumo rahisi wa oda kwa wageni wanaotaka ubora bila usumbufu. Tumeielekeza brand hii iwe restaurant identity halisi badala ya online store ya kawaida.',
      paragraphTwo: 'Mteja awe anakuja moja kwa moja, anatuma oda WhatsApp, au anaangalia menyu akiwa nyumbani, uzoefu unatakiwa ujisikie mtulivu, wa kuvutia, na wa Vitamsana kweli.',
      visitLabel: 'Tutembelee',
      visitHeading: 'Nguvu ya Dar es Salaam, imepangwa kwa umakini.',
      visitParagraphOne: 'Ujumbe sasa hauna mchanganyiko wa majina na unaweka Vitamsana mbele wazi. Baadaye tunaweza kuweka address na wording rasmi ya biashara kwa production.',
      visitParagraphTwo: 'Njia za mawasiliano zinaonekana wazi ili mteja ahame kutoka kutazama hadi kuagiza bila kutafuta sana.',
      locationLabel: 'Maelezo ya location',
      locationHeading: 'Kuthibitisha address ndiyo kazi kubwa iliyobaki kwa production.',
      locationParagraphOne: 'Nimeondoa map embed ya placeholder ili live site isimpeleke mteja kwenye location isiyothibitishwa. Kwa sasa wageni wanaweza kuomba maelekezo kupitia WhatsApp au kupiga simu.',
      locationParagraphTwo: 'Ukishapata address halisi ya biashara au Google Maps embed, block hii inaweza kurudishwa kuwa map halisi ndani ya dakika chache.',
      requestLocation: 'Omba location kwa WhatsApp',
      callDirections: 'Piga simu kwa maelekezo',
      call: 'Simu',
      location: 'Location',
    },
  }[language];
  const contactItems = [
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+255 683 186 987',
      href: 'https://wa.me/255683186987?text=Hello%20Vitamsana%2C%20I%20want%20to%20reserve%20a%20table.',
    },
    {
      icon: FaPhoneAlt,
      label: text.call,
      value: '+255 683 186 987',
      href: 'tel:+255683186987',
    },
    {
      icon: FaMapMarkerAlt,
      label: text.location,
      value: 'Dar es Salaam, Tanzania',
      href: 'https://maps.google.com/?q=Dar+es+Salaam+Tanzania',
    },
  ];

  usePageMeta({
    title: text.title,
    description: text.description,
    path: '/about',
  });

  return (
    <main className="min-h-screen px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 grid gap-6 rounded-[34px] border border-white/60 bg-white/75 p-6 shadow-warm backdrop-blur dark:border-white/10 dark:bg-[#1a1411]/86 md:grid-cols-[1.05fr_0.95fr] md:p-8">
          <div className="space-y-5">
            <span className="pill-label">{text.aboutLabel}</span>
            <h1 className="text-4xl font-bold text-ink-900 dark:text-white md:text-5xl">
              {text.heading}
            </h1>
            <p className="text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8] md:text-base">
              {text.paragraphOne}
            </p>
            <p className="text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8] md:text-base">
              {text.paragraphTwo}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.instagram.com/softwarengineer442tz?igsh=YnJ4YTRxbzRibGN6"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary gap-2"
              >
                <FaInstagram /> Instagram
              </a>

              <a
                href="https://tiktok.com/@softwarengineer442tz"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-secondary gap-2"
              >
                <FaTiktok /> TikTok
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=80"
              alt="Vitamsana dining space"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card p-6 md:p-8">
            <span className="pill-label">{text.visitLabel}</span>
            <h2 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white">
              {text.visitHeading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8] md:text-base">
              {text.visitParagraphOne}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8] md:text-base">
              {text.visitParagraphTwo}
            </p>
            <div className="mt-6 space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-brand-200/70 bg-white/70 px-4 py-3 transition hover:border-brand-500 dark:border-brand-400/15 dark:bg-white/5"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-400/15 dark:text-brand-200">
                      <Icon />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.18em] text-[#8a6c58] dark:text-[#cfb7a4]">
                        {item.label}
                      </span>
                      <span className="block text-sm font-semibold text-ink-900 dark:text-white">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="surface-card flex flex-col justify-between p-6 md:p-8">
            <div>
              <span className="pill-label">{text.locationLabel}</span>
              <h3 className="mt-4 text-3xl font-bold text-ink-900 dark:text-white">
                {text.locationHeading}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8] md:text-base">
                {text.locationParagraphOne}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#6f5646] dark:text-[#dcc8b8] md:text-base">
                {text.locationParagraphTwo}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/255683186987?text=Hello%20Vitamsana%2C%20please%20share%20your%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
              >
                {text.requestLocation}
              </a>
              <a
                href="tel:+255683186987"
                className="cta-secondary"
              >
                {text.callDirections}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
