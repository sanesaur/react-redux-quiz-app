# Development Notes


## Install required packages

npm install -g npx

npm uninstall -g create-react-app

npx create-react-app quiz-app-dev

### Predictable state container for JavaScript apps.
npm install @reduxjs/toolkit

### Allows to work with immutable state in more convenient way
### It is based on copy-on-write (CoW) mechanism
npm install immer

### How to extract values component needs from Redux
### Components receive those values as props

npm install react-redux
npm install --save-dev redux-devtools


## Object

[  
    {
        id: 1,
        text: "Which data type is used to create a variable that should store text?",
        imageURL: "",
        choices: 
            [
                {
                    id: 1,
                    text: "myString",
                    imageURL: "",
                    checked: false
                },
                ...
            ]
    },
    ...
]

