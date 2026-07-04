import PageNav from "../components/PageNav";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="px-6 pt-32 pb-20 text-center">
        <p className="mb-4 uppercase tracking-[0.35em] text-[#D4AF37]">
          Make Jesus Cool Again Ministry
        </p>

        <h1 className="mb-8 text-5xl font-black md:text-7xl">
          ABOUT THE MINISTRY
        </h1>

        <p className="mx-auto max-w-4xl text-xl leading-9 text-gray-300">
          Our vision is to proclaim the Gospel to the next generation and to
          make following Jesus cool again.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10">
          <h2 className="mb-6 text-4xl font-bold text-[#D4AF37]">
            Our Story
          </h2>

          <p className="text-lg leading-9 text-gray-300">
            Make Jesus Cool Again Ministry exists to glorify Jesus Christ,
            proclaim the Gospel, teach the truth of Scripture, make disciples,
            and call people back to the real Jesus revealed in the Bible.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10">
          <h2 className="mb-6 text-4xl font-bold text-[#D4AF37]">
            Samson&apos;s Testimony
          </h2>

          <p className="whitespace-pre-line text-gray-300 leading-8">
{`I grew up in church and considered myself a Christian for most of my life, but if I'm being honest, I was sleepwalking through my faith. I knew about God, but I wasn't truly living for Him with my whole heart.

God began to get my attention through two separate encounters in dreams and visions, calling me to preach His Word.

Then, on December 16, 2025, everything changed. I was at one of the lowest points in my life, but Jesus Christ met me with incredible mercy.

That night, God gave me a dream unlike anything I had ever experienced. In the dream, I was preaching the Gospel to a crowd of people, and I saw Jesus Christ. When I woke up, I knew God had spared my life for a purpose and was calling me to proclaim His Word.

Since then, the Lord has transformed my life, given me a passion for His Word, and allowed me to disciple others, preach, evangelize, and lead Bible study.

My story is not about how good I am—it is about how faithful God is. Jesus Christ saved my life, gave me purpose, and called me to preach His Gospel.`}
          </p>
        </div>

        <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#181818] p-10">
          <h2 className="mb-6 text-4xl font-bold text-[#D4AF37]">
            Tyler&apos;s Testimony
          </h2>

          <p className="whitespace-pre-line text-gray-300 leading-8">
{`Growing up, Tyler attended a Baptist church where he first learned about Jesus and gave his life to Him. He went to church regularly and loved attending church camp.

During COVID, he slowly drifted away. Out of laziness, he stopped going to church and spent most of his time playing video games. He became out of shape, quit the sport he loved, and found himself unhappy with the direction his life was heading.

As he entered high school, he discovered a passion for the gym, but still lacked a solid foundation. He was chasing things like success, lust, and his own desires, and they left him feeling empty.

Near the end of his junior year, he was invited to Crittenden Drive, and everything began to change. He started attending every Wednesday, then every Sunday, church camps, and every event he could.

God reignited his faith, and now He has led Tyler and his best friend to start a ministry so they can help others know Him too.`}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-[#D4AF37]/30 bg-black p-10 text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#D4AF37]">
            Why “Make Jesus Cool Again?”
          </h2>

          <p className="mx-auto max-w-4xl text-xl leading-9 text-gray-300">
            We are not trying to change Jesus to fit culture. We are calling
            culture back to Jesus. Jesus has never stopped being amazing—our
            culture stopped looking to Him.
          </p>
        </div>
      </section>

      <PageNav
        previous={{ label: "Home", href: "/" }}
        next={{ label: "What We Believe", href: "/beliefs" }}
      />
    </main>
  );
}