import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


function Layout(props) {

  return (

    <div>
      <NavBar />
        {props.children}
      <Footer />
    </div>

  )

}

export default Layout