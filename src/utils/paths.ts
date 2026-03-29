/**
 * Prefix a path with the Astro base URL.
 * In dev: base is "/" so /images/foo.jpg stays as /images/foo.jpg
 * On GitHub Pages: base is "/isj-website-v4" so it becomes /isj-website-v4/images/foo.jpg
 * On production (isj.id): base will be "/" again
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  // Ensure no double slashes
  if (path.startsWith('/')) {
    return base.endsWith('/') ? base.slice(0, -1) + path : base + path;
  }
  return base.endsWith('/') ? base + path : base + '/' + path;
}
