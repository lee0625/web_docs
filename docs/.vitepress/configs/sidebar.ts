/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-05-05 10:56:04
 * @LastEditTime: 2023-05-09 14:56:33
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
                {text: '前端常用工具函数', link: '/uts/javaScript'}
            ]
        }
    ]
}