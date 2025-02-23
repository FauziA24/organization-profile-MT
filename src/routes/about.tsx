import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="space-y-12 px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
      {/* Title with Parallax Effect */}
      <motion.h1
        className="text-5xl font-bold text-black text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        About Us
      </motion.h1>

      {/* Paragraph with Fade-in */}
      <motion.p
        className="text-lg text-black text-justify max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        UKM Kerohanian Islam (Rohis) Majelis Ta’lim Al-Khawarizmi adalah lembaga
        dakwah Islamiyah tingkat kampus yang diakui oleh pihak rektorat Binus University.
        Dengan mengedepankan ukhuwah Islamiyah, UKM ini menjadi pusat penggerak dakwah 
        di kampus dengan berbagai kegiatan keagamaan dan sosial.
      </motion.p>

      {/* Grid Section */}
      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Vision */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-semibold text-black mb-4">Our Vision</h2>
          <p className="text-lg text-black text-justify">
            “Membentuk organisasi dakwah Islam yang inovatif, disiplin, dan 
            berdedikasi dalam pengembangan IPTEK serta memiliki aqidah yang lurus 
            dalam beragama di lingkungan kampus dan masyarakat.”
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl font-semibold text-black mb-4">Our Mission</h2>
          <ol className="list-decimal list-inside text-lg text-black text-justify space-y-2">
            <li>
              Menjadi organisasi keagamaan terbaik di Binus University dengan mengedepankan nilai-nilai spiritual dan kualitas SDM.
            </li>
            <li>
              Berkontribusi dalam kemajuan ilmu pengetahuan dengan kegiatan inovatif yang bermanfaat bagi mahasiswa.
            </li>
            <li>
              Mempelajari ilmu agama dari sumber terpercaya guna menciptakan suasana keagamaan yang rukun, tentram, dan aman.
            </li>
          </ol>
        </motion.div>
      </div>

      {/* GSAP Animation Section */}
      {/* <div className="mt-12">
        <div className="relative w-full h-32 bg-gradient-to-r from-green-300 to-blue-400 rounded-2xl flex items-center justify-center">
          <motion.h2
            className="text-3xl font-bold text-white text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Join Our Community!
          </motion.h2>
        </div>
      </div> */}
    </div>
  );
}
