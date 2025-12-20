import { motion } from "motion/react";

const certificates = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Machine Learning Internship",
    desc: "Tezpur University",
    link: "#",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Flutter Development",
    desc: "APGCL Internship",
    link: "#",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Full Stack Web Dev",
    desc: "React & Node.js",
    link: "#",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "GATE CS Preparation",
    desc: "Computer Science",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Certificates() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Certificates & Internships
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                  </div>

                  <a href={item.link} className="mt-6">
                    <button className="w-full  bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] hover:ease-out text-white font-semibold py-3 px-4 rounded-xl transition-colors">
                      View Certificate
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
