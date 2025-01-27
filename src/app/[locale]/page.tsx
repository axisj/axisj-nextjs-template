import { PageParams } from "@/app/@types";
import { SampleList } from "@/components/server/sample/SampleList";
import { getPageMetaData } from "@/utils/metadata/getPageMetaData";
import { useLocale, useTranslations } from "next-intl";

const pageRoutePath = "pages.index";

export default function HomePage({ params: {} }: any) {
  const t = useTranslations(pageRoutePath);
  const locale = useLocale();

  return (
    <div>
      <p>{t("title")}</p>
      {locale}

      <SampleList />
    </div>
  );
}

// metadata
export async function generateMetadata(p: PageParams) {
  return getPageMetaData({ locale: p.params.locale, pageRoutePath });
}
