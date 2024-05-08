import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseLabel from './BaseLabel.vue'

describe('BaseLabel', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseLabel, { props: { id: 'test' } })

    const labelElement = wrapper.find('label')
    expect(labelElement.exists()).toBe(true)
  })
})
