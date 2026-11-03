# Blog Express

Esercizio Boolean

Server Express dimostrativo per il routing CRUD dei post e la pubblicazione di un asset statico.

## Setup

```sh
npm install
npm run dev
```

Il server è disponibile su `http://localhost:3000`.

## Rotte

| Metodo | URL | Risposta |
| --- | --- | --- |
| GET | `/` | `Server del mio blog` |
| GET | `/test.html` | Pagina HTML statica di prova |
| GET | `/posts` | `Lista dei post` |
| GET | `/posts/1` | `Dettaglio del post 1` |
| POST | `/posts` | `Creazione di un nuovo post` |
| PUT | `/posts/1` | `Modifica del post 1` |
| DELETE | `/posts/1` | `Cancellazione del post 1` |

## Test con Postman

Importa in Postman la collection `postman/express-blog-routing.postman_collection.json` ed esegui le richieste dopo aver avviato il server.

## Asset statico

Apri [http://localhost:3000/test.html](http://localhost:3000/test.html).
