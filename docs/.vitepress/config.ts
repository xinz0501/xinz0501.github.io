import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端', link: '/javascript/wenfa/lexical.md' }
    ],
    sidebar: [
      {
        text: 'Javascript',
        items: [
          {
            text: '文法', 
            items: [
              { text: '词法', link: '/javascript/wenfa/lexical.md' },
              { text: '语法', link: '/javascript/wenfa/grammar.md' }
            ]
          },
          { text: '语义', link: '/javascript/semantics.md' },
          {
            text: '运行时',
            items: [
              {
                text: '数据结构', 
                items: [
                  { text: '类型', link: '/javascript/runtime/data-structure/type.md' },
                  { text: '对象', link: '/javascript/runtime/data-structure/object.md' },
                  { text: '实例', link: '/javascript/runtime/data-structure/instance.md' }
                ]
              },
              { text: '执行过程（算法）', link: '/javascript/runtime/implement-process.md' }
            ]
          },
          { text: 'markdown-examples', link: '/markdown-examples.md' }
        ]
      },
      {
        text: 'css',
        items: [
          { text: 'css', link: '/css' },
        ]
      },
      {
        text: 'browser',
        items: [
          { text: 'browser', link: '/browser' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XinZ1997/XinZ1997.github.io' }
    ]
  }
})
