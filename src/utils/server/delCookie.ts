"use server";
import { cookies } from "next/headers";

export async function delCookie(key: string) {
  cookies().delete(key);
}
