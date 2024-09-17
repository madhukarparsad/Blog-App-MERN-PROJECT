// import React from 'react'
// import {Link} from 'react-router-dom'

// import Logo from '../images/download.png'

// import {AiOutlineClose} from 'react-icons/ai' 


// const Header = () => {
  //   return (
//     <nav>
//       <div className = 'container nav__container'>
//         <Link to="/" className='nav__logo'>
//           <img src = {Logo} alt="Navbar logo" />
//         </Link>
//         <ul className="nav__menu">
//           <l1><Link to="/profile">Ernest Achiever</Link></l1>
//           <l1><Link to="/create">Create Post</Link></l1>
//           <l1><Link to="/authors">Authors</Link></l1>
//           <l1><Link to="/logout">Logout</Link></l1>
//         </ul>
//         <button className='Nav__toggle-btn'>
//           <AiOutlineClose/>
//         </button>
//       </div>
//     </nav>
//   )
// }

// export default Header



import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/download.png';
import { AiOutlineClose } from 'react-icons/ai';
// import {FaBars} from 'ryeact-icons/fa'

const Header = () => {
  // const [isNavShowing , setInNavShowing] = React.useState(window.innerWidth > 800 ? true : false)
  return (
    <nav>
      <div className='container nav__container'>
        <Link to="/" className='nav__logo'>
          <img src={Logo} alt="Navbar logo" />
        </Link>
        <ul className="nav__menu">
          <li><Link to="/profile/sdfsdf">Ernest Achiever</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className='nav__toggle-btn'>
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Header;
