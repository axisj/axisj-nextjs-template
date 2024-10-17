import { getTranslations } from "next-intl/server";

interface Props {
  locale: string;
  pageRoutePath: string;
}

export async function getPageMetaData({ locale, pageRoutePath }: Props) {
  const t = await getTranslations({ locale, namespace: `${pageRoutePath}.@metadata` });

  return {
    title: t("title"),
    description: t("description"),
  };
}
