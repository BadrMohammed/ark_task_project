-how to run project

1- download or clone repositroy from github link provided
2- if you do not have node please install it from https://nodejs.org/en/
3- in project directory open cmd and run "npm install" to install required modules
4- in project directory run "npm start" to start react app
5- open "http://localhost:3000" to view project in the browser

-choice of libraries
i use redux to managment state of web app instead of using context apis

1- "bootstrap","reactstrap" modules => allow to use bootstrap inside react app
install using this command: npm install --save bootstrap reactstrap

2-"axios" module => is 3rd party package install using npm and used to request data from api
install Axios using this command: npm install –save axios

3-"node-sass" module to use sass in react app
install Axios using this command: npm install –save node-sass

4-"react-datepicker" module =>use date packer input to select date
install Axios using this command: npm install –save react-datepicker

5-"react-icons" module =>use icon in react app like feather or font awasomwe icons
install Axios using this command: npm install –save react-icons

6-"react-infinite-scroll-component" module => used to scroll page and applay new api request
install Axios using this command: npm install –save react-infinite-scroll-component

7-"react-loading-overlay" module => used to view loading while fetching repositories
install Axios using this command: npm install –save react-loading-overlay

8-"sweetalert" module => used to view notification message
install Axios using this command: npm install –save sweetalert

9- "react-redux redux" modules =>allow to use redux library inside react app)
install Axios using this command: npm install –save react-redux redux

10- "redux-thunk" module => middleware help us to make request in redux application
install Axios using this command: npm install –save redux-thunk

11- "dot-prop-immutable" module => use it to modify state in reducer(update,merge,delete,reset)
install Axios using this command: npm install –save dot-prop-immutable

how i connect react with redux library
in app.js wrap all routes inside provider component that take store(all reducers) as ap props
to connect react component with redux we use connect(mapStateToProps,mapDispatchToProps) function
