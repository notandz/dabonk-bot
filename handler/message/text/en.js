exports.textTnC = () => {
    return `
Bot whatsapp Open Source, Ditulis menggunakan javascript.
Source Code BOT : https://github.com/ditinggalrabi/dabonk-bot
NodeJS WhatsApp library: https://github.com/open-wa/wa-automate-nodejs`
}

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

Sticker Creator:
1. *#sticker*
Untuk merubah gambar menjadi sticker. 
Penggunaan: kirim gambar dengan caption #sticker atau balas gambar yang sudah dikirim dengan #sticker

2. *#sticker* _<Url Gambar>_
Untuk merubah gambar dari url menjadi sticker. 
Penggunaan: 

3. *#gifsticker* _<Giphy URL>_ / *#stickergif* _<Giphy URL>_
Untuk merubah gif menjadi sticker (Giphy Only)
Penggunaan: Kirim pesan dengan format *gifsticker https://media.giphy.com/media/JUvI2c1ddyzkwK4RlV/giphy.gif*

4. *#memesticker* _<teks atas>_ | _<teks bawah>_
Untuk membuat sticker meme dengan teks atas dan bawah
Penggunaan: kirim gambar dengan caption _*#meme aku atas | kamu bawah*_, atau juga bisa dengan membalas gambar yang sudah ada.

Downloader:
1. *#tiktok* _<tiktok url>_
Untuk mengunduh video dari video tiktok.
Penggunaan: kirim pesan dengan format *#tiktok https://www.tiktok.com/@itsandani/video/6869248690381425922* 

2. *#fb* _<post/video url>_
Untuk mengunduh video dari Facebook.
Penggunaan: kirim pesan dengan format *#fb https://www.facebook.com/.....*

3. *#ig* _<instagram post url>_
Untuk mengunduh photo dan video dari instagram.
Penggunaan: kirim pesan dengan format *#ig https://www.instagram.com/p/BPOd1vhDMIp/*

4. *#twt* _<twitter post url>_
Untuk mengunduh photo dan video dari Twitter.
Penggunaan: kirim pesan dengan format *#twt https://twitter.com/ntsana_/status/1306108656887324672*

Lain-lain:
1. *#translate* _<kode bahasa>_
Untuk mengartikan pesan menjadi bahasa yang ditentukan.
Penggunaan: Balas/quote/reply pesan yang ingin kamu translate dengan _*#translate id*_ <- id adalah kode bahasa. kode bahasa dapat dilihat di *https://bit.ly/33FVldE*

2. *#resi* _<kurir>_ _<nomer resi>_
Untuk memeriksa status pengiriman barang, daftar kurir: jne, pos, tiki, wahana, jnt, rpx, sap, sicepat, pcp, jet, dse, first, ninja, lion, idl, rex.
Penggunaan: kirim pesan dengan format _*#resi jne 1238757632*_

3. *#meme* _<teks atas>_ | _<teks bawah>_
Untuk membuat meme dengan teks atas dan bawah
Penggunaan: kirim gambar dengan caption _*#meme aku atas | kamu bawah*_, atau juga bisa dengan membalas gambar yang sudah ada.

4. *#ceklokasi*
Cek lokasi penyebaran covid-19 di daerah sekitarmu (kelurahan).
Penggunaan: kirimkan lokasimu lalu balas/quote/reply lokasi yang kamu kirim dengan _*#ceklokasi*_

5. *#tnc*
Menampilkan Syarat dan Kondisi Bot.

Hope you have a great day!✨`
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
