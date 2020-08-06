const { app, BrowserWindow, Menu, ipcMain } = require('electron');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 750,
    height: 600,
    resizable: false,
    transparent: true,
    hasShadow: false,
    frame: false,
    maximizable: false,
    minimizable: false,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    }
  })
  // mainWindow.loadURL("http://localhost:3000/")
  mainWindow.loadFile('./build/index.html')

  Menu.setApplicationMenu(null)

  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

ipcMain.on('close', function () {
  mainWindow.close()
})

ipcMain.on('min', function () {
  mainWindow.minimize();
})

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
