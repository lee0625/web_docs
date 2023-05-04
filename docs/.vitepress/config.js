/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-04-28 16:10:56
 * @LastEditTime: 2023-05-04 10:58:00
 * @LastEditors: fanwei
 */
export default {
    title: '码客笔记',
    base: '/web_docs/',
    description: 'Vue 3.x',
    themeConfig: {
        logo: '/logo.png',
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