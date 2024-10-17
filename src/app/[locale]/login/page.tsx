import { PageParams } from "@/app/@types";
import { LoginForm } from "@/app/[locale]/login/LoginForm";
import { getPageMetaData } from "@/utils/metadata/getPageMetaData";
import { useTranslations } from "next-intl";

const pageRoutePath = "pages.login";

export default function Page({ params: {} }: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <div>
      <p>{t("title")}</p>

      <LoginForm />
    </div>
  );
}

// metadata
export async function generateMetadata(p: PageParams) {
  return getPageMetaData({ locale: p.params.locale, pageRoutePath });
}
