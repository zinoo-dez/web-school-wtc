import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <div className='h-[90px] px-10 flex justify-between items-center '>
            <Link href="/"><span className='font-bold text-3xl text-yellow-500'>W</span><span className='font-bold text-xl text-green-500'>T</span><span className='font-bold text-xl text-red-500'>C</span></Link>
            <ul className='flex gap-4'>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="/">Home</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#about">About</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#contact">Class</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#blog">Blog</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#contact">Contact</Link>
            </ul>
        </div>
    )
}
