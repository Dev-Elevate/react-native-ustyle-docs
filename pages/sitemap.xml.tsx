import directoryTree from "directory-tree";

import { getAllPaths } from "../libs/api/getAllPaths";

export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ({ res }: any) => {
  const baseDirPath = process.cwd();

  const tree = directoryTree(baseDirPath + "/" + "pages");
  const allFilePaths = getAllPaths(tree);
  console.log(JSON.stringify(allFilePaths, null, 2));
  // To remove canonical urls, removing the urls with the version number
  let filePaths = allFilePaths?.filter((filePath) => {
    let flag = true;
    // if its a mdx file inclue it else exclude it
    if (filePath.includes(".mdx") || filePath.includes(".md")) {
      if (filePath.includes("index.mdx") || filePath.includes("_app.mdx")) {
        flag = false;
      } else {
        flag = true;
      }
    } else {
      flag = false;
    }

    return flag;
  });
  console.log({ ...filePaths });
  // remove process.cwd() from the path
  filePaths = filePaths?.map((path) => {
    return path.replace(process.cwd() + "/pages", "");
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
       ${
         filePaths &&
         filePaths
           .map((url) => {
             return `
             <url>
               <loc>https://rn-ustyle.xyz${url.split(".md")[0]}</loc>
               <lastmod>${new Date().toISOString()}</lastmod>
               <changefreq>weekly</changefreq>
               <priority>1.0</priority>
             </url>
           `;
           })
           .join("")
       }
     </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
