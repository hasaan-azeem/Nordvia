"use client";

export default function CTA() {
  return (
    <section className="bg-white text-black py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Looking for a reliable winter apparel manufacturer?
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-base opacity-80 sm:text-base">
          Contact Nordvia to receive our catalog, pricing details, and sample
          options.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#catalog"
            className="rounded-full bg-black px-8 py-3 text-base font-medium text-white hover:opacity-90 transition"
          >
            Check Catalog
          </a>

          <a
            href="https://wa.me/03146802816"
            target="_blank"
            className="rounded-full border border-black px-8 py-3 text-base hover:bg-black hover:text-white transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
