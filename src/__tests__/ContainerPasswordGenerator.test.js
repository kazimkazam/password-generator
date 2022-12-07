import { ContainerPasswordGenerator } from '../Components/ContainerComponents/ContainerPasswordGenerator/ContainerPasswordGenerator';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import {render, fireEvent, screen, waitFor, cleanup} from '@testing-library/react';


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
    
    beforeEach(() => {
        render(
            <Provider store={ store }>
                <ContainerPasswordGenerator />
            </Provider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should start by loading with default settings and initial state', () => {
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

    it('should create a number of passwords after an onClick event', async () => {
        // assert that results div starts with display = none
        expect(screen.queryByTestId('results').style.display).toEqual('none');

        // fire click on submit button to create password (1 password since initialState.howMany = 1), and change results div style.display to 'flex'
        await waitFor(() => fireEvent.click(screen.queryByTestId('submitButton')));
        let passwordGeneratorState = store.getState().passwordGenerator;
        
        await waitFor(() => expect(screen.queryByTestId('results').style.display).toEqual('flex'));
        await waitFor(() => expect(passwordGeneratorState.passwords.length).toEqual(passwordGeneratorState.howMany));
    });

    it('should handle changes made by user inputs into the store state', async () => {
        // number chars number input
        await waitFor(() => fireEvent.change(screen.queryByTestId('numberChars'), { target: { value: 5 } } ));
        let passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.numberChars).toEqual('5'));

        await waitFor(() => fireEvent.change(screen.queryByTestId('numberChars'), { target: { value: 10 } } ));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.numberChars).toEqual('10'));
        
        // lowercase checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('lowercase')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.lowercase).toEqual(false));

        await waitFor(() => fireEvent.click(screen.queryByTestId('lowercase')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.lowercase).toEqual(true));

        // uppercase checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('uppercase')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.uppercase).toEqual(false));

        await waitFor(() => fireEvent.click(screen.queryByTestId('uppercase')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.uppercase).toEqual(true));

        // includeNumbers checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('includeNumbers')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.includeNumbers).toEqual(false));

        await waitFor(() => fireEvent.click(screen.queryByTestId('includeNumbers')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.includeNumbers).toEqual(true));

        // includeSymbols checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('includeSymbols')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.includeSymbols).toEqual(false));

        await waitFor(() => fireEvent.click(screen.queryByTestId('includeSymbols')));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.includeSymbols).toEqual(true));

        // chars to exclude text input
        await waitFor(() => fireEvent.change(screen.queryByTestId('charsToExclude'), { target: { value: '_/+' } }));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.charsToExclude).toEqual('_/+'));

        await waitFor(() => fireEvent.change(screen.queryByTestId('charsToExclude'), { target: { value: '' } }));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.charsToExclude).toEqual(''));

        // how many passwords select input
        await waitFor(() => fireEvent.change(screen.queryByTestId('howMany'), { target: { value: 10 } }));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.howMany).toEqual('10'));

        await waitFor(() => fireEvent.change(screen.queryByTestId('howMany'), { target: { value: 1 } }));
        passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.howMany).toEqual('1'));
    });

    it('should turn all checkboxes back true when user changes all to false', async () => {
        // lowercase checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('lowercase')));

        // uppercase checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('uppercase')));

        // includeNumbers checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('includeNumbers')));

        // includeSymbols checkbox
        await waitFor(() => fireEvent.click(screen.queryByTestId('includeSymbols')));

        let passwordGeneratorState = store.getState().passwordGenerator;

        await waitFor(() => expect(passwordGeneratorState.lowercase).toEqual(true));
        await waitFor(() => expect(passwordGeneratorState.uppercase).toEqual(true));
        await waitFor(() => expect(passwordGeneratorState.includeNumbers).toEqual(true));
        await waitFor(() => expect(passwordGeneratorState.includeSymbols).toEqual(true));
    });

    it('should create a password considering the settings', async () => {
        await waitFor(() => fireEvent.click(screen.queryByTestId('submitButton')));

        let passwordGeneratorState = store.getState().passwordGenerator;
        await waitFor(() => expect(passwordGeneratorState.passwords.length).toEqual(1));

        const password = passwordGeneratorState.passwords;
        
        let validPassword = true;
        const validatePassword = async () => {
            let pattern = /[\S_]{10}/g;
            if (!pattern.test(password)) {
                validPassword = false;
            };
        };

        await waitFor(() => validatePassword());
        await waitFor(() => expect(validPassword).toEqual(true));
    });
});
