module.exports = {
  env: {
    siteTitle: 'Irina Korger',
    siteDescription: 'Personal website',
    siteKeywords: 'coach sales self-improvement',
    siteUrl: 'irinakorger.com',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@irinakorger'
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
