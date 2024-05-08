import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TextInput from './TextInput.vue'

describe('TextInput', () => {
  it('renders properly', () => {
    const wrapper = mount(TextInput, {
      props: { id: 'test', label: 'Test Label', isOptional: true, modelValue: '' }
    })

    const inputElement = wrapper.find('input')
    expect(inputElement.exists()).toBe(true)
  })
})

// find by type?
