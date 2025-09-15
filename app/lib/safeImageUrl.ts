export function safeImageUrl(url?: string | null): string | null {
  if (!url) return null;

  if (url.startsWith("http")) return encodeURI(url);

  if (!url.startsWith("/")) return "/" + url;

  return encodeURI(url);
}
