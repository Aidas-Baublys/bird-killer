# BIRD KILLER

A simple game for killing time. Delivered as the final project for Harvard's CS50’s Introduction to Computer Science course.

### Video Demo:  <URL HERE>

Watch the video to see me explain everything in my not-at-all Eastern European accent.

### Check it out live:  (linkas i github pages deploy)

Don't judge the game too much, it has only one mechanic (killing birds with clicks) and poor collision detection. Try to hack it though. I trust my backend provider.

### Description

A simple game implementation with [`svelteKit`](https://kit.svelte.dev/) for frontend and [`supabase`](https://supabase.com/) for the backend. Players can create a account, kill some birds, save their high score if they so wish, and log out. The birds never stop coming, so the carnage need not cease. If the players save their score, they will find it next time they login and can try to beat it, if not, will start fresh from 0.

The actual magic and most of the coding happened first in typescript. It was surprisingly (relatively) simple to animate something on the screen using the html canvas element. With simple functions and high-school level math one can create amazing things. Collision detection was very simple, just need to find the screen coordinates of the mouse click and check if it overlaps with a raven.

So after the core game logic was written in a nodeJs environment, I realized that I need separate pages for player login, want to refactor the source code and use separate files for classes and assets, need dynamic UI updates and so on. That's when I decided to use svelteKit to kill all these birds with one framework.

#### Why typescript?

I used TS, because I can't write vanilla javascript no more, I need type safety. TS to JS is like C++ to C, it's a superset and enhances the original language in many ways.

#### Why svelteKit?

I used a javascript framework as JS is the defacto language and technology of the web. It's widely used, works, and I work with it in my day-job at a fin-tech startup. A framework like svelte solves many annoying problems, like page routing, allows proper refactoring by creating components, handles a ton of initial configuration, and provides a good developer experience.

I hope no poor souls need to work with flask or django. Python is a mere scripting language, beloved by people, who are not programmers or coders, such as researchers, scientists, etc. In small chunks, it's great, but I would not want to write a proper web app with it.

I choose svelte and svelteKit, because I wanted to learn something new and sexy. I work with react.

#### Why supabase?

Supabase as a backend as a service provider simplified authentication and provided a postgres database for persistent player score storage. I found using it faster, more effective, and akin to real-world job experience rather than implementing authentication and database features from scratch on my own.

I really liked writing SQL queries and enjoyed the murder mystery greatly. It paid of as I better understood what happens under the hood of the amazing supabase dashboard. Alas, I wanted to learn something practical and applicable to future projects and was not disappointed. Highly recommend giving it a try.

There are many such services, but the fact that supabase provides everything that firebase does + it's open source + very generous free tier sealed the deal.
