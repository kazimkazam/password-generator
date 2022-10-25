import { ContainerPasswordGenerator } from '../Components/ContainerComponents/ContainerPasswordGenerator/ContainerPasswordGenerator';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import {render, fireEvent, screen} from '@testing-library/react';


describe('tests related with Container Password Generator', () => {
    const initialState = {
        numberChars: 10,
        lowercase: true,
        uppercase: true,
        includeNumbers: true,
        includeSymbols: true,
        charsToExclude: '',
        howMany: 1,
        passwords: [],
    };
    
    let passwordGeneratorState = store.getState().passwordGenerator;

    it('should start by loading with default settings and initial state', () => {
        render(
            <Provider store={ store }>
                <ContainerPasswordGenerator />
            </Provider>
        );

        // initial state
        let passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState).toEqual(initialState);
        
        // default settings first seen by the user
        expect(screen.queryByTestId('numberChars').value).toEqual('10');
        expect(screen.queryByTestId('lowercase')).toBeChecked();
        expect(screen.queryByTestId('uppercase')).toBeChecked();
        expect(screen.queryByTestId('includeNumbers')).toBeChecked();
        expect(screen.queryByTestId('includeSymbols')).toBeChecked();
        expect(screen.queryByTestId('charsToExclude').value).toEqual('');
        expect(screen.queryByTestId('howMany').value).toEqual('1');
    });

    it('should create a number of passwords after an onClick event', () => {
        render(
            <Provider store={ store }>
                <ContainerPasswordGenerator />
            </Provider>
        );

        // assert that results div starts with display = none
        expect(screen.queryByTestId('results').style.display).toEqual('');

        // fire click on submit button to create password (1 password since initialState.howMany = 1), and change results div style.display to 'flex'
        fireEvent.click(screen.queryByTestId('submitButton'));
        passwordGeneratorState = store.getState().passwordGenerator;
        
        expect(screen.queryByTestId('results').style.display).toEqual('flex');
        expect(passwordGeneratorState.passwords.length).toEqual(passwordGeneratorState.howMany);
    });

    it('should handle changes made by user inputs into the store state', () => {
        render(
            <Provider store={ store }>
                <ContainerPasswordGenerator />
            </Provider>
        );

        // number chars number input
        fireEvent.change(screen.queryByTestId('numberChars'), { target: { value: 5 } } );
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.numberChars).toEqual('5');

        fireEvent.change(screen.queryByTestId('numberChars'), { target: { value: 10 } } );
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.numberChars).toEqual('10');
        
        // lowercase checkbox
        fireEvent.click(screen.queryByTestId('lowercase'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.lowercase).toEqual(false);

        fireEvent.click(screen.queryByTestId('lowercase'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.lowercase).toEqual(true);

        // uppercase checkbox
        fireEvent.click(screen.queryByTestId('uppercase'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.uppercase).toEqual(false);

        fireEvent.click(screen.queryByTestId('uppercase'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.uppercase).toEqual(true);

        // includeNumbers checkbox
        fireEvent.click(screen.queryByTestId('includeNumbers'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.includeNumbers).toEqual(false);

        fireEvent.click(screen.queryByTestId('includeNumbers'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.includeNumbers).toEqual(true);

        // includeSymbols checkbox
        fireEvent.click(screen.queryByTestId('includeSymbols'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.includeSymbols).toEqual(false);

        fireEvent.click(screen.queryByTestId('includeSymbols'));
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.includeSymbols).toEqual(true);

        // chars to exclude text input
        fireEvent.change(screen.queryByTestId('charsToExclude'), { target: { value: '_/+' } });
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.charsToExclude).toEqual('_/+');

        fireEvent.change(screen.queryByTestId('charsToExclude'), { target: { value: '' } });
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.charsToExclude).toEqual('');

        // how many passwords select input
        fireEvent.change(screen.queryByTestId('howMany'), { target: { value: 10 } });
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.howMany).toEqual('10');

        fireEvent.change(screen.queryByTestId('howMany'), { target: { value: 1 } });
        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.howMany).toEqual('1');
    });

    it('should turn all checkboxes back true when user changes all to false', () => {
        render(
            <Provider store={ store }>
                <ContainerPasswordGenerator />
            </Provider>
        );
        // lowercase checkbox
        fireEvent.click(screen.queryByTestId('lowercase'));

        // uppercase checkbox
        fireEvent.click(screen.queryByTestId('uppercase'));

        // includeNumbers checkbox
        fireEvent.click(screen.queryByTestId('includeNumbers'));

        // includeSymbols checkbox
        fireEvent.click(screen.queryByTestId('includeSymbols'));

        passwordGeneratorState = store.getState().passwordGenerator;

        expect(passwordGeneratorState.lowercase).toEqual(true);
        expect(passwordGeneratorState.uppercase).toEqual(true);
        expect(passwordGeneratorState.includeNumbers).toEqual(true);
        expect(passwordGeneratorState.includeSymbols).toEqual(true);
    });

    it('should create a password considering the settings', () => {
        render(
            <Provider store={ store }>
                <ContainerPasswordGenerator />
            </Provider>
        );
        
        fireEvent.click(screen.queryByTestId('submitButton'));

        passwordGeneratorState = store.getState().passwordGenerator;
        expect(passwordGeneratorState.passwords.length).toEqual(1);

        const password = passwordGeneratorState.passwords;
        
        let validPassword = true;
        const validatePassword = () => {
            let pattern = /[\S_]{10}/g;
            if (!pattern.test(password)) {
                validPassword = false;
            };
        };

        validatePassword();
        expect(validPassword).toEqual(true);
    });
});
