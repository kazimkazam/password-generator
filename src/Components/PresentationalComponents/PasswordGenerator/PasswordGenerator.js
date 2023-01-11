const PasswordGenerator = (props) => {
    return(
        <div className="generator">
            <div className={ 'settings' } >
                <fieldset style={ { borderColor: props.color } }>
                    <legend>Settings</legend>

                    <table>
                        <tbody>
                            <tr>
                                
                                <td><label>Number of characters (max: 100):</label></td>
                                <td><p id="warning" style={ { color: props.color } } >Please insert a number between 1 and 100.</p></td>
                                <td><input type={ 'number' } id={ 'numberChars' } name={ 'numberChars' } defaultValue={ 10 } style={ { borderColor: props.color } } onChange={ props.onChange } data-testid={ 'numberChars' } /></td>
                            </tr>
                            <tr>
                                <td><label>Include lowercase (e.g. abcdef):</label></td>
                                <td></td>
                                <td className={ 'check' }>
                                    <input type={ 'checkbox' } id={ 'lowercase' } className={ 'toggle' } name={ 'lowercase' } style={ { backgroundColor: props.color } } defaultChecked onChange={ props.onCheckboxChange } data-testid={ 'lowercase' } />
                                    <label htmlFor="lowercase" className={ 'toggleLabel' } id={ 'lowercaseLabel' } ></label>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Include uppercase (e.g. ABCDEF):</label></td>
                                <td></td>
                                <td className={ 'check' }>
                                    <input type={ 'checkbox' } id={ 'uppercase' } className={ 'toggle' } name={ 'uppercase' } style={ { backgroundColor: props.color } } defaultChecked onChange={ props.onCheckboxChange } data-testid={ 'uppercase' } />
                                    <label htmlFor="uppercase" className={ 'toggleLabel' } id={ 'uppercaseLabel' } ></label>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Include numbers (e.g. 123456):</label></td>
                                <td></td>
                                <td className={ 'check' }>
                                    <input type={ 'checkbox' } id={ 'includeNumbers' } className={ 'toggle' } name={ 'includeNumbers' } style={ { backgroundColor: props.color } } defaultChecked onChange={ props.onCheckboxChange } data-testid={ 'includeNumbers' } />
                                    <label htmlFor="includeNumbers" className={ 'toggleLabel' } id={ 'includeNumbersLabel' } ></label>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Include symbols (e.g. *@#+%):</label></td>
                                <td></td>
                                <td className={ 'check' }>
                                    <input type={ 'checkbox' } id={ 'includeSymbols' } className={ 'toggle' } name={ 'includeSymbols' } style={ { backgroundColor: props.color } } defaultChecked onChange={ props.onCheckboxChange } data-testid={ 'includeSymbols' } />
                                    <label htmlFor="includeSymbols" className={ 'toggleLabel' } id={ 'includeSymbolsLabel' } ></label>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Characters to exclude:</label></td>
                                <td></td>
                                <td><input type={ 'text' } name={ 'charsToExclude' } style={ { borderColor: props.color } } onChange={ props.onChange } data-testid={ 'charsToExclude' } /></td>
                            </tr>
                            <tr>
                                <td><label>How many passwords (max: 10000):</label></td>
                                <td></td>
                                <td>
                                    <select name={ 'howMany' } style={ { borderColor: props.color } } onChange={ props.onChange } data-testid={ 'howMany' } >
                                        <option value={ '1' }>1</option>
                                        <option value={ '10' }>10</option>
                                        <option value={ '100' }>100</option>
                                        <option value={ '1000' }>1000</option>
                                        <option value={ '10000' }>10000</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>

            <div className={ 'submitButton' }>
                <button onClick={ props.onClick } data-testid={ 'submitButton' } >Create password</button>
            </div>

            <div className={ 'results' } id={ 'results' } data-testid={ 'results' } >
                <div style={ { borderColor: props.color } } >
                    <ul>
                        { props.passwords.map(password => <li key={ password }>{ password }</li>) }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export { PasswordGenerator };