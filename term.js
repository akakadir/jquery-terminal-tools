// status: fixed 
//akakadir.online

$.terminal.new_formatter([/\{\{\s*([^|\s]+)\s*(?:\|\s*([^\s}]+)\s*)?\}\}/g,'[[;$2;;fa fa-$1;] ]']);
$('body').terminal({

iam: function(a){
if(a.length <= 16) {
this.echo('username changed to ' + '[[;#fff;]' + a + ']')
this.set_prompt('[[;#fff;]' + a +'@localhost:~$] ')
} else {
this.echo('[[;#fff;]Syntax Error: invalid or > 16]')
}
},

cdn: function(a, b){
$.ajaxSetup({async: false})
$.get('https://api.cdnjs.com/libraries?fields=version,filename&search='+b, function(x) {
f9 = ''
$.each(x.results, function(i, value) { 
f9 = f9+'- '+value['name']+' @ '+value['version']+' ./'+value['filename']+'\n'+value['latest']+'\n';
});
}).fail(function() {
err = ""
this(err)
});
if(a === '-s'){
this.echo(f9)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

viewrepo: function(a, b){
$.ajaxSetup({async: false});
$.get('https://api.github.com/repos/'+b, function(x){
f1 = x.name
f2 = x.id
f3 = x.owner.login
f4 = x.owner.avatar_url
f5 = x.watchers
f6 = x.forks
f7 = x.size
f8 = x.svn_url
})
.fail(function() {
err = ""
this(err)
});
if(a === '-p'){
this.echo('ids: '+f1+' - '+f2)
this.echo($('<span>author: '+f3+' </span><img width=15 height=15 src='+f4+'></img>'))
this.echo('{{ eye }} '+f5+' {{ code-fork }} '+f6+' {{ box }} '+f7+'kB')
this.echo('.zip: '+f8+'/zipball/master')
this.echo('.tar.gz: '+f8+'/tarball/master')
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

listrepos: function(a, b){
$.ajaxSetup({async: false})
$.get('https://api.github.com/users/'+b+'/repos?per_page=10000', function(x) {
f9 = ''
$.each(x, function(i, value) { 
f9 = f9+value['name']+'\n';
});
}).fail(function() {
err = ""
this(err)
});
if(a === '-u'){
this.echo(f9)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

whois: function(a, b){
$.ajaxSetup({async: false})
$.get('https://whois.azurewebsites.net/api/whois/' +b, function(x){
f10 = x.Raw
});
if(a === '-q'){
this.echo(f10.replace(/\%/g, '#'))
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

torrent: function(a, b){
$.ajaxSetup({async: false})
$.get('https://torrents-api.ryukme.repl.co/api/'+b.replace(/\-/g, ' '), function(x) {
f11 = ''
$.each(x, function(i, value) { f11 = f11+value['Name']+' '+value['Size']+'\n'+value['Url']+'\n';
});
}).fail(function() {
err = ""
this(err)
});
if(a === '-s'){
this.echo(f11.replace(/\undefined\n/g, '').replace('undefined', '[[;#fff;]Syntax Error: 404, invalid or missing.]'))
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

info: function(a){
$.ajaxSetup({async: false})
$.get('https://cloudflare.com/cdn-cgi/trace', function(x){
f12 = x.replace(/\=/g, ': ')
});
if(a === '-d'){
this.echo(f12)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

weather: function(a, b){
$.ajaxSetup({async: false})
$.get('//wttr.in/'+b+'?ATm0', function(x){
f13 = x
})
.fail(function() {
err = ""
this(err)
});
if(a === '-l'){
this.echo(f13)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

crypto: function(a){
$.ajaxSetup({async: false})
$.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=1&sparkline=false', function(x) {
f20 = ''
f21 = ''
f22 = ''
$.each(x, function(i, value) { 
f20 = value['id']+'/'+value['symbol']+': '+value['current_price']+'$';
f21 = ' '+'[[;#0F0;]+'+value['price_change_percentage_24h']+']\n';
f22 = f20+f21.replace(/\+-/g, '[[;#F00;]-')+'[[;#888;]'+f22;
});
})
if(a === '-i'){
this.echo(f22)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

ytdl: function(a, b, c){
$.ajaxSetup({async: false})
$.get('https://youtube.michaelbelgium.me/api/converter/convert?url=https://youtu.be/'+b+'&api_token=kv0DdoJyqHI0tFzqmeIjb7k13LIVOaSBXAmYmYZQN92HKy3r0ahssItOIqli&format='+c, function(x){
f23 = x.title;
f24 = 'https://i3.ytimg.com/vi/'+b+'/hqdefault.jpg'
f25 = x.file;
});
if(a === '-v'){
this.echo('title: '+f23)
this.echo('cover: '+f24)
this.echo('file: '+f25)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

sh: function(a){
$.ajaxSetup({async: false})
$.get('https://is.gd/create.php?format=simple&url=www.example.com', function(x){
f13 = x
})
.fail(function() {
err = ""
this(err)
});
if(a === '-l'){
this.echo(f13)
} else {
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
}
},

date: function(){
var a = new Date();
var b = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
var c = Intl.DateTimeFormat().resolvedOptions().timeZone;
var d = {weekday:'short', year:'numeric', month:'short', day:'numeric'};
this.echo(a.toLocaleDateString(undefined,d)+' '+b+' at '+c)
},

password: function(c){
var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var b = c;
var d = '';
for (var i=0; i<b; i++) {
var e = Math.floor(Math.random() * a.length);
d += a.substring(e,e+1)};
if(c <= 32) {
return d;
} else {
this.echo("[[;#fff;]Syntax Error: invalid or > 32]");
}
},

shutdown: function(){
window.location.replace("//akakadir.online")
},

help: function(){
this.echo($('<br><span>for help => <a href=help.html target=_blank>$/docs/help</a></span><br><span>for source => <a href=source.html target=_blank>$/docs/source</a></span>'))
}

},{
exceptionHandler: function(){
this.echo('[[;#fff;]Syntax Error: 404, invalid or missing.]')
},
greetings: '[[;#fff;]//terminal] [[i;#fefefe;]vanilla]' + '\nlast update {{ history | white }} 04-12-23' + '\ntype [[;#fff;]help] to see documentations',
prompt: '[[;#fff;]guest@localhost:~$] ',
onCommandNotFound: function(){
this.echo('[[;#fff;]Syntax Error: 404, Command not found.]')
},
checkArity: false,
autocompleteMenu: true,
completion: ['iam', 'help', 'cdn', 'weather', 'torrent', 'whois', 'info', 'crypto', 'ytdl', 'listrepos', 'viewrepo', 'password', 'date', 'shutdown']
});