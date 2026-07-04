const missionItems = [
  {
    title: "Christ First",
    description: "Jesus is the center of everything we do.",
    verse:
      "I am the way, and the truth, and the life. No one comes to the Father except through Me.",
    reference: "John 14:6",
  },
  {
    title: "Biblical Truth",
    description: "God's Word is our final authority.",
    verse:
      "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness.",
    reference: "2 Timothy 3:16–17",
  },
  {
    title: "Love People",
    description: "Every person matters because every person is made in the image of God.",
    verse:
      "By this all people will know that you are My disciples, if you have love for one another.",
    reference: "John 13:35",
  },
  {
    title: "Make Disciples",
    description: "Helping people know Jesus and faithfully follow Him.",
    verse:
      "Go therefore and make disciples of all nations...",
    reference: "Matthew 28:19–20",
  },
];

export default function Mission() {
  return (
    <section className="bg-gradient-to-b from-[#0B0B0B] to-[#111111] py-28 px-6 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Mission
          </p>

          <h2 className="mb-6 text-5xl font-black md:text-7xl">
            Living for Christ.
            <br />
            Reaching the World.
          </h2>

          <p className="mx-auto max-w-3xl text-xl leading-9 text-gray-300">
            Everything we do is centered on Jesus Christ, grounded in Scripture,
            and focused on making disciples who boldly live out their faith.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {missionItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#D4AF37]/20 bg-[#181818] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
            >
              <h3 className="mb-4 text-2xl font-bold text-[#D4AF37]">
                {item.title}
              </h3>

              <p className="mb-6 leading-7 text-gray-300">
                {item.description}
              </p>

              <blockquote className="mb-5 border-l-2 border-[#D4AF37] pl-4 italic leading-8 text-gray-200">
                "{item.verse}"
              </blockquote>

              <p className="font-bold text-[#D4AF37]">
                {item.reference}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}