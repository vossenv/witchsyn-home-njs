import { Inter, Lusitana } from 'next/font/google';
 
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
export const wFont = localFont({ src: 'ArtOfIlluminating.ttf' });


export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });


export const inter = Inter({ subsets: ['latin'] }); 
