import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

const pagesDirectory = new URL('../../components/pages/', import.meta.url);

test('animated proof counters expose their final values in server-rendered HTML', async () => {
  const files = (await readdir(pagesDirectory)).filter((file) => file.endsWith('.tsx'));
  let counterCount = 0;

  for (const file of files) {
    const source = await readFile(new URL(file, pagesDirectory), 'utf8');
    const counters = source.matchAll(
      /<span className="counter" data-target="([^"]+)">([^<]+)<\/span>/g,
    );

    for (const match of counters) {
      counterCount += 1;
      assert.equal(
        match[2],
        match[1],
        `${file} must render the data-target value before JavaScript runs`,
      );
    }
  }

  assert.ok(counterCount > 0, 'expected to inspect at least one proof counter');
});

test('counter animation resets values only when motion is allowed', async () => {
  const source = await readFile(
    new URL('../../utils/caseStudyAnimations.ts', import.meta.url),
    'utf8',
  );

  assert.match(source, /if \(!motionAllowed\)[\s\S]*el\.textContent = targetText/);
  assert.match(source, /el\.textContent = '0';[\s\S]*ScrollTrigger\.create/);
});
