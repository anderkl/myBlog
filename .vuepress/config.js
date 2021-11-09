module.exports = {
    "title": "Welcome | Wupqの博客",
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },

    "description": "每天努力让自己变强",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    // 导航栏
    "themeConfig": {
        "nav": [{
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "个人信息",
                "icon": "reco-message",
                "items": [{
                    "text": "个人简历",
                    "link": "/docs/theme-reco/"
                }]
            },
            {
                "text": "我的相关",
                "icon": "reco-message",
                "items": [{
                    "text": "Gitee",
                    "link": "https://gitee.com/bjh0201/dashboard/projects",
                    "icon": "reco-github"
                }]
            }
        ],
        "sidebar": 'auto',
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "friendLink": [{
                "title": "午后南杂",
                "desc": "Enjoy when you can, and endure when you must.",
                "email": "1156743527@qq.com",
                "link": "https://www.recoluan.com"
            },
            {
                "title": "Wupq 前端学习博客",
                "desc": "一心想学好前端的程序猿",
                "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                "link": "https://vuepress-theme-reco.recoluan.com"
            }
        ],
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "更新时间",
        "author": "Wupq",
        "authorAvatar": "/avatar.png",
        "record": "个人理解 内容错误请指纠",
        "startYear": "2020"
    },
    "markdown": {
        "lineNumbers": true
    },
    "plugins": [
        ["@vuepress-reco/vuepress-plugin-kan-ban-niang",
            {
                theme: ["koharu"],
                clean: false,
                message: {
                    welcome: '我是吴佩奇，欢迎来到我的前端学习博客',
                    home: '心里的发，我想要带雷归旮',
                    theme: '好吧，希望你能喜欢我的其他小伙伴。',
                    close: '再见噢 欢迎下次再来',
                }
            }
        ],
        ["@vuepress-reco/vuepress-plugin-back-to-top"],
        ["@vuepress-reco/vuepress-plugin-pagation",
            {
                // total: 10, //数据总数量
                perPage: 8, //每页多少条
                currentPage: 1, //当前是第几页
            },
        ],
        ['dynamic-title',
            {
                showIcon: '/favicon.ico',
                showText: '(/≧▽≦/)咦！又好了！',
                hideIcon: '/failure.ico',
                hideText: '(●—●)喔哟，崩溃啦！',
                recoverTime: 2000,
            },
        ],
        ["permalink-pinyin",
            {
                lowercase: true, // Converted into lowercase, default: true
                separator: "-", // Separator of the slug, default: '-'
            },
        ],
        ['cursor-effects',
            {
                size: 2, // size of the particle, default: 2
                shape: ['star'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
        ["@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    // 本地文件示例
                    // {
                    //     name: '장가갈 수 있을까',
                    //     artist: '咖啡少年',
                    //     url: '/bgm/1.mp3',
                    //     cover: '/bgm/1.jpg'
                    // },
                    // 网络文件示例
                    {
                        name: '大鱼-钢琴版',
                        artist: '赵海洋',
                        url: 'https://webfs.ali.kugou.com/202111080113/67904648a3d653afe247657218b202e1/G123/M02/01/1B/W5QEAFyNzJKAGgWWAEgoAhcaQs4810.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20200114/20200114102808361228.jpg'
                    },
                    {
                        name: '菊次郎的夏天钢琴曲',
                        artist: '赵超',
                        url: 'https://webfs.ali.kugou.com/202111080135/70de9bc6e6b853629ebb00dbdc1ff2c9/G168/M03/0A/09/iJQEAF0vA4KAYkk7ACQl4S4xNlo754.mp3',
                        cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20190322/20190322013103293393.jpg'
                    },
                    {
                        name: '天空之城',
                        artist: '五个半柠檬',
                        url: 'https://webfs.ali.kugou.com/202111080109/f9d6aeb2d779cad57846a06ebe9717bb/KGTX/CLTX001/df68d572d3b4c1b91f75ab05ced821cb.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20211015/20211015192801721862.jpg'
                    },

                    {
                        name: '卡农-钢琴版',
                        artist: 'dylanf',
                        url: 'https://webfs.ali.kugou.com/202111080116/7530b4e3dde0ca53575a832e8cf2ff6b/KGTX/CLTX001/9145a28bda0cb8a49c7868890ecbcc53.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20211102/20211102004916157050.jpg'
                    },
                    {
                        name: '土耳其进行曲',
                        artist: 'jaycd',
                        url: 'https://webfs.ali.kugou.com/202111080119/e7f8c93f89f0f6451830f701f0e7ba6b/KGTX/CLTX001/1f469b770f3823d066e1fb024d8241de.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20201221/20201221152502420575.jpg'
                    },
                    {
                        name: '水边的阿狄丽娜',
                        artist: '钢琴先森',
                        url: 'https://webfs.ali.kugou.com/202111080123/f02ca3351a62a206f580fc2f6d390a85/G204/M03/1F/07/DA4DAF5pIlCAPTzuACaiyAW6u28263.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20200416/20200416060347489322.jpg'
                    },
                    {
                        name: '梦中的婚礼',
                        artist: 'Richard Clayderman',
                        url: 'https://webfs.ali.kugou.com/202111080124/e4f72bbb5ed4e1538096d905f3f50104/G212/M0B/13/17/FA4DAF6zLHiAW4O_ACiUJniLB3Y814.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20200421/20200421074910356505.jpg'
                    },
                    {
                        name: '匆匆那年',
                        artist: 'LIU 9',
                        url: 'https://webfs.ali.kugou.com/202111080129/7bf020602a659698a686935c05d7adfa/G234/M02/14/09/ypQEAF9ptLKAOqXcACWzeBpUlUQ992.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907221313754659.jpg'
                    },
                    {
                        name: '所念皆星河 钢琴',
                        artist: '纯音乐',
                        url: 'https://webfs.ali.kugou.com/202111080152/ab392148cfd2e9968c79ce4446384c38/KGTX/CLTX001/c8d4734a16b39bafc0cb5c16e46dcf42.mp3',
                        cover: 'https://imgessl.kugou.com/stdmusic/20211015/20211015192502772874.jpg'
                    },
                    {
                        name: '克罗地亚狂想曲钢琴',
                        artist: '纯音乐',
                        url: 'https://webfs.ali.kugou.com/202111080132/ca188ee5ad0539b317ec159def822262/G192/M09/08/14/AA4DAF5W1YmAH9_LADfp97dqdoY747.mp3',
                        cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20130531/20130531162457903.jpg'
                    }
                ],
                autoplay: 'true',
                shrinkMode: 'mini',
                floatStyle: {
                    bottom: '10px',
                    'z-index': '999999'
                }
            }
        ]

    ]
}