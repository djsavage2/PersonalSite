## Dakota Savage Personal Site

This repo holds my personal website.

The live website can be found at https://djsavage2.github.io/PersonalSite/.

## Getting Started

1. Clone this repo
2. `cd dakota-savage`
3. `npm install`
4. `npm run dev`
5. Go to https://localhost:3000

## Deploying

CI/CD is set up with GitHub actions, so whenever you push to `main` the output of `npm run export` will be dumped in the `gh-pages` branch which GitHub Pages builds from.

To make changes to the CI/CD pipeline, edit `.github/workflows/main.yml`.

## Writing Blog Posts

Go into `dakota-savage/src/routes/blog/_posts.js to edit or add new posts. Follow the format you see there. Template:

```json
{
    title: "",
    date: "",
    description: "",
    slug: "",
    html: `
        <p>This is the body of your post</p>
    `
}
```

## Contributing

If you have any suggestions on how I can improve the site, feel free to send them my way! Open an issue or create a pull request and I'll take a look ASAP.

## License

This project is protected under the MIT License - see LICENSE.txt for details.