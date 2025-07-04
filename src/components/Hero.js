import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Image src="/background.jpg" alt="Hero background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Psychological Care for Insight & Well‑Being
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-black">
          Professional counseling to guide your growth.
        </h2>
        <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition">
          Book a Free Consult
        </button>
      </div>
    </section>
  );
}
