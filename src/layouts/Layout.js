import React, { Children } from "react"
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


function Layout(props) {

  return (

    <div>
      <NavBar />
        {props.Children}
      <Footer />
    </div>

  )

}

export default Layout