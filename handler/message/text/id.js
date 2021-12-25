exports.textTnC = () => {
    return `
Bot whatsapp Open Source, Ditulis menggunakan javascript.
Source Code BOT : https://github.com/ditinggalrabi/dabonk-bot
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Kepo Lu anjg✨`
}

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah beberapa fitur admin grup yang ada pada bot ini!

1. *#kick* @user
Untuk mengeluarkan member dari grup (bisa lebih dari 1).

2. *#promote* @user
Untuk mempromosikan member menjadi Admin grup.

3. *#demote* @user
Untuk demosikan Admin grup.

4. *#tagall*
Untuk mention semua member grup.

5. *#del*
Untuk menghapus pesan bot (balas pesan bot dengan #del)`
}

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui link berikut:
1. Saweria: 
2. Trakteer:  

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
