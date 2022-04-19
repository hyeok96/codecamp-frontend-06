import { useEffect, useState } from "react";
import SeeUseditemPresenterPage from "./seeUsetitem.presenter";

export default function SeeUseditemContainerPage() {
  const [barketsItems, setBarketsItem] = useState([]);

  useEffect(() => {
    const barkets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBarketsItem(barkets);
  }, []);

  return <SeeUseditemPresenterPage barketsItems={barketsItems} />;
}
