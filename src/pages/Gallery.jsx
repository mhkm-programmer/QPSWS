import { useState } from "react";
import PageTitle from "./reusable/PageTitle";
import ParallaxSection from "./reusable/Parallax";
import { motion } from "framer-motion";
import Modal from "react-modal";

const galleryData = [
  {
    sectionTitle: "Aluminium Fabrication & Installation",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/vxmk9y",
        alt: "Aluminium Window Frame Installation",
        caption: "Precision-Crafted Aluminium Frames with Sleek Finishes",
      },
      {
        type: "video",
        src: "https://streamable.com/e/kzz0wm",
        alt: "Custom Aluminium Fabrication",
        caption: "Tailored Aluminium Solutions for Residential & Commercial Use",
      },
      {
        type: "video",
        src: "https://streamable.com/e/arzc60",
        alt: "Modern Aluminium Structures",
        caption: "Durable & Stylish Aluminium Structures for Every Need",
      },
    ],
  },
  {
    sectionTitle: "Glass & Mirror Works",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/xxdfpy",
        alt: "Glass Partition Installation",
        caption: "Elegant Glass Partitions & Mirror Installations",
      },
      {
        type: "video",
        src: "https://streamable.com/e/t18u31",
        alt: "Custom Mirror Design",
        caption: "High-Quality Mirror Solutions for Homes & Offices",
      },
      {
        type: "video",
        src: "https://streamable.com/e/9ufdow",
        alt: "Frameless Glass Doors",
        caption: "Sleek Frameless Glass Doors & Walls",
      },
    ],
  },
  {
    sectionTitle: "Gypsum Partition & Ceiling",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/dtgquo",
        alt: "Gypsum Ceiling Installation",
        caption: "Modern False Ceilings with Custom Designs",
      },
      {
        type: "video",
        src: "https://streamable.com/e/h5f0lv",
        alt: "Partition Wall Setup",
        caption: "Efficient & Stylish Gypsum Partitions",
      },
      {
        type: "video",
        src: "https://streamable.com/e/1n20es",
        alt: "Decorative Gypsum Panels",
        caption: "Artistic & Functional Ceiling Panels",
      },
    ],
  },
  {
    sectionTitle: "Printing Services",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/example1", // Replace with real link
        alt: "High-Quality Printing",
        caption: "Custom Printing Solutions for Business & Advertising",
      },
      {
        type: "video",
        src: "https://streamable.com/e/example2", // Replace with real link
        alt: "Large Format Printing",
        caption: "Vibrant Large-Scale Prints with Precision",
      },
      {
        type: "video",
        src: "https://streamable.com/e/example3", // Replace with real link
        alt: "Promotional Materials",
        caption: "Tailored Promotional Printing for Maximum Impact",
      },
    ],
  },
  {
    sectionTitle: "Parking Shades & UPVC Doors & Windows",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/dtgquo",
        alt: "Parking Shade Installation",
        caption: "Durable, UV-Resistant Parking Shades",
      },
      {
        type: "video",
        src: "https://streamable.com/e/h5f0lv",
        alt: "UPVC Doors & Windows",
        caption: "Energy Efficient, Noise-Reducing UPVC Installations",
      },
      {
        type: "video",
        src: "https://streamable.com/e/1n20es",
        alt: "MS Welding & Steel Fabrication",
        caption: "Robust Steel Fabrication & Welding Services",
      },
    ],
  },
  {
    sectionTitle: "Furniture & Upholstery",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/furniture1", // Replace with real link
        alt: "Custom Upholstered Furniture",
        caption: "Elegant, Comfortable Furniture Tailored for You",
      },
      {
        type: "video",
        src: "https://streamable.com/e/furniture2", // Replace with real link
        alt: "Modern Office Seating",
        caption: "Stylish & Ergonomic Office Furniture Solutions",
      },
      {
        type: "video",
        src: "https://streamable.com/e/furniture3", // Replace with real link
        alt: "Residential Furniture",
        caption: "High-Quality Home Furniture & Upholstery",
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

Modal.setAppElement("#root");

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <PageTitle title="Project Showcase | F L M SUPER TRADING AND CONTRACTING" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685f3a03586ad/Gallery_Curtains.jpg"
        title="Craftsmanship in Every Project"
        subTitle="Expertise Across Aluminium, Glass, Gypsum, Welding & More"
      />

      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#e6f1ec] dark:bg-gray-900 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#0a3c26] dark:text-white tracking-wide">
          Gallery: Built to Last, Designed to Impress
        </h1>

        {galleryData.map(({ sectionTitle, items }, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-[#0a3c26] dark:text-white border-b-4 border-[#0a3c26] inline-block pb-2">
              {sectionTitle}
            </h2>

            <motion.div
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {items.map(({ src, alt, caption, type = "video" }, idx) => (
                <motion.figure
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 transform hover:scale-105 cursor-pointer"
                  variants={itemVariants}
                  onClick={() => {
                    if (type === "image") setModalImage({ src, alt });
                  }}
                >
                  {type === "image" ? (
                    <img
                      src={src}
                      alt={alt}
                      className="w-full h-64 object-cover object-center"
                      loading="lazy"
                      draggable={false}
                    />
                  ) : (
                    <iframe
                      src={src}
                      title={alt}
                      allowFullScreen
                      className="w-full h-64 object-cover"
                    ></iframe>
                  )}
                  <figcaption className="p-4 text-center text-gray-700 dark:text-gray-200 font-medium text-lg">
                    {caption}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Modal Preview */}
        <Modal
          isOpen={!!modalImage}
          onRequestClose={() => setModalImage(null)}
          contentLabel="Zoomed Image"
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-40"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg p-4 max-w-4xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-3 right-3 text-2xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
            >
              &times;
            </button>
            {modalImage && (
              <img
                src={modalImage.src}
                alt={modalImage.alt}
                className="max-w-full max-h-[80vh] mx-auto rounded"
              />
            )}
          </div>
        </Modal>

        {/* Parallax CTA */}
        <div
          className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-20"
          style={{
            backgroundImage: "url('https://streamable.com/e/r9p50t')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
        
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-[#0a3c26] dark:text-white">
            Interested in Our Services?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            We specialize in Aluminium Fabrication, Glass & Mirror Works, Gypsum Partition & Ceiling, Printing, Parking Shades, UPVC Doors & Windows, MS Welding & Steel Fabrication, Furniture & Upholstery.
          </p>
          <a
            href="https://wa.me/97466280037"
            className="inline-block bg-[#0a3c26] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-[#145c44] transition duration-300"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
