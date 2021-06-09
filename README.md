#Welcome

Folder contains code folders which I do while practicing React 

`Installation Process `

How to use the downloaded files/Sub Folders 

1) copy paste my src code folder & Json file, After creacting your react app using ```create-react-app appName --scripts-version 1.1.5```
2) Run "npm install" in the extracted folder

3) Run "npm run eject" and add these lines of code in  ```webpack.config.dev.js, webpack.config.prod.js```( only for folder BurgerBuilder)

               importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]__[hash:base64:5]' 

4) Run "npm start" to view the project
