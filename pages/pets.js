import React from 'react'
import Image from 'next/image';
export default function Pets() {
  return (
    <div>
       { ['1', '2','3','4','5'].map(pet =>{
           return(
               <div key={pet}>
                   <Image src={`/${pet}.jpg`} alt='pets' width='480' height='220' />
                </div>
           )
       })}
    </div>
  )
}
