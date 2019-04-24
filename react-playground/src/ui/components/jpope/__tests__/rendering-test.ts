import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';
import { mountWithContext } from 'tests/helpers/mounting';

import Jpope from '..';

import page from './page';

describe('Rendering | Jpope', () => {
  beforeEach(async function() {
    await mountWithContext(Jpope);
  });

  it('renders', () => {
    expect(page.text).to.contain('A new component named: Jpope');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
