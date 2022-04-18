import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용가능합니다.");
      router.push("/23-04-login-check");
    }
  }, []);

  //   return {
  //       isLoading
  //   }
}
