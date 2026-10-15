import assert from 'node:assert/strict';
import fs from 'node:fs';
const pages=JSON.parse(fs.readFileSync('app/content/pages.json','utf8'));
const paths=new Set(pages.map(p=>p.path));
assert.equal(paths.size,pages.length,'Routes must be unique');
for(const p of pages){assert.match(p.path,/^[a-z0-9-]+(?:\/[a-z0-9-]+)*$/);assert.ok(p.title&&p.headline&&p.intro);if(p.parent)assert.ok(paths.has(p.parent),p.parent);for(const link of p.links||[])assert.ok(paths.has(link.path),link.path);if(p.image)assert.ok(fs.existsSync('public'+p.image),p.image)}
for(const route of ['about','who-we-are','what-we-do','mission','team','services','hire','industries','industries/transportation','industries/healthcare','industries/fintech','contact','platform','sitemap'])assert.ok(paths.has(route));
for(const category of ['Services','Dedicated Teams','Industries'])console.log(category+': '+pages.filter(p=>p.category===category).length);
console.log(`Passed: ${paths.size} unique routes, valid related links, required pages and image assets.`);
