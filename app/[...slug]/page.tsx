import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {pages} from '../content/catalog';
import ContentPage from '../ContentPage';
type Props={params:Promise<{slug:string[]}>};
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const page=pages.find(p=>p.path===slug.join('/'));return {title:page?`${page.title} | Tesserova`:'Page not found | Tesserova',description:page?.intro};}
export default async function Page({params}:Props){const {slug}=await params;const page=pages.find(p=>p.path===slug.join('/'));if(!page)notFound();return <ContentPage page={page}/>}
