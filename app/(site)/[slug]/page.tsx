import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="max-w-7xl mx-auto p-10">
      <h2 className="my-24 text-5xl font-bold text-orange-400">{page.title}</h2>

      <div>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
