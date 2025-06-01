import PageTitle from "./reusable/PageTitle";
import ParallaxSection from "./reusable/Parallax";
import { motion } from "framer-motion";

const galleryData = [
  {
    sectionTitle: "Living Room Curtains",
    items: [
      {
        src: "/images/curtains_living_1.jpg",
        alt: "Elegant Living Room Curtains",
        caption: "Elegant Living Room Curtains with Sheer Layers",
      },
      {
        src: "/images/curtains_living_2.jpg",
        alt: "Modern Drapes in Living Room",
        caption: "Modern Drapes with Patterned Fabric",
      },
      {
        src: "/images/curtains_living_3.jpg",
        alt: "Luxury Curtains for Living Room",
        caption: "Luxury Curtains Enhancing Ambiance",
      },
    ],
  },
  {
    sectionTitle: "Blackout Curtains",
    items: [
      {
        src: "/images/blackout_1.jpg",
        alt: "Bedroom Blackout Curtains",
        caption: "Total Privacy and Light Control",
      },
      {
        src: "/images/blackout_2.jpg",
        alt: "Hotel Blackout Curtains",
        caption: "Hotel-Grade Blackout Curtains",
      },
      {
        src: "/images/blackout_3.jpg",
        alt: "Office Blackout Blinds",
        caption: "Professional Blackout Window Treatments",
      },
    ],
  },
  {
    sectionTitle: "Office Blinds & Curtains",
    items: [
      {
        src: "/images/office_blinds_1.jpg",
        alt: "Roller Blinds in Office",
        caption: "Roller Blinds for Productivity and Style",
      },
      {
        src: "/images/office_blinds_2.jpg",
        alt: "Venetian Blinds in Corporate Space",
        caption: "Venetian Blinds Offering Adjustable Light",
      },
      {
        src: "/images/office_curtains_1.jpg",
        alt: "Curtains for Office Meeting Room",
        caption: "Elegant Curtains Adding Warmth",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Gallery = () => {
  return (
    <>
      {/* SEO Meta Title */}
      <PageTitle title="Blinds Curtains | Window Blinds Qatar | AZLAAN CONTRACTING W.L.L" />

      {/* Hero Parallax */}
      <ParallaxSection
        imagePath="https://8upload.com/image/67a7f51fa667f/About_Us-min.jpg"
        title="Blinds Curtains Solutions"
        subTitle="Privacy. Style. Performance."
      />

      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#f9f7f4] rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#4A342E] tracking-wide select-none">
          Curtains & Blinds Project Gallery
        </h1>

        {galleryData.map(({ sectionTitle, items }, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-[#4A342E] border-b-4 border-[#4A342E] inline-block pb-2 select-none">
              {sectionTitle}
            </h2>

            <motion.div
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {items.map(({ src, alt, caption }, idx) => (
                <motion.figure
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105"
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 30px rgba(74,52,46,0.4)" }}
                  title={alt}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-64 object-cover object-center"
                    loading="lazy"
                    draggable={false}
                  />
                  <figcaption className="p-4 text-center text-gray-700 font-medium text-lg select-none">
                    {caption}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Parallax Section */}
        <div
          className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-20"
          style={{
            backgroundImage: "url('/images/parallax_curtains_bg.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wide drop-shadow-lg select-none">
              Experience the Perfect Blend of Style & Function
            </h2>
            <p className="mt-4 max-w-xl text-center text-gray-300 text-lg md:text-xl">
              Transform your living and working spaces with our premium curtains and blinds, crafted to your exact needs.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold mb-6 text-[#4A342E]">
            Ready to Elevate Your Space?
          </h3>
          <p className="max-w-xl mx-auto mb-8 text-gray-600">
            Contact AZLAAN CONTRACTING W.L.L today for bespoke curtain and blinds solutions that perfectly fit your home or office.
          </p>
          <a
            href="https://wa.me/97470373588"
            className="inline-block bg-[#4A342E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#6a513d] transition-colors duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
