const longCache = [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }];

export default {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // AVIF بيتولّد وقت الطلب وبطيء جداً على Vercel، WebP أسرع بكتير
    formats: ['image/webp'],
    minimumCacheTTL: 2592000,
    deviceSizes: [480, 768, 1080, 1440],
    imageSizes: [96, 256, 384],
  },
  async headers() {
    const sources = ['/work/:path*', '/proof/:path*', '/certs/:path*', '/hero.jpg', '/logo.jpg', '/icon.png', '/apple-icon.png', '/favicon.ico'];
    return sources.map((source) => ({ source, headers: longCache }));
  },
};
