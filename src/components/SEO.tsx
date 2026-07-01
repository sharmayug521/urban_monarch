import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Update Document Title
    if (title.endsWith('| Urban Monarch')) {
      document.title = title;
    } else {
      document.title = `${title} | Urban Monarch`;
    }

    // Try to find existing meta description tag or create a new one
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Try to find existing meta keywords tag or create a new one
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Try to find existing canonical link tag or create a new one
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const currentPath = window.location.pathname === '/' ? '' : window.location.pathname;
    canonicalLink.setAttribute('href', `https://urbanclothing05.netlify.app${currentPath}`);

    // Clean up or keep intact
  }, [title, description, keywords]);

  return null;
}
