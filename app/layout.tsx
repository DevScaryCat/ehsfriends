// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "./components/CommonLayout";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ehsfriends-git-master-pet-hero.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EHS Friends | EHS 전문 컨설팅",
    template: "%s | EHS Friends",
  },
  description: "EHS Friends는 기업의 환경, 보건, 안전(EHS) 경영 시스템 구축 및 운영을 위한 전문 컨설팅 서비스를 제공합니다.",
  openGraph: {
    title: "EHS Friends | EHS 전문 컨설팅",
    description: "환경, 보건, 안전(EHS) 분야 전문 컨설팅 파트너. 시스템 구축, 화학물질 관리, 위험성 평가 등.",
    url: siteUrl,
    siteName: "EHS Friends",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'EHS Friends 로고 및 서비스 소개' }],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-icon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EHS Friends',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint', telephone: '+82-32-123-4567', contactType: 'Customer Service',
      email: 'contact@ehsfriends.co.kr', areaServed: 'KR', availableLanguage: ['Korean']
    },
    address: {
      '@type': 'PostalAddress', streetAddress: 'EHS로 123, 4층', addressLocality: '부천시',
      addressRegion: '경기도', postalCode: '12345', addressCountry: 'KR'
    }
  };

  return (
    // <html> 태그에 suppressHydrationWarning={true} 추가
    <html lang="ko" suppressHydrationWarning={true}>
      <body className={`${pretendard.variable} flex flex-col min-h-screen font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}