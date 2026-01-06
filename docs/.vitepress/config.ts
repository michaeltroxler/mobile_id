import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mobile ID",
  base: '/mobileid_vitepress/',
  description: "Technical documenetion for Mobile ID integration",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Integration', link: '/markdown-examples' },
      { text: 'Support', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Introduction', link: '/introdction' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: '© Swisscom — Mobile ID',
      copyright: 'All rights reserved'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MobileID-Strong-Authentication/' }
    ]
  }
})
