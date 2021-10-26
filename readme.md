# Git 

This is a sample application for checking out git's pre-commit hooks. 
A pre-commit hook will ensure that the specified scripts (in this case, 'jest --coverage') passes before you can commit your changes.
The specified script ('jest --coverage') will fail if the coverage isn't at 100% for statements, branches, functions and lines. All combined, you won't be able to commit if you don't have 100% coverage.