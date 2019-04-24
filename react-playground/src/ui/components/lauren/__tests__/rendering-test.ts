import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';

import { mountWithContext } from 'tests/helpers/mounting';

import Lauren from '..';

import page from './page';

describe('Rendering | Lauren', () => {
  beforeEach(async function() {
    await mountWithContext(
      Lauren
    );
  });

  it('renders', () => {
    expect(page.text).to.contain('A new component named: Lauren');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
