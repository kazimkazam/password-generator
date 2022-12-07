import { ContainerSha256 } from '../Components/ContainerComponents/ContainerSha256/ContainerSha256';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { render, fireEvent, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('tests related with Container SHA-256 Hashing', () => {
    const initialState = {
        textToBeHashed: '',
        hash: '',
        hashStatus: 'idle',
        errorStatus: null,
    };
    
    beforeEach(() => {
        render(
            <Provider store={ store }>
                <ContainerSha256 />
            </Provider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('should start by loading with initial state', () => {
        // initial state
        let sha256State = store.getState().sha256Hashing;
        expect(sha256State).toEqual(initialState);
    });

    it('should create SHA-256 hashing and make it appear in the results div', async () => {
        // assert that results div starts with display = none
        expect(screen.queryByTestId('results').style.display).toEqual('none');

        // fire text input and verify
        userEvent.type(screen.getByTestId('textToBeHashed'), 'test');
        await waitFor(() => expect(screen.getByTestId('textToBeHashed')).toHaveValue('test'));

        let sha256State = store.getState().sha256Hashing;
        await waitFor(() => expect(sha256State.textToBeHashed).toEqual('test'));
        
        // verify that state now stores hashed text
        await waitFor(() => expect(sha256State.hash).toEqual('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')); 

        // fire click on submit button
        await waitFor(() => userEvent.click(screen.getByTestId('submitButton')));
        
        // verify results are now showing
        await waitFor(() => expect(screen.getByTestId('results').style.display).toEqual('flex'));
        await waitFor(() => expect(screen.getByText('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08')).toBeInTheDocument());
    });
});
