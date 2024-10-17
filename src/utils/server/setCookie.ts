"use server";
import { cookies } from "next/headers";

interface Props {
  key: string;
  value: string;
  expires?: Date;
}

export async function setCookie({ key, value, expires }: Props) {
  cookies().set(key, value, {
    path: "/",
    secure: true,
    expires: expires || new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });
}
