# BIRD KILLER

A simple game for killing time. Delivered as the final project for Harvard's CS50’s Introduction to Computer Science course.

### Video Demo:  (linkas i video prisatyma)

Watch the video to see me explain everything in my not-at-all Eastern European accent.

### Check it out live:  (linkas i github pages deploy)

Don't judge the game too much, it has only one mechanic (killing birds with clicks) and poor collision detection. Try to hack it though. I trust my backend provider.

### Description

A simple game implementation with [`SvelteKit`](https://kit.svelte.dev/) for the frontend and [`Supabase`](https://supabase.com/) for the backend. Players can create an account, kill some birds, save their high score if they so wish, and log out. The birds never stop coming, so the carnage need not cease. If the players save their score, they will find it the next time they log in and can try to beat it, if not, will start fresh from 0.

The actual magic and most of the coding happened first in Typescript. It was surprisingly (relatively) simple to animate something on the screen using the HTML canvas element. Check out src/components/gameCanvas.svelte, most of the game logic is there in between the script tags + in src/classes/raven.ts. The canvas element provides a context API with all the methods for drawing lines, and squares, moving them, and so on. The basic principle is the same as for all motion pictures - we show many images in quick succession to imitate motion. With simple functions and high-school-level math, one can create amazing things. Collision detection was very simple, just need to find the screen coordinates of the mouse click and check if it overlaps with a raven picture. Easy to set up that is, collision detection needs fine-tuning, so if you miss a direct hit, it's not you, it's my code:)

So after the core game logic was written with TS in a nodeJS environment, I realized that I needed separate pages for player login/logout/registration, wanted to refactor the source code and use separate files for classes and assets, needed dynamic UI updates, and so on. That's when I decided to use SvelteKit to kill all these birds with one framework.

#### Why Typescript?

I used TS because I can't write vanilla Javascript anymore, I need type safety. TS to JS is like C++ to C, it's a superset and enhances the original language in many ways.

#### Why SvelteKit?

I used a Javascript framework as JS is the defacto language and technology of the web. It's widely used, works, and I work with it in my day job at a fin-tech startup. A JS framework like Svelte solves many annoying problems, like page routing, allows proper refactoring by creating components, handles a ton of initial configuration, and provides a good developer experience.

I hope no poor souls need to work with Flask or Django. Python is a mere scripting language, beloved by people, who are not programmers or coders, such as researchers, scientists, etc. In small chunks, it's great, but I would not want to write a proper web app with it.

I chose Svelte and SvelteKit because I wanted to learn something new and sexy. I work with react usually.

#### Why Supabase?

Supabase as a backend as a service provider simplified authentication and provided a Postgres database for persistent player score storage. I found using it faster, more effective, and akin to real-world job experience rather than implementing authentication and database features from scratch on my own.

I liked writing SQL queries and enjoyed the murder mystery problem greatly. It paid off as I better understood what happens under the hood of the amazing Supabase dashboard. Alas, I wanted to learn something practical and applicable to future projects and was not disappointed. Highly recommend giving Supabase a try. There are many such services, but the fact that it provides everything that Firebase does + it's open source + very generous free tier sealed the deal.

All of the backend interactions happen in .server.ts files, where you can find the calls, selects, auth requests, and so on to my Supabase project.
