# Istruzioni del progetto

Questa app è un esercizio Boolean: un server Express 5 con rotte CRUD sui post e MySQL.

Index, Show e Delete leggono o modificano il database `blog`. Create e Update restano risposte testuali dimostrative. L'app pubblica anche un asset statico di prova.

Stack: Node.js, Express 5 e JavaScript CommonJS (`require`).

Configurazione database tramite `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` e `DB_NAME`; copia `.env.example` in `.env` e modifica i valori necessari. Il file `.env` non va versionato.

Per caricare il database, importa `db/blog_db.sql` in MySQL/MariaDB dopo aver creato il database `blog`.

Regole di stile:
- Usa 2 spazi per l'indentazione.
- Termina le istruzioni con il punto e virgola.
- Mantieni i router separati nella cartella `routers/`.
