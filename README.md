# Esercizio "React Router Store"

## Obiettivo

Creare il **frontend** di un **mini e-commerce** e le sue pagine principali usando **"Fake Store API"** (https://fakestoreapi.com/) come backend fittizio per simulare i dati dei prodotti.

### Passaggi

1. Installiamo **React Router DOM**: `npm i react-router-dom`.

2. Creare almeno 3 pagine principali:

    1. **Homepage** (con un messaggio di benvenuto o immagine promozionale)

    2. **Chi siamo**

    3. **Prodotti** (che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)

3. Implementare una **navbar** visibile in tutte le pagine per navigare tra di esse.

### Bonus

1. Centralizzare la **navbar** usando un componente **Layout**.

2. Gestire la classe **active** per i link attivi nella **navbar**.



<br />



# Giorno 2

## Obiettivo

Completare il routing aggiungendo la pagina di dettaglio del singolo prodotto.

### Passaggi

1. Rendere cliccabile ogni prodotto nella pagina dei prodotti usando `<Link>`.

2. Aggiungere la pagina di dettaglio per ogni prodotto, prendendo le informazioni da https://fakestoreapi.com/products/:id

3. Configurare il routing dinamico per leggere l’id del prodotto dall'URL.

### Bonus

1. Aggiungere nella pagina di dettaglio dei pulsanti per navigare al prodotto precedente o successivo usando `useNavigate()` programmaticamente.

2. Gestire la **pagina 404** creando un **componente 404** e usandolo nella **rotta catch all**.

3. Gestire lo **stato di caricamento della pagina** mentre si aspetta la risposta alla chiamata AJAX.