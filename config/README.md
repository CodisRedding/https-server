### custom-environment-variables.json

This file reads environment variables set by devops.

If an environment variable is set, than its value overrides all other environment settings. (other config files)

### development.json

If the environment variable NODE_ENV is set to "development", than this file is used for config settings. (the custom-environment-variables.json file overwrites settings in this file if the environment variable is set)

### production.json

If the environment variable NODE_ENV is set to "production", than this file is used for config settings. (the custom-environment-variables.json file overwrites settings in this file if the environment variable is set)

### default.json

If the environment variable NODE_ENV is not set, or doesn't match "development" or "production", than this file is used for config settings. (the custom-environment-variables.json file overwrites settings in this file if the environment variable is set)
