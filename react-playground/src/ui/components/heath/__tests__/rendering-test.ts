import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';
import { mountWithContext } from 'tests/helpers/mounting';

import Heath from '..';

import page from './page';

describe('Rendering | Heath', () => {
  beforeEach(async function() {
    await mountWithContext(Heath);
  });

  it('renders', () => {
    expect(page.text).to.contain('A new component named: Heath');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
