import { Link } from 'react-router-dom';
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
                  i
              </Link>
          </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
