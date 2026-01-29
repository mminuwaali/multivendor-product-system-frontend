"use client";

// Framework
import Image from "next/image";

// External
import { motion } from "framer-motion";

// Internal
import { useParamsCtx } from "@/components/providers/param.provider";
import { MyGlassCard } from "@/components/shared/glass.card";

// Utils
import { formatCurrency } from "@/utils/helper";

export function InfoSection() {
  const paramsContext = useParamsCtx();
  const product = paramsContext.params.product as IProductModel | undefined;

  if (!product) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-16 px-5%"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="relative aspect-square glass-effect rounded-[3rem] p-4 overflow-hidden shadow-2xl">
            <Image
              fill
              src={
                product.image ??
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
              }
              alt={product.title}
              className="object-cover rounded-5xl p-4"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative aspect-square glass-effect rounded-2xl p-2 cursor-pointer hover:bg-white/60 transition-colors"
              >
                <Image
                  fill
                  src={
                    product.image ??
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
                  }
                  className="object-cover rounded-xl p-2"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-black uppercase tracking-widest w-fit rounded-full">
              {typeof product.category === "string"
                ? product.category
                : product.category?.name}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white tracking-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 text-slate-500">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <i className="fa-solid fa-star" />
                {product.rating}
              </div>
              <span>•</span>
              <span className="font-medium">1.2k Reviews</span>
              <span>•</span>
              <span className="text-emerald-500 font-bold">In Stock</span>
            </div>
          </div>

          <div className="flex items-end gap-3 pb-8 border-b border-slate-200 dark:border-slate-800">
            <span className="text-5xl font-black text-emerald-600">
              {formatCurrency(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-2xl text-slate-400 line-through mb-1">
                {formatCurrency(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {product.description ||
              "Experience perfection with this premium product. Meticulously crafted using sustainable materials and cutting-edge technology to ensure the highest quality for our customers."}
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center glass-effect rounded-2xl p-1">
                <button className="w-12 h-12 flex items-center justify-center text-xl hover:text-emerald-500 transition-colors">
                  -
                </button>
                <span className="w-12 text-center font-black">1</span>
                <button className="w-12 h-12 flex items-center justify-center text-xl hover:text-emerald-500 transition-colors">
                  +
                </button>
              </div>
              <button className="flex-1 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg transition-all shadow-xl shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-3">
                <i className="fa-solid fa-cart-shopping" />
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="h-14 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:text-emerald-500 font-bold transition-all flex items-center justify-center gap-2">
                <i className="fa-regular fa-heart" />
                Favorite
              </button>
              <button className="h-14 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 hover:text-emerald-500 font-bold transition-all flex items-center justify-center gap-2">
                <i className="fa-solid fa-share-nodes" />
                Share
              </button>
            </div>
          </div>

          <MyGlassCard className="flex items-center gap-4 border-emerald-500/20 bg-emerald-500/5">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
              <i className="fa-solid fa-truck" />
            </div>
            <div>
              <p className="font-bold text-slate-800 dark:text-white">
                Free Express Delivery
              </p>
              <p className="text-xs text-slate-500">
                Orders over {formatCurrency(200)} qualify for free shipping.
              </p>
            </div>
          </MyGlassCard>
        </motion.div>
      </div>
    </motion.section>
  );
}
