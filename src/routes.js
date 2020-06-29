import Login from './views/Login.vue'
import cypher from './views/cypher.vue'
import Register from './views/Register.vue'
// import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import RecordCenter from './views/Record/RecordCenter.vue'
// import Form from './views/nav1/Form.vue'
// import user from './views/nav1/user.vue'
import Cteam from './views/asp/Cteam.vue'
import Bteam from './views/asp/Bteam.vue'
import Allenter from './views/asp/Allenter.vue'
import Blackenter from './views/asp/Blackenter.vue'
import Verify from './views/asp/Verify.vue'
import Enterdetail from './views/asp/Enterdetail.vue'
import Tidings from './views/Tidings/Tidings.vue'
import NewsMessage from './views/Tidings/NewsMessage.vue'
import MessageDetail from './views/Tidings/MessageDetail.vue'
import Enterprise from './views/asp/Enterprise.vue'
import Hotwords from './views/asp/Hotwords.vue'
import Carousel from './views/asp/Carousel.vue'
import Position from './views/asp/Position.vue'
import Suggestion from './views/asp/Suggestion.vue'
import Resume from './views/asp/Resume.vue'
import Cuser from './views/asp/Cuser.vue'
import ResumeReview from './views/asp/ResumeReview.vue'
import ResumeDetail from './views/asp/ResumeDetail.vue'
import JobAuait from './views/asp/JobAuait.vue'
import JobDetail from './views/asp/JobDetail.vue'
import CompanyInformation from './views/asp/CompanyInformation.vue'
import Qualifications from './views/asp/Qualifications.vue'
import BasicInformation from './views/asp/BasicInformation.vue'
import InformationVerify from './views/asp/InformationVerify.vue'

import authority from './views/authority/authority.vue'
import role from './views/authority/role.vue'
import subscriber from './views/authority/subscriber.vue'
import NewRole from './views/authority/NewRole.vue'
import roleDetail from './views/authority/roleDetail.vue'
import roleEdit from './views/authority/roleEdit.vue'
import NewSubscriber from './views/authority/NewSubscriber.vue'
import subscriberDetail from './views/authority/subscriberDetail.vue'
import subscriberEdit from './views/authority/subscriberEdit.vue'
import resumeMg from './views/ResumeMg/ResumeMg.vue'
import MeCompany from './views/MessageCompany/CompanyList.vue'
import MePosition from './views/MessageCompany/PositionList.vue'
import PositionList from './views/MessagePosition/PositionList.vue'
import AddPosition from './views/MessageCompany/AddPosition.vue'
import editPosition from './views/MessageCompany/editPosition.vue'
import intercalate from './views/MessageCompany/intercalate.vue'
import CompanyDetail from './views/MessageCompany/CompanyDetail.vue'
let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/cypher',
        component: cypher,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },
    {
        path: '/Verify',
        component: Verify,
        name: '审核详情页',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '数据概览',
        // hidden: true,
        iconCls: 'fa fa-id-card-o',
        children: [{
            path: '/RecordCenter',
            iconCls: 'fa fa-id-card-o',
            component: RecordCenter,
            name: '数据中心'
        }, ]
    },
    {
        path: '/',
        component: Home,
        name: '公司管理',
        // hidden: true,
        iconCls: 'fa fa-id-card-o',
        children: [{
            path: '/MeCompany',
            iconCls: 'fa fa-id-card-o',
            component: MeCompany,
            name: '公司列表'
        }, {
            path: '/MePosition',
            iconCls: 'fa fa-address-card',
            component: MePosition,
            name: '职位',
            hidden: true
        }, {
            path: '/AddPosition',
            iconCls: 'fa fa-address-card',
            component: AddPosition,
            name: '新增职位',
            hidden: true
        },{
            path: '/editPosition',
            iconCls: 'fa fa-address-card',
            component: editPosition,
            name: '编辑职位',
            hidden: true
        },{
            path: '/intercalate',
            iconCls: 'fa fa-address-card',
            component: intercalate,
            name: '设置',
            hidden: true
        },{
            path: '/CompanyDetail',
            iconCls: 'fa fa-id-card-o',
            component: CompanyDetail,
            name: '企业详情',
            hidden: true
        },]
    },
    {
        path: '/',
        component: Home,
        name: '职位管理',
        // hidden: true,
        iconCls: 'fa fa-id-card-o',
        children: [{
            path: '/PositionList',
            iconCls: 'fa fa-id-card-o',
            component: PositionList,
            name: '职位列表'
        }]
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        hidden: false,
        meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        iconCls: 'fa fa-id-card-o',
        children: [{
                path: '/Cteam',
                iconCls: 'fa fa-id-card-o',
                redirect: '/Cteam/Cuser',
                component: Cteam,
                name: 'C端用户管理',
                children: [{
                        path: '/Cteam/Cuser',
                        iconCls: 'fa fa-address-card',
                        component: Cuser,
                        name: 'C端用户'
                    },
                    {
                        path: '/Cteam/Resume',
                        iconCls: 'fa fa-address-card',
                        component: Resume,
                        name: '用户详情页',
                        hidden: true
                    },
                ]
            },
            {
                path: '/Bteam',
                component: Bteam,
                redirect: '/Bteam/Enterprise',
                iconCls: 'fa fa-address-card',
                name: '企业用户管理',
                children: [{
                        path: '/Bteam/Enterprise',
                        iconCls: 'fa fa-address-card',
                        component: Enterprise,
                        name: '企业用户'
                    },
                    {
                        path: '/Bteam/Allenter',
                        iconCls: 'fa fa-address-card',
                        component: Allenter,
                        name: '所有企业'
                    },
                    {
                        path: '/Bteam/Blackenter',
                        iconCls: 'fa fa-address-card',
                        component: Blackenter,
                        name: '黑名单'
                    },
                    {
                        path: '/Bteam/Verify',
                        iconCls: 'fa fa-address-card',
                        component: Verify,
                        name: '审核详情页',
                        hidden: true
                    },
                    {
                        path: '/Bteam/Enterdetail',
                        iconCls: 'fa fa-address-card',
                        component: Enterdetail,
                        name: '企业详情页',
                        hidden: true
                    },
                ]
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'C端内容管理',
        iconCls: 'fa fa-id-card-o',
        hidden: true,
        children: [{
                path: '/Hotwords',
                iconCls: 'fa fa-id-card-o',
                component: Hotwords,
                name: '热搜词管理'
            },
            {
                path: '/Carousel',
                iconCls: 'fa fa-id-card-o',
                component: Carousel,
                name: '首页轮播管理'
            },
            {
                path: '/Position',
                iconCls: 'fa fa-id-card-o',
                component: Position,
                name: '热门企业管理'
            },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '简历管理',
        iconCls: 'fa fa-id-card-o',
        hidden: false,
        children: [{
            path: '/ResumeMg',
            iconCls: 'fa fa-id-card-o',
            component: resumeMg,
            name: '简历库'
        }, ]
    },
    {
        path: '/',
        component: Home,
        name: '权限管理',
        iconCls: 'fa fa-id-card-o',

        children: [{
                path: '/role',
                iconCls: 'fa fa-id-card-o',
                component: role,
                name: '角色管理',
            },
            {
                path: '/subscriber',
                iconCls: 'fa fa-id-card-o',
                component: subscriber,
                name: '用户管理'
            },
            {
                path: '/NewRole',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                hidden: true,
                component: NewRole,
                name: '新建角色'
            },
            {
                path: '/roleDetail',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                hidden: true,
                component: roleDetail,
                name: '查看用户'
            },
            {
                path: '/roleEdit',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                hidden: true,
                component: roleEdit,
                name: '编辑用户'
            },
            {
                path: '/NewSubscriber',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                hidden: true,
                component: NewSubscriber,
                name: '新建用户'
            },
            {
                path: '/subscriberDetail',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                hidden: true,
                component: subscriberDetail,
                name: '查看用户'
            },
            {
                path: '/subscriberEdit',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                hidden: true,
                component: subscriberEdit,
                name: '编辑用户'
            },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '审核中心',
        iconCls: 'fa fa-id-card-o',
        meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [{
                path: '/CompanyInformation',
                iconCls: 'fa fa-id-card-o',
                component: CompanyInformation,
                meta: {
                    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                name: '企业信息审核',
                children: [{
                        path: '/CompanyInformation/Qualifications',
                        iconCls: 'fa fa-address-card',
                        component: Qualifications,
                        meta: {
                            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                        },
                        name: '企业资质审核'
                    },
                    {
                        path: '/CompanyInformation/BasicInformation',
                        iconCls: 'fa fa-address-card',
                        meta: {
                            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: BasicInformation,
                        name: '企业基础信息审核'
                    },
                    {
                        path: '/CompanyInformation/InformationVerify',
                        iconCls: 'fa fa-address-card',
                        meta: {
                            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: InformationVerify,
                        name: '企业基础信息审核详情页',
                        hidden: true
                    },
                    {
                        path: '/CompanyInformation/Verify',
                        iconCls: 'fa fa-address-card',
                        meta: {
                            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                        },
                        component: Verify,
                        name: '企业资质审核详情页',
                        hidden: true
                    },

                ]
            },
            {
                path: '/jobAuait',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: JobAuait,
                name: '职位审核'
            },
            {
                path: '/ResumeReview',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: ResumeReview,
                name: '简历审核',
                children: [

                ]
            },
            {
                path: '/ResumeDetail',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: ResumeDetail,
                name: '简历审核详情页',
                hidden: true
            },
            {
                path: '/JobDetail',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: JobDetail,
                name: '职位审核详情页',
                hidden: true
            },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户反馈管理',
        iconCls: 'fa fa-id-card-o',
        hidden: true,
        children: [{
            path: '/Suggestion',
            iconCls: 'fa fa-id-card-o',
            component: Suggestion,
            name: '投诉建议管理'
        }, ]
    },
    {
        path: '/',
        component: Home,
        name: '消息中心',
        iconCls: 'fa fa-id-card-o',
        meta: {
            requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
        },
        children: [{
                path: '/Tidings',
                iconCls: 'fa fa-id-card-o',
                meta: {
                    requireAuth: true
                },
                component: Tidings,
                name: '消息中心'
            },
            {
                path: '/NewsMessage',
                iconCls: 'fa fa-id-card-o',
                component: NewsMessage,
                name: '新建消息',
                hidden: true
            },
            {
                path: '/MessageDetail',
                iconCls: 'fa fa-id-card-o',
                component: MessageDetail,
                name: '消息详情页',
                hidden: true
            },
        ]
    },
    // {
    //     path: '/',
    //     component: Tidings,
    //     name: '',
    //     iconCls: 'fa fa-address-card',
    //     leaf: true,//只有一个节点
    //     children: [
    //         { path: '/page6', component: Page6, name: '导航三' }
    //     ]
    // },
    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;