/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-05-05 10:56:04
 * @LastEditTime: 2023-05-05 10:57:00
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
        }
    ]
}