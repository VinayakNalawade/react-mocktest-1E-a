import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const SubContainer = styled.div`
  background-color: #1b1c22;
  width: 80%;
  display: flex;
`

export const ImgSection = styled.div`
  width: 50%;
  padding: 3%;
`
export const TextHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #f8fafc;
  margin: 0;
  margin-bottom: 5vh;
  text-align: center;
`
export const TextImg = styled.img`
  width: 100%;
`

export const InputSection = styled.div`
  border-radius: 10px;
  width: 50%;
  margin: 10px;
  border: 1px solid #334155;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
`

export const ButtonsContainer = styled.ul`
  padding: 0;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #334155;
  color: ;
`
export const BoldButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  margin-right: 10px;
  padding: 5px;
  color: ${props => props.color};
`
export const ButtonItem = styled.li`
  list-style-type: none;
`

export const InputTextArea = styled.textarea`
  color: #f8fafc;
  flex-grow: 1;
  padding: 12px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  border-radius: 10px;
  width: 100%;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
