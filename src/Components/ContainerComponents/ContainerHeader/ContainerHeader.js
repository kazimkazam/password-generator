import { Header } from "../../PresentationalComponents/Header/Header";
import { resetPasswordGeneratorStates } from "../../../redux/features/passwordGeneratorSlice";
import { resetMemorablePasswordStates } from "../../../redux/features/memorablePasswordGeneratorSlice";
import { resetHashStates } from "../../../redux/features/sha256HashingSlice";
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from "../../../redux/features/colorSlice";
import { selectPasswordTab, selectMemorableTab, selectShaTab } from "../../../redux/features/colorSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContainerHeader = () => {
    const passwordTab = useSelector(selectPasswordTab);
    const memorableTab = useSelector(selectMemorableTab);
    const shaTab = useSelector(selectShaTab);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const eventHandler = (event) => {
        dispatch(resetPasswordGeneratorStates());
        dispatch(resetMemorablePasswordStates());
        dispatch(resetHashStates());
        dispatch(handleChange(event));

        // reset inputs ---> this is important for the edge case where the user clicks on the nav tab that reloads the page he already is
        // password generator page
        if (document.getElementById('numberChars') !== null) {
            document.getElementById('numberChars').value = 10;
            document.getElementById('lowercase').checked = true;
            document.getElementById('uppercase').checked = true;
            document.getElementById('includeNumbers').checked = true;
            document.getElementById('includeSymbols').checked = true;
            document.getElementById('charsToExclude').value = '';
            document.getElementById('howMany').value = '1';
        };
        // memorable password page
        if (document.getElementById('numberWords') !== null) {
            document.getElementById('numberWords').value = 3;
            document.getElementById('separator').value = '';
            document.getElementById('includeNumbers').checked = true;
        };
        // sha256 page
        if (document.getElementById('textToBeHashed') !== null) {
            document.getElementById('textToBeHashed').value = '';
        };
    };

    useEffect(() => {
        if (passwordTab && !memorableTab && !shaTab) {
            // ensure that client is showing the right page ---> when the user reloads or types url manually
            // since colorState initialState starts with password generator color, we need to verify the page where user is in when he reloads or inserts url manually 
            if (document.getElementById('numberChars') === null) {
                if (document.getElementById('numberWords')) {
                    navigate('/memorablepassword');
                    dispatch(handleChange({ target: { name: 'memorableNav' } }))
                } else if (document.getElementById('textToBeHashed')) {
                    navigate('/sha256');
                    dispatch(handleChange({ target: { name: 'shaNav' } }));
                } else {
                    navigate('/acknowledgements');
                    dispatch(handleChange({ target: { name: 'acknowledgements' } }));
                }
            };
            
            document.getElementById('passwordNav').style.backgroundColor = '#AF7AB3';
            document.getElementById('memorableNav').style.backgroundColor = '#151515';
            document.getElementById('shaNav').style.backgroundColor = '#151515';
            document.getElementById('acknowledgements').style.backgroundColor = '#151515';
            document.getElementById('acknowledgements').style.color = 'crimson';
        } else if (!passwordTab && memorableTab && !shaTab) {
            document.getElementById('passwordNav').style.backgroundColor= '#151515';
            document.getElementById('memorableNav').style.backgroundColor = '#1572A1';
            document.getElementById('shaNav').style.backgroundColor = '#151515';
            document.getElementById('acknowledgements').style.backgroundColor = '#151515';
            document.getElementById('acknowledgements').style.color = 'crimson';
        } else if (!passwordTab && !memorableTab && shaTab) {
            document.getElementById('passwordNav').style.backgroundColor = '#151515';
            document.getElementById('memorableNav').style.backgroundColo = '#151515';
            document.getElementById('shaNav').style.backgroundColor = '#E6A157';
            document.getElementById('acknowledgements').style.backgroundColor = '#151515';
            document.getElementById('acknowledgements').style.color = 'crimson';
        } else if (!passwordTab && !memorableTab && !shaTab) {
            document.getElementById('passwordNav').style.backgroundColor = '#151515';
            document.getElementById('memorableNav').style.backgroundColor = '#151515';
            document.getElementById('shaNav').style.backgroundColor = '#151515';
            document.getElementById('acknowledgements').style.backgroundColor = 'crimson'
            document.getElementById('acknowledgements').style.color = 'white';
        };
    }, [ passwordTab, memorableTab, shaTab ]);

    return(
        <Header
        onClick={ eventHandler }
        />
    );
};

export { ContainerHeader };