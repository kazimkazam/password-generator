const Sha256 = (props) => {
    return(
        <div className="generator">
            <div className={ 'settings' } >
                <fieldset style={ { borderColor: props.color } }>
                    <legend>Settings</legend>

                    <table>
                        <tbody>
                            <tr>
                                <td><label>Text to be hashed:</label></td>
                                <td><textarea type={ 'text' } name={ 'textToBeHashed' } rows='5' cols='50' style={ { borderColor: props.color } } onChange={ props.onChange } data-testid={ 'textToBeHashed' } /></td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>

            <div className={ 'submitButton' } >
                <button onClick={ props.onClick } data-testid={ 'submitButton' } >Create hash</button>
            </div>

            <div className={ 'results' } id={ 'results' } data-testid={ 'results' } >
                <div style={ { borderColor: props.color } } >
                    <ul>
                        <li key={ props.hash } >{ props.hash }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { Sha256 };