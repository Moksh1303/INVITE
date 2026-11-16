# The Royal Mayra Experience

A deployable, responsive interactive invitation website for Pinky Dineshjii Karnawat.

## Included
- Interactive palace entrance with illustrated Ganesha medallion.
- Animated opening doors and palace reveal.
- Family illustration using the supplied image.
- Portrait of **Sha Chandanmalji Khemchandji Chouhan**, named respectfully throughout.
- Final invitation card and original Chouhan KG Group logo.
- Skip intro, replay, responsive layout and sound toggle placeholder.

## Run locally
This is a static website. You can open `index.html` directly, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel
1. Extract this ZIP.
2. Upload the `royal-mayra-experience` folder to a GitHub repository, or import the repository into Vercel.
3. Framework preset: **Other**.
4. Build command: leave blank.
5. Output directory: `.` (project root).
6. Deploy.

A `vercel.json` is included for clean static routing.

## Replace or add assets
The supplied images are in `public/assets/`:
- `family.png`
- `sha-chandanmalji-khemchandji-chouhan.jpg`
- `chouhan-kg-logo.png`

To add a soundtrack, place a licensed MP3 at `public/assets/mayra-theme.mp3`. The current sound toggle is intentionally a placeholder and does not play synthetic audio. For playback, add an `<audio>` element and connect it to the user-initiated sound toggle in `script.js`.

## Event details
- Mayra of Pinky Dineshjii Karnawat
- 16 February 2027
- 10:30 AM onwards
- Surya Hall (4th Floor), Uday Palace Navsari
- Opposite Sai Baba Temple, National Highway 48, Un, Navsari, Gujarat 396445

Weekday is intentionally omitted pending confirmation.
