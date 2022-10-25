import { ContainerMemorablePasswordGenerator } from '../Components/ContainerComponents/ContainerMemorablePasswordGenerator/ContainerMemorablePasswordGenerator';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';

const initialState = {
    numberWords: 3,
    includeNumbers: true,
    separator: '',
    words: [ [
        "agouties","agoutis","agouty","agrafe","agrafes","agraffe","agraffes","agranulocyte","agranulocytes",
    "agranulocytoses","agranulocytosis","agrapha","agraphia","agraphias","agraphic","agrarian","agrarianism"
    ], [] ],
    memorablePassword: [],
    fetchStatus: 'idle',
    errorStatus: null,
};

describe('tests related with Container Memorable Password Generator', () => {
    let memorablePasswordGeneratorState = store.getState().memorablePassword;
    it('should start by loading with default settings and initial state', () => {
        render(
            <Provider store={ store }>
                <ContainerMemorablePasswordGenerator />
            </Provider>
        );

        // initial state
        expect(memorablePasswordGeneratorState).toEqual(initialState);
    
        // default settings first seen by the user
        expect(screen.queryByTestId('numberWords').value).toEqual('3');
        expect(screen.queryByTestId('separator').value).toEqual('');
        expect(screen.queryByTestId('includeNumbers')).toBeChecked();
    });

    it('should create a number of passwords after an onClick event', async () => {
        render(
            <Provider store={ store }>
                <ContainerMemorablePasswordGenerator />
            </Provider>
        );

        // assert that results div starts with display = none
        let results = await screen.findByTestId('results');
        expect(results.style.display).toEqual('none');
        
        // fire click on submit button to create memorable password, and change results div style.display to 'flex'
        fireEvent.click(screen.getByTestId('submitButton'));
        
        results = await screen.findByTestId('results');
        waitFor(() => expect(results.style.display).toEqual('flex'));

        memorablePasswordGeneratorState = store.getState().memorablePassword;
        waitFor(() => expect(memorablePasswordGeneratorState.memorablePassword.length).toEqual('1'));
    });

    it('should handle changes made by user inputs into the store state', () => {
        render(
            <Provider store={ store }>
                <ContainerMemorablePasswordGenerator />
            </Provider>
        );

        // number words number input
        fireEvent.change(screen.queryByTestId('numberWords'), { target: { value: 5 } } );
        memorablePasswordGeneratorState = store.getState().memorablePassword;
        expect(memorablePasswordGeneratorState.numberWords).toEqual('5');

        fireEvent.change(screen.queryByTestId('numberWords'), { target: { value: 3 } } );
        memorablePasswordGeneratorState = store.getState().memorablePassword;
        expect(memorablePasswordGeneratorState.numberWords).toEqual('3');

        // separator text input
        fireEvent.change(screen.queryByTestId('separator'), { target: { value: '_/' } });
        memorablePasswordGeneratorState = store.getState().memorablePassword;
        expect(memorablePasswordGeneratorState.separator).toEqual('_/');

        fireEvent.change(screen.queryByTestId('separator'), { target: { value: '' } });
        memorablePasswordGeneratorState = store.getState().memorablePassword;
        expect(memorablePasswordGeneratorState.separator).toEqual('');

        // includeNumbers checkbox input
        fireEvent.click(screen.queryByTestId('includeNumbers'));
        memorablePasswordGeneratorState = store.getState().memorablePassword;
        expect(memorablePasswordGeneratorState.includeNumbers).toEqual(false);

        fireEvent.click(screen.queryByTestId('includeNumbers'));
        memorablePasswordGeneratorState = store.getState().memorablePassword;
        expect(memorablePasswordGeneratorState.includeNumbers).toEqual(true);
    });
});