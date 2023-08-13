import { HTMLProps } from "react"

type RAMProps = HTMLProps<HTMLDivElement>

export const RAM = (props: RAMProps) => {
  return (
    <div {...props}>
      ram
    </div>
  )
}
