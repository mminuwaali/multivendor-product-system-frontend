"use client";

// Framework

// External
import { motion } from "framer-motion";

// Internal
import { MyGlassCard } from "@/components/shared/glass.card";

export function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      user: "Alex Johnson",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely stunning quality. Worth every penny!",
    },
    {
      id: 2,
      user: "Sarah Miller",
      rating: 4,
      date: "1 week ago",
      comment: "Very good, but shipping took a bit longer than expected.",
    },
    {
      id: 3,
      user: "Michael Chen",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "The design is incredible. I've already recommended it to friends.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 px-5% bg-slate-50/50 dark:bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black text-slate-800 dark:text-white">
              Customer <span className="text-emerald-500">Reviews</span>
            </h2>
            <div className="flex items-center gap-2">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <i key={i} className="fa-solid fa-star" />
                ))}
              </div>
              <span className="font-bold">4.9 average</span>
              <span className="text-slate-400">• 1,248 reviews</span>
            </div>
          </div>
          <button className="px-6 py-2 rounded-xl border-2 border-emerald-500 text-emerald-500 font-bold hover:bg-emerald-500 hover:text-white transition-all">
            Write a Review
          </button>
        </div>

        <div className="grid gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MyGlassCard className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
                      {review.user[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white">
                        {review.user}
                      </p>
                      <p className="text-xs text-slate-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-500 text-xs">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </MyGlassCard>
            </motion.div>
          ))}
        </div>

        <button className="mx-auto text-slate-500 font-bold hover:text-emerald-500 transition-colors">
          View More Reviews{" "}
          <i className="fa-solid fa-chevron-down ml-1 text-xs" />
        </button>
      </div>
    </motion.section>
  );
}
