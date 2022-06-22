import { render, screen } from '@testing-library/react'
import {
  MenuSvg,
  PersonSvg,
  CameraSvg,
  MicrophoneSvg,
  ShareScreenSvg,
  FullScreenSvg,
  ChatSvg,
  SupportSvg,
  ArrowSvg,
  WomanTeacherSvg,
  ManTeacherSvg,
  OpenedEyeSvg,
  ClosedEyeSvg,
  QuestionMarkSvg,
} from './index'

describe('MenuSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<MenuSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('PersonSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<PersonSvg width='20' />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should have attribute width equal 20', () => {
    render(<PersonSvg width='20' />)

    expect(screen.getByTestId('photo-svg')).toHaveAttribute('width', '20')
  })
})

describe('CameraSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<CameraSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('MicrophoneSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<MicrophoneSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ShareScreenSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<ShareScreenSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('FullScreenSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<FullScreenSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ChatSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<ChatSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('SupportSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<SupportSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ArrowSvg', () => {
  let wrapper: any

  test('to match snapshot with isOpen false', () => {
    wrapper = render(<ArrowSvg rotate={'rotate(90)'} />)

    expect(wrapper).toMatchSnapshot()
    expect(screen.getByTestId('arrow-svg')).toHaveAttribute(
      'transform',
      'rotate(90)'
    )
  })

  test('to match snapshot with isOpen true', () => {
    wrapper = render(<ArrowSvg rotate={'rotate(270)'} />)

    expect(wrapper).toMatchSnapshot()
    expect(screen.getByTestId('arrow-svg')).toHaveAttribute(
      'transform',
      'rotate(270)'
    )
  })
})

describe('WomanTeacherSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<WomanTeacherSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ManTeacherSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<ManTeacherSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('OpenedEyeSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<OpenedEyeSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('ClosedEyeSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<ClosedEyeSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('QuestionMarkSvg', () => {
  let wrapper: any

  test('to match snapshot', () => {
    wrapper = render(<QuestionMarkSvg />)
    expect(wrapper).toMatchSnapshot()
  })
})
