import { MouseEvent, useState } from 'react'
import Sidebar from './sidebar'

function nav() {
  const [isSideviewVisible, setIsSideviewVisible] = useState(false)

  const toggleSideviewVisible = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsSideviewVisible((s) => !s)
  }

  return (
    <nav className="p-4 w-full bg-blue-400 fixed z-50">
      <button
        className="w-11 h-11 flex items-center justify-center"
        onClick={toggleSideviewVisible}
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
          />
        </svg>
      </button>
      <Sidebar className={isSideviewVisible ? '-translate-x-0' : 'translate-x-full'} />
    </nav>
  )
}

export default nav
