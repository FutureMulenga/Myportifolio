import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillDribbbleSquare} from 'react-icons/ai'

const HeaderSocials = ()=>{

     return(

          <div className="socials">
               <a href="https://linkedin.com"><BsLinkedin/></a>
               <a href="https://github.com/"   ><FaGithub /></a>
               <a href="https://github.com/"   ><AiFillDribbbleSquare/></a>
          </div>

     );
}
export default HeaderSocials;