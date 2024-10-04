// `app/page.tsx` is the UI for the `/` URL
// import localFont from '@next/font/local'

import { inter, wFont } from '@/app/fonts/fonts'
export default function Page() {
    return <h1 className={wFont.className}>Hello, Home page!</h1>
  }