const util = require("./util");

module.exports = (msg, arg) => {
    msg.guild.members.fetch()
        .then(m => onMembersFetch(m, { filterRole: arg, selfID: msg.author.id, owner: msg.guild.ownerID }))
        .catch(console.error)
}

function onMembersFetch(members, filter) {
    members.forEach(m => {

        if (m.id == filter.selfID || filter.ownerID) return;

        let name = m.nickname;
        if (name == null) {
            name = m.displayName;
        }

        let role = false;
        m.roles.cache.forEach(r => {
            if (!role && r.name == filter.filterRole) {
                role = true;
            }
        });

        if (role) {
            const nick = util.addB(name)
            m.setNickname(nick)
                .then(e => console.log(`${name} is now ${nick}`))
                .catch(console.err)
        }
    })
}
