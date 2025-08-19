# Kerim Doruk Akinci Website

A modern single page application built with [React](https://react.dev/), [Vite](https://vite.dev/) and [Tailwind CSS](https://tailwindcss.com/). The site is entirely static and can be deployed to an Amazon S3 bucket or any static hosting provider.

## Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm test
```

## Build

```bash
npm run build
```

The production build is output to the `dist/` directory.

## Deploying to S3

1. Build the project: `npm run build`
2. Sync the `dist/` folder to your bucket:
   ```bash
   aws s3 sync dist s3://<your-bucket-name> --delete
   ```
3. Enable static website hosting on the bucket and set the index document to `index.html`.

## License

[MIT](LICENSE)
