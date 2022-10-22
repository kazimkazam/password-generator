import { Header } from "../../PresentationalComponents/Header/Header";
import { resetPasswordGeneratorStates } from "../../../redux/features/passwordGeneratorSlice";
import { resetMemorablePasswordStates } from "../../../redux/features/memorablePasswordGeneratorSlice";
import { resetHashStates } from "../../../redux/features/sha256HashingSlice";
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from "../../../redux/features/colorSlice";
import { selectPasswordTab, selectMemorableTab, selectShaTab } from "../../../redux/features/colorSlice";
import { useEffect } from "react";

const ContainerHeader = () => {
    const passwordTab = useSelector(selectPasswordTab);
    const memorableTab = useSelector(selectMemorableTab);
    const shaTab = useSelector(selectShaTab);

    const dispatch = useDispatch();

    const eventHandler = (event) => {
        dispatch(resetPasswordGeneratorStates());
        dispatch(resetMemorablePasswordStates());
        dispatch(resetHashStates());
        dispatch(handleChange(event));
    };

    useEffect(() => {
        if (passwordTab && !memorableTab && !shaTab) {
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