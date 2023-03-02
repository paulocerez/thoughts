"use strict";
async function dings(url) {
    try {
        const response = await fetch(url);
        const msg = "succesfully dings";
        return [null, response];
    }
    catch (error) {
        return [error, null];
    }
}
async function dings3() {
    const [error, response] = await dings("https://google");
    if (error != null) {
        console.log(error);
        return false;
    }
}
