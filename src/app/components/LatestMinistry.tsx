export default function LatestMinistry() {
  const updates = [
    ["Latest Video", "New ministry videos, teachings, testimonies, and updates will appear here."],
    ["Bible Study", "Stay connected with upcoming Bible studies, discipleship nights, and teaching series."],
    ["Merch Coming Soon", "Make Jesus Cool Again T-shirts, hoodies, and hats are being prepared."],
  ];

  return (
    <section id="latest" className="bg-[#0B0B0B] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#D4AF37]">
            Latest From the Ministry
          </p>

          <h2 className="mb-6 text-5xl font-black md:text-7xl">
            See What God Is Doing
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Follow the latest videos, updates, Bible studies, outreach,
            testimonies, and ministry announcements.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#181818] lg:col-span-3">
            <div className="flex h-[420px] items-center justify-center bg-black text-gray-500">
              Featured Video Coming Soon
            </div>

            <div className="p-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                Featured
              </p>

              <h3 className="mb-4 text-3xl font-bold">
                Latest Ministry Update
              </h3>

              <p className="mb-8 leading-8 text-gray-300">
                This space will feature your newest YouTube video, ministry
                announcement, outreach recap, testimony, or podcast episode.
              </p>

              <a
                href="/contact"
                className="inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black"
              >
                Send Us an Update
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-2">
            {updates.map(([title, text]) => (
              <div
                key={title}
                className="rounded-[2rem] border border-[#D4AF37]/25 bg-[#181818] p-8"
              >
                <h3 className="mb-3 text-2xl font-bold text-[#D4AF37]">
                  {title}
                </h3>

                <p className="leading-7 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}