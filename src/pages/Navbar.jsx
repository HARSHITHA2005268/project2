import {Link} from 'react-router-dom';
import './style/styles.css';


export default function Navbar() {
    return (
        <div classname='navbar'>
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/feedback'>Feedback</Link></li>
          </ul>
       
        </div>
    )
}


    





