import { PasswordGenerator } from "../../PresentationalComponents/PasswordGenerator/PasswordGenerator";
import { useSelector, useDispatch } from 'react-redux';
import { selectPasswords, selectNumberChars, selectLowercase, selectUppercase, selectIncludeNumbers, selectIncludeSymbols } from "../../../redux/features/passwordGeneratorSlice";
import { createPassword, handleChange, handleCheckboxChange, handleAllCheckboxesBackTrue } from '../../../redux/features/passwordGeneratorSlice';
import { selectSettingsColor } from "../../../redux/features/colorSlice";
import { useEffect } from "react";

const ContainerPasswordGenerator = () => {
    const passwords = useSelector(selectPasswords);
    const numberChars = useSelector(selectNumberChars);
    const lowercase = useSelector(selectLowercase);
    const uppercase = useSelector(selectUppercase);
    const includeNumbers = useSelector(selectIncludeNumbers);
    const includeSymbols = useSelector(selectIncludeSymbols);

    const color = useSelector(selectSettingsColor);
    
    const dispatch = useDispatch();

    const createPasswordHandler = () => {
        dispatch(createPassword());

        // if (passwords) {
        //     document.getElementById('results').style.display = 'flex';
        // } else {
        //     document.getElementById('results').style.display = 'none';
        // };
    };

    const eventHandler = (event) => {
        dispatch(handleChange(event));
    };

    const checkboxEventHandler = ({ target }) => {
        dispatch(handleCheckboxChange({ target }));
    };

    useEffect(() => {
        const lowercaseLabel = document.getElementById('lowercaseLabel');
        const uppercaseLabel = document.getElementById('uppercaseLabel');
        const includeNumbersLabel = document.getElementById('includeNumbersLabel');
        const includeSymbolsLabel = document.getElementById('includeSymbolsLabel');
        
        lowercase ? lowercaseLabel.style.backgroundColor = '#AF7AB3' : lowercaseLabel.style.backgroundColor = 'gray';
        uppercase ? uppercaseLabel.style.backgroundColor = '#AF7AB3' : uppercaseLabel.style.backgroundColor = 'gray';
        includeNumbers ? includeNumbersLabel.style.backgroundColor = '#AF7AB3' : includeNumbersLabel.style.backgroundColor = 'gray';
        includeSymbols ? includeSymbolsLabel.style.backgroundColor = '#AF7AB3' : includeSymbolsLabel.style.backgroundColor = 'gray';

        if (!lowercase && !uppercase && !includeNumbers && !includeSymbols) {
            document.getElementById('lowercase').checked = 'true';
            document.getElementById('uppercase').checked = 'true';
            document.getElementById('includeNumbers').checked = 'true';
            document.getElementById('includeSymbols').checked = 'true';

            dispatch(handleAllCheckboxesBackTrue());
        };

        if (passwords.length !== 0) {
            document.getElementById('results').style.display = 'flex';
        } else {
            document.getElementById('results').style.display = 'none';
        };

        if (numberChars <= 0 || numberChars > 100) {
            document.getElementById('warning').style.visibility = 'visible';
        } else {
            document.getElementById('warning').style.visibility = 'hidden';
        };
    }, [ passwords, numberChars, lowercase, uppercase, includeNumbers, includeSymbols, dispatch ]);

    return(
        <PasswordGenerator
        passwords={ passwords }
        onClick={ createPasswordHandler }
        onChange={ eventHandler }
        onCheckboxChange={ checkboxEventHandler }
        color={ color }
        />
    );
};

export { ContainerPasswordGenerator };