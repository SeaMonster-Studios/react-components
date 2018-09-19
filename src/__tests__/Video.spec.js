import React from "react"
import { render, cleanup, fireEvent, waitForElement } from "react-testing-library"
import { Video } from "../components/Video"

afterEach(cleanup)

describe("Video Component Test", () => {
  it("Renders in it's default state: Shows thumbnail and hides video", () => {
    const { getByTestId, queryByTestId, props, container } = renderSetup()
    const component = getByTestId("component-video")
    const video = queryByTestId("video")
    const thumbnail = container.querySelector(`img[src="${props.thumbnail}"]`)


    expect(video).toBeFalsy()
    expect(thumbnail).toBeTruthy()
    expect(component).toBeTruthy()
    expect(component).toMatchSnapshot()
  })

  it('Shows the video when the trigger button is clicked, and hides the thumbnail.', async () => {
    const { getByTestId, queryByTestId, props, container } = renderSetup()
    const trigger = getByTestId("trigger-button")

    await waitForElement(() => fireEvent.click(trigger))

    const thumbnail = container.querySelector(`img[src="${props.thumbnail}"]`)
    const video = queryByTestId("video")

    expect(video).toBeTruthy()
    expect(thumbnail).toBeFalsy()
  })
})

function renderSetup(overrides) {
  const props = {
    thumbnail:
      "https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png",
    video:
      '<iframe width="500" height="281" src="https://www.youtube.com/embed/KVZ-P-ZI6W4?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    ...overrides,
  }

  const wrapper = render(<Video {...props} />)

  return {
    ...wrapper,
    props,
  }
}
