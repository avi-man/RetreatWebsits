import type { Language } from './language';

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiImage {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface StrapiSEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
}

interface StrapiBlogPost {
  id: number;
  documentId: string;
  attributes: {
    Title: string;
    slug: string;
    excerpt: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    featuredImage: {
      data: StrapiImage;
    };
    seo: StrapiSEO[];
    localizations: any[];
  };
}

interface StrapiPackage {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    image: {
      data: StrapiImage;
    };
    isFeatured: boolean;
    seo: StrapiSEO[];
    locale: string;
  };
}

const STRAPI_API_URL = import.meta.env.PUBLIC_STRAPI_API_URL;
const STRAPI_API_TOKEN = import.meta.env.PUBLIC_STRAPI_API_TOKEN;

async function fetchFromStrapi(endpoint: string) {
  try {
    console.log('Fetching from Strapi:', `${STRAPI_API_URL}/api${endpoint}`);
    const response = await fetch(`${STRAPI_API_URL}/api${endpoint}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Strapi response:', data);
    return data as StrapiResponse<any>;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    throw error;
  }
}

export async function fetchBlogPosts(lang: Language = 'en') {
  try {
    const response = await fetchFromStrapi(`/blog-posts?locale=${lang}&populate=*`);
    console.log('Blog posts response:', response);
    return response;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { data: [] };
  }
}

export async function fetchBlogPost(slug: string | undefined, lang: Language = 'en') {
  if (!slug) {
    return { data: null };
  }
  try {
    const response = await fetchFromStrapi(`/blog-posts?filters[slug][$eq]=${slug}&locale=${lang}&populate=*`);
    console.log('Blog post response:', response);
    return {
      data: response.data[0] || null
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return { data: null };
  }
}

export async function fetchPackages(lang: Language = 'en') {
  try {
    const response = await fetchFromStrapi(`/packages?locale=${lang}&populate=*`);
    console.log('Packages response:', response);
    return response;
  } catch (error) {
    console.error('Error fetching packages:', error);
    return { data: [] };
  }
} 