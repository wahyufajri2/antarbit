"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">
                Kami menyediakan{" "}
                <span className="text-primary">solusi terbaik</span>
              </p>
              <h2 className="text-white sm:text-5xl text-3xl font-medium lg:w-80% mx-auto mb-20">
                Dari Konsep ke Realita: Kami rancang, kembangkan, dan berikan
                arahan teknis untuk solusi digital terbaik.
              </h2>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src="/images/timeline/img-timeline.png"
                  //src="/images/timeline/antarbit.png"
                  alt="image"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                />
              </div>
              <div className="absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h3 className="text-muted text-2xl mb-3">Perencanaan</h3>
                  <p className="text-lg text-muted/60">
                    Kami bekerja sama dengan Anda untuk memahami kebutuhan bisnis
                  </p>
                </div>
                <div className="bg-primary/15 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <Image
                    src="/images/solution/solution-icon-1.svg"
                    alt="Perencanaan"
                    width={44}
                    height={44}
                    className="w-16 h-16 "
                  />
                </div>
              </div>
              <div className="absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-primary/15 backdrop-blur-xs p-6 h-fit rounded-full">
                  <Image
                    src="/images/solution/solution-icon-2.svg"
                    alt="Desain & Pengembangan"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-muted text-2xl mb-3">Desain & Pengembangan</h3>
                  <p className="text-lg text-muted/60">
                    Kami merancang dan mengembangkan solusi digital yang inovatif dan sesuai kebutuhan Anda
                  </p>
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h3 className="text-muted text-2xl mb-3">Implementasi</h3>
                  <p className="text-lg text-muted/60">
                    Kami memastikan solusi digital Anda berjalan lancar dan sesuai harapan
                  </p>
                </div>
                <div className="bg-primary/15 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <Image
                    src="/images/solution/solution-icon-3.svg"
                    alt="Implementasi"
                    width={44}
                    height={44}
                    className="w-16 h-16 "
                  />
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-primary/15 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <Image
                    src="/images/solution/solution-icon-4.svg"
                    alt="Support"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-muted text-nowrap text-2xl mb-3">
                    Maintenance
                  </h3>
                  <p className="text-lg text-muted/60">
                    Kami memberikan dukungan berkelanjutan untuk memastikan solusi digital Anda tetap optimal
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-primary/15 p-6 rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-2xl text-muted mb-2">{item.title}</h4>
                    <p className="text-muted/60 text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
