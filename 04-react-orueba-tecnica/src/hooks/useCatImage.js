import { useEffect, useState } from "react";
const CAT_PREFIX_IMG_URL = `https://cataas.com`;
export function useCatImage({ fact }) {
  // recuperar la imagen de la API de cataas.com
  const [imgURL, setImgURL] = useState();
  useEffect(() => {
    if (!fact) return;
    const threeFirstWord = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((response) => response.json())
      .then((res) => {
        const { _id } = res;
        const url = `/cat/${_id}`;
        setImgURL(url);
      });
  }, [fact]);
  return { imgURL : `${CAT_PREFIX_IMG_URL}${imgURL}`  };
}