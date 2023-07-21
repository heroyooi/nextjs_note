import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <h1>바지 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}