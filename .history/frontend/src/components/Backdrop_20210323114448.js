import './Backdrop.css';

const Backdrop = ({show, click}) => {
  return show && <div className="backdrop"></div>;
};

export default Backdrop;
