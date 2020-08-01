const { app, BrowserWindow, Menu } = require('electron');
const pkg = require('./package.json') // import package.json

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 646,
    resizable: false,
    transparent: true,
    hasShadow: false,
    frame: false,
    maximizable: false,
    minimizable: false,
  })
  if (pkg.DEV) {
    mainWindow.loadURL("http://localhost:3000/")
  } else {
    mainWindow.loadFile('./build/index.html')
  }

  Menu.setApplicationMenu(null)

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})  
