A skeleton node project with my preferred gulp-setup to build front end javascript and back end
nodeJs (to be customized as needed for actual/specific project settings)       

Custom project/app directories are defined in gulp/paths.js      

Commands:     
npm install - installs all dependencies listed in package.json      
npm start - starts the local backend server      

npm run build - transpiles/builds all necessary files for production, without sourcemaps     
npm run buildd - transpiles/builds all necessary files, with sourcemaps     

npm run watchd - watches for src js and css changes, then auto rebuild with
sourcemaps     
npm run watchrs - watches for src js and css changes, then auto rebuild
with sourcemaps and live reloads browser with a temporary static server            
npm run watchr - watches for src js and css changes, then auto rebuild
with sourcemaps and live reloads browser with server started by "npm start" (must run "npm start" before this)          

npm test - watches for src js changes, then run sanity testSuite      
