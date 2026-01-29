"use client";

// External
import Link from "next/link";
import Image from "next/image";

// Utils
import { formatCurrency } from "@/utils/helper";

// Components
import { MyGlassCard } from "../shared/glass.card";

interface MyProductCardProps {
  className?: string;
  item: IProductModel;
}

export function MyProductCard(props: MyProductCardProps) {
  return (
    <MyGlassCard
      noPadding
      whileHover={{ y: -8 }}
      className={`group flex flex-col gap-0 cursor-pointer hover:shadow-2xl transition-all duration-300 ${props.className ?? ""}`}
    >
      {/* Product Image */}
      <Link href={`/products/${props.item._id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            fill
            src={
              props.item.image ??
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000"
            }
            alt={props.item.title}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Status Tag Overlay */}
          {props.item.status && (
            <div className="absolute top-3 left-3">
              <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-widest bg-primary text-white rounded-lg shadow-lg">
                {props.item.status}
              </span>
            </div>
          )}

          {/* Favorite Button */}
          <button className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-primary transition-all">
            <i className="fa-regular fa-heart" />
          </button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-2">
        <Link href={`/products/${props.item._id}`}>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-slate-800 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
              {props.item.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-amber-500 font-bold shrink-0">
              <i className="fa-solid fa-star" />
              {props.item.rating}
            </div>
          </div>
        </Link>

        <p className="text-xs text-slate-500 uppercase tracking-tighter">
          {typeof props.item.category === "string"
            ? props.item.category
            : props.item.category?.name}
        </p>

        <div className="flex items-end justify-between mt-1">
          <Link href={`/products/${props.item._id}`}>
            <div className="flex flex-col">
              {props.item.oldPrice && (
                <span className="text-[10px] text-slate-400 line-through">
                  {formatCurrency(props.item.oldPrice)}
                </span>
              )}
              <span className="text-lg font-black text-primary-dark">
                {formatCurrency(props.item.price)}
                <span className="text-[10px] font-normal text-slate-400 ml-1">
                  / unit
                </span>
              </span>
            </div>
          </Link>

          <button className="w-10 h-10 rounded-xl bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center">
            <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
      </div>
    </MyGlassCard>
  );
}
