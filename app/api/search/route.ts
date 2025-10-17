// app/api/search/route.ts
import { NextResponse } from "next/server";

interface Notice {
  id: number;
  documentId: string;
  title: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    return NextResponse.json({ data: [] });
  }

  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/notices?filters[title][$containsi]=${term}&fields[0]=title&fields[1]=documentId`;
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) {
      throw new Error("Failed to fetch search results from Strapi");
    }

    const json = await res.json();
    const results = json.data as Notice[];

    return NextResponse.json({ data: results });
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json({ message: "Search failed" }, { status: 500 });
  }
}
