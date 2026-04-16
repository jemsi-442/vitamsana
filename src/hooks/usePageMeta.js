import { useEffect } from 'react';

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

const updateMeta = (name, content) => {
  ensureMetaTag(`meta[name="${name}"]`, { name, content });
};

const updatePropertyMeta = (property, content) => {
  ensureMetaTag(`meta[property="${property}"]`, { property, content });
};

export const usePageMeta = ({ title, description, path = '/', image = '/logo512.png' }) => {
  useEffect(() => {
    const siteName = 'Vitamsana';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const origin = window.location.origin;
    const canonicalUrl = new URL(path, origin).toString();
    const imageUrl = new URL(image, origin).toString();

    document.title = fullTitle;

    updateMeta('description', description);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);

    updatePropertyMeta('og:type', 'website');
    updatePropertyMeta('og:site_name', siteName);
    updatePropertyMeta('og:title', fullTitle);
    updatePropertyMeta('og:description', description);
    updatePropertyMeta('og:url', canonicalUrl);
    updatePropertyMeta('og:image', imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [description, image, path, title]);
};
