import React, { useEffect, useState } from 'react'
import { SkillsProps } from './skills.types'

export const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLogged(true)
    }, 1500)
  }, [])
  return (
    <>
      <ul>
        {skills.map((skill: string) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLogged ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Login</button>
      )}
    </>
  )
}
