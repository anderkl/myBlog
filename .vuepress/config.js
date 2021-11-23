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
                "title": "github",
                "desc": "这是我的github开源网址",
                "email": "1512964764@qq.com",
                "link": "https://github.com/anderkl?tab=repositories"
            },
            {
                "title": "gitee",
                "desc": "这是我的gitee开源网址",
                "email": "1512964764@qq.com",
                "link": "https://gitee.com/bjh0201/dashboard/projects"
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
    "plugins": {
        "@vuepress-reco/vuepress-plugin-kan-ban-niang": {
            theme: ["koharu"],
            clean: false,
            message: {
                welcome: '我是吴佩奇，欢迎来到我的前端学习博客',
                home: '心里的发，我想要带雷归旮',
                theme: '好吧，希望你能喜欢我的其他小伙伴。',
                close: '再见噢 欢迎下次再来',
            }
        },
        "@vuepress-reco/vuepress-plugin-back-to-top": {},
        "@vuepress-reco/vuepress-plugin-pagation": {
            // total: 10, //数据总数量
            perPage: 8, //每页多少条
            currentPage: 1, //当前是第几页
        },
        'dynamic-title': {
            showIcon: '/favicon.ico',
            showText: '(/≧▽≦/)咦！又好了！',
            hideIcon: '/failure.ico',
            hideText: '(●—●)喔哟，崩溃啦！',
            recoverTime: 2000,
        },
        "permalink-pinyin": {
            lowercase: true, // Converted into lowercase, default: true
            separator: "-", // Separator of the slug, default: '-'
        },
        'cursor-effects': {
            size: 2, // size of the particle, default: 2
            shape: ['star'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        },
        "@vuepress-reco/vuepress-plugin-bgm-player": {
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
                    url: ' https://m701.music.126.net/20211109201640/b177e9d6a17995399d6f31a1393f9dad/jdyyaac/0e09/055d/5608/9c69f6b3d5278ce15da8abc17f785f70.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20200114/20200114102808361228.jpg'
                },
                {
                    name: '菊次郎的夏天钢琴曲',
                    artist: '赵超',
                    url: 'https://m701.music.126.net/20211109201956/188f611272b20ec3bfcc59666a5b4ada/jdyyaac/515e/555f/010c/f4f24cf39cb5eee1e60d6feebc237c12.m4a',
                    cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20190322/20190322013103293393.jpg'
                },
                {
                    name: '天空之城',
                    artist: '五个半柠檬',
                    url: 'https://m10.music.126.net/20211109202108/bd203a6e01d6f43297f60b94a5668389/yyaac/obj/wonDkMOGw6XDiTHCmMOi/2395098316/588d/abb0/2e24/e1b411648844d590e299267da4c49bd6.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20211015/20211015192801721862.jpg'
                },

                {
                    name: '卡农-钢琴版',
                    artist: 'dylanf',
                    url: 'https://m10.music.126.net/20211109202146/6264872d5282b388acb4546ed14541fc/yyaac/0109/045e/0f59/6c34192a3e3463a31bd88326790f2d3b.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20211102/20211102004916157050.jpg'
                },
                {
                    name: '土耳其进行曲',
                    artist: 'jaycd',
                    url: 'https://m701.music.126.net/20211109202223/ce05fe504fbd1de88daf39823e2fac73/jdyyaac/545c/565a/0f5e/c6cab9fc84a03f450ab7842b6f905697.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20201221/20201221152502420575.jpg'
                },
                {
                    name: '水边的阿狄丽娜',
                    artist: '钢琴先森',
                    url: 'https://m701.music.126.net/20211109202258/4f9ada581a936f96a979a413322daed9/jdyyaac/020f/0609/020b/5e6a84d7191c5f6a28845a388f75c32e.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20200416/20200416060347489322.jpg'
                },
                {
                    name: '梦中的婚礼',
                    artist: 'Richard Clayderman',
                    url: 'https://m701.music.126.net/20211109202336/45acb22ef565bec5a5baa0b5b87a027f/jdyyaac/555c/035c/045a/b6261cbcb646a2da4d733004fd5c0c0b.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20200421/20200421074910356505.jpg'
                },
                {
                    name: '匆匆那年',
                    artist: 'LIU 9',
                    url: 'https://m801.music.126.net/20211109202414/4b63f79f8c86d50b62fb8389274b2e06/jdyyaac/0e5b/0208/015d/911e14c4525bfd0128d56737b59e8db1.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20160907/20160907221313754659.jpg'
                },
                {
                    name: '所念皆星河 钢琴',
                    artist: '纯音乐',
                    url: 'https://m10.music.126.net/20211109202447/90ae22b044e1b75d3bfa5419c35c3c11/yyaac/obj/wonDkMOGw6XDiTHCmMOi/1649510747/f05b/0103/fefd/dd1e96a9e6b69bb2f8d7ae5a6b13a932.m4a',
                    cover: 'https://imgessl.kugou.com/stdmusic/20211015/20211015192502772874.jpg'
                },
                {
                    name: '克罗地亚狂想曲钢琴',
                    artist: '纯音乐',
                    url: 'https://m10.music.126.net/20211109202527/89283af653dcc301fbf4508e65234572/yyaac/0009/055e/0409/7c2ab3ec0f24a8bbf1943ccc71de5efa.m4a',
                    cover: 'https://imgessl.kugou.com/uploadpic/softhead/400/20130531/20130531162457903.jpg'
                }
            ],
            autoplay: 'true',
            shrinkMode: 'mini',
            floatStyle: {
                bottom: '10px',
                'z-index': '999999'
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'anderkl',
            repo: 'myBlog',
            clientId: '8c1c3a07bb4b1b90796d',
            clientSecret: 'db79529e4a3d07c5b8a93358829af2728e7b6efa',
            autoCreateIssue: true
        },
    }



}