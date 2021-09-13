module.exports = mentionList = (id, botNumber, list) => {
    let mentionlist = ''
    list.map((x) => {
        if ((x !== id) && (x !== botNumber)) mentionlist += `@${x.replace('@c.us', '')} `
    })
    return mentionlist
}