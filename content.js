/* ============================================================
   EDIT THIS FILE to make the site yours.
   - SITE: your name, bio, photo and social links (shown in the footer)
   - POSTS: one object per entry. Newest first is nicer, but they're
     sorted by date automatically.
   Categories are created automatically from the "category" field.
   ============================================================ */

window.SITE = {
  title: "Things I Like",
  tagline: "A little corner of the internet for the stuff I love: hobbies, food, places, projects and good links. No ads, no paywalls, no accounts.",
  name: "Your Name",
  photo: "assets/me.jpg",          // put your picture at assets/me.jpg
  bio: "Write 2-3 sentences about yourself here: where you're from, what you do, what you're obsessed with lately.",
  links: [
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/your-handle" },
    { label: "Instagram", url: "https://www.instagram.com/your-handle" },
    { label: "Letterboxd", url: "https://letterboxd.com/your-handle" }
    // add more: { label: "GitHub", url: "https://github.com/you" }
  ]
};

window.POSTS = [
  {
    slug: "my-favorite-neighborhood-restaurant",
    title: "My favorite neighborhood restaurant",
    category: "Food",
    date: "2026-11-10",
    emoji: "🍜",
    image: "",                       // optional: "assets/ramen.jpg"
    summary: "The place I go when I can't decide where to eat, and why it never disappoints.",
    body: `
      <p>Tell the story here. What do you order? Who do you bring? What makes it yours?</p>
      <h2>What to order</h2>
      <p>Be specific; specifics are what make a recommendation useful.</p>
    `,
    links: [{ label: "Google Maps", url: "https://maps.google.com" }]
  },
  {
    slug: "weekend-guide-to-a-city-i-love",
    title: "A weekend guide to a city I love",
    category: "Travel",
    date: "2026-10-28",
    emoji: "🧭",
    image: "",
    summary: "Where to sleep, eat and wander if you only have 48 hours.",
    body: `
      <h2>Day 1</h2>
      <p>Morning, afternoon, evening.</p>
      <h2>Day 2</h2>
      <p>The slower, more local day.</p>
    `,
    links: []
  },
  {
    slug: "a-project-im-proud-of",
    title: "A project I'm proud of",
    category: "Projects",
    date: "2026-10-15",
    emoji: "🛠️",
    image: "",
    summary: "What I built, why I built it, and what I'd do differently.",
    body: `<p>Describe the project, add photos, and link to the code or a demo below.</p>`,
    links: [{ label: "Source code", url: "https://github.com" }]
  },
  {
    slug: "movies-that-stuck-with-me",
    title: "Movies that stuck with me",
    category: "Movies",
    date: "2026-10-01",
    emoji: "🎬",
    image: "",
    summary: "Not a best-of list, just the ones I keep thinking about.",
    body: `<p>Pair this with your Letterboxd profile for the full list.</p>`,
    links: []
  },
  {
    slug: "links-i-keep-coming-back-to",
    title: "Links I keep coming back to",
    category: "Links",
    date: "2026-09-20",
    emoji: "🔗",
    image: "",
    summary: "Useful tools, fun rabbit holes and things worth bookmarking.",
    body: `
      <ul>
        <li><a href="https://example.com">Example link</a>: why it's great</li>
        <li><a href="https://example.com">Another link</a>: what it's for</li>
      </ul>
    `,
    links: []
  },
  {
    slug: "my-weekend-hobby",
    title: "My weekend hobby",
    category: "Hobbies",
    date: "2026-09-05",
    emoji: "📸",
    image: "",
    summary: "What I do when nobody's asking me to do anything.",
    body: `<p>Photos, progress, tips for beginners, whatever you like.</p>`,
    links: []
  }
];
