/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-05-05 10:26:13
 * @LastEditTime: 2023-05-05 18:32:03
 * @LastEditors: fanwei
 */

import { DefaultTheme } from 'vitepress'

// async function loadNavModules() {
//     const modules = await import.meta.glob('./nav/*.ts')
  
//     for (const path in modules) {
//       const module = await modules[path]()
//       console.log(`${path}:`, module.nav)
//     }
//   }

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '前端相关',
        items: [
            {
                text: 'javaScript',
                link: '/web/javaScript/'
            }
        ]
    },
    {
        text: '服务端相关',
        items: [
            {
                text: 'Linux',
                link: '/serve/Linux/'
            }
        ]
    },
    {
        text: '关于',
        link: '/about'
    }
]