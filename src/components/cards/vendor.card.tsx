"use client";

// External
import Link from "next/link";
import Image from "next/image";

// Components
import { MyGlassCard } from "../shared/glass.card";

interface MyVendorCardProps {
  className?: string;
  item: IVendorModel;
}

export function MyVendorCard(props: MyVendorCardProps) {
  const slug = props.item.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <MyGlassCard
      whileHover={{ y: -8 }}
      className={`group relative flex flex-col gap-4 cursor-pointer hover:shadow-2xl transition-all duration-300 ${props.className ?? ""}`}
    >
      {/* Status Tag */}
      {props.item.status && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-lg">
            {props.item.status}
          </span>
        </div>
      )}

      {/* Profile & Info */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-inner bg-gray-100/50">
          <Image
            fill
            src={
              props.item.avatar ??
              "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000"
            }
            alt={props.item.name}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <Link href={`/sites/${slug}`}>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-primary-dark transition-colors">
              {props.item.name}
            </h3>
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="flex items-center gap-1 text-amber-500">
              <i className="fa-solid fa-star text-xs" />
              <span className="font-bold">{props.item.rating}</span>
            </span>
            <span>
              (
              {props.item.reviewsCount &&
                (props.item.reviewsCount > 1000
                  ? `${(props.item.reviewsCount / 1000).toFixed(1)}k`
                  : props.item.reviewsCount)}{" "}
              reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 min-h-12">
        {props.item.description}
      </p>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {props.item.categories?.map((cat) => (
          <span
            key={cat}
            className="px-2 py-1 text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-md"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <Link href={`/sites/${slug}`}>
        <button className="mt-2 w-full py-3 rounded-2xl bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg shadow-primary/20 active:scale-95">
          View Store <i className="fa-solid fa-arrow-right ml-2 text-xs" />
        </button>
      </Link>
    </MyGlassCard>
  );
}
