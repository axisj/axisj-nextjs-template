import { PageParams } from "@/app/@types";
import { LogoutBtn } from "@/app/[locale]/mypage/LogoutBtn";
import { getPageMetaData } from "@/utils/metadata/getPageMetaData";
import { useTranslations } from "next-intl";

const pageRoutePath = "pages.myPage";

export default function Page({ params: {} }: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <div>
      <p>{t("title")}</p>

      <LogoutBtn />
    </div>
  );
}

// metadata
export async function generateMetadata(p: PageParams) {
  return getPageMetaData({ locale: p.params.locale, pageRoutePath });
}
