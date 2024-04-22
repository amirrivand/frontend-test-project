import { ResponseObject } from "@/interface/responseObject.interface";
import Image from "next/image";

type ProductCartProps = Pick<
  ResponseObject,
  "name" | "price" | "description" | "image"
>;

export default function ProductCart(props: ProductCartProps) {
  const { description, image, name, price } = props;

  return (
    <div
      role="listitem"
      className="border-stone-800 border-2 p-3 flex flex-row items-start justify-start"
    >
      <div className="relative aspect-square w-20">
        <Image src={image} alt={name} fill className="object-contain" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg mb-1">{name}</h2>
        <p className="text-justify text-slate-700 block">{description}</p>
        <span className="mt-2">
          Price: <strong>{price}</strong>
        </span>
      </div>
    </div>
  );
}
