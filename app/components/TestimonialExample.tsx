import Testimonial from "./Testimonial";

export default function TestimonialExample() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Testimonial
            companyName="Morrisons"
            companyTagline="Since 1899"
            quote="Social People did an excellent job reviewing our Social Media channels, making helpful short term as well as longer term strategic recommendations for our organic and paid activity."
          />
        </div>
      </div>
    </section>
  );
}

