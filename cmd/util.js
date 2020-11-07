module.exports = {

    addB: (nick) => {
        const chr = nick.toLowerCase()[0];
        if (["a", "e", "i", "o", "u"].includes(chr)) {
            nick = `B${nick}`;
        } else {
            nick = `B${nick.substring(1)}`
        }

        return nick
    }
}