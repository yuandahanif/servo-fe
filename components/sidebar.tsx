interface Props {
  className?: false | string
}

function sidebar({ className }: Props) {
  return (
    <div
      className={`absolute right-0 top-0 max-w-sm w-full min-h-screen bg-white p-4 py-8 drop-shadow-lg duration-200 transform ${className}`}
    >
      <ul className="mx-auto bg-yellow-200 w-max">
        <li>Ini diisi apa 1</li>
        <li>Ini diisi apa 2</li>
        <li>Ini diisi apa 3</li>
      </ul>
    </div>
  )
}

export default sidebar
