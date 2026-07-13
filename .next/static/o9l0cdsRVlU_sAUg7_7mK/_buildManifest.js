self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [
      {
        "source": "/blog/sitemap_index.xml",
        "destination": "/blog/sitemap-index/"
      },
      {
        "source": "/blog/sitemap_index.xml/",
        "destination": "/blog/sitemap-index/"
      },
      {
        "source": "/ae/blog/sitemap_index.xml",
        "destination": "/ae/blog/sitemap-index/"
      },
      {
        "source": "/ae/blog/sitemap_index.xml/",
        "destination": "/ae/blog/sitemap-index/"
      }
    ],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()