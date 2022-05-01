import React, { useEffect } from "react"

const Mouse = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor")

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px"
      cursor.style.left = e.x + "px"
    })

    window.addEventListener("mousedown", () => {
      cursor.classList.add("hovered")
    })
    window.addEventListener("mouseup", () => {
      cursor.classList.remove("hovered")
    })

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered")
      })
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered")
      })
    })
  }, [])

  return <span className="cursor"></span>
}

export default Mouse
