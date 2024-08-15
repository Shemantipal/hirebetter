import Navbar from '@/components/shared/Navbar'
import React from 'react'

function notfound() {
    return (
        <div className='h-full'>
            <div className='w-full grid place-content-center h-full'>
                404
            </div>
            <Navbar />
        </div>
    )
}

export default notfound