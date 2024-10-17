"use client";
import { setCookie } from "@/utils/server";
import styled from "@emotion/styled";
import { useCallback } from "react";

interface Props {}

export function LoginForm({}: Props) {
  const handleLogin = useCallback(async () => {
    try {
      await setCookie({ key: "currentUserToken", value: "currentUserTokenValue" });
      location.reload();
    } catch (err) {
      // await errorHandling(err);
    }
  }, []);

  return (
    <Div>
      LoginForm
      <button onClick={handleLogin}>login</button>
    </Div>
  );
}

const Div = styled.div``;
