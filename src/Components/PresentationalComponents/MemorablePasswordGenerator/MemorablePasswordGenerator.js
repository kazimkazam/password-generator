const MemorablePasswordGenerator = (props) => {
    return(
        <div className="generator">
            <div className={ 'settings' } >
                <fieldset style={ { borderColor: props.color } } >
                    <legend>Settings</legend>

                    <table>
                        <tbody>
                            <tr>
                                <td><label>Number of words (max: 10):</label></td>
                                <td><p id="warning" style={ { color: props.color } } >Please insert a number between 1 and 15.</p></td>
                                <td><input type={ 'number' } name={ 'numberWords' } defaultValue={ 3 } style={ { borderColor: props.color } } onChange={ props.onChange } data-testid={ 'numberWords' } /></td>
                            </tr>
                            <tr>
                                <td><label>Separator:</label></td>
                                <td></td>
                                <td><input type={ 'text' } name={ 'separator' } style={ { borderColor: props.color } } onChange={ props.onChange } data-testid={ 'separator' } /></td>
                            </tr>
                            <tr>
                                <td><label>Include numbers:</label></td>
                                <td></td>
                                <td className={ 'check' }>
                                    <input type={ 'checkbox' } id={ 'includeNumbers' } className={ 'toggle' } name={ 'includeNumbers' } style={ { backgroundColor: props.color } } defaultChecked onChange={ props.onCheckboxChange } data-testid={ 'includeNumbers' } />
                                    <label htmlFor="includeNumbers" className={ 'toggleLabel' } id={ 'includeNumbersLabel' } ></label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>

            <div className={ 'submitButton' } >
                <button onClick={ props.onClick } data-testid={ 'submitButton' } >Create password</button>
            </div>

            <div className={ 'results' } id={ 'results' } data-testid={ 'results' } >
                <div style={ { borderColor: props.color } } >
                    <ul>
                        { props.memorablePassword.map(password => <li key={ password } >{ password }</li>) }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { MemorablePasswordGenerator };