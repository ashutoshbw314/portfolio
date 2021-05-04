const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = 'https://ashutoshbiswas.netlify.app/';
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: 'src/assets',
};

const dir = {
  img: `/${folder.assets}/img/`,
}

module.exports = {
  siteName: 'Ashutosh Biswas',
  author: 'Ashutosh Biswas',
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
  },
};
