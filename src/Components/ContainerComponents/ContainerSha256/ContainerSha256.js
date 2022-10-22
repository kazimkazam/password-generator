import { Sha256 } from "../../PresentationalComponents/Sha256/Sha256";
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from "../../../redux/features/sha256HashingSlice";
import { selectTextToBeHashed, selectHash } from "../../../redux/features/sha256HashingSlice";
import { selectSettingsColor } from '../../../redux/features/colorSlice';
import { useEffect } from "react";
import { sha256Hashing } from "../../../resources/util/sha256Hashing/sha256Hashing";

const ContainerSha256 = () => {
    const textToBeHashed = useSelector(selectTextToBeHashed);
    const hash = useSelector(selectHash);
    const color = useSelector(selectSettingsColor);

    const dispatch = useDispatch();

    useEffect(() => {
        if (textToBeHashed.length !== 0) {
            dispatch(sha256Hashing(textToBeHashed));
        } else {
            document.getElementById('results').style.display = 'none';
        };
    }, [ textToBeHashed, dispatch ]);

    const createHashHandler = () => {
        if (hash && textToBeHashed) {
            document.getElementById('results').style.display = 'flex';
        };
    };

    const eventHandler = (event) => {
        dispatch(handleChange(event));
    };

    return(
        <Sha256
        onChange={ eventHandler }
        onClick={ createHashHandler }
        hash={ hash }
        color={ color }
        />
    );
};

export { ContainerSha256 };