module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules":{
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "react/prefer-stateless-function": false,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};