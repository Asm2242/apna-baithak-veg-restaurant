import fs from 'fs';
let c = fs.readFileSync('data/menu.ts','utf8');
let lines = c.split('\n');
let out = [];
for (let line of lines) {
  let m = line.match(/item\("([^"]+)"/);
  if (m && line.includes('image: img(')) {
    let dish = m[1];
    let slug = dish.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    line = line.replace(/image: img\("[^"]+"\)/, `image: "/images/foods/${slug}.jpg"`);
  }
  out.push(line);
}
// also fix the helper function to not be needed
let content = out.join('\n');
content = content.replace(/function img\(q: string\)[\s\S]*?}\n/, '');
content = content.replace(/\/\/ helper to get image by slug directly[\s\S]*?}\n/, '');
fs.writeFileSync('data/menu.ts', content);
console.log('fixed');
