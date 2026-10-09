import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
const sg = Space_Grotesk({ subsets: ['latin'], variable: '--font-sg', display: 'swap' });
export const metadata = {
  metadataBase: new URL(site.url), title: site.title, description: site.description, keywords: site.keywords,
  authors: [{ name: site.name }], alternates: { canonical: '/' },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: 'ZEUS Digital Marketing Agency', type: 'website', images: [{ url: '/hero.jpg', width: 720, height: 1280, alt: site.name }] },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1 } },
};
export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#07030b' };
const ld = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'ProfessionalService', name: 'ZEUS Digital Marketing Agency', alternateName: 'زيوس للتسويق الرقمي', url: site.url, logo: site.url + '/logo.jpg', image: site.url + '/hero.jpg', founder: { '@id': site.url + '#ahmad' }, description: site.description, serviceType: ['Digital Marketing', 'Social Media Design', 'Photo Retouching', 'Short-Form Video'] },
  { '@type': 'Person', '@id': site.url + '#ahmad', name: 'Ahmad Maria', alternateName: 'أحمد مارية', jobTitle: 'Founder, ZEUS Digital Marketing Agency', image: site.url + '/hero.jpg' },
] };
export default function RootLayout({ children }) {
  return (<html lang="en" className={sg.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>);
}
