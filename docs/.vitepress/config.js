/*
 * @modlue: 
 * @Author: fanwei
 * @Date: 2023-04-28 16:10:56
 * @LastEditTime: 2023-05-05 11:09:31
 * @LastEditors: fanwei
 */
import {nav, head, sidebar, algolia } from './configs'
export default {
    title: '码客笔记', // 标题
    base: '/web_docs/', // 默认'/'
    description: 'Vue 3.x', // 描述
    lang: 'zh-CN', // 语言
    lastUpdated: true, // 更新时间
    head, // 头部信息
    themeConfig: {
        logo: '/logo.png',

        search: {
            provider: 'local',
            placeholder: '搜索',
        },

        /* Algolia DocSearch 配置 */
        // algolia,

        lastUpdatedText: '最后更新时间', // 更新时间
        outlineTitle: '目录',
        returnToTopLabel: '返回顶部',

        sidebar,
        nav,
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lee0625/web_docs' },
        ], // 友链
        
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        }
    }
}