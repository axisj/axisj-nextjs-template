import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface Props {}

export function Header({}: Props) {
  const t = useTranslations();

  return (
    <>
      <h1>나비엔 하우스</h1>

      <ul>
        <li>
          <Link href='/'>{t("router.index")}</Link>
        </li>
        <li>
          <Link href='/design'>{t("router.design")}</Link>
        </li>
        <li>
          <Link href='/login'>{t("router.login")}</Link>
        </li>
        <li>
          <Link href='/mypage'>{t("router.mypage")}</Link>
        </li>
      </ul>

      <hr style={{ margin: "1rem 0" }} />
    </>
  );
}
