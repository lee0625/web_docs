/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-04-28 16:10:56
 * @LastEditTime: 2023-05-04 18:46:49
 * @LastEditors: fanwei
 */
export default {
    title: '码客笔记',
    base: '/web_docs/',
    description: 'Vue 3.x',
    themeConfig: {
        logo: '/logo.png',
        search: {
            provider: 'local',
            placeholder: '搜索',
            background: '#fff',

        },
        outlineTitle: '目录',
        lastUpdated: true,
        sidebar: {
            '/guide/': [
                {
                    text: '开始导航',
                    collapsed: false,
                    items: [
                        { text: '首页', link: '/' },
                      ]
                }
            ]
        },
        nav: [
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
    }
}