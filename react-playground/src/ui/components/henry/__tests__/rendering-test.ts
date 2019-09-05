import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';
import { mountWithContext } from 'tests/helpers/mounting';

import Henry from '..';

import page from './page';

describe('Rendering | Henry', () => {
  beforeEach(async function() {
    await mountWithContext(Henry);
  });

  it('renders', () => {
    expect(page.text).to.contain('A new component named: Henry');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
