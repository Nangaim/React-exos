import Image from "next/image"
import Link from "next/link"
import React from "react"
import { path } from "../../config"
import { projects } from "../../projectsData"

const project = ({ project }) => {
  return (
    <div className="project">
      <h1>{project.title}</h1>
      <span>{project.date}</span>
      <p>{project.infos}</p>
      <Image
        src={path + project.img}
        alt={project.title}
        width={400}
        height={250}
      />
      <Link href="/portfolio">
        <a href="">Revenir aux projets</a>
      </Link>
    </div>
  )
}

export default project

export const getStaticProps = (ctx) => {
  const filtered = projects.filter((project) => project.id == ctx.params.id)

  if (filtered.length > 0) {
    return {
      props: {
        project: filtered[0],
      },
    }
  }
}

export const getStaticPaths = async () => {
  const ids = projects.map((project) => project.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}
