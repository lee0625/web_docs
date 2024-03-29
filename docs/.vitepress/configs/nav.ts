/*
 * @modlue:
 * @Author: fanwei
 * @Date: 2023-05-05 10:26:13
 * @LastEditTime: 2023-08-21 13:03:32
 * @LastEditors: fanwei
 */

import { DefaultTheme } from 'vitepress'

const fs = require('fs');
const path = require('path');

const currentDir = __dirname;
const parentDir = path.resolve(currentDir, '../..');

const files = fs.readdirSync(parentDir);
for (const file of files) {

    const filePath = path.join(parentDir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      console.log(`${file}`);
    } else {
    //   console.log(`${filePath} is a file.`);
    }
  }

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
            },
            {
                text: 'vue',
                link: '/web/vue/vue'
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
            },
            {
                text: 'git工具',
                link: '/uts/git'
            },
            {
                text: 'Node实战',
                link: '/uts/node'
            }
        ]
    },
    {
        text: '题库宝典',
        items: [
            {
                text: '前端阁',
                link: '/interview/web'
            }
        ]
    },
    {
        text: '关于',
        link: '/about'
    }
]
