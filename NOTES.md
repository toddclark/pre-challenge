# NOTES:
- The Component: I chose to create a modal which would cover the deletion use cases
- a11y for keyboard navigation and proper dialog interactions, including autofocus and focus trapping
- Mac VoiceOver used to confirm basic screenreader functionality
- Basic CSS leveraged... Why? To show that I can still use it :). Typically I like to use uno-css/tailwind and Sass.
- I have included no animations beyond some basic button transitions. Animations are rad, but secondary to anything time-critical IMO. I will usually roadmap for a polishing phase or include animations in the ticket points. And, of course, `prefers-reduced-motion`, etc to allow animation removal.
- The modal is generalized and would likely require more props to cover other specialized use-cases depending on the scope of the project. Also, depending on how the components will be leveraged, creating smaller and more strict components might make more sense.
- SVGs used as assets for icons. Typically I use something such as iconify or icon-fonts provided by a design team.
- Vite + Rect + TS + SWC boilerplate used
- No AI tooling used for this challenge. I currently use copilot at work, and typically get autocompletion close to what I'm looking for :)
