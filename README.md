# Project Description
For this project, I created a suite called 'Login' which contains 3 simple test cases, they are: <br/>
- LoggedProperly. <br/>
- LoggedNoProperly_wrongPassword.<br/>
- LoggedNoProperly_invalidEmail. <br/>
- Also, I created a custom reporter.

# How to execute the webdriver.io tests?
1) Clone project, execute following command from a terminal: <br/>
git clone https://github.com/ocampoesteban/webdriver.io.git
2) Once project is cloned, start 'Standalone server', execute following command from the project root in a terminal: <br/>
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.4.0.jar <br/>
Note: Check that selenium-server-standalone-3.4.0.jar is in project root if the server doesn't work.
3) Now that server is working you can execute one of the following options:
- Execute 'Login' suite <br/>
./node_modules/.bin/wdio wdio.conf.js --suite login  
- Execute a 'specific' TC <br/>
 node test/specs/Login/ {testCaseName}.js