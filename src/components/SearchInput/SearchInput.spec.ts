import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchInput from './SearchInput.vue'

describe('SearchInput', () => {
  it('renders properly', () => {
    const wrapper = mount(SearchInput, { props: { id: 'test', modelValue: '', ssrLabel: true } })

    const inputElement = wrapper.find('input')
    expect(inputElement.exists()).toBe(true)
  })
})
