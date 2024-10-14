const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900, // Ajuste a largura
        height: 1300, // Ajuste a altura
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Carregar o arquivo HTML
    mainWindow.loadFile('index.html');

    // Desativar DevTools
    mainWindow.webContents.on('devtools-opened', () => {
        mainWindow.webContents.closeDevTools();
    });

    // Renomear a janela para "Configurador AA One"
    mainWindow.setTitle("Configurador AA One");
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
