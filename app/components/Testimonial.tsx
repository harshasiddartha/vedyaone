import Image from "next/image";

interface TestimonialProps {
  companyName: string;
  companyTagline?: string;
  logoUrl?: string;
  quote: string;
  className?: string;
}

export default function Testimonial({
  companyName,
  companyTagline,
  logoUrl,
  quote,
  className = "",
}: TestimonialProps) {
  return (
    <div className={`bg-[#faf8f5] p-8 md:p-12 rounded-lg shadow-lg ${className}`}>
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        {logoUrl ? (
          <div className="mb-4">
            <Image
              src={logoUrl}
              alt={companyName}
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="flex flex-col items-center mb-4">
            {/* Placeholder logo - golden yellow emblem */}
            <div className="relative mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full"></div>
                </div>
              </div>
              {/* Small dark green dot at base */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-800 rounded-full"></div>
            </div>
            {/* Company name in dark green */}
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 uppercase tracking-wide">
              {companyName}
            </h3>
          </div>
        )}
        {companyTagline && (
          <p className="text-sm md:text-base text-green-800 font-medium">
            {companyTagline}
          </p>
        )}
      </div>

      {/* Quote Section */}
      <div className="max-w-3xl mx-auto">
        <blockquote className="text-[#5c4033] text-lg md:text-xl lg:text-2xl font-serif font-bold italic leading-relaxed text-center">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </div>
  );
}

