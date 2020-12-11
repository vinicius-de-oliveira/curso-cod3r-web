const { ipcMain } = require("electron");
// Inter process communication
ipcMain.on("process-subtitles", (event, paths) => {
  console.log(paths);

  event.reply("process-subtitles", [
    { name: "i", amount: 1234 },
    { name: "you", amount: 334 },
  ]);
});
