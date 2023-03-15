import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const TalkToUs = () => {
  return (
    <div>
      <Link href="/contact-us">
        <button className='btn btn-anime btn-shadow'>CONTACT US <BsArrowRight /> </button>
      </Link>
    </div>
  )
}

export default TalkToUs


