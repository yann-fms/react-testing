import { GreetProps } from './greet.types'

const greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>
}

export default greet
