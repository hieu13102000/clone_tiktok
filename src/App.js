import {React, Fragment} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import { DefauftLayout} from './components/Layout'
export default function App() {
  return (
    <Router>
      <Routes>
       {publicRoutes.map(route=>{
         const Page =route.component
         let Layout = DefauftLayout
         if ( route.layout){

           Layout = route.layout
         }
         else if (route.layout === null)
         {
           Layout = Fragment

         }
         
         return <Route key={route.index} path={route.path} element={
         <Layout>
           <Page/>
           </Layout>}/>
       })}
      </Routes>
    </Router>
  )
}
