import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";

console.log("Hello it's log from pm2 process");
const_dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, './index.html'));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`[Server] Listening pn  : ${PORT}`);
});