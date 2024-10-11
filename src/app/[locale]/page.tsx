import { PageParams } from "@/app/@types";
import { SampleList } from "@/components/server/sample/SampleList";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const pageRoutePath = "pages.index";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage({ params: { locale } }: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <div>
      {locale}
      <h1>INDEX PAGE</h1>
      <p>{t("title")}</p>

      <SampleList />
    </div>
  );
}

export async function generateMetadata(p: PageParams) {
  const t = await getTranslations({ locale: p.params.locale, namespace: `${pageRoutePath}.@metadata` });

  return {
    title: t("title"),
    description: t("description"),
  };
}
