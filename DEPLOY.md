# How to Deploy Your Valentine Website

Your website is ready in the `my-valentine-website` folder! Here is how to put it online for free using GitHub Pages.

## Option 1: GitHub Pages (Recommended)

1.  **Create a GitHub Account** if you don't have one: [github.com](https://github.com/).
2.  **Create a New Repository**:
    *   Go to your dashboard and click "New".
    *   Name it `valentine-surprise` (or anything you like).
    *   Make sure it is **Public**.
    *   Click "Create repository".
3.  **Upload Your Files**:
    *   Click the "uploading an existing file" link on the setup page.
    *   Drag and drop **ALL** the contents of the `my-valentine-website` folder into the upload area.
        *   *Important:* Drag the *contents* (index.html, style.css, script.js, ask/, flowers/), not just the folder itself.
    *   Wait for them to upload, then click "Commit changes".
4.  **Activate Pages**:
    *   Go to **Settings** > **Pages** (on the left sidebar).
    *   Under "Build and deployment", set **Source** to `Deploy from a branch`.
    *   Under **Branch**, select `main` (or `master`) and folder `/(root)`.
    *   Click **Save**.
5.  **Get the Link**:
    *   Wait a minute or two. Refresh the page.
    *   You will see a link at the top (e.g., `https://yourusername.github.io/valentine-surprise/`).
    *   Send this link to your Valentine!

## Option 2: Netlify Drop (Easier/Faster)

1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Drag and drop the entire `my-valentine-website` folder onto the page.
3.  It will upload and give you a unique link immediately.
4.  You can change the site name in "Site Settings" to something cuter (e.g., `for-my-love.netlify.app`).

## Testing It Locally

To check it before uploading:
1.  Open the `my-valentine-website` folder.
2.  Double-click `index.html` to open it in your browser.
3.  Test the flow: Intro -> Pick Box -> Ask Page (Say Yes!) -> Flower Page.
