import Header from "./componets/Header/header"
import Navigation from "./componets/Navigation/nav"
import About from "./componets/About/about"
import Experience from "./componets/Experience/experience"
import Services from "./componets/Services/services"
import Portsection from "./componets/Portsection/myportfolio"
import Testimonial  from "./componets/Testimonial/testimoniol"
import Contact from "./componets/Contacts/contacts"
import Footer from "./componets/Footer/footer"

function App(){
    return(
        <div className="App">
             <Header/>
             <Navigation/>
             <About/>
             <Experience/>
             <Services/>
             <Portsection/>
             <Testimonial/>
             <Contact/>
             <Footer/>
        </div>
    );
}

export default App;