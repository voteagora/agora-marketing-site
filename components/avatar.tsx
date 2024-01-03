type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <div>{name}</div>
      <img src={picture} className="w-7 h-7 transition rounded-full border-2 border-white shadow-sm" alt={name} />
    </div>
  )
}

export default Avatar
