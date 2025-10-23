// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "./components/CommonLayout"; // Header/Footer 임포트

// 폰트 설정
const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

// 사이트 기본 URL (Vercel 배포 주소 또는 실제 도메인으로 변경)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ehsfriends-git-master-pet-hero.vercel.app';

// 기본 메타데이터 설정 (SEO)
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // 상대 경로 기준 URL 설정
  title: {
    default: "EHS Friends | EHS 전문 컨설팅", // 기본 제목
    template: "%s | EHS Friends", // 페이지별 제목 형식
  },
  description: "EHS Friends는 기업의 환경, 보건, 안전(EHS) 경영 시스템 구축 및 운영을 위한 전문 컨설팅 서비스를 제공합니다.",
  openGraph: {
    title: "EHS Friends | EHS 전문 컨설팅",
    description: "환경, 보건, 안전(EHS) 분야 전문 컨설팅 파트너. 시스템 구축, 화학물질 관리, 위험성 평가 등.",
    url: siteUrl,
    siteName: "EHS Friends",
    images: [
      {
        url: '/og-image.png', // public/og-image.png (1200x630 권장)
        width: 1200,
        height: 630,
        alt: 'EHS Friends 로고 및 서비스 소개',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  // 검색엔진이 사이트를 크롤링하고 색인하도록 허용 (기본값)
  robots: {
    index: true,
    follow: true,
  },
  // 아이콘 설정
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png', // public/apple-icon.png 추가 권장
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema Markup (SEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EHS Friends',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-32-123-4567',
      contactType: 'Customer Service',
      email: 'contact@ehsfriends.co.kr',
      areaServed: 'KR',
      availableLanguage: ['Korean']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'EHS로 123, 4층',
      addressLocality: '부천시',
      addressRegion: '경기도',
      postalCode: '12345',
      addressCountry: 'KR'

    }
  };

  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      {/* Sticky Footer를 위한 레이아웃: flex flex-col min-h-screen */}
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {/* 페이지 컨텐츠가 남은 공간을 채우도록 flex-1 적용 */}
        <div className="flex-1 w-full  bg-white">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}