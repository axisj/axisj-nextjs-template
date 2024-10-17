"use client";
import { delCookie } from "@/utils/server";
import { useCallback } from "react";

interface Props {}

export function LogoutBtn({}: Props) {
  const handleLogout = useCallback(async () => {
    try {
      await delCookie("currentUserToken");
      location.reload();
    } catch (err) {
      // await errorHandling(err);
    }
  }, []);

  return <button onClick={handleLogout}>Logout</button>;
}
