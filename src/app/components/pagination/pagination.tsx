'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
//@ts-ignore
const PaginationButtons = ({ hasPrev, hasNext, page }) => {
  const router = useRouter();

  return (
    <div className='flex justify-between'>
      <button 
        disabled={!hasPrev} 
        onClick={() => router.push(`?page=${page-1}`)}  
        className={`rounded-md px-4 py-2 text-white ${!hasPrev ? 'bg-rose-300 cursor-not-allowed' : 'bg-rose-300 cursor-pointer'}`}
      >
        Previous
      </button>
      <button 
        disabled={!hasNext} 
        onClick={() => router.push(`?page=${page+1}`)} 
        className={`rounded-md px-4 py-2 text-white ${!hasNext ? 'bg-rose-300 cursor-not-allowed' : 'bg-rose-300 cursor-pointer'}`}
      >
        Next
      </button> 
    </div>
  );
}

export default PaginationButtons;
