import logo from '../../assets/kudimota33.png'
import './Footer.css';

const Footer =() =>{
    return (
      <div className="footy">
          <img className='footerLogo' src={`${logo}`} alt="logo" />
        <div className="mine">
          <p> © 2022 - All right reserved</p>
        </div>
      </div>
    );
}
    export default Footer;