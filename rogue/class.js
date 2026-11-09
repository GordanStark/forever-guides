// Rogue class hooks for the shared Forever guide app.js
(function(){
function rotFor(l,W){const a=[];
 a.push('<b>Stealth</b>, get behind the mob <span class="src">Subtlety · Ambush</span>');
 if(l>=22)a.push('<b>Premeditation</b> (2 free Combo Points)');
 a.push(l>=18?'Open with <b>Ambush</b> (dagger in main hand)':(l>=4?'Strong mob: open with <b>Backstab</b> (dagger); otherwise just walk up':'Walk up and attack'));
 a.push('Build with <b>Sinister Strike</b>');
 a.push('<b>Eviscerate</b> on a weakened mob'+(l>=10?'; <b>Slice and Dice</b> on a high-health one':''));
 if(l>=10)a.push('Next mob while <b>Remorseless Attacks</b> is up');
 if(l>=27)a.push('<b>Ghostly Strike</b> lets the next Ambush skip Stealth');
 if(l>=22)a.push('Bad pull: <b>Vanish</b>'+(l>=8?' · Evasion':''));else if(l>=8)a.push('Bad pull: <b>Evasion</b>'+(l>=10?' · Sprint':''));
 if(l>=26)a.push('Dangerous mob: Cheap Shot'+(l>=30?', then Kidney Shot':''));
 return `<ol>${a.map(x=>'<li>'+x+'</li>').join('')}</ol><span class="src">wowforever.be</span>`}
function advice(l,W){return l<18?'Before Ambush (18): Sinister Strike and Eviscerate; Backstab from Stealth on strong mobs only.':'Ambush build: Stealth, Ambush, Sinister Strike, Eviscerate, next mob.'}
const SH={'Sinister Strike':'Sinister Strike','Slice and Dice':'Slice & Dice','Premeditation':'Premedi-tation','Ghostly Strike':'Ghostly Strike','Kidney Shot':'Kidney Shot','Cheap Shot':'Cheap Shot','Hearthstone':'Hearth-stone','Pick Pocket':'Pick Pocket','Eviscerate':'Evisc-erate'};
function wfix(c,l,W){return c}
function macroUpd(l){}
window.K={prefix:'rog',modeKey:'spec',modes:['amb'],rotFor,advice,SH,wfix,
 barLab:{top:['Top','click · escapes and interrupts'],mid:['Middle','keys 1-7 · pressed constantly'],bot:['Bottom','out of combat'],aur:['Utility','openers and cooldowns']},
 iconAlias:null,label:null,macroUpd,
 wnote:{amb:'Ambush build: a dagger in the main hand; Ambush, Backstab and Ghostly Strike (180% with a dagger) all want it (wowforever.be).'}};
})();
