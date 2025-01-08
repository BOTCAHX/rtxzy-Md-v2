let badwordRegex = /100p(k|g)(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole/i // 
export async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return !0
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword) {
        user.warn += 1
        await m.reply(${user.warn >= 5 ? '*📮 Jika total warning kamu mencapai 5 Bot terpaksa kick kamu dari grup!*' : '*📮 Kata Kata Toxic/Jorok Terdeteksi*'}

𖠙 Warning: ${user.warn} / 5

[❗] Jika total warning mencapai 5 Kamu akan dikeluarkan dari group ini

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).)
        if (user.warn >= 5) {
            user.warn = 0
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
                                 }
