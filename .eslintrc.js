module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "globals": {
        "three": "readonly"
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        'import/no-extraneous-dependencies': [
            'error',
            {
              devDependencies: true,
              packageDir: '../../'
            }
          ]
    }
}
