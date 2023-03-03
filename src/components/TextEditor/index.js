import {Component} from 'react'

import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'

import {
  MainContainer,
  SubContainer,
  ImgSection,
  TextHeading,
  TextImg,
  InputSection,
  ButtonsContainer,
  ButtonItem,
  BoldButton,
  InputTextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  changeBold = () => this.setState(prev => ({bold: !prev.bold}))

  changeItalic = () => this.setState(prev => ({italic: !prev.italic}))

  changeUnderline = () => this.setState(prev => ({underline: !prev.underline}))

  render() {
    const {bold, italic, underline} = this.state

    return (
      <MainContainer>
        <SubContainer>
          <ImgSection>
            <TextHeading>Text Editor</TextHeading>
            <TextImg
              alt="text editor"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </ImgSection>
          <InputSection>
            <ButtonsContainer>
              <ButtonItem>
                <BoldButton
                  type="button"
                  data-testid="bold"
                  onClick={this.changeBold}
                  color={bold ? '#faff00' : '#f1f5f9'}
                >
                  <VscBold size="25" />
                </BoldButton>
              </ButtonItem>

              <ButtonItem>
                <BoldButton
                  type="button"
                  data-testid="italic"
                  onClick={this.changeItalic}
                  color={italic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size="25" />
                </BoldButton>
              </ButtonItem>

              <ButtonItem>
                <BoldButton
                  type="button"
                  data-testid="underline"
                  onClick={this.changeUnderline}
                  color={underline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size="25" />
                </BoldButton>
              </ButtonItem>
            </ButtonsContainer>
            <InputTextArea bold={bold} italic={italic} underline={underline} />
          </InputSection>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
