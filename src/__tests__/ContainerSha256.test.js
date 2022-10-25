import { ContainerSha256 } from '../Components/ContainerComponents/ContainerSha256/ContainerSha256';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import {render, fireEvent, screen, waitFor} from '@testing-library/react';

describe('tests related with Container SHA-256 Hashing', () => {
    const initialState = {
        textToBeHashed: '',
        hash: '',
        hashStatus: 'idle',
        errorStatus: null,
    };
    
    let sha256State = store.getState().sha256Hashing;

    it('should start by loading with initial state', () => {
        render(
            <Provider store={ store }>
                <ContainerSha256 />
            </Provider>
        );
        
        // initial state
        let sha256State = store.getState().sha256Hashing;
        expect(sha256State).toEqual(initialState);
    });

    it('should create SHA-256 hashing and make it appear in the results div', async () => {
        render(
            <Provider store={ store }>
                <ContainerSha256 />
            </Provider>
        );

        // assert that results div starts with display = none
        let results = await screen.findByTestId('results');
        expect(results.style.display).toEqual('none');

        fireEvent.click(screen.getByTestId('submitButton'));
        
        results = await screen.findByTestId('results');
        waitFor(() => expect(results.style.display).toEqual('flex'));

        sha256State = store.getState().sha256Hashing;
        waitFor(() => expect(sha256State.hash.length).not.toEqual(0));
    });
});
