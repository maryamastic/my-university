import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ApplyForm from "../components/ApplyForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "apply" });
  return { title: `${t("title")} | Nexora Business School International` };
}

export default async function ApplyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "apply" });

  return (
    <main style={{ background: "#f3f4f6" }}>
      <section style={{ background: "#003366", padding: "48px 0" }}>
        <div className="container">
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
            <Link href={`/${locale}`} style={{ color: "inherit", textDecoration: "none" }}>{t("breadcrumbHome")}</Link>
            {" › "}{t("breadcrumbApply")}
          </p>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", margin: "10px 0 0" }}>
            {t("title")}
          </h1>
          <p style={{ fontFamily: "Open Sans, sans-serif", color: "rgba(255,255,255,0.85)", margin: "10px 0 0", maxWidth: "640px" }}>
            {t("intro")}
          </p>
        </div>
      </section>

      <section style={{ padding: "36px 0 72px" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          <ApplyForm />
        </div>
      </section>
    </main>
  );
}