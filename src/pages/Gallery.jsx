import { useState } from "react";
import PageTitle from "./reusable/PageTitle";
import ParallaxSection from "./reusable/Parallax";
import { motion } from "framer-motion";
import Modal from "react-modal";

const galleryData = [
  {
    sectionTitle: "Living Room Curtains",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/vxmk9y",
        alt: "Elegant Living Room Curtains",
        caption: "Elegant Sheer & Heavy Curtain Layers",
      },
      {
        type: "video",
        src: "https://streamable.com/e/kzz0wm",
        alt: "Modern Living Room Drapes",
        caption: "Contemporary Textures with Subtle Patterns",
      },
      {
        type: "video",
        src: "https://streamable.com/e/arzc60",
        alt: "Luxury Living Room Curtains",
        caption: "Luxury Finishes for a Cozy Atmosphere",
      },
    ],
  },
  {
    sectionTitle: "Blackout Curtains",
    items: [
      {
        type: "video",
        src: "https://streamable.com/e/xxdfpy",
        alt: "Bedroom Blackout Curtains",
        caption: "Sleep-Friendly Designs for Total Darkness",
      },
      {
        type: "video",
        src: "https://streamable.com/e/t18u31",
        alt: "Elegant Living Room Curtains",
        caption: "Elegant Sheer & Heavy Curtain Layers",
      },
      {
        type: "video",
        src: "https://streamable.com/e/9ufdow",
        alt: "Office Blackout Curtains",
        caption: "Professional Privacy with Style",
      },
    ],
  },
  {
    sectionTitle: "Office Blinds & Window Solutions",
    items: [
      {
         type: "video",
        src: "https://streamable.com/e/dtgquo",
        alt: "Roller Blinds Qatar",
        caption: "Minimal Roller Blinds for Smart Offices",
      },
      {
         type: "video",
        src: "https://streamable.com/e/h5f0lv",
        alt: "Venetian Blinds in Office",
        caption: "Adjustable Light with Sleek Appeal",
      },
      {
        type: "video",
        src: "https://streamable.com/e/1n20es",
        alt: "Elegant Living Room Curtains",
        caption: "Elegant Sheer & Heavy Curtain Layers",
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
      <PageTitle title="Curtains & Blinds Gallery | Curtains Furniture Qatar" />

      <ParallaxSection
        imagePath="https://8upload.com/image/685f3a03586ad/Gallery_Curtains.jpg"
        title="Curtains & Blinds Showcase"
        subTitle="Transforming Homes & Offices Across Qatar"
      />

      <section className="max-w-7xl mx-auto px-6 py-20 bg-[#f9f7f4] dark:bg-gray-900 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#4A342E] dark:text-white tracking-wide">
          Gallery: Crafted Elegance, Custom Fit
        </h1>

        {galleryData.map(({ sectionTitle, items }, index) => (
          <div key={index} className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-[#4A342E] dark:text-white border-b-4 border-[#4A342E] inline-block pb-2">
              {sectionTitle}
            </h2>

            <motion.div
              className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {items.map(({ src, alt, caption, type = "image" }, idx) => (
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

      


        {/* Modal Preview for Images */}
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

        {/* Parallax Banner */}
        <div
          className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-20"
          style={{
            backgroundImage: "url('https://streamable.com/e/r9p50t')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              Qatar’s Trusted Curtain & Blind Experts
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-xl">
              We blend creativity, quality, and craftsmanship to deliver window solutions that inspire.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-[#4A342E] dark:text-white">
            Need Curtains or Blinds Installed?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Get free consultation and measurement anywhere in Qatar. From design to installation, we handle it all.
          </p>
          <a
            href="https://wa.me/97466280037"
            className="inline-block bg-[#4A342E] text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-[#6b4a3a] transition duration-300"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
