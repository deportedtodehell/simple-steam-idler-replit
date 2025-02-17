const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 440, 570, 714010, 243470, 1172470, 1085660, 578080, 1222670, 304930,
  236390, 230410, 1599340, 2713070, 428180, 577940, 389430, 1962663, 238960,
  438100, 2073850, 552990, 905370, 1449850, 2357570, 1665460, 1677740, 1928420,
  1782210, 1997040, 1049590, 216150,];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


 var username2 = process.env.username2;
 var password2 = process.env.password2;
 var shared_secret2 = process.env.shared2;

 var games2 = [730, 570, 440, 1222670, 578080, 1665460, 1049590, 1928420, 109600, 1172470,
               714010, 291550, 766570, 236390, 230410, 933110, 397900, 386180, 702320,
               238960, 1286830, 1677740, 2073850, 1085660, 335240, 304930, 1782210, 1997040,
               1714320, 438100, 1599340, 8500];  // Enter here AppIDs of the needed games
 var status2 = 1;  // 1 - online, 7 - invisible


 user2 = new steamUser();
 user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
 user2.on('loggedOn', () => {
 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
 	user2.setPersona(status2);               
 	user2.gamesPlayed(games2);
 });


 var username3 = process.env.username3;
 var password3 = process.env.password3;
 var shared_secret3 = process.env.shared3;

 var games3 = [730, 570, 440, 1222670, 578080, 1665460, 1049590, 1928420, 109600, 1172470,
               714010, 291550, 766570, 236390, 230410, 933110, 397900, 386180, 702320,
               238960, 1286830, 1677740, 2073850, 1085660, 335240, 304930, 1782210, 1997040,
               1714320, 438100, 1599340, 8500];  // Enter here AppIDs of the needed games
 var status3 = 1;  // 1 - online, 7 - invisible


 user3 = new steamUser();
 user3.logOn({"accountName": username3, "password": password3, "twoFactorCode": steamTotp.generateAuthCode(shared_secret3)});
 user3.on('loggedOn', () => {
 	if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
 	user3.setPersona(status3);               
 	user3.gamesPlayed(games3);
 });


 var username4 = process.env.username4;
 var password4 = process.env.password4;
 var shared_secret4 = process.env.shared4;

 var games4 = [730, 570, 440, 1222670, 578080, 1665460, 1049590, 1928420, 109600, 1172470,
               714010, 291550, 766570, 236390, 230410, 933110, 397900, 386180, 702320,
               238960, 1286830, 1677740, 2073850, 1085660, 335240, 304930, 1782210, 1997040,
               1714320, 438100, 1599340, 8500];  // Enter here AppIDs of the needed games
 var status4 = 1;  // 1 - online, 7 - invisible


 user4 = new steamUser();
 user4.logOn({"accountName": username4, "password": password4, "twoFactorCode": steamTotp.generateAuthCode(shared_secret4)});
 user4.on('loggedOn', () => {
 	if (user4.steamID != null) console.log(user4.steamID + ' - Successfully logged on');
 	user4.setPersona(status4);               
 	user4.gamesPlayed(games4);
 });


 var username5 = process.env.username5;
 var password5 = process.env.password5;
 var shared_secret5 = process.env.shared5;

 var games5 = [730, 570, 440, 1222670, 578080, 1665460, 1049590, 1928420, 109600, 1172470,
               714010, 291550, 766570, 236390, 230410, 933110, 397900, 386180, 702320,
               238960, 1286830, 1677740, 2073850, 1085660, 335240, 304930, 1782210, 1997040,
               1714320, 438100, 1599340, 8500];  // Enter here AppIDs of the needed games
 var status5 = 1;  // 1 - online, 7 - invisible


 user5 = new steamUser();
 user5.logOn({"accountName": username5, "password": password5, "twoFactorCode": steamTotp.generateAuthCode(shared_secret5)});
 user5.on('loggedOn', () => {
 	if (user5.steamID != null) console.log(user5.steamID + ' - Successfully logged on');
 	user5.setPersona(status5);               
 	user5.gamesPlayed(games5);
 });


