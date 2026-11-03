# Blog Express

Esercizio Boolean

Server Express 5 con rotte CRUD dimostrative e consultazione/cancellazione dei post tramite MySQL.

## Setup

```sh
pnpm install
cp .env.example .env
pnpm dev
```

Il server è disponibile su `http://localhost:3000`.

## Database

Crea il database `blog` e importa lo schema e i dati di esempio da `db/blog_db.sql`. Puoi usare il client MySQL così:

```sh
mysql -u root -p blog < db/blog_db.sql
```

Configura `.env` con `DB_HOST` (default `localhost`), `DB_PORT` (`3306`), `DB_USER` (`root`), `DB_PASSWORD` (vuota) e `DB_NAME` (`blog`).

## Rotte

| Metodo | URL | Risposta |
| --- | --- | --- |
| GET | `/` | `Server del mio blog` |
| GET | `/test.html` | Pagina HTML statica di prova |
| GET | `/posts` | Lista JSON dei post (`200`) |
| GET | `/posts/1` | Post JSON con tag (`200`); `400` se l'id non è positivo intero, `404` se assente |
| POST | `/posts` | `Creazione di un nuovo post` (`200`, testo) |
| PUT | `/posts/1` | `Modifica del post 1` (`200`, testo); `400` se l'id non è positivo intero |
| DELETE | `/posts/1` | Nessun corpo (`204`); `400` se l'id non è positivo intero, `404` se assente |
| qualunque | endpoint inesistente | JSON `{"error":"Endpoint non trovato"}` (`404`) |
| URL malformato (es. `/posts/%`) | JSON `{"error":"Richiesta non valida"}` (`400`) |
| errore server | — | JSON `{"error":"Errore interno del server"}` (`500`) |

Gli errori del database vengono inoltrati al middleware degli errori; la risposta non espone i dettagli interni.

## Test con Postman

Importa in Postman la collection `postman/express-blog-routing.postman_collection.json` ed esegui le richieste dopo aver avviato il server.

## Asset statico

Apri [http://localhost:3000/test.html](http://localhost:3000/test.html).
