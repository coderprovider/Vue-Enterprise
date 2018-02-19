import BaseButton from './_base-button'

describe('@components/base-button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>'
    const { element } = mountShallow(BaseButton, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
