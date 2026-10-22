/**
 * Helper to construct correct asset URLs for GitHub Pages subpath deployment.
 * Handles prepending import.meta.env.BASE_URL (e.g. '/Birthday_/').
 */
export const assetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
