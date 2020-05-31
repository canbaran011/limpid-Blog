import Home from './components/Home'
import Header from './components/common/Header'

const Blogs = resolve => {
    require.ensure(["./components/blogs/Blogs"], () => {
        resolve(require("./components/blogs/Blogs"))
    } , "Blogs")
}

const BlogEdit = resolve => {
    require.ensure(["./components/blogs/BlogEdit"], () => {
        resolve(require("./components/blogs/BlogEdit"))
    }, "Blogs")
}

const BlogDetail = resolve => {
    require.ensure(["./components/blogs/BlogDetail"], () => {
        resolve(require("./components/blogs/BlogDetail"))
    }, "Blogs")
}

const BlogAdd = resolve => {
    require.ensure(["./components/blogs/BlogAdd"], () => {
        resolve(require("./components/blogs/BlogAdd"))
    }, "Blogs")
}

export const routes =[
{   path : '/' , name: 'home', components :{
    default :Home ,
    "header-top" : Header
}   },
{   path: '/add', name:'add' ,components:{
    default : BlogAdd,
    "header-top" :Header
} }
,
{   path: '/blogs' , name: 'blogs' , components : {
    default : Blogs ,
    "header-top" : Header
},
    children :[
        {   path: '' , component: Blogs },
        {   path: ':id' , component: BlogDetail  },
        {   path: ':id/edit', component: BlogEdit , name: "blogEdit"   }
    ]
 },
 {    path: "/redirect" , redirect : "/user"  },
 {    path: "*" , redirect : "/"  } 


];