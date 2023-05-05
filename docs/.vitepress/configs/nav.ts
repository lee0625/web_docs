/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-05-05 10:26:13
 * @LastEditTime: 2023-05-05 10:34:30
 * @LastEditors: fanwei
 */
import { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '服务端',
        items: [
            {
                text: 'Linux',
                link: '/serve/Linux'
            }
        ]
    },
    {
        text: '关于',
        link: '/about'
    }
]