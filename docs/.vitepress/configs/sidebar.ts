/*
 * @modlue:
 * @Author: fanwei
 * @Date: 2023-05-05 10:56:04
 * @LastEditTime: 2023-05-09 20:26:10
 * @LastEditors: fanwei
 */

import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] =  {
    '/guide/': [
        {
            text: '开始导航',
            collapsed: false,
            items: [
                { text: '首页', link: '/' },
              ]
        },
    ],
    '/web/': [
        {
            text: '前端知识库',
            collapsed: false,
            items: [
                { text: 'javaScript', link: '/web/javaScript/' },
                { text: 'vue', collapsed: false,
                    items: [
                        { text: 'vue', link: '/web/vue/vue' },
                        { text: 'vue3', link: '/web/vue/vue3' },
                    ]
                }
            ]
        }
    ],
    '/serve/': [
        {
            text: '服务端相关',
            collapsed: false,
            items: [
                { text: 'linux手册', link: '/serve/linux/' },
            ]
        }
    ],
    '/uts/': [
        {
            text:  "倍速工具箱",
            collapsed: false,
            items: [
                {text: '前端常用工具函数', link: '/uts/javaScript'},
                {text: 'git工具', link: '/uts/get'}
            ]
        }
    ],
    '/interview/': [
        {
            text: '题库宝典',
            collapsed: false,
            items: [
                {text: '前端阁', link: '/interview/web'},
            ]
        }
    ]
}
