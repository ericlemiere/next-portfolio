import { getProject } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-7xl mx-auto py-20 px-10">
      <div className="mx-auto">
        <Image
          src={project.image}
          alt={project.name}
          width={1750}
          height={1300}
          className="object-cover w-full h-auto"
        />
      </div>
      <h1>{project.name}</h1>

      <a href={project.url} target="_blank" rel="noopener noreferrer">
        Visit Site
      </a>

      <div>
        <PortableText value={project.content} />
      </div>
    </div>
  );
}
