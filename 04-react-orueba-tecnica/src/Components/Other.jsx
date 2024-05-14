import { useCatFact } from "../hooks/useCatFact";
import { useCatImage } from "../hooks/useCatImage";

export function Other() {
  const { fact, refreshFact } = useCatFact();
  const { imgURL } = useCatImage({ fact });
  return (
    <>
      <img src={imgURL} alt={`cats to other ${fact}`} />
    </>
  );
}
