export default function BeliefsPage() {
  const beliefs = [
    ["The Bible", "We believe the Bible is the inspired Word of God and our final authority.", "2 Timothy 3:16–17"],
    ["God", "We believe there is one true God, eternally existing as Father, Son, and Holy Spirit.", "Matthew 28:19"],
    ["Jesus Christ", "We believe Jesus Christ is fully God, fully man, Savior, Lord, and the only way to the Father.", "John 14:6"],
    ["The Holy Spirit", "We believe the Holy Spirit convicts, comforts, guides, empowers, and helps believers live for Christ.", "John 14:26"],
    ["Salvation", "We believe salvation is by grace through faith in Jesus Christ, not by works.", "Ephesians 2:8–9"],
    ["Baptism", "We believe baptism is an outward testimony of a believer’s faith in Jesus Christ.", "Romans 6:3–4"],
    ["The Church", "We believe the Church exists to worship God, proclaim the Gospel, make disciples, and serve others.", "Matthew 28:19–20"],
    ["Prayer", "We believe prayer is essential to the Christian life and that God hears His people.", "Philippians 4:6"],
    ["Heaven & Hell", "We believe in eternal life with God and eternal separation from God for those who reject Christ.", "John 3:16"],
    ["Return of Christ", "We believe Jesus Christ will return, judge the world, and make all things new.", "Revelation 22:12"],
    ["Christian Living", "We believe followers of Jesus are called to live holy lives, love others, and obey God’s Word.", "Romans 12:1–2"],
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-24 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-center uppercase tracking-[0.35em] text-[#D4AF37]">
          Statement of Faith
        </p>

        <h1 className="mb-8 text-center text-5xl font-black md:text-7xl">
          WHAT WE BELIEVE
        </h1>

        <p className="mx-auto mb-16 max-w-4xl text-center text-xl leading-9 text-gray-300">
          Our faith is built on Jesus Christ and grounded in the truth of
          Scripture. These beliefs guide our teaching, ministry, outreach, and
          discipleship.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {beliefs.map(([title, text, verse]) => (
            <div
              key={title}
              className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-8"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#D4AF37]">
                {title}
              </h2>

              <p className="mb-5 leading-8 text-gray-300">{text}</p>

              <p className="font-bold text-white">{verse}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}