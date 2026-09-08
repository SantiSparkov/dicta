import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans=Geist({variable:'--font-geist-sans',subsets:['latin']});
const geistMono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata: Metadata={title:'Dicta · Tu próximo commit empieza hablando',description:'Dictado local, gratis y de código abierto para devs de Latinoamérica. Convierte tu voz en prompts para Cursor, Claude y tu terminal.',metadataBase:new URL('https://dicta-dev-latam.bonny-flint-2167.chatgpt.site'),openGraph:{title:'Dicta · Menos teclado. Más idea.',description:'Tu próximo commit empieza hablando. Dictado local para devs de Latinoamérica.',locale:'es_LA',type:'website'},icons:{icon:'/dicta.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}
