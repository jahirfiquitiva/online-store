# Online Store

Online store built with NextJS and Contentful, deployed on Vercel

## Details
I'm currently doing a series of streams where I will be working on this app: an online store which gets products from contentful, is built using NextJS and deployed on Vercel

## Videos
1. [Part 1](https://www.twitch.tv/videos/774600398) - Designing website, setting up contentful, adding functions to get data from contentful

## Features
- [ ] Main site showing featured product (a single one), featured brands (4) and 5 products per category
- [ ] Search site showing matching products, brands and categories
- [ ] Product details page showing a gallery of images with zoom capabilities
- [ ] Category details page showing the whole list of category products with pagination
- [ ] Local cart 
- [ ] Pseudo-checkout by sending email to "company"

*More ideas are welcome… (please [open an issue](https://github.com/jahirfiquitiva/online-store/issues/new) with yours if you want to suggest something)*

## Local Development

1. Create a `.env` file with the following environment variables. (You must create a [contentful](https://contentful.com) space before):
```bash
CONTENTFUL_SPACE_ID=A0b1C2
CONTENTFUL_ACCESS_TOKEN=a1Bc2d3
```

2. Run `run dev` in terminal
