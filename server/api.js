/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
GENERIC_EMAILS = {
  "@odata.context":
    "https://graph.microsoft.com/v1.0/$metadata#users('69a9d829-3df0-4733-9925-0a604cf7b67a')/messages",
  "@odata.nextLink": "https://graph.microsoft.com/v1.0/me/messages?$skip=10",
  value: [
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpirr"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfpAAA=",
      createdDateTime: "2023-01-21T22:42:34Z",
      lastModifiedDateTime: "2023-01-21T22:42:36Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpirr",
      categories: [],
      receivedDateTime: "2023-01-21T22:42:34Z",
      sentDateTime: "2023-01-21T22:42:16Z",
      hasAttachments: true,
      internetMessageId:
        "<DM8PR01MB7030E9EBA3F35FE702FEB0C1C0CA9@DM8PR01MB7030.prod.exchangelabs.com>",
      subject: "[New-vassar-forum] lost brass rat :((",
      bodyPreview:
        "heyo,i lost my brass rat a few days ago (in stud i think? but not entirely sure) -- if anyone has come across it and could let me know, i'd really appreciate it! it's silver and has my kerb (spar) engraved on the inside. tysm!sparbcc'ed to dor",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBDAAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQACJhKTfitB9Ai5G1S9rmvHs=",
      conversationIndex: "AQHZLejoImEpN+K0H0CLkbVL2ua8ew==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: true,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfpAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style type="text/css" style="display:none"><!--p{margin-top:0;margin-bottom:0}--></style></head><body dir="ltr"><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">heyo,</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)"><br></div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">i lost my brass rat a few days ago (in stud i think? but not entirely sure) -- if anyone has come across it and could let me know, i\'d really appreciate it! it\'s silver and has my kerb (<b>spar</b>) engraved on the inside. tysm!</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)"><br></div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">spar</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)"><br></div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">bcc\'ed to dorms, <span style="color:rgb(153,153,153)"><b>silver</b></span> for bc-talk</div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "New-vassar-forum",
          address: "new-vassar-forum-bounces@mit.edu",
        },
      },
      from: {
        emailAddress: {
          name: "Sruthi Parthasarathi",
          address: "spar@mit.edu",
        },
      },
      toRecipients: [],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpimo"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfoAAA=",
      createdDateTime: "2023-01-21T20:38:10Z",
      lastModifiedDateTime: "2023-01-21T20:38:13Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpimo",
      categories: [],
      receivedDateTime: "2023-01-21T20:38:11Z",
      sentDateTime: "2023-01-21T20:37:46Z",
      hasAttachments: false,
      internetMessageId: "<20230121203746.05853c04f11ab60b@em-s.dropbox.com>",
      subject: "Top strategies to maximize your potential",
      bodyPreview:
        "We all deserve a fresh start ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌  ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌There’s more to Dropbox",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBDAAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAO4EslBib2pKk99LNfJY1o0=",
      conversationIndex: "AQHZLdhG7gSyUGJvakqT30s18ljWjQ==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: true,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfoAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta content="IE=edge"><style type="text/css"><!--table{border-collapse:collapse}img, a img{border:0;height:auto;outline:0;text-decoration:none}body{height:100%!important;margin:0 auto!important;padding:0;width:100%!important}img{}#outlook a{padding:0}table{}.ReadMsgBody{width:100%}.ExternalClass{width:100%}p, a, td{}p, a, td, body, table{}.ExternalClass, .ExternalClass p, .ExternalClass td, .ExternalClass div, .ExternalClass span, .ExternalClass font{line-height:100%}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}.imglink{opacity:1!important}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important}.gmailfix{display:none!important}@media screen and (max-width:480px){.mw100{max-width:100%!important}.mw55{max-width:55%!important}.mw60{max-width:60%!important}.mw30{max-width:30%!important}.mw35{max-width:35%!important}.w100{width:100%!important}.w92{width:92%!important}.w80{width:80%!important}.txtcntr{text-align:center!important}.txtlt{text-align:left!important}.noPadLR{padding-left:0!important;padding-right:0!important}.padLR{padding-left:17px!important;padding-right:17px!important}.padLR2{padding-left:23px!important;padding-right:23px!important}.mblpadding{padding-left:20px!important}.mbl-center{margin:0 auto!important;float:none!important}.mblPct{font-size:120px!important;line-height:120px!important}.mblRise{font-size:60px!important;line-height:0!important;vertical-align:35px!important}.mblHL{font-size:30px!important}table[class=center], td[class=center]{width:100%!important;height:auto!important;text-align:center!important;padding-left:0!important;padding-right:0!important}.hauto{height:auto!important}.swap_img{max-width:414px!important}.hide{display:none!important}.mobileInlineBlock{display:inline-block!important}div[class=mobilecontent], .mobilecontent{display:block!important;max-height:none!important}div[class=hideMobile], .hideMobile{display:none!important;max-height:0!important;overflow:hidden!important}.m-hide{display:none!important;width:0!important;height:0!important;font-size:0!important;line-height:0!important;min-height:0!important}.hide-for-desktop{display:block!important;max-width:100%!important;max-height:1000px!important;visibility:visible!important;opacity:1!important;width:auto!important;height:auto!important}}--></style></head><body style="padding:0; background-color:#ffffff; height:100%!important; margin:0 auto!important; width:100%!important"><span style="color:transparent; visibility:hidden; display:none; opacity:0; height:0; width:0; font-size:0">We all deserve a fresh start</span><img src="https://links.dropbox.com/e/eo?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=pcODEwNTw77xOE7MnYo3hFExNKpV-eQ9OTMIcMousjWfZN9aLEwA5LBOTR7PAMJ0sVr_ilBOo0XXkHMCpHTeQdPg-mY4d9cYJnIUiCF14BrrfRQUeB6llpN5MROBMvGG" width="1" height="1" style="border:0; width:1px; height:1px; border-width:0px!important; display:none!important; line-height:0!important"> <div style="display:none; max-height:0px; overflow:hidden">&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;</div><div style="margin:0 auto; max-width:720px"><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; border-spacing:0; margin:0 auto; width:100%; max-width:720px"><tbody><tr><td align="center" valign="top" width="720" bgcolor="#ffffff" style="padding-bottom:40px; width:720px; background-color:#ffffff"><div class="gmailfix" style="font:1px courier; line-height:0; display:none!important; color:#ffffff!important; width:720px!important; height:1px!important; max-width:7px20!important; max-height:1px!important; min-height:1px!important"><img alt="" class="gmailfix" height="1!important" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/3894ed880ff24940922861a306a9ef48/spacer.gif" width="720!important" style="border:0; outline:none; text-decoration:none; overflow:visible; display:none!important; width:720px!important; height:1px!important; max-width:720px!important; max-height:1px!important; min-height:1px!important"></div><table align="center" border="0" cellpadding="0" cellspacing="0" class="mw100" width="100%" bgcolor="#ffffff" style="border-collapse:collapse; width:100%; background-color:#ffffff"><tbody><tr></tr><tr><td align="center" style=""><div class="m-hide"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIRXpKqK5mcrJDJ1v_vjAZhv_uxMRhwB4dySZEVhu3_mVPCTaOBBeKdqsZfKc-CgW5-sN47IT0AyMWhde-NfINfb7vLwf9l6TOzcznyy-A37ChD7yPkQyu_khto9aUMQy-8sOSBlYS6KNpLQ-T009WIeMukpY9wjLURrNbrhVxT02We6yd0Apj-Y4UIvFByORDBhogrP3ok0qS7-vMDJAnZXob6z-OD4F6SmwV0KxvuuwPzqbTu8dOo3whKKoc0LG8DilrkHI03LrjrYNGnAUBzYpEoJPIyH4M18zJI9v1ZcwvOfXYuIRyQtLkxltMsntj_XaaM6qroUyunG4xCgVLfVu4-jSYbW0ucHVNWIyZ2kayXKkl4xMomdT-hrENAeDuZRzBRjL6oaZBWfEkNd37hQ%3D" rel="noopener" target="_blank" style="color:inherit!important; text-decoration:none!important"><img alt="" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9f3604ee1f844e4d9acebb4de59d1c23/Hello%20World%20%28Test%29/Group%2045.png" width="720" style="text-decoration:none; display:block; outline:0; border:0; padding:0; max-width:720px; height:auto"></a></div></td></tr><tr><td align="left" style=""><div class="hide-for-desktop" style="font-size:0pt; line-height:0pt; display:none; max-height:0; max-width:0; visibility:hidden; opacity:0; overflow:hidden; width:0; height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIRXpKqK5mcrJDJ1v_vjAZhv_uxMRhwB4dySZEVhu3_mVPCTaOBBeKdqsZfKc-CgW5-sN47IT0AyMWhde-NfINfb7vLwf9l6TOzcznyy-A37ChD7yPkQyu_khto9aUMQy-8sOSBlYS6KNpLQ-T009WIeMukpY9wjLURrNbrhVxT02We6yd0Apj-Y4UIvFByORDBhogrP3ok0qS7-vMDJAnZXob6z-OD4F6SmwV0KxvuuwPzqbTu8dOo3whKKoc0LG8Lh9_Eo54ZbQuvH0G8gPw3p6ry6Ehhw1pHYWA1P3AlMGVq442_Vnz8-rwcMxwUjwCOQYyNlPGD2oLgvFWccignaK2iMD1Mx_O-CSf5SvQYtwstFV0i5Z1papk_sDDFVlOFPW0TcAUlq8_8ewludKHaU%3D" style="color:inherit!important; text-decoration:none!important"><img alt="" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9f3604ee1f844e4d9acebb4de59d1c23/Hello%20World%20%28Test%29/Group%2046.png" width="600" style="text-decoration:none; display:block; outline:0; border:0; padding:0; height:auto; max-width:600px; width:100%"></a></div></td></tr></tbody></table><table bgcolor="#B4C8E1" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="center" style="padding:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="center" bgcolor="#b4c8e1" style="padding:48px 0 50px; background-color:#b4c8e1"><table border="0" cellpadding="0" cellspacing="0" width="90%" style="border-collapse:collapse"><tbody><tr><td align="left" style="font-weight:bold; font-size:32px; line-height:38px; color:#1e1919; padding-top:12px"><span class="thread-774750938282600193726130 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">There’s more to Dropbox than cloud storage</span><span class="thread-774750938282600193726130 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot s-lparen"> </span><span class="thread-774750938282600193726130 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-lparen">(for</span><span class="thread-774750938282600193726130 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> free!)</span></td></tr><tr><td style="font-weight:400; font-size:16px; line-height:24px; color:#1d2737; padding-top:24px"><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">Before you spend money and time on that</span><span class="thread-466205532467584334008167 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> </span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">new productivity tool, </span><span class="thread-416602849821342107473169 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">ask yourself,</span><span class="thread-416602849821342107473169 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot s-ldquo"> </span><span class="thread-416602849821342107473169 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo">“Does</span><span class="thread-416602849821342107473169 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> Dropbox already do this?”</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> Included with your Dropbox Basic plan is an entire suite of productivity tools that you may not be utilizing.</span><span class="thread-688769221520610531222702 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> A </span><span class="attrlink url internal thread-688769221520610531222702 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"><a class="attrlink" href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5FgDeoD81n4QvRReMoedsqla_me_2-4JmvWCim9W53zqCO_idlsAUKdLI4RLpFjMi9_z71_tauR57cLjudImJUq6n7EA4KtZCSs5Z-afZC-S337-pYWi3OzZzA9jbDnI-3w_Nrv83npmbPUkD90e8feOuAODYeLH71GoQn-1a6oqrt0MdDJ0xQE-jCj-mc5bWIp07xofUGvvnaWj7N89qME9KG83QEKeC_2yo8-URhoB1IHxmqjVfixhOxEpHJVXLCryjJHaNOwwgjRLDaYIC6i-BeitOMzEZB5_EVYfrdz2PbVX7YMVF8D3buM1I2wBQqAMiUE2sF2OlqLWsoYLIzwZIhqUkh7emxleBSE2ZApkqdjAfyNrABVb2TtmLcDehw%3D" rel="noreferrer nofollow noopener" data-target-href="/desktop?utm_content=m1_b1" style="color:blue; text-decoration:none">desktop</a></span><span class="thread-688769221520610531222702 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> and </span><span class="attrlink url internal thread-688769221520610531222702 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"><a class="attrlink" href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5ERmyYTXz2VKbUTyFghOScVsu5PLeuGvZMv0yGjZG4ca6pY-fDVJu-CPnkYJWgR-Vo3ZMmKsqEfX7DcVcysjbgyidfPhvZDt4D23cffy3jIcqAkvqIFUEF83aqvbaF_1eqjgVg4sn4DbBXFK0eIfOFz53jsYKNPdhXMtMgxPDa1Goi2JNlOYVLrnmQ0uMlge6eeg5GfBAyK5Isn2WMxb0JqVaKWweNdiwKkmfMh0hcsyAx5qFRwTL07kxgYk63rVp0nGRv3wIihjAP1XdQjAj2F6EFSLTqAorR7Q8FxG9LvEnXGrb_nrRKLtJZov2zqtcNeLHppkfiiI3c8aAYf0xehpJUoBLo5ohF6kBRc8kGjWwnXe8lsvm8d54cTvzGrWVg%3D" rel="noreferrer nofollow noopener" data-target-href="/mobile?utm_content=m1_b2" style="color:blue; text-decoration:none">mobile</a></span><span class="thread-688769221520610531222702 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> app, Camera Uploads, a doc scanner, e-signatures, a password manager, and so much more are included completely for free. </span><span class="thread-688769221520610531222702 thread-873950891730533145291477 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">So which one will you try first?</span></td></tr><tr><td align="center" style="padding:24px 0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><table border="0" cellpadding="0" cellspacing="0" height="76" width="272" style="border-collapse:collapse"><tbody><tr><td align="center" valign="middle" style="padding:0; font-size:0; line-height:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; border:2px solid #1E1919"><tbody><tr><td align="center" style="padding:0; font-size:0; line-height:0; text-align:center"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0"><tbody><tr><td align="left" width="100%" bgcolor="#b4c8e1" style="padding:0; font-size:0px; line-height:0; background-color:#b4c8e1"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN8PAh27rIw-Zrr22vvcNDXKitnxEM5R27MqgveKscZT-n359oAEb2vGlBjjSLfdTUB_zvIWQBb0KiBVxH6jjJS4iqd1aRNQ8YlzdP_yQGJN9kheRJUrgAI1WXFihH7-vKwE5fnvp4xWb71HT2SOBNKYb5_FTzA-sbZGBzc7L0rVxBtgnnsUeMkMloGYRMBCz3rqc_qZCkBb2P1f9NhrMMOCpNu19Na-ZGXCQmDx6ObyoEIlxHoyRxM1lXi-r-lAbgQ_T-j6kfqZazGEZloiKQwSGKdD8ceWuKA3Kw4p_skELuaBXGJptEpHMY1FB2UXchcpLjPskfna_DXTx0hN9Cks-XMHwL6lzdtfZHYv2QGOvy-vMCzCWgX-SuGDyzd4-5McLtBbB7vrQbrMqsOJMG8H" style="color:#1e1919; font-size:16px; line-height:24px; font-weight:bold; text-decoration:none; display:inline-table; background-color:#b4c8e1; border-top:24px solid #B4C8E1; border-bottom:24px solid #B4C8E1; border-left:24px solid #B4C8E1; width:218px"><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">See everything you have</span></a></td></tr></tbody></table></td><td align="right" bgcolor="#b4c8e1" style="font-size:0px; line-height:0; background-color:#b4c8e1"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="right" style="padding:0; font-size:0; line-height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN8PAh27rIw-Zrr22vvcNDXKitnxEM5R27MqgveKscZT-n359oAEb2vGlBjjSLfdTUB_zvIWQBb0KiBVxH6jjJS4iqd1aRNQ8YlzdP_yQGJN9kheRJUrgAI1WXFihH7-vKwE5fnvp4xWb71HT2SOBNKYb5_FTzA-sbZGBzc7L0rVxBtgnnsUeMkMloGYRMBCz3rqc_qZCkBb2P1f9NhrMMOCpNu19Na-ZGXCQmDx6ObyoEIlxHoyRxM1lXi-r-lAbgTAmCUkhyewcvdyrTRWSM5xphQlGeKvyEPF1wyYBkleAwh9bwxaLfvnK5aQ1qI3lPS14f15DZstz0J8n4mecz5JY2Qgybv2Ocqs1IHgvt28BbkY6vtVInD3-pLS9CgwJLKNAWjwx6NdvmbWmbCSABd9" style="text-decoration:none; background-color:#b4c8e1"><img alt="&gt;" border="0" height="13" src="https://d2axdqolvqmdvx.cloudfront.net/34a08a6a-60ee-4a8b-b387-03f5652d0223/Arrow.png" width="13" style="border:0; height:auto; outline:none; text-decoration:none; width:13px; display:inline-table; border-top:29px solid #B4C8E1; border-bottom:30px solid #B4C8E1; border-right:24px solid #B4C8E1"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" class="mw100" width="100%" style="border-collapse:collapse; width:100%"><tbody><tr><td align="center" bgcolor="#ffffff" style="background-color:#ffffff; font-size:0; padding:48px 0 0px; direction:rtl"><div class="mw100" style="vertical-align:middle; width:100%; max-width:360px; display:inline-block"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; direction:ltr"><tbody><tr><td align="center" style=""><table border="0" cellpadding="0" cellspacing="0" class="w100" width="100%" style="border-collapse:collapse; width:100%"><tbody><tr><td align="center" style=""><div class="m-hide"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN_ehgRdivXgKLreWcreOKdWqH5fC-XFu_G1HG5svWaQRGXvpFDTVbzacXxMI72NPgwRowxZRfskThDDAaAQhRW_fVweU2wLHl8sdQZEBY_dYxaelaLWC_qujwCeuqgxcZftUbk-V7qpWVqSjTahakE8ziRcwsPxvdhxbSsbvUDYse5ccjirkDI7d8zmOk0J73tHrpTkz7rUkPmoyGoXnN4j2bAdnqQ1NGNf39csjYjrsLTLA19GsgXtP_HU3BFs4XOXknH7V9afi3E3hGZwmvFUB_DByz9WX09Vq6fwcIMOWwIwO5CNfQGYQOiM8A7PHND7XlCRwQrRWUvMSxE8bw3_8F9fQVZHhFHGsoYe5V6_TG5LbkjMCsv6UHC7LcBr-pa6YWIOcw638DSWanPpoEDlQPxQGTwjJGGCVoLllB4YGQ0wBkzGrc6VnsLHlzLe4lN-uxlRZAXZunRbeofepYLm" style="color:inherit!important; text-decoration:none!important"><img alt="" class="imglink" height="169" src="https://assets.dropbox.com/email/en/use-phase/b2c-pcn/2023/kit-1/Basic_Kit_1_Module%202.png" width="300" style="height:auto; text-decoration:none; display:inline-block; outline:0; border:0; padding:0; width:100%; max-width:300px; opacity:1!important"></a></div></td></tr><tr><td align="left" style="font-size:0; line-height:0"><div class="hide-for-desktop" style="font-size:0pt; line-height:0pt; display:none; max-height:0; max-width:0; visibility:hidden; opacity:0; overflow:hidden; width:0; height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN_ehgRdivXgKLreWcreOKdWqH5fC-XFu_G1HG5svWaQRGXvpFDTVbzacXxMI72NPgwRowxZRfskThDDAaAQhRW_fVweU2wLHl8sdQZEBY_dYxaelaLWC_qujwCeuqgxcZftUbk-V7qpWVqSjTahakE8ziRcwsPxvdhxbSsbvUDYse5ccjirkDI7d8zmOk0J73tHrpTkz7rUkPmoyGoXnN4j2bAdnqQ1NGNf39csjYjrsLTLA19GsgXtP_HU3BFs4XOXknH7V9afi3E3hGZwmvFUB_DByz9WX09Vq6fwcIMOWwIwO5CNfQGYQOiM8A7PHNCvq7WEtiv3sqH0fjmHf930Kb5Y5g64CLBp9XcMjXlJf8ul62-C7PEfaB2gAn4sKk9mhWjiOSuh7lfTFcmwBujH5KvKwQtWvEse1qMI4V6l0HUv1FvD_XUEg-GaFw6j6AV-og5lxHDP5PKiB-p5BCpZ" style="color:inherit!important; text-decoration:none!important"><img alt="" class="imglink" src="https://assets.dropbox.com/email/en/use-phase/b2c-pcn/2023/kit-1/Basic_Kit_1_Module%202.png" width="600" style="height:auto; text-decoration:none; display:inline-block; outline:0; border:0; padding:0; width:100%; max-width:600px; opacity:1!important"></a></div></td></tr></tbody></table></td></tr></tbody></table></div><div class="mw100 padTop" style="vertical-align:middle; width:100%; max-width:360px; display:inline-block"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; direction:ltr"><tbody><tr><td align="center" style="padding-top:10px"><table align="center" border="0" cellpadding="0" cellspacing="0" width="86%" style="border-collapse:collapse; width:86%"><tbody><tr><td align="left" style="font-weight:bold; font-size:22px; line-height:30px; color:#1e1919"><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">This 20 minute exercise could completely change your life</span></td></tr><tr><td style="font-weight:400; font-size:16px; line-height:20px; color:#1d2737; padding-top:24px"><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">You’ve scheduled your day down to the minute, and it looks perfect, but around 2 o’clock, you don’t have any motivation to do</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot s-ldquo"> </span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo">“2</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> PM-Do taxes.” Don’t worry. </span><span class="thread-715563443115592593017341 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">You didn’t fail your schedule. Your schedule failed you!</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> Take our 20-minute exercise to learn how you can maximize your efficiency by scheduling around your energy levels.</span></td></tr><tr><td style="font-weight:400; font-size:12px; line-height:16px; color:#1d2737; padding-top:10px"></td></tr><tr><td align="center" style="padding:24px 0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><table border="0" cellpadding="0" cellspacing="0" height="76" width="272" style="border-collapse:collapse"><tbody><tr><td align="center" valign="middle" style="padding:0; font-size:0; line-height:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; border:2px solid #1E1919"><tbody><tr><td align="center" style="padding:0; font-size:0; line-height:0; text-align:center"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0"><tbody><tr><td align="left" width="100%" bgcolor="#ffffff" style="padding:0; font-size:0px; line-height:0; background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN_ehgRdivXgKLreWcreOKdWqH5fC-XFu_G1HG5svWaQRGXvpFDTVbzacXxMI72NPgwRowxZRfskThDDAaAQhRW_fVweU2wLHl8sdQZEBY_dY9Ms-Z2gzAJqqT1SnAFhpIce6KuVKdSp3STy5tc1AuvzrXSbEl-j501muHpG_6jZ0b7_A8szst93XOPLBXK50GG6AhGbNJJyu30qs9F2yh3lsjlwEXjI9Zwi3XLc1YNoIhPnleVEWYc7e1utVIuPLkPkbWGxpJszE1qxjzGW69ASSkwqF0cMzN1N4LcULcPNDk8edD5PaLfBQIpll0n2efuFUkQRAjQ2NMDS8lZZbfTqEOXZ20EcV9zthNYqqqD37jzpuaPYprf4ifKUJPVe-7xugLOBzzbwvWN5KF4Q-3u4K3nkYWKBw_wQ4YTNIxjzYlX0W_KHkZVYuTG1eJ9t8YxEafldcRoxYg58OrcxMIb5" style="color:#1e1919; font-size:16px; line-height:24px; font-weight:bold; text-decoration:none; display:inline-table; background-color:#ffffff; border-top:24px solid #ffffff; border-bottom:24px solid #ffffff; border-left:24px solid #ffffff; width:218px">Find my energy ritual</a></td></tr></tbody></table></td><td align="right" bgcolor="#ffffff" style="font-size:0px; line-height:0; background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="right" style="padding:0; font-size:0; line-height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN_ehgRdivXgKLreWcreOKdWqH5fC-XFu_G1HG5svWaQRGXvpFDTVbzacXxMI72NPgwRowxZRfskThDDAaAQhRW_fVweU2wLHl8sdQZEBY_dY9Ms-Z2gzAJqqT1SnAFhpIce6KuVKdSp3STy5tc1AuvzrXSbEl-j501muHpG_6jZ0b7_A8szst93XOPLBXK50GG6AhGbNJJyu30qs9F2yh3lsjlwEXjI9Zwi3XLc1YNoIhPnleVEWYc7e1utVIuPLkPkbWGxpJszE1qxjzGW69ASSkwqF0cMzN1N4LcULcPNDk8edD5PaLfBQIpll0n2efuq8Qzx8z7-XhybEoK_T90elUdX_aEaX55MqXX0_CMmbE1zfEcrpZIGZWik7XR_RPSeIwZrxDE5vpTx88j1ICeHYsQvbWXtCNoKmmsh8lkvvWou39FEslRCUI3GRvVFZoAJUk-8f92qrcK88TB0XeUM" style="text-decoration:none; background-color:#ffffff"><img alt="&gt;" border="0" height="13" src="https://d2axdqolvqmdvx.cloudfront.net/34a08a6a-60ee-4a8b-b387-03f5652d0223/Arrow.png" width="13" style="border:0; height:auto; outline:none; text-decoration:none; width:13px; display:inline-table; border-top:29px solid #ffffff; border-bottom:30px solid #ffffff; border-right:24px solid #ffffff"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" class="mw100" width="100%" style="border-collapse:collapse; width:100%"><tbody><tr><td align="center" bgcolor="#ffffff" style="background-color:#ffffff; font-size:0; padding:48px 0 15px; direction:rtl"><div class="mw100" style="vertical-align:middle; width:100%; max-width:360px; display:inline-block"><table border="0" cellpadding="0" cellspacing="0" width="100%" height="10" style="border-collapse:collapse; width:100%; direction:ltr; height:10px"><tbody><tr style="height:10px"><td align="center" height="10" style="padding:0px; height:10px"><table border="0" cellpadding="0" cellspacing="0" class="w100" width="100%" height="10" style="border-collapse:collapse; width:100%; height:10px"><tbody><tr style="height:0px"><td align="center" height="0" style="height:0px"><div class="m-hide"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5HIk5KNMcF_yp9JtkUhrVPuGhTrka_qjLGwUKGdLzGc0JDbq9hdHVH-2r4w4_Tl1fKxgrjxuJzVv90YJiljh6BndWNIRvJDE--MOPbLRVVEDYcfvCdWtl4Up_EpE44lMEHeoqbJzSzftOvKrRNTPeUa-N_TeHv7sjOxONRKFmY1yL3262jRpUqcv4mnH4wy6_PNEtZIM00pJNwgfO1T4hUzi2CwG7__TwA3_LbWiREePzz4mNK6ow7WcFQD_w_cglGYUMTeKU1wmPcSIpkgXhZRw2KlsWE-F6229RlXHBDECRo-ILN2b1dIhAxQAXm4zKVU9RbWHqDAKjXjSaSmTx8yp1LsA7YkbYjcirh4fsBihJg5csIc2ocsAEzVsZnjj3bysB2u1A2YB2ZlvG_q4gaWhK0faAmg0iSWxsV4FJfVxQ%3D%3D" style="color:inherit!important; text-decoration:none!important"><img alt="" class="imglink" src="https://assets.dropbox.com/email/en/use-phase/b2c-pcn/2023/kit-1/Basic-Kit_1-Module%203_en.gif" width="300" style="height:auto; text-decoration:none; display:inline-block; outline:0; border:0; padding:0; width:100%; max-width:300px; opacity:1!important"></a></div></td></tr><tr style="height:10px"><td align="left" height="10" style="font-size:0px; line-height:0; height:10px"><div class="hide-for-desktop" style="font-size:0pt; line-height:0pt; display:none; max-height:0; max-width:0; visibility:hidden; opacity:0; overflow:hidden; width:0; height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5HIk5KNMcF_yp9JtkUhrVPuGhTrka_qjLGwUKGdLzGc0JDbq9hdHVH-2r4w4_Tl1fKxgrjxuJzVv90YJiljh6BndWNIRvJDE--MOPbLRVVEDYcfvCdWtl4Up_EpE44lMEHeoqbJzSzftOvKrRNTPeUa-N_TeHv7sjOxONRKFmY1yL3262jRpUqcv4mnH4wy6_PNEtZIM00pJNwgfO1T4hUzi2CwG7__TwA3_LbWiREePzz4mNK6ow7WcFQD_w_cglGYUMTeKU1wmPcSIpkgXhZRU9_vF7mvWfWnjo5-X9lf4Pgo5b12A0CDztpkAv8mNFmLyNVP5i_GHH4hEwZlkm5_1QhFT64ZjElRXpZLJl34bSKJY7Ag4VV71LL2VmnwaSU_4N8uqLqSrizTjr3sRzJEWJOYrBtb9tjL2yKXj87AYQ%3D%3D" style="color:inherit!important; text-decoration:none!important"><img alt="" class="imglink" src="https://assets.dropbox.com/email/en/use-phase/b2c-pcn/2023/kit-1/Basic_Kit_1_Module%203_en.gif" width="600" style="height:auto; text-decoration:none; display:inline-block; outline:0; border:0; padding:0; width:100%; max-width:600px; opacity:1!important"></a></div></td></tr></tbody></table></td></tr></tbody></table></div><div class="mw100 padTop" style="vertical-align:middle; width:100%; max-width:360px; display:inline-block"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; direction:ltr"><tbody><tr><td align="center" style="padding-top:10px"><table align="center" border="0" cellpadding="0" cellspacing="0" width="86%" style="border-collapse:collapse; width:86%"><tbody><tr><td align="left" style="font-weight:bold; font-size:22px; line-height:30px; color:#1e1919"><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">Have you used your free password manager yet?</span></td></tr><tr><td style="font-weight:400; font-size:16px; line-height:20px; color:#1d2737; padding-top:24px"><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">Dropbox Passwords automatically stores your login information, suggests strong passwords, and seamlessly signs you into websites and apps on all your devices. Download our app so you can stop wondering who’s birthdate you combined with a pet’s nickname or if that password ends in</span><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot s-ldquo"> </span><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo">“!”</span><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> or</span><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot s-ldquo"> </span><span class="thread-413664880325610527972865 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo">“123.”</span></td></tr><tr><td align="center" style="padding:24px 0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><table border="0" cellpadding="0" cellspacing="0" height="76" width="272" style="border-collapse:collapse"><tbody><tr><td align="center" valign="middle" style="padding:0; font-size:0; line-height:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; border:2px solid #1E1919"><tbody><tr><td align="center" style="padding:0; font-size:0; line-height:0; text-align:center"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0"><tbody><tr><td align="left" width="100%" bgcolor="#ffffff" style="padding:0; font-size:0px; line-height:0; background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5HIk5KNMcF_yp9JtkUhrVPuGhTrka_qjLGwUKGdLzGc0CeJdbIdVSd-3SVGu5R4iioMQH3Ejrw5s-MbpCcqCsLjh2Fn6MQQ7A4ai7gojmCSglxdI1-zldDiNH_7TydAFTbN1iuP5HbV8cnmrG7hL62yiEtWygGzDkqvgHtDO49KWX144mNmpTdMgHhdUrrEig154fW0t9QPMtt0GBmajN9EvO_ZUVtiI8fNvnBdD3hr904_O8gbsBMuJ1YmmAOkmLu129pPVOAd4WnvBj6nhhPYDWxvpZ560WKH1OaylAGC6Q1HBumOipWfd5b83qvBTIuoVjasQxqfGhqfQNIld-0oYwZQ1eFLg7TL4R61wurzxSVlli347p-nVpQFj0Y7iTAHo0rpqBfhW0twaJqy5V4mDFGHnY2akFV9KWo3BxmciQ%3D%3D" style="color:#1e1919; font-size:16px; line-height:24px; font-weight:bold; text-decoration:none; display:inline-table; background-color:#ffffff; border-top:24px solid #ffffff; border-bottom:24px solid #ffffff; border-left:24px solid #ffffff; width:218px">Get Dropbox Passwords for free</a></td></tr></tbody></table></td><td align="right" bgcolor="#ffffff" style="font-size:0px; line-height:0; background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="right" style="padding:0; font-size:0; line-height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5HIk5KNMcF_yp9JtkUhrVPuGhTrka_qjLGwUKGdLzGc0CeJdbIdVSd-3SVGu5R4iioMQH3Ejrw5s-MbpCcqCsLjh2Fn6MQQ7A4ai7gojmCSglxdI1-zldDiNH_7TydAFTbN1iuP5HbV8cnmrG7hL62yiEtWygGzDkqvgHtDO49KWX144mNmpTdMgHhdUrrEig154fW0t9QPMtt0GBmajN9EvO_ZUVtiI8fNvnBdD3hr904_O8gbsBMuJ1YmmAOkmLu129pPVOAd4WnvBj6nhhPY_gkUCkdQMBy844_QFTc2pehlLIkL0Yjy9GiPXUVHUW2-wfAPqt0LspiBI7-EDVJONhFVuahnZf7LsfEbYtDdQ0gD2d_FMobv7C3wYRpPGynPKJcwdNlbqiDmR_rcKYEhwj12uSEteUx0AAbkvvpqfQ%3D%3D" style="text-decoration:none; background-color:#ffffff"><img alt="&gt;" border="0" height="13" src="https://d2axdqolvqmdvx.cloudfront.net/34a08a6a-60ee-4a8b-b387-03f5652d0223/Arrow.png" width="13" style="border:0; height:auto; outline:none; text-decoration:none; width:13px; display:inline-table; border-top:29px solid #ffffff; border-bottom:30px solid #ffffff; border-right:24px solid #ffffff"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" class="mw100" width="100%" style="border-collapse:collapse; width:100%"><tbody><tr><td align="center" bgcolor="#ffffff" style="background-color:#ffffff; font-size:0; padding:48px 0; direction:rtl"><div class="mw100" style="vertical-align:middle; width:100%; max-width:360px; display:inline-block"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; direction:ltr"><tbody><tr><td align="center" style="padding:0"><table border="0" cellpadding="0" cellspacing="0" class="w100" width="100%" style="border-collapse:collapse; width:100%"><tbody><tr><td align="center" style=""><div class="m-hide"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5EXSisrao6zvYUyQvI0IAlMVuaamkhBkN14tFIwv6y4h4X-yEcnDbdRyowGhQXAZv9Lqj9v0DLEsDo1L-DOLlVs39JLzT0wf4ceqXxGj_ZXgsrSJozdQlXbKkt0H2tBnhUm2T4riZxwugtuiwpPem9zWLI0qKjVXMNML0tlfDivIRZbrs6tlrz8lA6mVDez4aGEjCv6ITlQLIohZg9bbh0qIm-95-pIGNKQ2y68aHKwQpQSqOUZXHFRSW4xAMh_PFQEub4_1kNU8nZpYb8q_KDcg9EFsrTkbAalIMkPaC3CM_xSMXhwVC_EIWvpyC1P6zSX9T3DD4CNkC5UYpMvpPuLjuJex2uqV5-WcXrwAC4QAHeSYBpbO8kDzISXgEC2J-BKgL2Sr9NZJfu6t2ezgseNhR_SC8wmTQkMqJzKkq7lpg%3D%3D" style="color:inherit!important; text-decoration:none!important"><img alt="" class="imglink" src="https://assets.dropbox.com/email/en/use-phase/b2c-pcn/2023/kit-1/B2C_Plus_Family_Kit_1_Module_4.jpg" width="300" style="height:auto; text-decoration:none; display:inline-block; outline:0; border:0; padding:0; width:100%; max-width:300px; opacity:1!important"></a></div></td></tr><tr><td align="left" style="font-size:0; line-height:0"><div class="hide-for-desktop" style="font-size:0pt; line-height:0pt; display:none; max-height:0; max-width:0; visibility:hidden; opacity:0; overflow:hidden; width:0; height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5EXSisrao6zvYUyQvI0IAlMVuaamkhBkN14tFIwv6y4h4X-yEcnDbdRyowGhQXAZv9Lqj9v0DLEsDo1L-DOLlVs39JLzT0wf4ceqXxGj_ZXgsrSJozdQlXbKkt0H2tBnhUm2T4riZxwugtuiwpPem9zWLI0qKjVXMNML0tlfDivIRZbrs6tlrz8lA6mVDez4aGEjCv6ITlQLIohZg9bbh0qIm-95-pIGNKQ2y68aHKwQpQSqOUZXHFRSW4xAMh_PFQEub4_1kNU8nZpYb8q_KDcH4TBft9v7x48AGBIqqc2rfsPofCk8lclija74SsXzWWdi6zkKRVvzr1RNEFz1VaoJ_GMNLbRGBKVuFJCuash1GSe3YfAU-YF3MjwFUrvf6hzrPv_OQTWg31wYzjCwcBzQ6f--TwIzj7DIKTI2KlTjA%3D%3D" style="color:inherit!important; text-decoration:none!important"><img alt="" class="imglink" src="https://assets.dropbox.com/email/en/use-phase/b2c-pcn/2023/kit-1/B2C_Plus_Family_Kit_1_Module_4.jpg" width="600" style="height:auto; text-decoration:none; display:inline-block; outline:0; border:0; padding:0; width:100%; max-width:600px; opacity:1!important"></a></div></td></tr></tbody></table></td></tr></tbody></table></div><div class="mw100 padTop" style="vertical-align:middle; width:100%; max-width:360px; display:inline-block"><table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; direction:ltr"><tbody><tr><td align="center" style="padding-top:10px"><table align="center" border="0" cellpadding="0" cellspacing="0" width="86%" style="border-collapse:collapse; width:86%"><tbody><tr><td align="left" style="font-weight:bold; font-size:22px; line-height:30px; color:#1e1919"><div><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">Hey. Mom wants that pic you took of us all</span></div></td></tr><tr><td style="font-weight:400; font-size:16px; line-height:20px; color:#1d2737; padding-top:24px"><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">This time of year, we all love to relive our favorite holiday moments by looking through the photos we took with friends and family. Make sure your pictures </span><span class="thread-462217567599200208117784 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">are easy to find across all your devices </span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">by setting up </span><span class="thread-768162025589391092167178 author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">Camera Uploads</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot">. Once turned on, it will automatically upload and sync photos from your phone to your Dropbox account. Also, add a tag like</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot s-ldquo"> </span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo">“</span><span class="attrlink url author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo url hashtag"><a class="attrlink" href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIZwDkhmc-1zqZrzlmK32sN-hRP2X5EqHDvdWEnsgMdnLrT4g71VVyrgrGGmisJ5QYhIAfQ8Za2XHmTg38ly64HmsraQyFsHvuZ6LljBoXVO2b-hjjWNOSGgaqMhflc1oDk5l5kTh2F38zmXhG0Bm7BC-2XLe_5LaMvoqOWuVYC48VNQkq54z3Nfk1KDlF5HYsTSZotQEhr34whRsy-R7_eI7teUiAmVBblg443KwgIPK8zAWa29-JCKOMhytXrlBgxjZv_x-dSLwpoaJy2AsHdp_dUpCFyvkUfQKTTEtkKgml-detq9v3l32cCNTIrVbmaNGqEPGAeIonn1k5W3GiyBGYdMLtW8oUV50T8jH2GQTFpXq_ajJPzfmWlr1SuPKYdE_p2ajLew8ltFG-KpBGhkJNHVlq_5j7YnNgli2xJ8vlOJb7D3L49i8sx6k_oHi4zG6wIuTnxFtYn2DTkksV7g%3D" rel="noreferrer nofollow noopener" target="_blank" style="color:blue; text-decoration:none">#holidays_2022</a></span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot h-ldquo">”</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz81zz66zegz75zz67zq9z66zz88zv7z81zz85za66ksdz70zetz66z5h6cz85zot"> so you can easily find them later.</span><span class="author-d-1gg9uz65z1iz85zgdz68zmqkz84zo2qowz80zsz86z2nh1z89z4kswz86zz72z2z66zz87zc8az77zmz66zz77zwz74zlmsz85zz78z">&nbsp;</span></td></tr><tr><td align="center" style="padding:24px 0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><table border="0" cellpadding="0" cellspacing="0" height="76" width="272" style="border-collapse:collapse"><tbody><tr><td align="center" valign="middle" style="padding:0; font-size:0; line-height:0"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; border:2px solid #1E1919"><tbody><tr><td align="center" style="padding:0; font-size:0; line-height:0; text-align:center"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; border-spacing:0"><tbody><tr><td align="left" width="100%" bgcolor="#ffffff" style="padding:0; font-size:0px; line-height:0; background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="left" style="padding:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5EXSisrao6zvYUyQvI0IAlMVuaamkhBkN14tFIwv6y4h7RezwLKnMZhhAGuK6mEXux63oY91_XWoGYTrNfjNt3fcZJE7zdwOABAa8cYb6hKl5jbncEMFY68NkDLE763XQHh6uX9vMRdyG257OPdViBWZza8059S3iYQhOWMKGtuckPJQ1VwfPbbG9ezdOJ6YS27-xyENUSyO7xsTgA10Gcxgfwc4Ia12ROA91lZousXsuxApW8wj8HXGyH2-ZJP_tCuWuJzIHSfI35RK5SL8dl8h8d5kS7-7orJFPpxtl6GDFWL7wpRyG0iUmVoHgdWf3TV3PuDbN554fGxF6iRu2j0RmnvrJvroEMSJAvPER4sTjt1v0PJ8IQ9smlEdWxmMNhjGLAEQHGZPQCzeJrdmIlf5ygxTkqka1CTjm2eBG6v2A%3D%3D" style="color:#1e1919; font-size:16px; line-height:24px; font-weight:bold; text-decoration:none; display:inline-table; background-color:#ffffff; border-top:24px solid #ffffff; border-bottom:24px solid #ffffff; border-left:24px solid #ffffff; width:218px">Turn on Camera Uploads</a></td></tr></tbody></table></td><td align="right" bgcolor="#ffffff" style="font-size:0px; line-height:0; background-color:#ffffff"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td align="right" style="padding:0; font-size:0; line-height:0"><a href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5EXSisrao6zvYUyQvI0IAlMVuaamkhBkN14tFIwv6y4h7RezwLKnMZhhAGuK6mEXux63oY91_XWoGYTrNfjNt3fcZJE7zdwOABAa8cYb6hKl5jbncEMFY68NkDLE763XQHh6uX9vMRdyG257OPdViBWZza8059S3iYQhOWMKGtuckPJQ1VwfPbbG9ezdOJ6YS27-xyENUSyO7xsTgA10Gcxgfwc4Ia12ROA91lZousXsuxApW8wj8HXGyH2-ZJP_tCuWuJzIHSfI35RK5SL8dl8NER7JAlO1E_-VM-BUcEAUPf_kfeb7re3Y8-t8IwCNg4Q7eJnxFl8ub3IJgbFlHXBmKe9-8gVhXCColug-3lzFbQHLjN0V-1YJGRNM464Gh_05RUY2CvRn9Zo4qCq-GaRT1_7QkXW2vd6nXT-UgypVQ%3D%3D" style="text-decoration:none; background-color:#ffffff"><img alt="&gt;" border="0" height="13" src="https://d2axdqolvqmdvx.cloudfront.net/34a08a6a-60ee-4a8b-b387-03f5652d0223/Arrow.png" width="13" style="border:0; height:auto; outline:none; text-decoration:none; width:13px; display:inline-table; border-top:29px solid #ffffff; border-bottom:30px solid #ffffff; border-right:24px solid #ffffff"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table><table align="center" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="#1E1919"><tbody><tr><td align="center" style="padding:24px 0"><table align="center" cellspacing="0" cellpadding="0" border="0" width="92%"><tbody><tr><td align="center"><table align="left" cellspacing="0" cellpadding="0" border="0" width="200" style="width:200px"><tbody><tr><td align="left"><a target="_blank" href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgITn8bwo45TS1hipMPHCrMd1m3tHQ-jDPNZiEcoAai9iLMQ1yAcXeSLXbiMQoF1T32_IY8j3RelKWMYFS4Br3OljIoTaYsRbSb_DUEhAcNlHLMy4FK3MTmPKpNY8MfQ_gucQI-6orKMSK82UxBFkbPgilGIlK4UBkkMSQoK_TN4VPAV8WYYUw1GripgWZKllkQ5cRUxgx2CGtvP3ZQfHLI2vWnAvCaw1P8ecxzIuWrI9zXrTSZW8zvbRo9lZuNjUox3jROA8-eigh3V2uwv-l9sAKvNbOYQMKcX8a634Y4L4m8IeDSm2mhvbfG_OiRWElaYg3O_jNjD2G3lecxkBq4o16fPXgKs7pjlSAJaeAbYTzF4Nshcq-3AKL5X3mOHVDrg%3D%3D"><img alt="Twitter" width="24" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9f3604ee1f844e4d9acebb4de59d1c23/Hello%20World%20%28Test%29/Twitter_1.png" style="display:block; outline:0; border:0; padding:0; width:24px; height:auto"></a> </td><td align="left"><a target="_blank" href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIc7I0tV5BrWQN1oCOqhWp36BWfagPFQwYZ_z5GKJN7eqTUDUaG-iVIR5AybBp47Pmx-sDYPOm60WIksE03ZZcOhZHDv6sydmuWHIrHKkLatoY2BWg49hBYTeV3vIX1rkVtgv5-JmEj4cMuVocyNhLtnI6Jh1D4KInxC1-pMxdEQgXdiHbYgMT3u7KTqYVNRIPolRt_P_S6bWbrdrrINBMIFmSRYJYDPgrlLrvkpRSjWSjNTM1VocJbpaarw1wN9Xv6_Bc3gG2I0HzMaBbfrIXT2Qo2SInIY--lpu5H4cXYe2DVixM-m8ZqJ9rCXg0FDnRXaOMm_MJ4LNWNnjKsjN4a8dRtXPgEUNmw66eNl4-j1a6oz9BXC0U2RZEjU9u7lKlw%3D%3D"><img alt="Facebook" width="24" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9f3604ee1f844e4d9acebb4de59d1c23/Hello%20World%20%28Test%29/Facebook_1.png" style="display:block; outline:0; border:0; padding:0; width:24px; height:auto"></a> </td><td align="left"><a target="_blank" href="https://links.dropbox.com/u/click?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgITugjSW0y7GwX8h3ea5YDbp8-EKGGc_vvNn80UOEb2iR4_9Q687T_llsxWHFaqHfwymapYaN2H6azKJaSVTfTPH9izdjfTlID01Agn6GTrJ4i9mEhGye3EP-o_U6aU4gpYxXUhTerqwEwO8lmoER2QEP2qaQDMzFw0pA7-4jM9je6YaYZQz08CEDOdc6tmTUWycAkwh5EfBbcMs3P2K1ypb6v4fCd5prtzRpkHCJfY0Q40M1ZBz9OtrAYQVcEjDc_FsTfRNigI9fx0f-Dz6wYgBhyJDs6sRXS1pkVGn-Fx-XcfphTXApCG9PjahezO81ZOrMZoDXWpGoXjsp2b3jIDNdG25STms2UmpTUE0DzZOsv22UQRGqWgkJmhWu1o2c_-gY6qGVr-u9dzT-oFjXHUs%3D"><img alt="YouTube" width="24" border="0" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/9f3604ee1f844e4d9acebb4de59d1c23/Hello%20World%20%28Test%29/Youtube_1.png" style="display:block; outline:0; border:0; padding:0; width:24px; height:auto"></a> </td></tr></tbody></table></td></tr><tr><td align="center" style="padding:20px 0px"><table cellspacing="0" cellpadding="0" border="0" width="100%"><tbody><tr><td align="left" style="padding:0px; font-size:14px; line-height:19px; color:#F7F5F2">Want to stop getting tips from Dropbox? <a target="_blank" href="https://links.dropbox.com/e/eh?_t=60154b197d654466a40480a2b908d3b7&amp;_m=d6724cfeeff642bbb06127608b854cf6&amp;_e=eE4f5s9Al-j-ni1HZhdgIVfmHQyPrqGctA31d_rBM5Ggo5y4_RQ4ywFJJq_o4m9sgjREGH376JI3CbosbEFtwwHN1_lkif7hprGZqmmW3GwDA23dnRwESdDEQqLq__aaxDQuJ1tjhQBZneTEJaY4hNZeopvem6tqM8OQxxgheeqydF6vZO2SCxGu37UjfTtQhG34bePjPLGvNtmC9vanv4Bh4PD5o0pTnvrm0HliFFevE1sZSpOynQAQ4qLYzYkNhQBP5p3pHWQ0efwEmGb5vLCzijLPPYrqDI1W5B8ZeGnof9_E57E6QUT_jTMT9AaOSU440d5g7pbbBlCmVV2oFe8DAHdAMeOpZbQPYXidTDiSHKADglszz9tK8elKevLh9ujn1P4z-xIMxAK6suN6i1d5a8KywKNihtCyqvlzFgKF7trPW9EbYvdcBDABPR5Oa0z3nfP26dormiPdtb1HCXllfO4UyzNYWi6oZr_KuM6Z2lrc6xh9wub2uVa8vIqLVu7HRKPLUKR8zvzG7Emx3Aeeoo_aX_4P3CIAVTVs3fQjCLARHkVPvDa51Vi0deejdz5ELUjdAXB9iBW1Gdxbd6u0tvazcyX5PNb4xSRb760%3D" style="color:#F7F5F2; text-decoration:underline">Unsubscribe</a> </td></tr><tr><td align="left" style="padding:0px; font-size:14px; line-height:19px; color:#F7F5F2">Dropbox, Inc., PO Box 77767, San Francisco, CA 94107 </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "no-reply@em-s.dropbox.com",
          address: "no-reply@em-s.dropbox.com",
        },
      },
      from: {
        emailAddress: {
          name: "Dropbox",
          address: "no-reply@em-s.dropbox.com",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Victory M Yinka-Banjo",
            address: "vybanjo@mit.edu",
          },
        },
      ],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [
        {
          emailAddress: {
            name: "no-reply@em-s.dropbox.com",
            address: "no-reply@em-s.dropbox.com",
          },
        },
      ],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpim8"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfnAAA=",
      createdDateTime: "2023-01-21T20:36:52Z",
      lastModifiedDateTime: "2023-01-21T20:47:34Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpim8",
      categories: [],
      receivedDateTime: "2023-01-21T20:36:53Z",
      sentDateTime: "2023-01-21T20:36:47Z",
      hasAttachments: false,
      internetMessageId:
        "<BN0PR01MB7055A0491FC3333A5E66A748B7CA9@BN0PR01MB7055.prod.exchangelabs.com>",
      subject: "NSBE Merch",
      bodyPreview:
        "Hello,Congratulations! You are qualified to apply for FREE NSBE Merch due to the points you accumulated this year. We want to thank you all for attending events so far and hope you continue to show up to future events as well. If you are interested in",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBDAAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAF6SlkahWXJJsfHZFqQfMrE=",
      conversationIndex: "AQHZLdcXXpKWRqFZckmx8dkWpB8ysQ==",
      isDeliveryReceiptRequested: false,
      isReadReceiptRequested: false,
      isRead: true,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfnAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="Generator" content="Microsoft Word 15 (filtered medium)"><style><!--@font-face{font-family:"Cambria Math"}@font-face{font-family:Calibri}p.MsoNormal, li.MsoNormal, div.MsoNormal{margin:0in;font-size:11.0pt;font-family:"Calibri",sans-serif}a:link, span.MsoHyperlink{color:#0563C1;text-decoration:underline}span.EmailStyle17{font-family:"Calibri",sans-serif;color:windowtext}.MsoChpDefault{font-family:"Calibri",sans-serif}@page WordSection1{margin:1.0in 1.0in 1.0in 1.0in}div.WordSection1{}--></style></head><body lang="EN-US" link="#0563C1" vlink="#954F72" style="word-wrap:break-word"><div class="WordSection1"><p class="MsoNormal">Hello,</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Congratulations! You are qualified to apply for FREE NSBE Merch due to the points you accumulated this year. We want to thank you all for attending events so far and hope you continue to show up to future events as well. If you are interested in getting NSBE Merch sign up using the google form below:</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal"><a href="https://forms.gle/Mrn1bsH46wVw4yEW7">https://forms.gle/Mrn1bsH46wVw4yEW7</a></p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">From,</p><p class="MsoNormal">&nbsp;</p><div><p class="MsoNormal"><span style="color:black">---------</span></p><p class="MsoNormal"><span style="color:black">Amanial H Abraham </span></p><p class="MsoNormal"><span style="color:black">Vice-Chair of MIT NSBE</span></p><p class="MsoNormal"><span style="color:black">Massachusetts Institute of Technology |</span></p><p class="MsoNormal"><span style="color:black">Class of 2024</span></p><p class="MsoNormal"><span style="color:black"><a href="mailto:amanial@mit.edu"><span style="color:#0563C1">amanial@mit.edu</span></a></span></p></div><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">&nbsp;</p></div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "Amanial H Abraham",
          address: "amanial@mit.edu",
        },
      },
      from: {
        emailAddress: {
          name: "Amanial H Abraham",
          address: "amanial@mit.edu",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "nsbe-eboard-kerberos",
            address: "nsbe-eboard-kerberos@mit.edu",
          },
        },
      ],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpik6"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEeAAAP9LzBTsYnT6xwROru1J9IAAGFqPNEAAA=",
      createdDateTime: "2023-01-21T18:50:25Z",
      lastModifiedDateTime: "2023-01-21T18:50:25Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpik6",
      categories: [],
      receivedDateTime: "2023-01-21T18:50:25Z",
      sentDateTime: "2023-01-21T18:50:17Z",
      hasAttachments: false,
      internetMessageId: "<1161941888.153120.1674327017416@prod-task01.ae.piazza.com>",
      subject: "Activity Digest since 11:02:58AM for 6.9620 on Piazza",
      bodyPreview:
        "Your email preferences are currently set to a 4-hour Auto Digest, so you'll receive at most one email every 4 hours. You can customize your email preferences from your Account Settings page in the top right of your dashboard.Here's what has happened i",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBHgAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAPxi6oIlgblAkJMfBz6HjeA=",
      conversationIndex: "AQHZLck5/GLqgiWBuUCQkx8HPoeN4A==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEeAAAP9LzBTsYnT6xwROru1J9IAAGFqPNEAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body>Your email preferences are currently set to a 4-hour Auto Digest, so you\'ll receive at most one email every 4 hours. You can customize your email preferences from your Account Settings page in the top right of your dashboard.<br><br>Here\'s what has happened in 6.9620 on Piazza:<br><br><hr><b>State not changing value of</b> <i>1/21/2023, 11:02:58 AM</i><br><br><p>I use the following code to update the state infoObj. My problem is I have a few text area tags that are supposed to display the strings from infoObj.content, infoObj.quote, and infoObj.notes and none of these are working. However, I have some boxes that get their color set to infoObj.color and that works perfectly fine. The console.log(info.content) is also printing out the correct value for info.content (outside of the useEffect). Any ideas on what I am doing wrong?</p><p></p><pre>useEffect(() =&gt; {&nbsp; &nbsp; &nbsp; window.scrollTo(0, 0);&nbsp; &nbsp; &nbsp; get(&quot;/api/entry&quot;, &nbsp;{ date: date.toISOString().slice(0,10), user: &quot;IntegrationTest&quot;}).then((e) =&gt; {&nbsp; &nbsp; &nbsp; &nbsp; console.log(&quot;Object: &quot;,JSON.stringify(e));&nbsp; &nbsp; &nbsp; &nbsp; if(!(JSON.stringify(e) === \'{}\')){&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log(JSON.stringify(&quot;Not empty&quot;));&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; let c = &quot;#C1A59C&quot;;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; if(e.emotions != null &amp;&amp; e.emotions.length){&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; c = emotionsDict[e.emotions[0]];&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // console.log(JSON.stringify(c));&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; const newObj = {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; content: e.content,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; quote: e.quote,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; notes: e.notes,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; emotions: e.emotions,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; playlist: e.playlist,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; color: c&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // console.log(newObj.content);&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; setInfoObj(newObj);&nbsp; &nbsp; &nbsp; &nbsp; }else{&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; console.log(JSON.stringify(&quot;empty&quot;));&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; const newObj = {&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; content: &quot;&quot;,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; quote: &quot;&quot;,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; notes: &quot;&quot;,&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; emotions: [],&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; playlist: [],&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; color: &quot;#C1A59C&quot;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; }&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; setInfoObj(newObj);&nbsp; &nbsp; &nbsp; &nbsp; }&nbsp; &nbsp; &nbsp; });&nbsp; &nbsp; }, []);</pre><p></p><br><br><a href="https://piazza.com/class?cid=ld653l6iax277m&amp;nid=lc27xbtdneliq&amp;token=IOkHh1Ni7Yg">Click here</a> to view.<br><br><hr><br><br>Thanks,<br>The Piazza Team<br>--<br>Contact us at team@piazza.com<br><br><font size="-2">You\'re receiving this email because vybanjo@mit.edu is enrolled in 6.9620 at Massachusetts Institute of Technology (MIT). Click <a href="https://piazza.com/unsubscribe/ktbah8xjnfi2af/lc27xbtdneliq">here</a> to unsubscribe from digest emails. Or, <a href="https://piazza.com/login">sign in</a> to manage your email preferences or <a href="https://piazza.com/remove/IOkHh1Ni7Yg/lc27xbtdneliq">un-enroll</a> from this class.<br>If you already have a Piazza account under another email address, link vybanjo@mit.edu to that account <a href="https://piazza.com/link_accounts/IOkHh1Ni7Yg">here</a>.</font> </body></html>',
      },
      sender: {
        emailAddress: {
          name: "6.9620 on Piazza",
          address: "no-reply@piazza.com",
        },
      },
      from: {
        emailAddress: {
          name: "6.9620 on Piazza",
          address: "no-reply@piazza.com",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Victory M Yinka-Banjo",
            address: "vybanjo@mit.edu",
          },
        },
      ],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpif+"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEJAAAP9LzBTsYnT6xwROru1J9IAAGFqQ6-AAA=",
      createdDateTime: "2023-01-21T18:06:45Z",
      lastModifiedDateTime: "2023-01-21T18:13:24Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpif+",
      categories: [],
      receivedDateTime: "2023-01-21T18:13:22Z",
      sentDateTime: "2023-01-21T18:13:19Z",
      hasAttachments: false,
      internetMessageId:
        "<CH0PR01MB7051E4C9FF4198DFBBCE93B2B7CA9@CH0PR01MB7051.prod.exchangelabs.com>",
      subject: "Beethoven Tickets",
      bodyPreview:
        "Hi Dr Neff and Mr. Wark!I just wanted to reach out because I filled out the complimentary ticket form offered by the Handel and Hadyn for the Beethoven concert happening tomorrow, but I haven't received my tickets yet. I believe some of my friends als",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBCQAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAGOs5pSINu1OrcJru0ybLh0=",
      conversationIndex: "AQHZLcMfY6zmlIg27U6twmu7TJsuHQ==",
      isDeliveryReceiptRequested: false,
      isReadReceiptRequested: false,
      isRead: true,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEJAAAP9LzBTsYnT6xwROru1J9IAAGFqQ6%2FAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><style type="text/css" style="display:none"><!--p{margin-top:0;margin-bottom:0}--></style></head><body dir="ltr"><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">Hi Dr Neff and Mr. Wark!</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)"><br></div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">I just wanted to reach out because I filled out the complimentary ticket form offered by the&nbsp;<span class="ContentPasted0" style="background-color:rgb(255,255,255); display:inline!important">Handel and Hadyn&nbsp;</span>for the Beethoven concert happening tomorrow, but I haven\'t received my tickets yet. I believe some of my friends also filled out the form and are facing the same thing. Just wanted to know if you had an idea of when to expect them. We\'re really excited to attend.&nbsp;</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)"><br></div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">Looking forward to hearing&nbsp;from&nbsp;you!</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)"><br></div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">Best,&nbsp;</div><div class="elementToProof" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; color:rgb(0,0,0); background-color:rgb(255,255,255)">Victory</div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "Victory M Yinka-Banjo",
          address: "vybanjo@mit.edu",
        },
      },
      from: {
        emailAddress: {
          name: "Victory M Yinka-Banjo",
          address: "vybanjo@mit.edu",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Teresa M Neff",
            address: "tneff@mit.edu",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "mwark@handelandhaydn.org",
            address: "mwark@handelandhaydn.org",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpiea"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfmAAA=",
      createdDateTime: "2023-01-21T17:05:32Z",
      lastModifiedDateTime: "2023-01-21T18:04:53Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpiea",
      categories: [],
      receivedDateTime: "2023-01-21T17:05:33Z",
      sentDateTime: "2023-01-21T17:04:44Z",
      hasAttachments: false,
      internetMessageId: "<CACdMmLAtQ1YtKLtV-5TQocMieXPog4PsjZhmn08nL-RKcFJtOQ@mail.gmail.com>",
      subject: "[OpenCode] CAPTCHAs: Past, Present, and Future",
      bodyPreview:
        "Figure: Please click each image containing a smiling dogWith the recent developments in the AI field, we ask ourselves what the creators of the original CAPTCHA developers have proposed:Does there exist any method of distinguishing computers and h",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBDAAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQACrZAUvsqpRNobWIALlpXZI=",
      conversationIndex: "AQHZLbqSKtkBS+yqlE2htYgAuWldkg==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: true,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfmAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><div dir="ltr"><div style="text-align:center"><font color="#000000"><img src="cid:ii_ld668kog0" alt="image.png" width="202" height="304" style="margin-right:0px"></font></div><div style="text-align:center"><font color="#000000">Figure: Please click each image containing a smiling dog</font></div><div style="text-align:center"><font color="#000000"><br></font></div><div style="text-align:left"><font color="#000000">With the recent developments in the AI field, we ask ourselves what&nbsp;the&nbsp;creators of the original CAPTCHA developers have proposed:</font></div><div style="text-align:left"><font color="#000000"><br></font></div><div style="text-align:center"><b><font face="times new roman, serif" size="4" color="#000000">Does there exist any method of distinguishing computers and humans apart?&nbsp;</font></b></div><div style="text-align:left"><font color="#000000"><br></font></div><div style="text-align:left"><font color="#000000">We\'re going to discuss this question by looking into the history of CAPTCHAs and what led to the situation today. We are also going to discuss the future of CAPTCHAs and the possibility for transparent, open source, free, privacy respecting CAPTCHA. The talk should be accessible and informative to people from all academic backgrounds.</font></div><div style="text-align:left"><font color="#000000"><br></font></div><div style="text-align:left"><font color="#000000"><b>Tomorrow (Sunday, Jan 22nd) at 6PM in 3-442 (Location might change).</b></font></div><div style="text-align:left"><font color="#000000"><b><br></b></font></div><div style="text-align:left"><font color="#000000">After the discussion, we will hold some discussion about OpenCode operations, so stick till the end if you want to have your voice heard in managing the club!</font></div><div style="text-align:left"><font color="#000000"><br></font></div><div style="text-align:left"><font color="#000000">Best,</font></div><div style="text-align:left"><font color="#000000">Adhami &amp; Barish</font></div><div style="text-align:left"><a href="https://opencode-mit.github.io/">https://opencode-mit.github.io/</a><font color="#000000"><br></font></div><div style="text-align:left"><a href="https://discord.gg/paVKjzACAQ">https://discord.gg/paVKjzACAQ</a><br></div><div style="text-align:left">[bcc\'d to all dorms, human for bc-talk]</div></div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "Khaleel Al-Adhami",
          address: "adhami@mit.edu",
        },
      },
      from: {
        emailAddress: {
          name: "Khaleel Al-Adhami",
          address: "adhami@mit.edu",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "opencode-members",
            address: "opencode-members@mit.edu",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "Abutalib Namazov",
            address: "abutalib@mit.edu",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpiZJ"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwAP9LzBTsYnT6xwROru1J9IAAD3iEB3AAAP9LzBTsYnT6xwROru1J9IAAGFqSdrAAA=",
      createdDateTime: "2023-01-21T17:01:14Z",
      lastModifiedDateTime: "2023-01-21T17:01:15Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpiZJ",
      categories: [],
      receivedDateTime: "2023-01-21T17:01:15Z",
      sentDateTime: "2023-01-21T17:00:35Z",
      hasAttachments: false,
      internetMessageId: "<mailman.247.1674320435.2998243.reuse@mit.edu>",
      subject: "Reuse Digest, Vol 225, Issue 14",
      bodyPreview:
        "Send Reuse mailing list submissions toreuse@mit.eduTo subscribe or unsubscribe via the World Wide Web, visithttps://mailman.mit.edu/mailman/listinfo/reuseor, via email, send a message with subject or body 'help' toreuse-request@mit.eduY",
      importance: "normal",
      parentFolderId:
        "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAuAAAAAADUUd0brNnoRIN5P34i1rIFAQAP9LzBTsYnT6xwROru1J9IAAD3iEB3AAA=",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAN9gp6SU4qNHicfEosEt_t8=",
      conversationIndex: "AQHZLbn432CnpJTio0eJx8SiwS363w==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwAP9LzBTsYnT6xwROru1J9IAAD3iEB3AAAP9LzBTsYnT6xwROru1J9IAAGFqSdrAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "text",
        content:
          "Send Reuse mailing list submissions toreuse@mit.eduTo subscribe or unsubscribe via the World Wide Web, visithttps://mailman.mit.edu/mailman/listinfo/reuseor, via email, send a message with subject or body 'help' toreuse-request@mit.eduYou can reach the person managing the list atreuse-owner@mit.eduWhen replying, please edit your Subject line so it is more specificthan \"Re: Contents of Reuse digest...\"Today's Topics:   1. books & coffee mugs available for pick up from bldg 33 on      Friday & next Friday (Britton 'Bryt' Bradley)----------------------------------------------------------------------Message: 1Date: Fri, 20 Jan 2023 21:03:55 +0000From: \"Britton 'Bryt' Bradley\" <bryt@mit.edu>To: reuse <reuse@mit.edu>Subject: [Reuse] books & coffee mugs available for pick up from bldg33 on Friday & next FridayMessage-ID:<DM6PR01MB43636F029A1F72465362FBE8CDC59@DM6PR01MB4363.prod.exchangelabs.com>Content-Type: text/plain; charset=\"iso-8859-1\"Hi folks,We've got a spate of books & some few coffee mugs available to be picked up from bldg 33 either today before 7pm ET or sometime next Friday from 10am-7pm.The shelves of books are long and I cannot transcribe the titles/authors today.I've uploaded photos to this google drive:https://drive.google.com/drive/folders/1gah49uw8xlmu12IQbVK3OzQRZ5u2fhCd?usp=sharingI apologize for not making this more accessible - I am out of spoons for the task.If you see any books or coffee mugs you are interested in retrieving, please drop me a line (off-list, preferably) and LMK when you could come by to sort them out.  (Again - the pickup windows are: either today before 7pm ET or sometime next Friday from 10am-7pm.)Thank you!Bryt~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ms Bryt Bradley, AAII  for Profs. Harris, How, Smith, & WardleMIT Aero/Astro77 Massachusetts Ave, 33-336Cambridge, MA 02139Tel : 617-253-6583E : bryt@mit.edu<mailto:bryt@mit.edu>Pronouns: she/her/hersIAP 2023 Schedule: M/T/W/Th (remote) & F (on campus) -- 10am-7pm------------------------------Subject: Digest Footer_______________________________________________Reuse mailing listReuse@mit.eduhttps://mailman.mit.edu/mailman/listinfo/reuse------------------------------End of Reuse Digest, Vol 225, Issue 14**************************************",
      },
      sender: {
        emailAddress: {
          name: "Reuse",
          address: "reuse-bounces@mit.edu",
        },
      },
      from: {
        emailAddress: {
          name: "reuse-request@mit.edu",
          address: "reuse-request@mit.edu",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "reuse",
            address: "reuse@mit.edu",
          },
        },
      ],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [
        {
          emailAddress: {
            name: "reuse",
            address: "reuse@mit.edu",
          },
        },
      ],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpieI"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEKAAAP9LzBTsYnT6xwROru1J9IAAGFqUdsAAA=",
      createdDateTime: "2023-01-21T16:15:15Z",
      lastModifiedDateTime: "2023-01-21T18:04:47Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpieI",
      categories: [],
      receivedDateTime: "2023-01-21T16:15:15Z",
      sentDateTime: "2023-01-21T16:15:01Z",
      hasAttachments: true,
      internetMessageId:
        "<PH0PR01MB73839A7EB034B448261741ADC5CA9@PH0PR01MB7383.prod.exchangelabs.com>",
      subject: "[mitacf-talk] ❄️ WINTER RETREAT REGISTRATION!!! ❄️",
      bodyPreview:
        "HAI FRENSEXCITING NEWSWINTER RETREAT IS NOW OPEN YAYYYYWhen: February 17-19thWhere: Pine Brook Camp (Western MA)Theme: Grace – God’s grace for us and having grace for others❄️ ❄️ ❄️ ❄️ ❄️ ❄️ ❄️At the beginning of every spring semester, w",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBCgAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAN8TIf-6lUzPmWQlSBc2zjU=",
      conversationIndex: "Adktqsj53xMh//qVTM+ZZCVIFzbONQ==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEKAAAP9LzBTsYnT6xwROru1J9IAAGFqUdsAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="Generator" content="Microsoft Word 15 (filtered medium)"><style><!--@font-face{font-family:Wingdings}@font-face{font-family:"Cambria Math"}@font-face{font-family:Calibri}@font-face{font-family:"Malgun Gothic"}@font-face{font-family:"Segoe UI Emoji"}p.MsoNormal, li.MsoNormal, div.MsoNormal{margin:0in;font-size:11.0pt;font-family:"Calibri",sans-serif}a:link, span.MsoHyperlink{color:#0563C1;text-decoration:underline}p.MsoListParagraph, li.MsoListParagraph, div.MsoListParagraph{margin-top:0in;margin-right:0in;margin-bottom:0in;margin-left:.5in;font-size:11.0pt;font-family:"Calibri",sans-serif}span.EmailStyle17{font-family:"Calibri",sans-serif;color:windowtext}.MsoChpDefault{font-family:"Calibri",sans-serif}@page WordSection1{margin:1.0in 1.0in 1.0in 1.0in}div.WordSection1{}ol{margin-bottom:0in}ul{margin-bottom:0in}--></style></head><body lang="EN-US" link="#0563C1" vlink="#954F72" style="word-wrap:break-word"><div class="WordSection1"><p class="MsoNormal">HAI FRENS</p><p class="MsoNormal">EXCITING NEWS</p><p class="MsoNormal">WINTER RETREAT IS NOW OPEN YAYYYY </p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal"><b>When:</b> February 17-19th</p><p class="MsoNormal"><b>Where:</b> Pine Brook Camp (Western MA)</p><p class="MsoNormal"><b>Theme:</b> Grace – God’s grace for us and having grace for others</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span>&nbsp;</p><p class="MsoNormal">At the beginning of every spring semester, we have winter retreat, where we get to spend time with God and each other away from campus! We’ll have worship, devotionals, bonding, and a speaker coming from very far away (<span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">&#127965;</span>)&nbsp;to share with us.&nbsp;Retreat is open to everyone, whether they\'re in ACF or not, Christian or not, Asian or not! Invite your friends, especially if they’re newer to ACF!</p><p class="MsoNormal"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span>&nbsp;</p><p class="MsoNormal">Registration is open now and closes <b>eod</b> <b>February 8<sup>th</sup>. </b>We do have housing limits so please sign up sooner than later, and if you want to invite friends, ask early. Retreat is $90, unless it’s your first retreat with ACF, in which case it’s $25. We don’t want finances to be a barrier to anyone-- contact Jacky at <a href="mailto:jkluong@mit.edu">jkluong@mit.edu</a> for details on how to apply for a scholarship.</p><p class="MsoNormal"><span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span> <span style="font-family:&quot;Segoe UI Emoji&quot;,sans-serif">❄️</span>&nbsp;</p><p class="MsoNormal"></p><p class="MsoNormal">Here is how you can register <b>by February 8</b>!</p><ol start="1" type="1" style="margin-top:0in"><li class="MsoListParagraph" style="margin-left:0in">Fill out the form <a href="http://tiny.cc/acf-retreat" target="_blank">tiny.cc/acf-retreat</a> !</li><li class="MsoListParagraph" style="margin-left:0in">Send either an initial $50 nonrefundable deposit over Venmo to @JackyLuong_ to claim your spot, or your full $90</li><ol start="1" type="a" style="margin-top:0in"><li class="MsoListParagraph" style="margin-left:0in">If this is your first retreat w ACF, send $25 to Jacky instead</li><li class="MsoListParagraph" style="margin-left:0in">If you would like to apply for a scholarship, contact Jacky at <a href="mailto:jkluong@mit.edu">jkluong@mit.edu</a></li></ol></ol><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">Super excited! Please reach out to anyone on Vision Team (me, Aslan, Jacky, Ruth, Regan) if you have any questions, comments, or concerns. Yay!</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">“For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are—yet he did not sin. Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.” ~ Hebrews 4:14-15</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal">In Christ,</p><p class="MsoNormal">Jan</p><p class="MsoNormal">&nbsp;</p><p class="MsoNormal"><img border="0" width="1920" height="1080" id="Picture_x0020_1" src="cid:image001.jpg@01D92D89.9A612ED0" alt="May be an image of 3 people, fire, outdoors and text that says \'ACF winter retreat GOD\'S GRACE FOR US, AND HAVING GRACE FOR OTHERS Feb 17-19 Pinebrook Camp •Invite friends! .Registration deadline Feb 8, first come first serve $90 registration fee $25 if this is your first retreat with ACF\'" style="width:20.0in; height:11.25in"></p></div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "mitacf-talk",
          address: "mitacf-talk-bounces@mit.edu",
        },
      },
      from: {
        emailAddress: {
          name: "Janette H Park",
          address: "janp@mit.edu",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "mitacf-talk",
            address: "mitacf-talk@mit.edu",
          },
        },
      ],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpier"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfjAAA=",
      createdDateTime: "2023-01-21T15:21:59Z",
      lastModifiedDateTime: "2023-01-21T18:05:09Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpier",
      categories: [],
      receivedDateTime: "2023-01-21T15:22:00Z",
      sentDateTime: "2023-01-21T15:21:43Z",
      hasAttachments: false,
      internetMessageId: "<24B5005F-5E32-45DF-92EA-72B785DF6A3F@stanford.edu>",
      subject: "Re: GEARS Paper Implementation Problem",
      bodyPreview:
        "Hi Victory, Rac and Ananth,Thanks a lot for reaching out and for using our code. We are always eager to hear what works and doesn’t work for different applications. Let me know when’s a good time to chat!That’s unfortunate that GEARS was resorting",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBDAAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAOjZX4U7vRdGgqgRfi6hpEI=",
      conversationIndex: "AQHZLUQy6NlfhTu9F0aCqBF+LqGkQq6o/ZmA",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfjAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "focused",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body class="" style="word-wrap:break-word; line-break:after-white-space">Hi Victory, Rac and Ananth, <div class=""><br class=""></div><div class="">Thanks a lot for reaching out and for using our code. We are always eager to hear what works and doesn’t work for different applications. Let me know when’s a good time to chat!</div><div class=""><br class=""></div><div class="">That’s unfortunate that GEARS was resorting to the same prediction for every perturbation, I think I have seen this behavior once before. This may be related to a fix we’ve worked within our local version of the repo where we swap out the large universal knowledge graph (currently the default graph in the main repo) with a smaller one more representative of smaller datasets like the one in this challenge.</div><div class=""><br class=""></div><div class="">In fact, I’ve also been participating in this Broad challenge to test GEARS, and was able to generate outputs that differed for the unseen perturbations. Having said that, one of the core assumptions in GEARS, of distributional uniformity following perturbation, is clearly validated in this dataset so I’m not expecting it to be the best approach here. In any case, would love to hear your thoughts on what could be made better.</div><div class=""><br class=""></div><div class=""><div class=""><div dir="auto" class="" style="color:rgb(0,0,0); letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; word-wrap:break-word; line-break:after-white-space"><div dir="auto" class="" style="color:rgb(0,0,0); letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; word-wrap:break-word; line-break:after-white-space"><div dir="auto" class="" style="text-align:start; text-indent:0px; word-wrap:break-word; line-break:after-white-space">Thanks,</div><div dir="auto" class="" style="text-align:start; text-indent:0px; word-wrap:break-word; line-break:after-white-space">Yusuf</div><div dir="auto" class="" style="color:rgb(0,0,0); letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; word-wrap:break-word; line-break:after-white-space"><br class=""><br class=""></div></div></div></div><div><br class=""><blockquote type="cite" class=""><div class="">On Jan 20, 2023, at 7:26 PM, Victory M Yinka-Banjo &lt;<a href="mailto:vybanjo@mit.edu" class="">vybanjo@mit.edu</a>&gt; wrote:</div><br class="Apple-interchange-newline"><div class=""><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)">Hi GEARS Authors,&nbsp;</div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><br class=""></div><div class="elementToProof ContentPasted0" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)">We hope that this email finds you well. We are a group of second-year college students competing in the Broad Institute Cancer Immunotherapy Challenge (<a href="https://www.broadinstitute.org/news/eric-and-wendy-schmidt-center-announces-data-science-challenge-harness-machine-learning-cancer" id="LPlnkOWALinkPreview" class="">https://www.broadinstitute.org/news/eric-and-wendy-schmidt-center-announces-data-science-challenge-harness-machine-learning-cancer</a>)</div><div class="_EReadonly_1 _EType_OWALinkPreview _Entity _EId_OWALinkPreview" style="font-family:Helvetica; font-size:12px; font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none"><div id="LPBorder_GTaHR0cHM6Ly93d3cuYnJvYWRpbnN0aXR1dGUub3JnL25ld3MvZXJpYy1hbmQtd2VuZHktc2NobWlkdC1jZW50ZXItYW5ub3VuY2VzLWRhdGEtc2NpZW5jZS1jaGFsbGVuZ2UtaGFybmVzcy1tYWNoaW5lLWxlYXJuaW5nLWNhbmNlcg.." class="LPBorder986092" style="width:800px; margin-top:16px; margin-bottom:16px; max-width:800px; min-width:424px"><table id="LPContainer986092" role="presentation" class="" style="padding:12px 36px 12px 12px; width:750px; border:1px solid rgb(200,200,200); border-radius:2px"><tbody class=""><tr valign="top" class="" style="border-spacing:0px"><td class=""><div id="LPImageContainer986092" class="" style="margin-right:12px; height:160px; overflow:hidden; width:240px"><a target="_blank" id="LPImageAnchor986092" href="https://www.broadinstitute.org/news/eric-and-wendy-schmidt-center-announces-data-science-challenge-harness-machine-learning-cancer" class=""><img id="LPThumbnailImageId986092" alt="" height="160" width="240" src="https://www.broadinstitute.org/files/news/images/2022/cancer%20immunology%20NIH.jpg" class="" style="display:block"></a></div></td><td class="" style="width:488px"><div id="LPTitle986092" class="" style="font-size:21px; font-weight:300; margin-right:8px; font-family:wf_segoe-ui_light,&quot;Segoe UI Light&quot;,&quot;Segoe WP Light&quot;,&quot;Segoe UI&quot;,&quot;Segoe WP&quot;,Tahoma,Arial,sans-serif; margin-bottom:12px"><a target="_blank" id="LPUrlAnchor986092" href="https://www.broadinstitute.org/news/eric-and-wendy-schmidt-center-announces-data-science-challenge-harness-machine-learning-cancer" data-loopstyle="link" class="" style="text-decoration:none">Eric and Wendy Schmidt Center announces data science challenge to harness machine learning for cancer immunotherapy | Broad Institute</a></div><div id="LPDescription986092" class="" style="font-size:14px; max-height:100px; color:rgb(102,102,102); font-family:wf_segoe-ui_normal,&quot;Segoe UI&quot;,&quot;Segoe WP&quot;,Tahoma,Arial,sans-serif; margin-bottom:12px; margin-right:8px; overflow:hidden">The immune system is adept at fighting off viral and bacterial infections, but it can also find and attack cancer in the body. Cancer cells, however, are skilled at disarming the immune system’s T cells — allowing tumors to continue growing unabated.</div><div id="LPMetadata986092" class="" style="font-size:14px; font-weight:400; color:rgb(166,166,166); font-family:wf_segoe-ui_normal,&quot;Segoe UI&quot;,&quot;Segoe WP&quot;,Tahoma,Arial,sans-serif"><a href="http://www.broadinstitute.org/" class="">www.broadinstitute.org</a></div></td></tr></tbody></table></div></div><div class="ContentPasted1 elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)">We are trying to train a model to accurately predict the effect of unseen genetic perturbations on T-cell states. We came across the paper you wrote about GEARS and followed the steps you outlined in your GitHub tutorials to load our dataset and train your model with it. However, the predicted values we are getting seem to be<span class="Apple-converted-space">&nbsp;</span><i class="">almost</i>&nbsp;the exact same for every unseen genetic perturbation we test with GEARS, i.e, expression values that should ideally be completely unrelated post-perturbation are related.&nbsp;<b class="">Also, we think we believe we may have found a minor code error in your model implementation that was preventing our code from running but that we manually fixed.<span class="Apple-converted-space">&nbsp;</span></b>It was an issue identical to the one mentioned in this issue from someone else who had the same problem:&nbsp;<a href="https://github.com/snap-stanford/GEARS/issues/9" id="LPNoLPOWALinkPreview_1" class="">https://github.com/snap-stanford/GEARS/issues/9</a></div><div class="_EReadonly_1 _EType_OWALinkPreview _Entity _EId_OWALinkPreview_1" style="font-family:Helvetica; font-size:12px; font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none"></div><br class="" style="font-family:Helvetica; font-size:12px; font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none"><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><span class="" style="font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt">Would any of you have time to speak with us about these observations? We would be really grateful! We are a bit confused about what we are doing wrong and are hoping you might notice something wrong with our GEARS implementation that we aren\'t spotting! We would also like to share what we think is an error that we found in your code. Our apologies in advance if the latter turns out to be a false alarm.&nbsp;</span><br class=""></div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><br class=""></div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)">Anyway, we look forward to hearing from you at your convenience!</div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><br class=""></div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)">Best,&nbsp;</div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)">Victory, Rac and Ananth</div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><br class=""></div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><br class=""></div><div class="elementToProof" style="font-style:normal; font-variant-caps:normal; font-weight:400; letter-spacing:normal; text-align:start; text-indent:0px; text-transform:none; white-space:normal; word-spacing:0px; text-decoration:none; font-family:Calibri,Arial,Helvetica,sans-serif; font-size:12pt; background-color:rgb(255,255,255)"><span class="" style="font-size:12px; margin:0px; background-color:rgb(255,255,255)"><span class="" style="font-size:15px; font-family:Georgia,serif; margin:0px; background-color:rgb(255,255,255)"><b class="ContentPasted2">---</b></span></span> <div class="" style="font-size:12px; margin:0px; background-color:rgb(255,255,255)"><br class="ContentPasted2"><span class="ContentPasted2" style="font-weight:bold; font-size:15px; font-family:Georgia,serif; margin:0px; background-color:rgb(255,255,255)">Victory Yinka-Banjo (she/her)&nbsp;</span><span class="" style="font-weight:bold; font-size:15px; font-family:&quot;Segoe UI&quot;,&quot;Segoe WP&quot;,&quot;Segoe UI WPC&quot;,Tahoma,Arial,sans-serif; margin:0px; background-color:rgb(255,255,255)"><span class="ContentPasted2" style="font-family:Georgia,serif; margin:0px; background-color:rgb(255,255,255); display:inline!important">|&nbsp;</span><span class="" style="margin:0px; background-color:rgb(255,255,255); display:inline!important"><a href="https://www.linkedin.com/in/victory-yinka-banjo/" title="https://www.linkedin.com/in/victory-yinka-banjo/" class="ContentPasted2" data-loopstyle="link" style="margin:0px"><span class="" style="font-family:Georgia,serif; margin:0px">LinkedIn</span></a></span></span><span class="" style="font-size:15px; font-family:Georgia,serif; margin:0px; background-color:rgb(255,255,255)"></span></div><span class="" style="font-size:14px; margin:0px; background-color:rgb(255,255,255)"><span class="ContentPasted2" style="font-size:15px; font-family:Georgia,serif; margin:0px; background-color:rgb(255,255,255)">Massachusetts Institute of Technology&nbsp;(MIT)</span></span> <div class="" style="font-size:14px; margin:0px; background-color:rgb(255,255,255)"><font face="Georgia, serif" class=""><span class="ContentPasted2" style="font-size:11pt; margin:0px">Co-Director of Undergrad Initiative, MIT Biotech Group</span><br class="ContentPasted2" style="font-size:15px; background-color:rgb(255,255,255)"></font></div><div class="" style="font-size:14px; margin:0px; background-color:rgb(255,255,255)"><font face="Georgia, serif" class=""><span class="ContentPasted2" style="font-size:11pt; margin:0px">Secretary, African Students\' Association&nbsp;</span></font></div><div class="" style="font-size:14px; margin:0px; background-color:rgb(255,255,255)"><font face="Georgia, serif" class=""><span class="ContentPasted2" style="font-size:11pt; margin:0px">Departments of EECS and Biology&nbsp;<span class="ContentPasted2" style="margin:0px; background-color:rgb(255,255,255); display:inline!important">|&nbsp;</span></span></font><span class="ContentPasted2" style="font-size:11pt; font-family:Georgia,serif; margin:0px">Class of 2025&nbsp;</span></div><span class="" style="font-size:14px; margin:0px; background-color:rgb(255,255,255)"><a data-auth="NotApplicable" class="ContentPasted2" style="font-size:15px; font-family:&quot;Segoe UI&quot;,&quot;Segoe WP&quot;,&quot;Segoe UI WPC&quot;,Tahoma,Arial,sans-serif; margin:0px; background-color:rgb(255,255,255)"><span class="" style="font-size:11pt; font-family:Georgia,serif; margin:0px"></span></a><a href="mailto:vybanjo@mit.edu" class="">vybanjo@mit.edu</a></span><span class="ContentPasted2" style="font-size:11pt; font-family:Georgia,serif; margin:0px; background-color:rgb(255,255,255)">&nbsp;| +1 (857) 928-9738</span></div></div></blockquote></div><br class=""></div></body></html>',
      },
      sender: {
        emailAddress: {
          name: "Yusuf Roohani",
          address: "yroohani@stanford.edu",
        },
      },
      from: {
        emailAddress: {
          name: "Yusuf Roohani",
          address: "yroohani@stanford.edu",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Victory M Yinka-Banjo",
            address: "vybanjo@mit.edu",
          },
        },
        {
          emailAddress: {
            name: "Ananth P Shyamal",
            address: "ashyamal@mit.edu",
          },
        },
        {
          emailAddress: {
            name: "Rachit Mukkamala",
            address: "rsmukk@mit.edu",
          },
        },
      ],
      ccRecipients: [
        {
          emailAddress: {
            name: "jure@cs.stanford.edu",
            address: "jure@cs.stanford.edu",
          },
        },
        {
          emailAddress: {
            name: "yhr@cs.stanford.edu",
            address: "yhr@cs.stanford.edu",
          },
        },
        {
          emailAddress: {
            name: "Kexin Huang",
            address: "kexinh@stanford.edu",
          },
        },
      ],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
    {
      "@odata.etag": 'W/"CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpieE"',
      id: "AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEKAAAP9LzBTsYnT6xwROru1J9IAAGFqUdrAAA=",
      createdDateTime: "2023-01-21T15:00:44Z",
      lastModifiedDateTime: "2023-01-21T18:04:46Z",
      changeKey: "CQAAABYAAAAP9LzBTsYnT6xwROru1J9IAAGEpieE",
      categories: [],
      receivedDateTime: "2023-01-21T15:00:45Z",
      sentDateTime: "2023-01-21T15:00:33Z",
      hasAttachments: false,
      internetMessageId: "<1178.910107885.202301211500334184567.0008175294@em.dowjones.com>",
      subject: "Play Smart, Stay Sharp With WSJ Puzzles",
      bodyPreview:
        "Looking for some strategic fun? We challenge you to complete a WSJ puzzle today.‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌ ‌",
      importance: "normal",
      parentFolderId:
        "AQMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5ADBmMTkALgAAA9RR3Rus2ehEg3k-fiLWsgUBAHrWXHAMu9RCpmu1jRHcbAgAAAIBCgAAAA==",
      conversationId:
        "AAQkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQAQAChjgAPTXOZJiK93EwL5vMY=",
      conversationIndex: "AQHZLakjKGOAA9Nc5kmIr3cTAvm8xg==",
      isDeliveryReceiptRequested: null,
      isReadReceiptRequested: false,
      isRead: false,
      isDraft: false,
      webLink:
        "https://outlook.office365.com/owa/?ItemID=AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEKAAAP9LzBTsYnT6xwROru1J9IAAGFqUdrAAA%3D&exvsurl=1&viewmodel=ReadMessageItem",
      inferenceClassification: "other",
      body: {
        contentType: "html",
        content:
          '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="format-detection" content="date=no" style=""><meta name="format-detection" content="address=no" style=""><meta name="format-detection" content="email=no" style=""><meta name="format-detection" content="telephone=no" style=""><meta name="robots" content="noindex,nofollow" style=""><meta content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css"><!--a:link, a:visited, a:hover, a:active{text-decoration:none!important}a[class=penta-link]{color:#001E20;text-decoration:none!important}body, table, td, a p, a, li, blockquote{}td, tr{margin:0;padding:0}table td{border-collapse:collapse}body{width:100%!important;min-width:100%!important}.breakline{width:100%!important;padding-left:0!important;padding-right:0!important}@media only screen and (max-width: 480px) {.mobile-width{width:100%!important}.logo{width:100%!important}.heading{font-size:36px!important;line-height:40px!important}.headline{width:80%!important}.graphic{width:60%!important}.mobile-center{text-align:center!important;margin:0 auto!important}.mobile-top{padding-top:15px!important}.mobile-bottom{padding-bottom:40px!important}.dj-foot-logo{width:69px}.wsj-foot-logo{width:120px}}@media only screen and (max-width: 400px) {.dj-foot-logo{width:60px}.wsj-foot-logo{width:100px}}--></style><style><!--@media only screen and (max-width: 480px) {.mob-side-pad{padding-left:15px!important;padding-right:15px!important}.mobile-top{padding-top:20px!important}.header, .footer{width:100%!important;text-align:left!important}.resImage{display:none!important}.resImage-mobile{display:block!important;visibility:visible!important;text-align:center;margin:0 auto!important}}@media only screen and (max-width: 375px) {.mob-side-pad{padding-left:10px!important;padding-right:10px!important}}--></style></head><body style="margin:0px; padding:0"><img src="http://l.em.dowjones.com/rts/open.aspx?tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" height="1" width="1" style="display:none"> <div style="display:none; font-size:0; line-height:0; max-height:0; max-width:0; width:0; opacity:0; overflow:hidden">Looking for some strategic fun? We challenge you to complete a WSJ puzzle today.‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;</div><table width="100%" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0" class="header" style="background-color:#fff; width:100%; max-width:600px"><tbody><tr></tr></tbody></table><table width="100%" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto; padding:0; max-width:600px"><tbody><tr><td width="420" cellpadding="0" align="center" cellspacing="0" valign="top" style="max-width:180px; padding:18px; margin:0 auto; color:#1e1e1e; font-size:10px; line-height:8px; text-align:center"><font class="mobileTextSmall" face="Helvetica, Arial, sans-serif">To view this email as a web page, click <a href="http://l.em.dowjones.com/rts/go2.aspx?h=558131&amp;tp=i-1NHD-J0-GdP-zaidR-1p-13jz9g-1c-34oe-paliS-l8V2UjsGv9-2LEN1m&amp;x=25723a2568194d6dc82458fbee5b2977" style="color:#22688e">here</a>. <br><br>Membership ID: 995783233563 </font></td></tr><tr><td align="center"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558133&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank"><img src="https://images.dowjones.com/wp-content/uploads/sites/35/2022/01/22001337/wsj-membership-logo.png" width="600" alt="The Wall Street Journal. Your Membership Benefits" class="logo" style="display:block"> </a></td></tr><tr><td align="center" style="background-color:#ffffff"><table width="550" class="mobile-width" align="center" cellpadding="0" cellspacing="0" style="background-color:#ffffff; margin:0 auto; padding:0 20px"><tbody><tr><td align="center" class="mobile-padding" style="font-family:Helvetica,Arial,sans-serif; font-size:16px; color:#000; text-decoration:none!important; background-color:#ffffff"><table cellpadding="0" cellspacing="0" align="center" class="mobile-width" style="margin:0 auto"><tbody><tr><td><table width="100%" cellpadding="0" cellspacing="0" align="center" class="resImage"><tbody><tr><td align="center"><table align="left" cellpadding="0" cellspacing="0" width="240" class="mobile-width"><tbody><tr><td align="left" valign="top"><table cellpadding="0" cellspacing="0" class="mobile-width"><tbody><tr><td align="center" style="padding:30px 0 30px 20px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558134&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener" style="text-decoration:none!important"><img src="https://images.dowjones.com/wp-content/uploads/sites/35/2022/02/10172205/Headline-Play-Smart-Desktop.png" alt="Play Smart, Stay Sharp With WSJ Puzzles" width="220" class="headline" style="display:block; margin:0 auto"> </a></td></tr></tbody></table></td></tr></tbody></table><table align="right" cellpadding="0" cellspacing="0" width="250" class="mobile-width"><tbody><tr><td class="mob-side-pad" valign="middle"><table cellpadding="0" cellspacing="0" valign="middle" class="mobile-width"><tbody><tr><td align="center" style="padding:30px 0 30px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558134&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener" style="text-decoration:none!important"><img src="https://images.dowjones.com/wp-content/uploads/sites/35/2022/02/10171716/puzzle.gif" alt="Graphic" width="230" class="graphic" style="display:block; margin:0 auto; background-color:#fff"> </a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table width="100%" cellpadding="0" cellspacing="0" align="center" class="resImage-mobile" style="display:none"><tbody><tr><td align="center" style="padding:30px 0 15px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558134&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener" style="text-decoration:none!important"><img src="https://images.dowjones.com/wp-content/uploads/sites/35/2022/02/09190924/Headline-Play-Smart.png" alt="Play Smart, Stay Sharp With WSJ Puzzles" width="430" class="headline" style="display:block; margin:0 auto"> </a></td></tr><tr><td align="center" style="padding:15px 0 30px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558134&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener" style="text-decoration:none!important"><img src="https://images.dowjones.com/wp-content/uploads/sites/35/2022/02/10171716/puzzle.gif" alt="Graphic" width="430" class="graphic" style="display:block; margin:0 auto; background-color:#fff"> </a></td></tr></tbody></table></td></tr><tr><td align="center" class="mob-side-pad" style="padding:0 30px; font-family:Helvetica,Arial,sans-serif; color:#000; font-size:17px; line-height:25px; text-align:center; font-weight:400">Looking for some strategic fun? We challenge you to complete a WSJ puzzle today. To help you get started, check out tips on playing our interactive crossword in our puzzle hub. </td></tr><tr><td align="center" style="padding:20px 0"><table width="280" cellpadding="0" cellspacing="0" style="background-color:#484c6c"><tbody><tr><td><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558134&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener" style="text-decoration:none!important"><table align="center" style="margin:0 auto"><tbody><tr><td align="center" style="color:#fff; text-align:center; padding:8px; text-decoration:none; font-size:14px; font-family:Helvetica,Arial,sans-serif; font-weight:600; letter-spacing:1.5px; white-space:nowrap">EXPLORE </td></tr></tbody></table></a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td align="center" style="padding:20px 0 60px"><table width="100%" cellpadding="0" cellspacing="0" align="center" class="mobile-width" style="margin:0 auto; border:solid 1px #000"><tbody><tr><td align="center" class="mob-side-pad" style="padding:40px 100px 15px; font-family:Georgia,\'Times New Roman\',Times,serif; color:#000; font-size:24px; line-height:30px; text-align:center; font-weight:400">How do you feel about your WSJ membership so far? </td></tr><tr><td align="center" style="padding:10px 10px 40px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558135&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD&amp;x=947984ccfdb74beffa79de0eb31f8192ca637c7cf8ac6d0f742e823538b09211" target="_blank" rel="noopener" style="text-decoration:underline!important; color:#000; text-align:center; font-family:Helvetica,Arial,sans-serif; font-size:14px; letter-spacing:2px; font-weight:600; white-space:nowrap">LET US KNOW HOW WE\'RE DOING </a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table width="100%" align="center" cellpadding="0" cellspacing="0"><tbody><tr><td style="text-align:center; height:1px; border-top:1px solid #000">&nbsp; </td></tr></tbody></table></td></tr><tr><td width="100%" cellpadding="0" align="center" cellspacing="0" style="background-color:#ffffff; margin:0 auto; padding:0; padding-top:0; padding-right:10px; padding-bottom:0; padding-left:10px; font-size:14px; font-weight:400; line-height:20px; text-align:center"><table width="100%" cellpadding="0" align="center" cellspacing="0"><tbody><tr><td class="footer" width="100%" bgcolor="#ffffff" cellpadding="0" align="center" cellspacing="0" style="margin:0; padding:5px 15px 15px; background-color:#ffffff"><table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="ffffff" style="background-color:#ffffff"><tbody><tr><td width="100%" cellpadding="0" align="center" cellspacing="0" style="margin:0; padding:0 0px 5px"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tbody><tr valign="top"><td width="58px" cellpadding="0" cellspacing="0" valign="top" style="text-align:left; margin:0; padding:0; padding-top:5px; padding-right:0; padding-bottom:0; padding-left:0"><table border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr valign="top"><td valign="top" width="25" style="text-align:left; margin:0; padding:6px; padding-left:0px; padding-right:3px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558136&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener"><img class="" src="https://images.dowjones.com/wp-content/uploads/sites/35/2020/03/02185343/social-icon-grey-fb.png" alt="Facebook" width="25" height="25" style="border-style:none"></a> </td><td valign="top" width="25" style="text-align:left; margin:0; padding:6px; padding-left:3px; padding-right:2px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558137&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener"><img class="" src="https://images.dowjones.com/wp-content/uploads/sites/35/2020/03/02185345/social-icon-grey-twitter.png" alt="Twitter" width="25" height="25" style="border-style:none"></a> </td><td valign="top" width="25" style="text-align:left; margin:0; padding:6px; padding-left:3px; padding-right:3px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558138&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener"><img class="" src="https://images.dowjones.com/wp-content/uploads/sites/35/2020/03/02185344/social-icon-grey-insta.png" alt="Instagram" width="25" height="25" style="border-style:none"></a> </td></tr></tbody></table></td><td width="290" style="font-size:0; line-height:0">&nbsp; </td><td cellpadding="0" cellspacing="0" valign="top" align="right" style="text-align:right; margin:0; padding:0; padding-top:0; padding-right:0; padding-bottom:0; padding-left:0"><table cellpadding="0" cellspacing="0"><tbody><tr><td align="center"><table cellpadding="0" cellspacing="0"><tbody><tr><td width="86" valign="top"><table cellpadding="0" cellspacing="0"><tbody><tr><td class="hero_image" style="padding-right:6px"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558139&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener"><img class="dj-foot-logo" src="https://images.dowjones.com/wp-content/uploads/sites/35/2018/07/24193035/DJLogo2.png" width="76" alt="Dow Jones" style="border-style:none"></a> </td></tr></tbody></table></td><td width="100" valign="center" style="padding-bottom:5px!important"><table cellpadding="0" cellspacing="0"><tbody><tr><td class="hero_image"><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558140&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD" target="_blank" rel="noopener"><img class="wsj-foot-logo" src="https://images.dowjones.com/wp-content/uploads/sites/35/2019/09/18152338/wsj-logo4.png" width="150" alt="WSJ" style="border-style:none"></a> </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" style="max-width:520px"><tbody><tr><td width="100%" cellpadding="0" align="center" cellspacing="0" height="20"></td></tr><tr><td width="100%" cellpadding="0" align="center" cellspacing="0" class="shortPadWidth" style="max-width:500px; color:#000000; font-size:11px!important; line-height:16px; text-align:center; padding-top:0; padding-bottom:20px; font-family:Helvetica,Arial,sans-serif!important">You are receiving this email because you recently subscribed to The Wall Street Journal. We send you emails during the first few weeks of your membership to ensure you are aware of all of the benefits available to you. <br><a href="http://l.em.dowjones.com/rts/go2.aspx?h=558141&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD&amp;x=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD%7cWSJWELCOME">Unsubscribe</a> | <a href="http://l.em.dowjones.com/rts/go2.aspx?h=558142&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD">Manage Email Preferences</a> | <a href="http://l.em.dowjones.com/rts/go2.aspx?h=558143&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD">Privacy Notice</a> | <a href="http://l.em.dowjones.com/rts/go2.aspx?h=558144&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD">Contact Us</a> | <a href="http://l.em.dowjones.com/rts/go2.aspx?h=558145&amp;tp=i-1NGB-J0-GdP-zaidR-1p-13jz9g-1c-paliS-l8V2UjsGv9-qlXWD">Cookie Notice</a>&nbsp; &nbsp; <br>The Wall Street Journal Online | Attn: Customer Service | 4300 Route 1 North | South Brunswick, NJ 08852 <br><span>©</span>2023 Dow Jones &amp; Company, Inc. All Rights Reserved </td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></body></html>',
      },
      sender: {
        emailAddress: {
          name: "The Wall Street Journal",
          address: "WallStreetJournal@em.dowjones.com",
        },
      },
      from: {
        emailAddress: {
          name: "The Wall Street Journal",
          address: "WallStreetJournal@em.dowjones.com",
        },
      },
      toRecipients: [
        {
          emailAddress: {
            name: "Victory M Yinka-Banjo",
            address: "vybanjo@mit.edu",
          },
        },
      ],
      ccRecipients: [],
      bccRecipients: [],
      replyTo: [],
      flag: {
        flagStatus: "notFlagged",
      },
    },
  ],
};
// TODO: add 64 base code for a generic attachment 
const load = async (attachment) => {
  try {
    const response = await fetch(attachment);
    const data = await response.text();
    console.log(attachment);
  } catch (err) {
    console.error(err);
  }
};

load(attachment.txt);
// GENEREIC_ATTACHMENT = ''

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// function to return the 
const parsedRawEmails = (rawEmailData) => {
  rawEmailData.map((email) => {
    // is this syntactically correct? why is it displaying info this way?
    {
      'senderEmail':email.from.emailAddress.address,
      'senderName':email.from.emailAddress.name,
      'header':email.subject,
      'hasAttachment':email.hasAttachments,

      // not sure if line below is right syntax for function call
      // 'attachment_64base': "data:image/jpeg;base64," + {getAttachment(email.id)},
      'attachment': "data:image/jpeg;base64,"
      'emailID': email.id,
      'content': emailbody.content,
      'links': [], //need to figure out how to filter out the <a></a> from the html content
      'emailURL': email.webLink, 
      'isRead': email.isRead, 
      'isFlagged': email.flag.flagStatus
    }
  }
  // TODO: add a ternary operator or some kind of conditional check so that the attachment entry isn't created unless
  // there is an actual attachment? Can also handle this on the front end side so that the attachment placeholder 
  // is only displayed if the getAttachment func returns more than empty screen, i.e, attachment var is more than just "data:image/jpeg;base64,"
  );
};

router.get("/emails", (req, res) => {
  // make a GET request to Microsoft graph
  // get the JSON data that's returned and store as a constant
  // for now this is just a constant string we have in our back end
  const rawEmailData = GENERIC_EMAILS.value;
  console.log(rawEmailData);
  res.send(parsedRawEmails);
});

// flag incoming emails
router.post("/flag", auth.ensureLoggedIn, (req, res) => {

}
)

// read incoming emails
router.post("/flag", auth.ensureLoggedIn, (req, res) => {

}
)

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

// Functions for later use when the graph API is working:

// GET ATTACHMENT
// const getAttachment = (emailID) => {
//   const options = {
//     authProvider,
//   };
  
//   const client = Client.init(options);
  
//   let attachment = client.api('/me/messages/AAMkAGUzY5QKjAAA=/attachments/AAMkAGUzY5QKjAAABEgAQAMkpJI_X-LBFgvrv1PlZYd8=').get();
//   // /me/messages/{id}/attachments/{id}

//   return attachment.contentBytes
// }


// GET EMAILS
// const options = {
//   authProvider,
// };
// const client = Client.init(options);

// let emails = client
//   .api(
//     "/me/messages/AAMkAGQ5ZmE1OWRhLWEyZjMtNDdjMy05MDkxLWE5ZDdjYjk5MGYxOQBGAAAAAADUUd0brNnoRIN5P34i1rIFBwB61lxwDLvUQqZrtY0R3GwIAAAAAAEMAAAP9LzBTsYnT6xwROru1J9IAAGFqNfpAAA="
//   )
//   .get()
//   .then((emails) => console.log(emails));

// console.log(message);

module.exports = router;
