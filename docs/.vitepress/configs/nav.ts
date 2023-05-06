/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-05-05 10:26:13
 * @LastEditTime: 2023-05-06 18:42:43
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
                link: '/serve/linux/'
            }
        ]
    },
    {
        text: '倍速工具箱',
        items: [
            {
                text: '前端常用工具函数',
                link: '/uts/javaScript'
            }
        ]
    },
    {
        text: '关于',
        link: '/about'
    }
]