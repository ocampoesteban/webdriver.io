#Project Description
For this project, I created a suite called 'Login' which contains 3 simple test cases, they are:
-LoggedProperly.
-LoggedNoProperly_wrongPassword.
-LoggedNoProperly_invalidEmail.
Also, I created a custom reporter.

# How run the webdriver.io test?
- Clone project, execute following command from a terminal: 
git clone https://github.com/ocampoesteban/webdriver.io.git
- Once project is cloned, start 'Standalone server', execute following command from the project root in a terminal:
java -jar -Dwebdriver.gecko.driver=./geckodriver selenium-server-standalone-3.4.0.jar
Note: Check that selenium-server-standalone-3.4.0.jar is in project root if the server doesn't work.

Now that server is working you can execute one of the following options:
- Execute 'Login' suite
./node_modules/.bin/wdio wdio.conf.js --suite login  
- Execute a 'specific' TC
 node test/specs/Login/ {testCaseName}.js