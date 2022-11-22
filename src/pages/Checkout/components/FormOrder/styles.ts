import styled from 'styled-components'

export const FormOrderContainer = styled.main`
  max-width: 40rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-700']};
    line-height: 1.4625rem;
    margin-bottom: 0.9375rem;
  }
`

export const FormSections = styled.section`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-75']};
  border-radius: 6px;

  > header {
    display: flex;
    gap: 0.5rem;

    > div {
      h3 {
        color: ${(props) => props.theme['gray-700']};
        font-weight: 400;
      }
      p {
        padding-top: 0.125rem;
        font-size: 0.875rem;
      }
    }
  }
`

export const FormSectionAddress = styled(FormSections)`
  > header {
    svg {
      color: ${(props) => props.theme['yellow-200']};
    }
  }

  > div {
    padding-top: 2rem;

    > div:not(:first-child) {
      padding-top: 1rem;
    }
  }
`

export const InputForm = styled.input`
  padding: 0.75rem;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['gray-125']};
  color: ${(props) => props.theme['gray-650']};

  &::placeholder {
    color: ${(props) => props.theme['gray-450']};
  }

  &:active,
  &:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-200']};
  }
`

export const BoxMultipleInputs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;

  > div {
    flex: 1;
    position: relative;

    > span {
      position: absolute;
      right: 0.75rem;
      top: 1rem;

      font-size: 0.75rem;
      font-style: italic;
      color: ${(props) => props.theme['gray-450']};

      pointer-events: none;
    }
  }
`

export const InputFormCep = styled(InputForm)`
  width: 35%;
`

export const InputFormRua = styled(InputForm)`
  width: 100%;
`

export const InputFormNumero = styled(InputForm)`
  width: 35%;
`

export const InputFormComplemento = styled(InputForm)`
  width: 100%;
`

export const InputFormBairro = styled(InputForm)`
  width: 35%;
`

export const InputFormCidade = styled(InputForm)`
  width: 49%;
`

export const InputFormUF = styled(InputForm)`
  width: 10%;
  flex: 1;
`

export const FormSectionPayment = styled(FormSections)`
  margin-top: 0.75rem;

  > header {
    svg {
      color: ${(props) => props.theme['purple-450']};
    }
  }

  > div {
    padding-top: 2rem;
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    align-items: center;

    & > input[type='radio'] {
      visibility: hidden;
      position: absolute;
    }

    & > input[type='radio']:checked + label {
      background-color: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-450']};
    }
  }
`

export const LabelOptionPayment = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: ${(props) => props.theme['gray-125']};
  padding: 0.9375rem;
  width: 11.166rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.2rem;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['gray-125']};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['gray-150']};
  }

  svg {
    color: ${(props) => props.theme['purple-450']};
  }
`
export const ErrorMessage = styled.p`
  padding-top: 0.5rem;
  padding-left: 0.25rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme['yellow-150']};
`
