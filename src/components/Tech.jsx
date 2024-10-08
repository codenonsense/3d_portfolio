import { BallCanvas } from "./canvas" 
import { SectionWrapper } from "./hoc"
import { technologies } from "../constants"

const Tech = () => {
  // showing the techonolgies in a circular shape
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas
            icon={technology.icon}
          />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
