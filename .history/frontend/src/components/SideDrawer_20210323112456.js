import './SideDrawer.css';

const SideDrawer = ({show}) => {
  const sideDrawerClass = ['sidedrawer'];

if(show) {
    sideDrawerClass.push("show
    ")
}

  return <div className="sidedrawer"></div>;
};

export default SideDrawer;
