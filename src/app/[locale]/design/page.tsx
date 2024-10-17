import { PageParams } from "@/app/@types";
import { getPageMetaData } from "@/utils/metadata/getPageMetaData";
import { useTranslations } from "next-intl";

const pageRoutePath = "pages.design";

export default function Page({ params: {} }: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <div>
      <p>{t("title")}</p>
      <p>디자인 내용</p>
    </div>
  );
}

// metadata
export async function generateMetadata(p: PageParams) {
  return getPageMetaData({ locale: p.params.locale, pageRoutePath });
}
