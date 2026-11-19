import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProjectData from "./useProjectData";

export default function ProjectCategory() {
  const { slug } = useParams();
  const { data: category, error } = useProjectData(
    `/api/project-categories/${encodeURIComponent(slug)}/`,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="min-h-[65vh] bg-[#080909] px-5 pb-20 pt-36 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link to="/projects" className="text-sm font-medium text-[#c9a66b] hover:underline">
          Back to all projects
        </Link>

        {error && (
          <p className="mt-8" role="alert">
            {error === 404 ? "Project category not found." : "Projects are temporarily unavailable."}
          </p>
        )}
        {!error && !category && <p className="mt-8" role="status">Loading projects…</p>}

        {category && (
          <>
            <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">{category.title}</h1>
            {category.description && (
              <p className="mt-4 max-w-2xl leading-7 text-white/75">{category.description}</p>
            )}

            <div className="mt-12 space-y-12">
              {category.projects.length === 0 && <p>Projects coming soon.</p>}
              {category.projects.map((project) => (
                <article key={project.id} className="border-t border-white/15 pt-8">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  {project.description && (
                    <p className="mt-3 max-w-3xl whitespace-pre-line leading-7 text-white/75">
                      {project.description}
                    </p>
                  )}
                  {project.photos.length > 0 && (
                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {project.photos.map((photo, index) => (
                        <figure key={photo.id}>
                          <a href={photo.url} target="_blank" rel="noopener noreferrer">
                            <img
                              src={photo.url}
                              alt={photo.caption || `${project.title}, photo ${index + 1}`}
                              loading="lazy"
                              className="aspect-[4/3] w-full rounded-2xl object-cover"
                            />
                          </a>
                          {photo.caption && (
                            <figcaption className="mt-2 text-sm text-white/70">{photo.caption}</figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
