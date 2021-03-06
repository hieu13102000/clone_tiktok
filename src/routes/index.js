// layout
import { HeaderOnly } from '../components/Layout'

// pages
import Home from '../pages/Home/index'
import Following from '../pages/Following'
import Profile from '../pages/Profile'
import Upload from '../pages/Upload'
import Seach from '../pages/Seach'

export const publicRoutes = [
    {path:'/' ,component: Home},
    {path:'/following' ,component: Following},
    {path:'/@:nickname' ,component:  Profile},
    {path:'/upload' ,component:  Upload, layout : HeaderOnly},
    {path:'/seach' ,component:  Seach, layout : null}



]

export const privateRoutes =[

]

