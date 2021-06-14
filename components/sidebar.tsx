import Link from 'next/link'

interface Props {
  className?: false | string
}

function sidebar({ className }: Props) {
  return (
    <div
      className={`absolute right-0 top-0 w-4/5 max-w-none sm:max-w-sm sm:w-full min-h-screen bg-white p-4 py-8 shadow-2xl duration-200 transform ${className}`}
    >
      <ul className="mx-auto w-full text-center">
        <li>
          <Link href="/" passHref>
            <a className="block w-full mb-1 py-3 text-blue-500">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a className="block w-full mb-1 py-3 text-blue-500">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a className="block w-full mb-1 py-3 text-blue-500">Home</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default sidebar
