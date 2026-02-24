// components/Contact.jsx
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("components.faq.contact");
  return (
    <section className={`w-full py-10 flex flex-col items-center gap-4`}>
      <p className="max-w-3xl text-center text-[16px] md:text-[18px] text-black/90">
        {t("title")}
      </p>

      <Link href={"/contact"} className="inline-block">
        <span className="inline-flex items-center justify-center rounded-lg bg-[#42B6B1] px-7 py-2 text-white font-semibold hover:brightness-95 transition">
          {t("button")}
        </span>
      </Link>
    </section>
  );
}
