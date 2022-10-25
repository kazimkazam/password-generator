import { MemorablePasswordGenerator } from '../../PresentationalComponents/MemorablePasswordGenerator/MemorablePasswordGenerator';
import { useSelector, useDispatch } from 'react-redux';
import { createMemorablePassword, handleChange, handleCheckboxChange } from '../../../redux/features/memorablePasswordGeneratorSlice';
import { selectMemorablePassword, selectMemorablePasswordNumberWords, selectMemorablePasswordWords, selectMemorablePasswordIncludeNumbers } from '../../../redux/features/memorablePasswordGeneratorSlice';
import { selectSettingsColor } from '../../../redux/features/colorSlice';
import { useEffect } from 'react';
import { randomWordFetch } from '../../../resources/util/randomWordFetch/randomWordFetch';

const ContainerMemorablePasswordGenerator = () => {
    const memorablePassword = useSelector(selectMemorablePassword);
    const numberWords = useSelector(selectMemorablePasswordNumberWords);
    const words = useSelector(selectMemorablePasswordWords);
    const includeNumbers = useSelector(selectMemorablePasswordIncludeNumbers);

    const color = useSelector(selectSettingsColor);

    const dispatch = useDispatch();

    // --------------------------------------
    // if using RTK query
    // const { data, error, isLoading, refetch } = randomWordFetch.endpoints.fetchWord.useQuery('all');

    // and do not forget ---> pass data as input on ---> dispatch(createMemorablePassword(data));
    // ----------------------------------------

    useEffect(() => {
        if (words.length === 0) {
            dispatch(randomWordFetch());
        };

        const includeNumbersLabel = document.getElementById('includeNumbersLabel');
        includeNumbers ? includeNumbersLabel.style.backgroundColor = '#1572A1' : includeNumbersLabel.style.backgroundColor = 'gray';

        if (memorablePassword.length !==0) {
            document.getElementById('results').style.display = 'flex';
        } else {
            document.getElementById('results').style.display = 'none';
        };

        if (numberWords <= 0 || numberWords > 10) {
            document.getElementById('warning').style.visibility = 'visible';
        } else {
            document.getElementById('warning').style.visibility = 'hidden';
        };
    }, [ memorablePassword, words, dispatch, includeNumbers, numberWords ]);

    const createMemorablePasswordHandler = () => {
        dispatch(createMemorablePassword());

        // if (memorablePassword) {
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

    return(
        <MemorablePasswordGenerator
        onClick={ createMemorablePasswordHandler }
        onChange={ eventHandler }
        onCheckboxChange={ checkboxEventHandler }
        memorablePassword={ memorablePassword }
        color={ color }
        />
    );
};

export { ContainerMemorablePasswordGenerator };