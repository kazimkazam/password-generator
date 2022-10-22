import { NavLink } from 'react-router-dom';

const Footer = (props) => {
    return(
        <div className='footer'>
            <h4>Password Generator 2022 ©</h4>
            
            <p>Please read the acknowledgements and the terms of use by clicking on the link below.</p>
            <NavLink to={ '/acknowledgements' } id={ 'acknowledgements' } name={ 'acknowledgements' } onClick={ props.onClick } >Acknowledgements and terms</NavLink>
        </div>
    );
};

export { Footer };