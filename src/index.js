import account from "../account.js";
import initialize from "#loaders/index.js";

async function start() {
    const { username, password, serverId, token, uid } = account;
    await initialize(username, password, serverId, token, uid);
}

start();
