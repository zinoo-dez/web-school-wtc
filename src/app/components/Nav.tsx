import Link from 'next/link'
import React from 'react'

export default function Nav() {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className='h-[90px] px-10 relative flex justify-between items-center z-[1000]'>
            <Link href="/"><span className='font-bold text-3xl text-yellow-500'>W</span><span className='font-bold text-xl text-green-500'>T</span><span className='font-bold text-xl text-red-500'>C</span></Link>
            <ul className='hidden md:flex gap-4'>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="/">Home</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#about">About</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#contact">Class</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#blog">Blog</Link>
                <Link className='text-lg text-slate-100 hover:shadow-amber-100' href="#contact">Contact</Link>
            </ul>
            <button
                className='md:hidden flex flex-col gap-2 cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className='w-8 h-0.5 bg-slate-100' />
                <span className='w-8 h-0.5 bg-slate-100' />
                <span className='w-8 h-0.5 bg-slate-100' />
            </button>
            {isOpen && (
                <ul className='md:hidden absolute top-20 w-full m-auto right-0 bg-[#0f172a88] backdrop-blur-md rounded-lg shadow-lg z-50 p-10'>
                    <Link className='text-lg text-slate-100 block text-center hover:text-slate-500 mb-3' href="/">Home</Link>
                    <Link className='text-lg text-slate-100 block text-center hover:text-slate-500 mb-3' href="#about">About</Link>
                    <Link className='text-lg text-slate-100 block text-center hover:text-slate-500 mb-3' href="#contact">Class</Link>
                    <Link className='text-lg text-slate-100 block text-center hover:text-slate-500 mb-3' href="#blog">Blog</Link>
                    <Link className='text-lg text-slate-100 block text-center hover:text-slate-500' href="#contact">Contact</Link>
                </ul>
            )}
        </div>
    )
}
