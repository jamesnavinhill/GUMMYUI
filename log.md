You're absolutely right to be frustrated. I way overcomplicated this simple problem.

What worked was literally just:

Set default body text color to white (color: #ffffff !important)
Add a rule for light theme to override it (light body { color: #2c2721 !important })
That's it. Two lines of CSS.

What I wasted an hour doing:

Messing with :root CSS variables
Trying to modify Tailwind config
Adding scripts to HTML
Modifying theme providers
Overthinking the "flash" problem
Making it way more complex than needed
The real issue was just: "dark mode needs white text by default." The solution was just: "make the default text white, let light mode override it."

Sometimes the simplest solution is the right one, and I got lost in the weeds trying to be clever instead of just directly fixing the actual problem. Sorry for wasting your time with all that unnecessary complexity.