import assets from "../assets";
const CARD_DATA = [
    {
        "id": 1,
        "color": "#E0E1FE",
        "title": "Powerful",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "icon": assets.leaf
    },
    {
        "id": 2,
        "color": "#FFD2DA",
        "title": "Powerful",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "icon": assets.mobile
    },
    {
        "id": 3,
        "color": "#FFD8CD",
        "title": "Powerful",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "icon": assets.monitor
    },
    {
        "id": 4,
        "color": "#C6FDF3",
        "title": "Powerful",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "icon": assets.index
    },
]

const USER_DATA = [
    {
        "id": 1,
        "title": "@martajones",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "url": assets.avt
    },
    {
        "id": 2,
        "title": "@michealpahm",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "url": assets.avt2
    },
    {
        "id": 3,
        "title": "@markbrown",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "url": assets.avt3
    }
]

const DATA_FOOTER_SOCIAL_LINK = [
    {
        "name": "Facebook",
        "icon": assets.fb
    },
    {
        "name": "Twitter",
        "icon": assets.twitter
    },
    {
        "name": "Google",
        "icon": assets.gg
    }
]

const DATA_NAVIGATION = [
    {
        "link": "/",
        "title":"Home"
    },
    {
        "link": "contact",
        "title":"Contact"
    },
    {
        "link": "about",
        "title":"About us"
    },
    {
        "link": "faq",
        "title":"FAQ's"
    },
    {
        "link": "support",
        "title":"Support"
    },

]
export { CARD_DATA, USER_DATA, DATA_FOOTER_SOCIAL_LINK,DATA_NAVIGATION };
