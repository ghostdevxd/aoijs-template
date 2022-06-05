module.exports = {
  name: "alıntı",
  code: `
  $description[1;
$addField[1;Mesaja Git;[Tıkla](https://discordapp.com/channels/$guildID/$mentionedChannels[1;yes]/$message[1])]
$addField[1;Mesaj;$msg[$mentionedChannels[1;yes];$message[1];content]]
] 
$suppressErrors[Hata]

  `,
};
