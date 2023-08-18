module.exports = {
  env: {
    siteTitle: 'Your Company',
    siteDescription: 'Your company description.',
    siteKeywords: 'your company keywords',
    siteUrl: 'https://next-ozone.vercel.app',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@your_handle'
  },
  webpack: (config) => {
    let modularizeImports = null;
    config.module.rules.some((rule) =>
        rule.oneOf?.some((oneOf) => {
          modularizeImports =
              oneOf?.use?.options?.nextConfig?.modularizeImports;
          return modularizeImports;
        }),
    );
    if (modularizeImports?.["@headlessui/react"])
      delete modularizeImports["@headlessui/react"];
    return config;
  }
}
