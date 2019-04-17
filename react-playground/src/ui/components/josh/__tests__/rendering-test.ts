import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';
import { mountWithContext } from 'tests/helpers/mounting';

import Josh from '..';

import page from './page';

describe('Rendering | Josh', () => {
  beforeEach(async function() {
    await mountWithContext(Josh);
  });

  it('renders', () => {
    expect(page.text).to.contain('A new component named: Josh');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
