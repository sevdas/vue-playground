import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseButton)

    const buttonElement = wrapper.find('button')
    expect(buttonElement.exists()).toBe(true)
  })

  it('renders loading state properly', () => {
    const wrapper = mount(BaseButton, { props: { loading: true } })

    expect(wrapper.text()).toContain('...Loading')
  })

  it('renders disabled attribute (state) properly', () => {
    const wrapper = mount(BaseButton, { props: { isDisabled: true } })

    const buttonElement = wrapper.find('button')
    expect(buttonElement.attributes()).toHaveProperty('disabled')
  })

  it('emits a click event properly', async () => {
    const wrapper = mount(BaseButton)

    const buttonElement = wrapper.find('button')
    await buttonElement.trigger('click')

    expect(wrapper.emitted('onClick')).toBeTruthy()
  })
})
