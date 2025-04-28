# ToDoList App

Zadanie rekrutacyjne na stanowisko Frontend Developer.

## 👉 [link do wersji live](https://todolist.focusite.pl/) (hostowane na vercel)

## Uruchomienie projektu lokalnie

1. Sklonuj repozytorium (jeśli jeszcze nie masz):
   ```bash
   git clone git@github.com:utamovita/recruitment-to-do-list.git
   cd recruitment-to-do-list
   ```

2. Zainstaluj zależności npm:
   ```bash
   npm install
   ```

3. Uruchom serwer:
   ```bash
   npm run dev
   ```

4. Otwórz w przeglądarce:
   [http://localhost:3000](http://localhost:3000)


## Testowanie

Aby uruchomić testy:
```bash
npm run test
```

## Komentarze
- Zazwyczaj używam css modules ale w tym projekcie postanowiłem użyć TailwindCSS żeby skupić się na samej logice.
- Używam trochę innego nazewnictwa plików czyli zamiast **ToDoListItem.tsx** zapisuję jako **to-do-list-item.component.tsx** (wydaję mi się czytelniejszą opcją zwłaszcza gdy w folderze trzymamy oprócz komponentu  np. hooka, testy, storybooka czy chociażby css module)
- Nie byłem pewien czy taki był zamysł zadania, ale dodałem zapisywanie listy do **localStorage** żeby po odświeżeniu pamiętało czy dana opcja jest zaznaczona


