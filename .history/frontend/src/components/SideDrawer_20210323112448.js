import './SideDrawer.css';

const SideDrawer = ({show}) => {
  const sideDrawerClass = ['sidedrawer'];

if(show) {
    sideDrawerClass.push([])
}

  return <div className="sidedrawer"></div>;
};

export default SideDrawer;
