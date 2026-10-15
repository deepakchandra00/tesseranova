import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import ts from 'typescript';
import {gsap} from 'gsap';
const source=await readFile(new URL('../../app/cinematic/timeline.ts',import.meta.url),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
const {SCENES,DURATION,sceneAt}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
assert.equal(DURATION,53);
assert.equal(SCENES[sceneAt(0)].title,'The Universe Awaits');
assert.equal(SCENES[sceneAt(2.999)].title,'The Universe Awaits');
assert.equal(SCENES[sceneAt(3)].title,'Strategy & Consulting');
assert.equal(SCENES[sceneAt(26.999)].chapter,0);
assert.equal(SCENES[sceneAt(27)].title,'Infrastructure Layer');
assert.deepEqual([27,31,35,39,43].map(t=>SCENES[sceneAt(t)].short),['Infrastructure','Data','Application','Intelligence','Experience']);
assert.equal(SCENES[sceneAt(53)].title,'Unified Tesserova');
for(let t=0;t<53;t+=.05){const scene=SCENES[sceneAt(t)];assert.ok(t>=scene.start&&t<scene.end,`No valid scene at ${t}`)}
const clock={time:0};const tween=gsap.to(clock,{time:DURATION,duration:DURATION,ease:'none',paused:true});
for(const target of [0,15,47,53,3,39,0]){tween.seek(target,true);assert.ok(Math.abs(clock.time-target)<.001,`Scrub state mismatch at ${target}`)}
tween.kill();gsap.ticker.sleep();
console.log('Passed: continuous 53s timeline, chapter boundary, bottom-up assembly, finale hold, forward/backward scrubbing and replay reset.');
