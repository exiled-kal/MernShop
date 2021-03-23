import {Link} from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = ({show, click}) => {
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span></span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
