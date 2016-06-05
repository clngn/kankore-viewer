const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 502,
    webPreferences: {
      plugins: true
    }
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on('closed', function() {
    mainWindow = null;
  })
}

app.commandLine.appendSwitch('ppapi-flash-path', __dirname + '/lib/PepperFlash/PepperFlashPlayer.plugin');
app.commandLine.appendSwitch('ppapi-flash-version', '21.0.0.242');

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
