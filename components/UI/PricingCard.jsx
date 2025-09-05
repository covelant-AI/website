import Link from "next/link";

export default function PricingCard({
  title,
  badge,          
  price,          
  period, 
  previousPrice,        
  description,    
  highlight = [],
  bgVariant = "default", 
}) {
  const isFederationBg = bgVariant === "federation" || price === "Federation+" || title === "Federation Plan";
  const isFederation = title === "Federation Plan" || price === "Federation+";
  const ctaHref = isFederation
    ? "https://calendly.com/raul-cuza-covelant/30min?month=2025-07" 
    : "https://app.covelant.com/sign-up";                     

  const ctaText = isFederation ? "Get Quote" : "Get Started";

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg p-6 w-full lg:w-1/3 flex flex-col items-start gap-4 bg-white border-2 border-gray-100">
      {/* decorative background for Federation+ */}
      {isFederationBg && (
        <>
          <span className="pointer-events-none absolute -top-14 -left-14 h-28 w-28 rounded-full bg-[#42B6B1] blur-xl" />
          <span className="pointer-events-none absolute -bottom-20 -right-15 h-40 w-40 rounded-full bg-[#42B6B1] blur-2xl" />
        </>
      )}

      {/* Badge */}
      {badge && (
        <div
          className={`
            absolute top-6 right-4 text-xs px-3 py-2 rounded-full font-medium shadow-inner
            ${badge === "Most Popular" ? "bg-cyan-100 text-cyan-700" : ""}
            ${badge === "Community Favorite" ? "bg-yellow-100 text-yellow-700" : ""}
          `}
        >
          {badge}
        </div>
      )}

      {/* Title */}
      <div>
        <h3 className="text-lg text-black font-semibold">{title}</h3>
        {previousPrice && (
          <span className="line-through text-lg font-semibold text-gray-500">
            {previousPrice}
          </span>
        )}
      </div>

      {/* Price */}
      <div className="text-4xl font-bold bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
        {price}
        {title === "Elite Tier" ? (
          <span className="text-base font-medium text-gray-500">
            {period == "/Mo -30%" ? "/Mo -20%" : period}
          </span>
        ) : (
          <span className="text-base font-medium text-gray-500">
            {price === "Free" || price === "Federation+" ? "" :  period}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-6" />

      {/* Features */}
      <ul className="flex flex-col gap-2 text-gray-700 text-sm">
        {description.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span
              className={title === "Free Tier" ? "text-gray-500 font-bold" : "text-blue-500 font-bold"}
            >
              ✓
            </span>
            <span className={highlight.includes(item) ? "text-yellow-600 font-semibold" : ""}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full text-center"
      >
        <span className="inline-block w-full p-2 border border-black text-black font-semibold rounded-xl hover:bg-[#42B6B1] hover:border-[#42B6B1] hover:text-white transition">
          {ctaText}
        </span>
      </Link>
    </div>
  );
}