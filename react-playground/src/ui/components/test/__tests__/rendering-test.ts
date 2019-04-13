import { beforeEach, describe, it } from '@bigtest/mocha';
import { expect, assert } from 'chai';
import { mountWithContext } from 'tests/helpers/mounting';

import Test from '..';

import page from './page';

describe('Rendering | Test', () => {
  beforeEach(async function() {
    await mountWithContext(Test);
  });

  it('renders', () => {
    expect(page.text).to.contain('A new component named: Test');
  });

  it('does something else', () => {
    assert(false, 'replace this with a real test');
  });
});
