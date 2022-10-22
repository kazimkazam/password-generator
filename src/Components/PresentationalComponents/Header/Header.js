import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className={ 'header' } >
            <div className={ 'logoAndTitle' } >
                <img src={ require('../../../resources/logo/password.png') } className={ 'logo' } alt={ 'logo' } />
                <h1 className={ 'title' } >Password Generator</h1>
            </div>

            <nav>
                <ul>
                    <li><NavLink to={ '/' } id={ 'passwordNav' } name={ 'passwordNav' } onClick={ props.onClick } >Password Generator</NavLink></li>
                    <li><NavLink to={ '/memorablepassword' } id='memorableNav' name={ 'memorableNav' } onClick={ props.onClick } > Memorable Password Generator</NavLink></li>
                    <li><NavLink to={ '/sha256' } id='shaNav' name={ 'shaNav' } onClick={ props.onClick } >SHA-256 Hashing</NavLink></li>
                </ul>
            </nav>
            
        </div>
    );
};

export { Header };