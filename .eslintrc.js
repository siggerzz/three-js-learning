module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "import/no-extraneous-dependencies": [
            "warn",
            {
                "devDependencies": true,
                "optionalDependencies": true,
                "peerDependencies": true,
            }
        ],
    }
}