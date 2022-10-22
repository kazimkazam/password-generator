
# Password Generator

This application is based on react-redux and it delivers a single page application (SPA) that consists of the following 3 main tabs:
- A password generator application;
- A memorable password generator application;
- A SHA-256 Hashing generator aplication.

# Table of Contents
- Development;
- How to use;
- Screenshots;
- Tests;
- Author;
- References;
- License.

# Development
The SPA was coded by making use of the React library. To access the application state, Redux was used.

For the purpose of showing the diference, the Password Generator page container was also developed not using redux (but the Redux-based component is the one "active" in the project), but using only the this. and props from React to interact between the container and the presentational components.

The application is running on:
- React 18.2.0
- react-redux 8.0.4
- @reduxjs/toolkit 1.8.5
- redux-thunk 2.4.1
- Axios 1.1.2

The memorable password generator fetches a "dictionary" of words from (https://random-word-api.herokuapp.com/home) whenever the page is loaded, and then the words to form the password are randomly chosen.

In order to keep the application state as "clean" as possible and to help it run faster and smoother, every time a tab is selected (also acknowledgements), the state resets to the initial state.

# How to use

The SPA consists of 3 main pages, which can be accessed using the navigation tabs, and are the following:
- A password generator application;
- A memorable password generator application;
- A SHA-256 Hashing generator aplication.

Every page contains a settings "window" where the user can adjust what type of result is to be expected.

### 1. Password Generator

In the password generator page, the following settings can be adjusted:

- number of characters;
- include lowercase characters;
- include uppercase characters;
- include numbers;
- include symbols;
- characters to exclude;
- how many passwords.

The password generator can retrieve 10000 passwords with 100 characters at a time.

### 2. Memorable Password Generator

In the memorable password generator page, the following settings can be adjusted:

- number of words;
- separator between words;
- include numbers.

The memorable password generator can retrieve 1 password with up to 10 words at a time.

### 3. SHA-256 Hashing Generator

In the sha-256 hashing generator page, the following settings can be adjusted:

- text to be hashed.

# Screenshots


# Author

@kazimkazam (monsieurkazimkazam@gmail.com). 

# References

1. Password icons created by Freepik - Flaticon: used to get the page logo
https://www.flaticon.com/free-icons/password

2. Random Word API: used to retrieve words to create memorable passwords
https://random-word-api.herokuapp.com/home

# License

MIT