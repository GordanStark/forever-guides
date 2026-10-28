// Hunter class hooks for the shared Forever guide app.js
(function(){
const WN={bm:'Beast Mastery',mm:'Marksmanship'};
function rotFor(l,W){const a=[];
 a.push('<b>'+(l>=10?'Aspect of the Hawk':l>=4?'Aspect of the Monkey':'Auto Shot')+'</b> up <span class="src">'+WN[W]+'</span>');
 if(l>=6)a.push("<b>Hunter's Mark</b> before the pull"+(l>=10?', then send the pet':''));
 if(l>=4)a.push('<b>Serpent Sting</b>');
 a.push('<b>Auto Shot</b> (stand still 0.5 sec)');
 if(l>=20)a.push('<b>Aimed Shot</b> on CD');
 if(W==='bm'&&l>=25)a.push('<b>Summon Hawk</b> on CD (shares CD with Arcane Shot); keep two up');
 else if(l>=6)a.push('<b>Arcane Shot</b> when mana allows');
 if(l>=1)a.push('Too close: Raptor Strike'+(l>=12?' · Wing Clip':'')+(l>=20?' · Disengage':''));
 if(l>=12)a.push('Pet low: Mend Pet (Top 1)');
 if(W==='bm'&&l>=30)a.push('Intimidation (Top 7) to stun or peel');
 if(W==='bm'&&l>=40)a.push('Bestial Wrath (Aspect 5) on the hardest enemy');
 if(W==='mm'&&l>=34)a.push('Trueshot Aura up (party ranged attack power)');
 if(l>=30)a.push('Bad pull: Feign Death');
 return `<ol>${a.map(x=>'<li>'+x+'</li>').join('')}</ol><span class="src">WoW Forever DB</span>`}
function advice(l,W){return W==='mm'?'MM alt: Sting, Aimed Shot, Auto Shot; Arcane Shot has its own cooldown, so use it when mana allows (WoW Forever DB).':'BM: the pet tanks; mark, pet, sting, shoot.'}
const SH={"Hunter's Mark":"Hunter's Mark",'Serpent Sting':'Serpent Sting','Concussive Shot':'Concus. Shot','Aspect of the Monkey':'Monkey','Aspect of the Hawk':'Hawk','Aspect of the Cheetah':'Cheetah','Aspect of the Pack':'Pack','Freezing Trap':'Freezing Trap','Immolation Trap':'Immol. Trap','Explosive Trap':'Explos. Trap','Frost Trap':'Frost Trap','Feign Death':'Feign Death','Intimidation':'Intimi-dation','Bestial Wrath':'Bestial Wrath','Summon Hawk':'Summon Hawk','Hearthstone':'Hearth-stone','Trueshot Aura':'Trueshot','Sniper Shot':'Sniper Shot','Track Beasts':'Track Beasts'};
function wfix(c,l,W){if(W==='mm'){if(c.mid[3]&&c.mid[3].n==='Summon Hawk')c.mid[3]={n:'Arcane Shot',u:0};
 c.top[6]=l>=34?{n:'Trueshot Aura',u:1}:null;c.aur[4]=l>=49?{n:'Sniper Shot',u:1}:null}return c}
function macroUpd(l){}
window.K={prefix:'hun',modeKey:'spec',modes:['bm','mm'],rotFor,advice,SH,wfix,
 barLab:{top:['Top','click · pet care and escapes'],mid:['Middle','keys 1-7 · pressed constantly'],bot:['Bottom','pet and travel · out of combat'],aur:['Aspect Bar','aspects, tracking, traps']},
 iconAlias:null,label:null,macroUpd,
 wnote:{bm:'BM main: the highest damage bow, gun or crossbow you can find; your pet inherits your crit and attack power (WoW Forever DB).',mm:'MM alt: same ranged weapon; Intellect counts about as much as Agility once Careful Aim is 5/5 (WoW Forever DB).'}};
})();
