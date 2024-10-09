import project from '../../assets/project.png'
import pic2 from '../../assets/pexels-photo-177598.jpeg'
import pic3 from '../../assets/pexels-photo-546819.jpeg'
import pic4 from '../../assets/Logo.png'
import pic5 from '../../assets/istockphoto-1321462048-612x612.jpg'
import pic6 from '../../assets/pexels-photo-6235053.jpeg'
import './myportifolio.css'



//arry 
const data =[
  {
    id: 1,
    image: project,
    title: 'Zed Lingo',
    github: 'https://github.com/FutureMulenga/Language_APP.git'
  },
  {
    id: 2,
    image: pic2,
    title: 'first project',
    github: 'https//github.com'
  },
  {
    id: 3,
    image: pic3,
    title: 'second project',
    github: 'https//github.com'
  },
   {
    id: 4,
    image: pic4,
    title: 'third project',
    github: 'https//github.com'
  },
  {
    id: 5,
    image: pic5,
    title: 'fouth project',
    github: 'https//github.com'
  },
  {
    id: 6,
    image: pic6,
    title: 'firth project',
    github: 'https//github.com'
  }
]

const Portifolio = () =>{
    return(
      <section id='portifolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className="portfolio_container">
        {
          data.map(({id, image, title, github}) =>{
            return (
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
             <h3>{title}</h3>
            < div className='portfolio_item-cta'>
            <a href={github} className="btn">Github</a>
            <a href={github} className="btn btn-primary">Live Demo</a>
           </div>
           </article>)
          })
        }
       </div>
      </section>
    );
}
export default Portifolio;