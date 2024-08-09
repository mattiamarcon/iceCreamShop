import React from 'react'

function Maps() {
  return (
    <div className='w-full flex flex-col items-center text-center gap-12'>
        <h1 className='text-5xl lg:text-8xl'>VIENI A TROVARCI</h1>
        <ul className='flex flex-col text-start text-3xl w-2/3 lg:w-fit max-center gap-5'>
            <li>Azzano Decimo</li>
            <li>Via XXV Aprile, 7 (PN)</li>
            <li>Aperto tutti i giorni: 12.00 – 14.00 | 17.30 – 22.00</li>
            <li>Chiamaci ora:</li>
            <a href='tel:+390434313754' className='w-fit p-5 bg-blue-400 hover:bg-blue-500 rounded-md border-black text-white text-3xl border-2'>0434 313754</a>
        </ul>
    </div>
  )
}

export default Maps