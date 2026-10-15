import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'Tesserova — Beyond Dimensions. Beyond Possibilities.',description:'Complete technology solutions for a digital-first world. Explore Tesserova services and the Universal Migration Platform.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
