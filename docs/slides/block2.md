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
<div class="visual-wrapper market-diagram">
  <div class="market-ring">
    <div class="market-node buy">Acquirente A<br><small>Compra 50 titoli a 10,02 €</small></div>
    <div class="market-node buy">Acquirente B<br><small>Compra 20 titoli a 10,01 €</small></div>
    <div class="market-node buy">Acquirente C<br><small>Compra 80 titoli a 10,00 €</small></div>
  </div>
  <div class="market-hub">
    <strong>Matching engine</strong>
    <span>abbina ordini compatibili in millisecondi</span>
  </div>
  <div class="market-ring">
    <div class="market-node sell">Venditore X<br><small>Vende 40 titoli a 10,03 €</small></div>
    <div class="market-node sell">Venditore Y<br><small>Vende 60 titoli a 10,04 €</small></div>
    <div class="market-node sell">Venditore Z<br><small>Vende 100 titoli a 10,05 €</small></div>
  </div>
</div>
</div>

---

## Come nasce un prezzo

- Ogni ordine indica **quanto** comprare/vendere e a **che prezzo**.
- L'abbinamento dell'ordine migliore di acquisto (**bid**) con quello di vendita (**ask**) genera il prezzo.
- La differenza tra bid e ask è lo **spread**: più è piccolo, più il mercato è liquido.

<div class="visual">
<div class="visual-wrapper bid-ask-diagram">
  <div class="bid-column">
    <h4>Bid (domanda)</h4>
    <div class="bid-row"><span>10,02 €</span><span>+ 50 azioni</span></div>
    <div class="bid-row"><span>10,01 €</span><span>+ 20 azioni</span></div>
    <div class="bid-row"><span>10,00 €</span><span>+ 80 azioni</span></div>
  </div>
  <div class="price-arrow">
    <div>⬌</div>
    <strong>Prezzo ufficiale 10,03 €</strong>
    <div>⬌</div>
  </div>
  <div class="bid-column">
    <h4>Ask (offerta)</h4>
    <div class="bid-row"><span>10,03 €</span><span>− 40 azioni</span></div>
    <div class="bid-row"><span>10,04 €</span><span>− 60 azioni</span></div>
    <div class="bid-row"><span>10,05 €</span><span>− 100 azioni</span></div>
  </div>
</div>
</div>

---

## Il book ordini

- A livello base vediamo solo il **miglior bid** e il **miglior ask**.
- Con servizi avanzati si osservano più livelli → capiamo **quanta liquidità** c'è.
- Utile per evitare di comprare/vendere a prezzi sfavorevoli.

<div class="visual">
<div class="visual-wrapper orderbook-table">
  <div class="orderbook-header">
    <div>Livello</div>
    <div>Prezzo</div>
    <div>Quantità</div>
    <div>Lato</div>
  </div>
  <div class="orderbook-rows">
    <div class="orderbook-row best">
      <div>1</div>
      <div>10,03 €</div>
      <div>40</div>
      <div>Ask</div>
    </div>
    <div class="orderbook-row">
      <div>2</div>
      <div>10,04 €</div>
      <div>60</div>
      <div>Ask</div>
    </div>
    <div class="orderbook-row">
      <div>1</div>
      <div>10,02 €</div>
      <div>50</div>
      <div>Bid</div>
    </div>
    <div class="orderbook-row">
      <div>2</div>
      <div>10,01 €</div>
      <div>20</div>
      <div>Bid</div>
    </div>
  </div>
</div>
</div>

---

## Cosa sono le azioni

- Una **quota di proprietà** di un'azienda.
- Danno diritto a partecipare agli utili (dividendi) e alle decisioni.
- Il loro valore sale o scende in base alle aspettative sul futuro dell'azienda.

<div class="visual">
<div class="visual-wrapper equity-cards">
  <div class="equity-card">
    <div class="icon">🏢</div>
    <strong>Quota di proprietà</strong>
    <p>Ogni azione è un pezzetto dell'azienda: cresci con lei.</p>
  </div>
  <div class="equity-card">
    <div class="icon">💶</div>
    <strong>Dividendi</strong>
    <p>Se l'azienda genera utili li distribuisce periodicamente agli azionisti.</p>
  </div>
  <div class="equity-card">
    <div class="icon">🗳️</div>
    <strong>Diritti di voto</strong>
    <p>Puoi partecipare alle decisioni nelle assemblee societarie.</p>
  </div>
</div>
</div>

---

## Cosa sono le obbligazioni

- Sono un **prestito** a uno Stato o a un'azienda.
- Ricevi interessi periodici e, a scadenza, il capitale investito.
- Più la scadenza si avvicina, più il prezzo torna verso il valore di rimborso.

<div class="visual">
<div class="visual-wrapper bond-flow">
  <div class="bond-step">
    <div>💼</div>
    <strong>Presti capitale</strong>
    <p>Consegni 1.000 € allo Stato o all'azienda.</p>
  </div>
  <div class="bond-arrow">➡️</div>
  <div class="bond-step">
    <div>📅</div>
    <strong>Incassi cedole</strong>
    <p>Ricevi interessi periodici concordati.</p>
  </div>
  <div class="bond-arrow">➡️</div>
  <div class="bond-step">
    <div>🔁</div>
    <strong>Rimborso finale</strong>
    <p>Alla scadenza rientra il capitale iniziale.</p>
  </div>
</div>
</div>

---

## Applicare la domanda numero zero

- **Obbligazioni sicure** a breve/medio termine → comportamento regolare, facili da modellare.
- **Azioni singole** → oscillazioni elevate, difficile prevederle.
- Da qui l'idea di cercare strumenti **diversificati** e robusti.

<div class="visual">
<div class="visual-wrapper reliability-scale">
  <div class="scale-track"></div>
  <div class="scale-point safe">Obbligazioni Stato</div>
  <div class="scale-point moderate">ETF diversificato</div>
  <div class="scale-point risky">Singola azione</div>
</div>
</div>

---

## Indici: la media del mercato

- Un indice raccoglie molte aziende e **misura la media** del loro andamento.
- Esempi: S&P 500 (USA), MSCI World (globale), FTSE MIB (Italia).
- Guardare l'indice significa osservare l'**economia in miniatura**.

<div class="visual">
<div class="visual-wrapper index-map">
  <svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="600" height="240" rx="32" fill="rgba(52,152,219,0.08)" stroke="rgba(52,152,219,0.2)" stroke-width="2" />
    <path d="M120 110 C160 70 220 60 250 90 C280 120 320 120 360 90 C400 60 460 70 500 110" fill="none" stroke="rgba(46,204,113,0.4)" stroke-width="28" stroke-linecap="round" />
    <circle cx="150" cy="120" r="24" fill="#3498db" opacity="0.85" />
    <circle cx="260" cy="100" r="30" fill="#1abc9c" opacity="0.85" />
    <circle cx="360" cy="120" r="26" fill="#9b59b6" opacity="0.85" />
    <circle cx="470" cy="130" r="28" fill="#e67e22" opacity="0.85" />
    <text x="140" y="196" fill="#2c3e50" font-size="22" font-weight="600">USA</text>
    <text x="240" y="180" fill="#2c3e50" font-size="22" font-weight="600">Europa</text>
    <text x="340" y="200" fill="#2c3e50" font-size="22" font-weight="600">Giappone</text>
    <text x="450" y="186" fill="#2c3e50" font-size="22" font-weight="600">Emergenti</text>
  </svg>
  <div class="markers">
    <span>Indici = medie ponderate delle aziende</span>
  </div>
</div>
</div>

---

## ETF: l'indice in tasca

- Un ETF replica un indice ma si compra come un'azione.
- Offre **diversificazione immediata** e **costi bassi**.
- Trasparente: sappiamo sempre cosa contiene e quanto costa.

<div class="visual">
<div class="visual-wrapper etf-box">
  <div class="etf-layer">
    <strong>Dentro</strong>
    <p>Decine o centinaia di aziende replicate dall'indice.</p>
  </div>
  <div class="etf-layer">
    <strong>ETF</strong>
    <p>Un unico prodotto quotato che segue fedelmente l'indice.</p>
  </div>
  <div class="etf-layer">
    <strong>Per te</strong>
    <p>Comprando una quota ottieni diversificazione e costi bassi.</p>
  </div>
</div>
</div>

---

## Guardiamo i dati con Curvo.eu

- Simulazione su 20 anni di MSCI World.
- Mostra scenari migliori, medi e peggiori: aiuta a **gestire le aspettative**.
- Anche nei momenti difficili, chi ha tenuto l'investimento a lungo termine è stato premiato.

<div class="visual">
<div class="visual-wrapper fan-chart">
  <svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fanBest" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(46,204,113,0.25)" />
        <stop offset="100%" stop-color="rgba(46,204,113,0.55)" />
      </linearGradient>
      <linearGradient id="fanMid" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(52,152,219,0.2)" />
        <stop offset="100%" stop-color="rgba(52,152,219,0.45)" />
      </linearGradient>
      <linearGradient id="fanWorst" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="rgba(231,76,60,0.15)" />
        <stop offset="100%" stop-color="rgba(231,76,60,0.4)" />
      </linearGradient>
    </defs>
    <path d="M60 220 L60 180 C160 160 220 140 320 120 C420 110 500 100 580 90 L580 220 Z" fill="url(#fanBest)" />
    <path d="M60 220 L60 200 C160 185 220 170 320 150 C420 135 500 125 580 120 L580 220 Z" fill="url(#fanMid)" />
    <path d="M60 220 L60 210 C160 205 220 200 320 190 C420 182 500 176 580 172 L580 220 Z" fill="url(#fanWorst)" />
    <polyline points="60,210 320,150 580,120" fill="none" stroke="#2c3e50" stroke-width="3" stroke-dasharray="12 10" />
    <text x="60" y="244" fill="#2c3e50" font-size="18">0</text>
    <text x="300" y="244" fill="#2c3e50" font-size="18">10 anni</text>
    <text x="560" y="244" fill="#2c3e50" font-size="18">20 anni</text>
  </svg>
  <div class="fan-legend">
    <span class="best">Scenario ottimistico</span>
    <span class="mid">Scenario medio</span>
    <span class="worst">Scenario difficile</span>
  </div>
</div>
</div>
