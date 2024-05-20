import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  const renderGrid = projects.map((project) => {
    const primaryColor = project.primaryColor || "#FFA500";
    const secondaryColor = project.secondaryColor || "#FF00FF";
    return (
      <Link
        href={`/projects/${project.slug}`}
        passHref
        className="border-2 p-4 rounded-lg border-gray-700 hover:scale-105 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 ease-in-out"
        key={project._id}
      >
        {project.image && (
          <div
            className="rounded-lg overflow-hidden"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: 16 / 9,
              position: "relative",
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover w-full h-auto"
            />
          </div>
        )}
        <div
          className="mt-4 mb-4 p-2 text-3xl font-extrabold text-center"
          style={{
            color: "transparent",
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
            backgroundClip: "text",
          }}
        >
          {project.name}
        </div>
      </Link>
    );
  });

  return (
    <div className="max-w-9xl mx-auto p-10">
      <h2 className="my-24 text-5xl font-bold">Projects</h2>
      <div className="mt-5 grid lg:grid-cols-3 gap-8">{renderGrid}</div>
    </div>
  );
}
