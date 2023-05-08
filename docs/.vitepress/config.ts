import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前端笔记', link: 'front-note/javascript/wenfa/lexical.md' },
      { text: 'UI组件库', link: 'components/react/button.md' },
      { text: '算法', link: 'algorithm/index.md' }
    ],
    sidebar: {
      '/front-note' : [
          {
            text: 'Javascript', 
            items: [
              {
                text: '文法', 
                items: [
                  { text: '词法', link: 'front-note/javascript/wenfa/lexical.md' },
                  { text: '语法', link: 'front-note/javascript/wenfa/grammar.md' }
                ]
              },
              { text: '语义', link: 'front-note/javascript/semantics.md' },
              {
                text: '运行时',
                items: [
                   {
                    items: [
                      {
        
                        text: '数据结构', 
                        items: [
                          { text: '类型', link: 'front-note/javascript/runtime/data-structure/type.md' },
                          { text: '对象', link: 'front-note/javascript/runtime/data-structure/object.md' },
                          { text: '实例', link: 'front-note/javascript/runtime/data-structure/instance.md' }
                        ]
                      },
                      { text: '执行过程（算法）', link: 'front-note/javascript/runtime/implement-process.md' }
                    ]
                  }   
                ]
              }
            ]
          },
          { text: 'CSS', link: 'front-note/css' },
          { text: 'Browser', link: 'front-note/browser' }
        ],
        '/components' : [
          {
            text: 'React',
            items: [
              { text: '按钮', link: 'components/react/button.md' }
            ]
          },
          {
            text: 'Vue3',
            items: [
              { text: '按钮', link: 'components/vue3/button.md' }
            ]
          }
        ],
        '/algorithm' : [
          { text: '算法',link: 'algorithm/index.md' }
        ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XinZ1997/XinZ1997.github.io' }
    ]
  }
})
