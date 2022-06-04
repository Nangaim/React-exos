import React from "react"
import Meta from "../components/Meta"
import Link from "next/link"
import { projects } from "../projectsData"

const portfolio = () => {
  return (
    <div>
      <Meta
        title={"Portfolio dev, les tous derniers projets réalisés"}
        description={"suite de 70 mots"}
      />
      <h2>PORTFOLIO</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href="/projects/[id]" as={"projects/" + project.id}>
              <a>
                {project.title} <span>{" >"}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default portfolio
