'use client'

import { HashLoader } from 'react-spinners'

export default function Loading() {
  return <section className='flex min-h-[90vh] justify-center items-center'>
    <HashLoader color='#F1A208' size={75} />
  </section>
}

