## La borsa e gli strumenti base

<div class="subtitle">
Dal mercato rionale agli ETF globali
</div>

---

## Cos'è la borsa?

- Immagina un **grande mercato digitale** dove compratori e venditori hanno il proprio stand.
- Ci sono mercati diversi (Borsa Italiana, NYSE, NASDAQ…), ma le **regole di base sono comuni**.
- Un software abbina automaticamente le offerte compatibili.

<div class="visual">
  <div class="market-stands" role="group" aria-label="Stand di mercato collegati a una piattaforma centralizzata">
    <div class="market-stand">
      <div class="stand-label">Borsa Italiana</div>
      <div class="stand-screen">📈 Ordini</div>
      <span>Investitori</span>
    </div>
    <div class="market-stand">
      <div class="stand-label">NYSE</div>
      <div class="stand-screen">💹 Scambi</div>
      <span>Broker</span>
    </div>
    <div class="market-stand">
      <div class="stand-label">NASDAQ</div>
      <div class="stand-screen">🖥️ Tech</div>
      <span>Società</span>
    </div>
  </div>
  <div class="market-connector">
    <span>⬇️</span>
    <span>Motore di matching digitale</span>
    <span>⬇️</span>
  </div>
  <div class="market-stand" style="max-width:320px;">
    <div class="stand-label">Piattaforma</div>
    <div class="stand-screen">⚙️ Prezzo ufficiale</div>
    <span>Ordini abbinati in tempo reale</span>
  </div>
</div>

---

## Come nasce un prezzo

- Ogni ordine indica **quanto** comprare/vendere e a **che prezzo**.
- L'abbinamento dell'ordine migliore di acquisto (**bid**) con quello di vendita (**ask**) genera il prezzo.
- La differenza tra bid e ask è lo **spread**: più è piccolo, più il mercato è liquido.

<div class="visual">
  <svg class="bid-ask-diagram" viewBox="0 0 760 220" role="img" aria-label="Schema bid e ask che converge sul prezzo ufficiale">
    <rect x="30" y="30" width="700" height="160" rx="22" fill="#ffffff" />
    <text x="90" y="80" fill="#27ae60" font-size="32">Bid</text>
    <text x="580" y="80" fill="#e74c3c" font-size="32" text-anchor="end">Ask</text>
    <rect x="120" y="110" width="160" height="40" rx="12" fill="rgba(39, 174, 96, 0.2)" />
    <rect x="480" y="110" width="160" height="40" rx="12" fill="rgba(231, 76, 60, 0.2)" />
    <line x1="280" y1="130" x2="480" y2="130" stroke="#34495e" stroke-width="6" stroke-dasharray="14 12" />
    <polygon points="480,130 450,110 450,150" fill="#34495e" />
    <polygon points="280,130 310,110 310,150" fill="#34495e" />
    <rect x="320" y="90" width="140" height="80" rx="16" fill="#3498db" opacity="0.9" />
    <text x="390" y="120" fill="#ffffff" font-size="26" text-anchor="middle">Prezzo</text>
    <text x="390" y="150" fill="#ffffff" font-size="22" text-anchor="middle">ufficiale</text>
  </svg>
</div>

---

## Il book ordini

- A livello base vediamo solo il **miglior bid** e il **miglior ask**.
- Con servizi avanzati si osservano più livelli → capiamo **quanta liquidità** c'è.
- Utile per evitare di comprare/vendere a prezzi sfavorevoli.

<div class="visual">
  <table class="orderbook-table" aria-label="Esempio di book ordini">
    <thead>
      <tr>
        <th>Livello</th>
        <th>Prezzo</th>
        <th>Quantità</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bid 1</td>
        <td>99,80 €</td>
        <td>120</td>
      </tr>
      <tr>
        <td>Bid 2</td>
        <td>99,60 €</td>
        <td>240</td>
      </tr>
      <tr>
        <td>Bid 3</td>
        <td>99,40 €</td>
        <td>340</td>
      </tr>
      <tr>
        <td>Ask 1</td>
        <td>100,20 €</td>
        <td>150</td>
      </tr>
      <tr>
        <td>Ask 2</td>
        <td>100,40 €</td>
        <td>260</td>
      </tr>
      <tr>
        <td>Ask 3</td>
        <td>100,60 €</td>
        <td>320</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Cosa sono le azioni

- Una **quota di proprietà** di un'azienda.
- Danno diritto a partecipare agli utili (dividendi) e alle decisioni.
- Il loro valore sale o scende in base alle aspettative sul futuro dell'azienda.

<div class="visual">
  <div class="equity-illustration" role="group" aria-label="Schema di un'azienda con azionisti">
    <div class="company">
      <div class="icon">🏢</div>
      <strong>Azienda</strong>
      <p>Valore complessivo</p>
    </div>
    <div class="shareholders">
      <div class="shareholder">👤 25%<br />Azionista A</div>
      <div class="shareholder">👤 25%<br />Azionista B</div>
      <div class="shareholder">👤 25%<br />Azionista C</div>
      <div class="shareholder">👤 25%<br />Tu con 1 azione</div>
    </div>
  </div>
</div>

---

## Cosa sono le obbligazioni

- Sono un **prestito** a uno Stato o a un'azienda.
- Ricevi interessi periodici e, a scadenza, il capitale investito.
- Più la scadenza si avvicina, più il prezzo torna verso il valore di rimborso.

<div class="visual">
  <div class="bond-flow" role="group" aria-label="Flusso di cassa di un'obbligazione">
    <div class="flow-step">
      <div class="icon">💶</div>
      <strong>Oggi</strong>
      <p>Presti capitale</p>
    </div>
    <div class="flow-arrow">➡️</div>
    <div class="flow-step">
      <div class="icon">📅</div>
      <strong>Ogni anno</strong>
      <p>Incassi cedole</p>
    </div>
    <div class="flow-arrow">➡️</div>
    <div class="flow-step">
      <div class="icon">🏁</div>
      <strong>A scadenza</strong>
      <p>Rimborso capitale</p>
    </div>
  </div>
</div>

---

## Applicare la domanda numero zero

- **Obbligazioni sicure** a breve/medio termine → comportamento regolare, facili da modellare.
- **Azioni singole** → oscillazioni elevate, difficile prevederle.
- Da qui l'idea di cercare strumenti **diversificati** e robusti.

<div class="visual">
  <div class="reliability-scale" role="group" aria-label="Scala di affidabilità degli strumenti">
    <div class="scale-markers">
      <span>Più regolare</span>
      <span>Più imprevedibile</span>
    </div>
    <div class="scale-bar">
      <div class="scale-fill"></div>
    </div>
    <div class="scale-markers">
      <strong>Obbligazioni Stato</strong>
      <strong>ETF</strong>
      <strong>Singola azione</strong>
    </div>
  </div>
</div>

---

## Indici: la media del mercato

- Un indice raccoglie molte aziende e **misura la media** del loro andamento.
- Esempi: S&P 500 (USA), MSCI World (globale), FTSE MIB (Italia).
- Guardare l'indice significa osservare l'**economia in miniatura**.

<div class="visual">
  <div class="indices-map" role="img" aria-label="Mappa dei principali indici globali">
    <svg viewBox="0 0 780 320">
      <path d="M120 120 Q 180 40 260 80 T 360 140 T 460 110 T 560 130" fill="none" stroke="#95a5a6" stroke-width="28" stroke-linecap="round" opacity="0.4" />
      <path d="M160 210 Q 220 170 300 190 T 440 200 T 580 180" fill="none" stroke="#95a5a6" stroke-width="24" stroke-linecap="round" opacity="0.4" />
      <circle cx="200" cy="120" r="32" fill="#3498db" />
      <circle cx="360" cy="90" r="32" fill="#9b59b6" />
      <circle cx="520" cy="140" r="32" fill="#27ae60" />
      <text x="200" y="125" fill="#ffffff" font-size="20" text-anchor="middle">FTSE</text>
      <text x="200" y="150" fill="#ffffff" font-size="18" text-anchor="middle">MIB</text>
      <text x="360" y="95" fill="#ffffff" font-size="18" text-anchor="middle">S&amp;P</text>
      <text x="360" y="120" fill="#ffffff" font-size="18" text-anchor="middle">500</text>
      <text x="520" y="145" fill="#ffffff" font-size="18" text-anchor="middle">MSCI</text>
      <text x="520" y="170" fill="#ffffff" font-size="18" text-anchor="middle">World</text>
    </svg>
  </div>
</div>

---

## ETF: l'indice in tasca

- Un ETF replica un indice ma si compra come un'azione.
- Offre **diversificazione immediata** e **costi bassi**.
- Trasparente: sappiamo sempre cosa contiene e quanto costa.

<div class="visual">
  <div class="etf-box" role="group" aria-label="ETF che contiene tante aziende">
    <div class="etf-label">ETF</div>
    <div class="etf-holdings">
      <div class="holding">🏦 Banche</div>
      <div class="holding">🛒 Consumi</div>
      <div class="holding">💻 Tech</div>
      <div class="holding">⚙️ Industria</div>
      <div class="holding">🌱 Green</div>
      <div class="holding">🚚 Logistica</div>
    </div>
  </div>
</div>

---

## Guardiamo i dati con Curvo.eu

- Simulazione su 20 anni di MSCI World.
- Mostra scenari migliori, medi e peggiori: aiuta a **gestire le aspettative**.
- Anche nei momenti difficili, chi ha tenuto l'investimento a lungo termine è stato premiato.

<div class="visual">
  <div class="fan-chart" role="img" aria-label="Scenari di rendimento simulati">
    <svg viewBox="0 0 760 320">
      <rect x="20" y="20" width="720" height="260" rx="20" fill="#ffffff" />
      <path d="M60 220 Q 200 200 320 170 T 700 120" fill="rgba(231, 76, 60, 0.18)" />
      <path d="M60 220 Q 220 180 360 150 T 700 90" fill="rgba(243, 156, 18, 0.22)" />
      <path d="M60 220 Q 240 160 400 120 T 700 60" fill="rgba(46, 204, 113, 0.26)" />
      <polyline points="60,220 240,180 420,150 560,120 700,100" fill="none" stroke="#2980b9" stroke-width="6" stroke-linecap="round" />
      <text x="640" y="80" fill="#27ae60" font-size="22">Scenario ottimistico</text>
      <text x="640" y="120" fill="#f39c12" font-size="22">Scenario medio</text>
      <text x="640" y="150" fill="#e74c3c" font-size="22">Scenario pessimistico</text>
    </svg>
  </div>
</div>
