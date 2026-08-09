export function buildCurrentPath(pathname, searchParams) {
  if (!pathname) return "/";
  const query = searchParams?.toString?.() ?? "";
  return query ? `${pathname}?${query}` : pathname;
}

export function buildDetailHref(detailPath, returnTo) {
  if (!returnTo || returnTo === detailPath) return detailPath;
  return `${detailPath}?from=${encodeURIComponent(returnTo)}`;
}

export function resolveReturnHref(fromParam, fallbackHref = "/") {
  if (!fromParam) return fallbackHref;

  try {
    const decoded = decodeURIComponent(fromParam);
    if (decoded.startsWith("/") && !decoded.startsWith("//")) {
      return decoded;
    }
  } catch {
    // ignore malformed encoding
  }

  return fallbackHref;
}
