var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=[{id:`materi-1`,title:`Pengenalan Candlestick Basic`,description:`Memahami anatomi dasar candlestick dan cara membacanya di pasar crypto.`,content:`
# Anatomi Candlestick

Candlestick adalah visualisasi pergerakan harga pada rentang waktu tertentu. Memahami candlestick adalah syarat mutlak sebelum melakukan *scalping* atau *sniper trading*.

## Komponen Utama
Setiap candle memiliki 4 data harga utama, sering disingkat **OHLC**:
* **Open (O):** Harga pembukaan.
* **High (H):** Harga tertinggi yang dicapai.
* **Low (L):** Harga terendah yang dicapai.
* **Close (C):** Harga penutupan.

## Jenis Candle

### 1. Bullish Candle (Hijau)
Menandakan bahwa tekanan beli lebih kuat.
* Terjadi jika **Close > Open**
* Body berwarna hijau (atau putih di chart tradisional).

### 2. Bearish Candle (Merah)
Menandakan bahwa tekanan jual mendominasi.
* Terjadi jika **Close < Open**
* Body berwarna merah (atau hitam).

> **Pro Tip dari Gemini:**
> "Ekor (wick) yang panjang pada sebuah candle menunjukkan adanya *rejection* atau penolakan harga yang sangat kuat. Ini sering kali menjadi sinyal awal terjadinya pembalikan arah (reversal)."

### Contoh Format Tabel

| Pola Reversal | Arah Trend | Kekuatan Sinyal |
| :--- | :---: | :---: |
| Hammer | Bullish | Sedang - Kuat |
| Shooting Star | Bearish | Sedang - Kuat |
| Engulfing | Keduanya | Sangat Kuat |

### Pseudo-code Logika Sederhana
Jika kamu ingin membuat algoritma deteksi, logikanya sangat simpel:
\`\`\`javascript
function isBullish(open, close) {
    if (close > open) {
        return true;
    }
    return false;
}
\`\`\`
`},{id:`materi-2`,title:`Psikologi Trading & Risk Management`,description:`Aturan emas dalam menjaga modal dan mental saat menghadapi volatilitas pasar.`,content:`
# Psikologi Trading

Trading bukanlah sekadar adu strategi, melainkan **adu mental**. Bahkan jika strategi kamu memiliki *win-rate* 80%, kamu tetap bisa rugi besar jika tidak memiliki psikologi yang stabil.

## Musuh Utama Trader

1. **FOMO (Fear of Missing Out):** Ketakutan ketinggalan profit. Membuatmu sering masuk di pucuk harga.
2. **Revenge Trading:** Berusaha "balas dendam" ke pasar setelah kena *Stop Loss*. Biasanya berujung dengan open posisi asal-asalan tanpa analisa.
3. **Over-leveraging:** Menggunakan leverage telalu besar (misal 50x atau 100x) karena serakah ingin cepat kaya.

> "Pasar adalah alat pemindah uang dari orang yang tidak sabaran kepada orang yang sabar." - Warren Buffett

## Aturan Risk Management 1%

Cara paling aman bertahan di market adalah merisikokan maksimal **1% - 2%** dari total modal per transaksi.

**Rumus Sederhana:**
1. Jika modal kamu $1000.
2. Risiko per trade adalah 1% = $10.
3. Artinya, jarak dari *Entry* ke *Stop Loss* kerugiannya maksimal hanya $10.

Dengan sistem ini, kamu harus salah **100 kali berturut-turut** baru uangmu habis. 
`}]}));t((()=>{r(),document.addEventListener(`DOMContentLoaded`,()=>{window.markedKatex&&marked.use(window.markedKatex({throwOnError:!1}));let e=[],t=[],r=null,i=`all`,a=1,o=document.getElementById(`home-view`),s=document.getElementById(`reading-view`),c=document.getElementById(`editor-view`),l=document.getElementById(`settings-view`),u=document.getElementById(`lesson-list`),d=document.getElementById(`add-lesson-btn`),f=document.getElementById(`category-filter`),p=document.getElementById(`settings-btn`),m=document.getElementById(`back-btn`),ee=document.getElementById(`reading-title`),h=document.getElementById(`lesson-content`),g=document.getElementById(`edit-lesson-btn`),_=document.getElementById(`delete-lesson-btn`),v=document.getElementById(`copy-lesson-btn`),y=document.getElementById(`editor-cancel-btn`),b=document.getElementById(`editor-save-btn`),x=document.getElementById(`input-title`),S=document.getElementById(`input-content`),C=document.getElementById(`input-category`),w=document.getElementById(`paste-content-btn`),T=document.getElementById(`select-all-btn`),E=document.getElementById(`insert-line-btn`),D=document.getElementById(`format-green-btn`),O=document.getElementById(`settings-back-btn`),k=document.getElementById(`scale-up-btn`),A=document.getElementById(`scale-down-btn`),j=document.getElementById(`scale-display`),M=document.getElementById(`save-category-btn`),N=document.getElementById(`input-new-category`),P=document.getElementById(`category-list`),F=document.getElementById(`export-btn`),I=document.getElementById(`load-btn`),L=document.getElementById(`load-file`),R=localStorage.getItem(`eduPwaScale`);R&&(a=parseFloat(R),U());let z=localStorage.getItem(`eduPwaLessons`);z?(e=JSON.parse(z),e.forEach(e=>{e.categoryId===`uncategorized`&&(e.categoryId=``)})):n!==void 0&&(e=n.map(e=>({...e,categoryId:``})),V());let B=localStorage.getItem(`eduPwaCategories`);B?(t=JSON.parse(B).filter(e=>e.id!==`uncategorized`),t.sort((e,t)=>e.name.localeCompare(t.name)),H()):H();function V(){localStorage.setItem(`eduPwaLessons`,JSON.stringify(e))}function H(){t.sort((e,t)=>e.name.localeCompare(t.name)),localStorage.setItem(`eduPwaCategories`,JSON.stringify(t))}function U(){document.body.style.zoom=a,document.documentElement.style.setProperty(`--ui-scale`,a),j&&(j.textContent=Math.round(a*100)+`%`),k&&(k.disabled=a>=1),A&&(A.disabled=a<=.6),localStorage.setItem(`eduPwaScale`,a)}function W(){f.innerHTML=`<option value="all">All Categories</option>`,t.forEach(e=>{f.innerHTML+=`<option value="${e.id}">${e.name}</option>`}),f.value=i,C.innerHTML=`<option value="">-- No Category --</option>`,t.forEach(e=>{C.innerHTML+=`<option value="${e.id}">${e.name}</option>`}),C.innerHTML+=`<option value="add_new_category" style="font-weight: bold;">+ Add New Category...</option>`}function G(){u.innerHTML=``;let t=e;if(i!==`all`&&(t=e.filter(e=>e.categoryId===i)),t.sort((e,t)=>e.title.localeCompare(t.title)),t.length===0){u.innerHTML=`<p style="text-align:center; color:#666; padding: 40px 0;">Belum ada materi di kategori ini.</p>`;return}t.forEach((e,t)=>{let n=document.createElement(`li`);n.innerHTML=`
                <div class="lesson-card" data-id="${e.id}">
                    <h3 class="lesson-title">${e.title}</h3>
                </div>
            `,u.appendChild(n)}),document.querySelectorAll(`.lesson-card`).forEach(e=>{e.addEventListener(`click`,()=>{J(e.getAttribute(`data-id`))})})}function K(){o.classList.remove(`active`),s.classList.remove(`active`),c.classList.remove(`active`),l.classList.remove(`active`)}function q(){K(),o.classList.add(`active`),setTimeout(()=>{h.innerHTML=``},300),r=null}function J(t){let n=e.find(e=>e.id===t);if(n){r=n.id,ee.textContent=n.title,window.scrollTo(0,0);try{h.innerHTML=marked.parse(n.content)}catch{h.innerHTML=`<p>Gagal merender Markdown.</p>`}K(),s.classList.add(`active`)}}function Y(){r=null,x.value=``,S.value=``,i===`all`?C.value=``:C.value=i,K(),c.classList.add(`active`)}function X(){if(!r)return;let t=e.find(e=>e.id===r);t&&(x.value=t.title,S.value=t.content,C.value=t.categoryId||``,K(),c.classList.add(`active`))}function Z(){let t=x.value.trim(),n=S.value.trim(),i=C.value;if(!t||!n){alert(`Harap isi semua kolom!`);return}if(r){let a=e.findIndex(e=>e.id===r);a!==-1&&(e[a].title=t,e[a].content=n,e[a].categoryId=i)}else{let r={id:`materi-`+Date.now(),title:t,content:n,categoryId:i};e.push(r)}V(),G(),q()}function te(){K(),l.classList.add(`active`),j&&(j.textContent=Math.round(a*100)+`%`),Q()}function Q(){P.innerHTML=``,t.forEach(e=>{let t=document.createElement(`li`);t.className=`category-item`,t.innerHTML=`
                <span>${e.name}</span>
                <button class="delete-cat-btn" data-id="${e.id}">Hapus</button>
            `,P.appendChild(t)}),document.querySelectorAll(`.delete-cat-btn`).forEach(e=>{e.addEventListener(`click`,e=>{re(e.target.getAttribute(`data-id`))})})}function ne(){let e=N.value.trim();if(!e)return;let n={id:`cat-`+Date.now(),name:e};t.push(n),H(),N.value=``,Q(),W()}function re(n){confirm(`Hapus kategori ini? Materi di dalamnya akan menjadi tanpa kategori dan tampil di halaman depan.`)&&(t=t.filter(e=>e.id!==n),H(),e.forEach(e=>{e.categoryId===n&&(e.categoryId=``)}),V(),i===n&&(i=`all`),Q(),W(),G())}f.addEventListener(`change`,e=>{i=e.target.value,G()});let $=``;C.addEventListener(`focus`,function(){$=this.value}),C.addEventListener(`change`,function(e){if(this.value===`add_new_category`){let e=prompt(`Masukkan nama kategori baru:`);if(e&&e.trim()){let n={id:`cat-`+Date.now(),name:e.trim()};t.push(n),H(),W(),Q(),this.value=n.id,$=n.id}else this.value=$}else $=this.value}),d.addEventListener(`click`,Y),g.addEventListener(`click`,X),_&&_.addEventListener(`click`,()=>{r&&confirm(`Hapus materi ini?`)&&(e=e.filter(e=>e.id!==r),V(),G(),q())}),v&&v.addEventListener(`click`,async()=>{if(!r)return;let t=e.find(e=>e.id===r);if(t)try{await navigator.clipboard.writeText(t.content);let e=v.style.color;v.style.color=`#10B981`,setTimeout(()=>{v.style.color=e},1500)}catch{alert(`Gagal menyalin teks. Pastikan browser memiliki izin clipboard.`)}}),m.addEventListener(`click`,q),y.addEventListener(`click`,q),b.addEventListener(`click`,Z),T&&T.addEventListener(`click`,()=>{S.select(),S.focus()}),E&&E.addEventListener(`click`,()=>{let e=S.selectionStart,t=S.selectionEnd,n=S.value.substring(0,e),r=S.value.substring(t,S.value.length);S.value=n+`
<hr class="red-line">
`+r,S.selectionStart=S.selectionEnd=e+23,S.focus()}),D&&D.addEventListener(`click`,()=>{let e=S.selectionStart,t=S.selectionEnd;if(e===t){alert(`Pilih (blok) teks terlebih dahulu untuk diberi warna hijau bold italic.`);return}let n=`<span class="text-green-bold-italic">${S.value.substring(e,t)}</span>`,r=S.value.substring(0,e),i=S.value.substring(t,S.value.length);S.value=r+n+i,S.selectionStart=e,S.selectionEnd=e+n.length,S.focus()}),w&&w.addEventListener(`click`,async()=>{try{let e=await navigator.clipboard.readText(),t=S.selectionStart,n=S.selectionEnd,r=S.value.substring(0,t),i=S.value.substring(n,S.value.length);S.value=r+e+i,S.selectionStart=S.selectionEnd=t+e.length,S.focus()}catch{alert(`Gagal membaca clipboard. Berikan izin pada browser atau paste secara manual (Ctrl+V / Cmd+V).`)}}),p.addEventListener(`click`,te),O.addEventListener(`click`,q),k.addEventListener(`click`,()=>{a<1&&(a=Math.min(1,a+.1),U())}),A.addEventListener(`click`,()=>{a>.6&&(a-=.1,U())}),M.addEventListener(`click`,ne),F.addEventListener(`click`,()=>{let n=`data:text/json;charset=utf-8,`+encodeURIComponent(JSON.stringify({lessons:e,categories:t,scale:a},null,2)),r=document.createElement(`a`);r.setAttribute(`href`,n);let i=new Date,o=`${i.getFullYear()}${(i.getMonth()+1).toString().padStart(2,`0`)}${i.getDate().toString().padStart(2,`0`)}`;r.setAttribute(`download`,`mdtext_backup_${o}.json`),document.body.appendChild(r),r.click(),r.remove()}),I.addEventListener(`click`,()=>{L.click()}),L.addEventListener(`change`,n=>{let r=n.target.files[0];if(!r)return;let o=new FileReader;o.onload=function(n){try{let r=JSON.parse(n.target.result);r.lessons&&Array.isArray(r.lessons)?confirm(`Data saat ini akan tertimpa dengan data dari file backup. Lanjutkan?`)&&(e=r.lessons,t=r.categories||[],r.scale&&(a=parseFloat(r.scale),U()),V(),H(),i=`all`,W(),Q(),G(),alert(`Data berhasil di-load!`)):alert(`Format file tidak valid. Pastikan file backup berasal dari aplikasi ini.`)}catch{alert(`Gagal membaca file JSON. File mungkin korup.`)}L.value=``},o.readAsText(r)}),W(),G()})}))();