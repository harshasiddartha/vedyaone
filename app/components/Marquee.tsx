import Image from "next/image";

const images = [
  "/3m-removebg-preview.png",
  "/chevron-removebg-preview.png",
  "/deloitte-removebg-preview.png",
  "/ey.png",
  "/google-removebg-preview.png",
  "/jaj-removebg-preview.png",
  "/kaynes.png",
  "/merck-removebg-preview.png",
  "/pepsi-removebg-preview.png",
];

export default function Marquee() {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      {/* Client label section */}
      <div className="relative z-10 flex justify-center mb-6 px-4">
        <div className="bg-slate-800/95 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-slate-700/50 shadow-2xl flex items-center gap-3">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium tracking-wide uppercase">Our Clients</span>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="flex animate-scroll w-fit">
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center w-[280px] h-[140px]"
          >
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={280}
              height={140}
              className="object-contain max-h-full max-w-full hover:brightness-110 transition-all duration-300 opacity-100 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
