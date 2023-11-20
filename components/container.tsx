type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto max-w-xl mt-24 text-base px-6">{children}</div>
}

export default Container
