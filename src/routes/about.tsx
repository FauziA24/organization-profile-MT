import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="space-y-12 px-6 md:px-12 lg:px-24 py-16">
      <motion.h1
        className="text-5xl font-bold text-black text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg text-black text-justify max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        UKM Kerohanian Islam (Rohis) Majelis Ta’lim Al-Khawarizmi adalah lembaga
        dakwah Islamiyah tingkat kampus (rohis) yang diakui oleh pihak rektorat
        Binus University, bersifat terbuka dan aktif dengan mengedepankan
        ukhuwah Islamiyah. UKM ini menjadi pusat dan motor penggerak dakwah
        Islamiyah di Binus University, dengan anggota dari civitas muslim dan
        alumni MT Al-Khawarizmi. Berdiri sejak 6 Juni 1989, MT Al-Khawarizmi
        memiliki sekretariat di berbagai kampus Binus: Kemanggisan, Alam Sutera,
        Bekasi, Bandung, Semarang, dan Malang.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gray-100 p-8 rounded-2xl shadow-lg text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-black mb-4">Our Vision</h2>
          <p className="text-lg text-black text-justify">
            “Membentuk organisasi dakwah Islam yang inovatif, disiplin,
            berdedikasi dalam pengembangan IPTEK, serta memiliki aqidah yang
            lurus dalam beragama di lingkungan kampus dan masyarakat.”
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-100 p-8 rounded-2xl shadow-lg text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Mission
          </h2>
          <ol className="list-decimal list-inside text-lg text-black text-justify space-y-2">
            <li>
              Menjadi organisasi keagamaan terbaik di Binus University dengan
              mengedepankan nilai-nilai spiritual dan kualitas SDM.
            </li>
            <li>
              Berkontribusi dalam kemajuan ilmu pengetahuan di Binus University
              dengan kegiatan inovatif yang bermanfaat bagi mahasiswa di seluruh
              Indonesia.
            </li>
            <li>
              Mempelajari ilmu agama dari sumber terpercaya guna menciptakan
              suasana keagamaan yang rukun, tentram, dan aman.
            </li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
}
