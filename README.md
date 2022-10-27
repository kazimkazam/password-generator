
# Password Generator

This application is based on react-redux and it delivers a single page application (SPA) that consists of the following 3 main tabs:
- A password generator application;
- A memorable password generator application;
- A SHA-256 Hashing generator aplication.

# Table Of Contents
- Development;
- How to use;
- Screenshots;
- Tests;
- Improvements to be implemented;
- Author;
- References;
- License.

# Development
The SPA was coded by making use of the React library. To access the application state, Redux was used.
Additionally, React router was implemented.

The application is running on:
- react 18.2.0
- react-router-dom 6.4.2
- react-redux 8.0.4
- @reduxjs/toolkit 1.8.5
- redux-thunk 2.4.1
- axios 1.1.2

The memorable password generator fetches a "dictionary" of words from (https://random-word-api.herokuapp.com/home) whenever the page is loaded, and then the words to form the password are randomly chosen.

In order to keep the application state as "clean" as possible and to help it run faster and smoother, every time a tab is selected (also acknowledgements), the state resets to the initial state.

# How To Use

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

![image](https://user-images.githubusercontent.com/108230645/197826427-5a556b21-a982-428a-a487-9d29a3f12dc3.png)
![image](https://user-images.githubusercontent.com/108230645/197826614-f2e0718e-cd8c-45b9-9746-78851d00e56e.png)
![image](https://user-images.githubusercontent.com/108230645/197826692-bf2d3c5f-9aa7-417f-b503-34be4e0dc21a.png)
![image](https://user-images.githubusercontent.com/108230645/197826739-8b3a2b22-ffda-4b41-a0a5-3dc43ba071d5.png)
![image](https://user-images.githubusercontent.com/108230645/197826776-f56f50a8-1a53-490b-b9b7-2cab22a12e9e.png)

# Tests

Tests were conducted using React Testing Library.

- @testing-library/jest-dom": "^5.16.5"
- @testing-library/react": "^13.4.0"
- @testing-library/user-event": "^14.4.3"

Only the main containers, i.e., with the main functional code, were tested.

To make the app ~100% fully tested, header and footer container should be tested. These containers have, apart from other code, code related with how the app "behaves" visually, i.e., colors in the nav and main div. 

![image](https://user-images.githubusercontent.com/108230645/197827073-77c73ae1-d1ac-4bb8-b049-99be84b2e7d5.png)

# Improvements To Be Implemented

### Memorable Password State 

At the moment, the application fetches a full dictionary to be used on the memorable password functionality, and while that window is active, the state of the application is quite heavy (may lead application to take more than 130ms to complete other actions).

One possible immediate solutions is, since the dictionary is so big, to save only part of it after each fetch, i.e., save , e.g., 1000 words picked randomly, which will be more than enough (Solution quite easy to implement, 15-20 min implementation).

### Responsive Design CSS

The application has implemented just some basic responsive design using CSS, i.e., some of the main screen breakpoints were considered and some very basic/short tests were completed. In that perspective, more tests need to be performed in order to improve the respective CSS file, and make the application work 100% in that sense.

# Author

@kazimkazam (monsieurkazimkazam@gmail.com). 

# References

1. Password icons created by Freepik - Flaticon: used to get the page logo
https://www.flaticon.com/free-icons/password

2. Random Word API: used to retrieve words to create memorable passwords
https://random-word-api.herokuapp.com/home

# License

MIT