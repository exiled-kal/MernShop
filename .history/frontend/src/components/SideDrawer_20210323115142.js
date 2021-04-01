import './SideDrawer.css';

const SideDrawer = ({show}) => {
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__links" onClick={}>

      </ul>
    </div>
  );
};

export default SideDrawer;
