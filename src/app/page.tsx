import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='flex flex-1 flex-col items-center justify-center gap-8'>
        <svg
          width='128'
          height='128'
          viewBox='0 0 1024 1024'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='1024' height='1024' rx='128' fill='#F56040' />
          <path
            d='M146.724 672L172.974 547.969L121.13 352.188H209.286L228.974 470.75L297.224 352.188H392.599L258.724 547.969L232.255 672H146.724ZM329.5 672L492.25 352.188H602.281L629.188 672H545.844L543.656 612.062H445.656L418.312 672H329.5ZM476.938 543.812H541.031L537.75 451.938C537.604 444.792 537.458 437.719 537.312 430.719C537.167 423.719 537.167 417.083 537.312 410.812H536C533.812 417.521 531.406 424.083 528.781 430.5C526.302 436.917 523.531 443.479 520.469 450.188L476.938 543.812ZM665.839 672L733.433 352.188H815.026C843.318 352.188 865.995 356.417 883.058 364.875C900.266 373.333 912.735 384.854 920.464 399.438C928.339 413.875 932.276 430.062 932.276 448C932.276 467.104 928.849 484.021 921.995 498.75C915.287 513.333 905.662 525.656 893.12 535.719C880.724 545.635 865.922 553.146 848.714 558.25C831.651 563.354 812.766 565.906 792.058 565.906H773.245L751.37 672H665.839ZM788.558 495.906H802.339C811.381 495.906 819.183 493.938 825.745 490C832.454 486.062 837.631 480.667 841.276 473.812C844.922 466.958 846.745 459.229 846.745 450.625C846.745 443.333 844.412 436.771 839.745 430.938C835.224 424.958 827.714 421.969 817.214 421.969H804.308L788.558 495.906Z'
            fill='#14171A'
          />
        </svg>
        <text className='text-md font-body font-light max-w-2xl'>
          Rate about anything and everything on YAP!
        </text>
      </main>
      <footer className='flex justify-center gap-8'>
        <text className='text-xs font-body font-light '>
          <Link href='/legal/privacy-policy'>Privacy Policy</Link>
        </text>
        <text className='text-xs font-body font-light '>
          <Link href='/legal/terms-of-service'>Terms of Service</Link>
        </text>
        <text className='text-xs font-body font-light '>
          <Link href='/legal/eula'>EULA</Link>
        </text>
        <text className='text-xs font-body font-light '>|</text>
        <text className='text-xs font-body font-light '>
          <Link href='/support/support'>Support</Link>
        </text>
        <text className='text-xs font-body font-light '>
          <Link href='/support/delete-data'>Delete Data</Link>
        </text>
      </footer>
    </>
  )
}
