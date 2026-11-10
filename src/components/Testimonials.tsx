"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Thandiwe Banda",
    role: "Tenant & Marketing Executive",
    location: "Kabulonga, Lusaka",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "Finding an apartment in Lusaka used to mean paying dozens of fake agents viewing fees. NestQuest changed everything. I found a verified 2-bedroom with solar backup in Kabulonga in just 3 days without stress.",
  },
  {
    id: 2,
    name: "Kelvin Mumba",
    role: "Property Owner & Landlord",
    location: "Woodlands, Lusaka",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Listing on NestQuest took less than 10 minutes. Within 48 hours, I had inquiries from three verified professionals. The tenant moved in the following week. The availability toggle is a brilliant feature.",
  },
  {
    id: 3,
    name: "Natasha Phiri",
    role: "Young Professional",
    location: "Rhodes Park, Lusaka",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    text: "The borehole water and backup power filter saved me so much hassle. With load-shedding, knowing a rental has solar before visiting is priceless. NestQuest is truly the future of rental search in Zambia.",
  },
  {
    id: 4,
    name: "Mutale Mwape",
    role: "Commercial Manager",
    location: "Mass Media, Lusaka",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "NestQuest provides the transparency that Zambia's real estate market has needed for a long time. Their mobile app is fast, modern, and backed by a dedicated support team.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-t border-slate-800">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span>Community Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-white">
            What Our Users Say
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="pb-16 max-w-4xl mx-auto"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center shadow-xl">
                {/* 5-Star Rating */}
                <div className="flex text-amber-400 mb-6 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current text-amber-400 text-base" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base md:text-xl italic text-slate-200 leading-relaxed mb-8 font-light max-w-2xl">
                  "{t.text}"
                </p>

                {/* Avatar & Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 relative flex-shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-white">{t.name}</h3>
                    <p className="text-xs text-amber-400 font-medium">{t.role}</p>
                    <p className="text-xs text-slate-400">{t.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
