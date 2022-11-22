import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  BoxMultipleInputs,
  LabelOptionPayment,
  FormOrderContainer,
  FormSectionAddress,
  FormSectionPayment,
  InputFormBairro,
  InputFormCep,
  InputFormCidade,
  InputFormComplemento,
  InputFormNumero,
  InputFormRua,
  InputFormUF,
  ErrorMessage,
} from './styles'

export function FormOrder() {
  const { register, formState } = useFormContext()

  const { errors } = formState

  return (
    <FormOrderContainer>
      <h2>Complete seu pedido</h2>

      <FormSectionAddress>
        <header>
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </header>

        <div>
          <div>
            <InputFormCep
              id="cep"
              type="text"
              placeholder="CEP"
              maxLength={9}
              minLength={9}
              {...register('cep')}
            />
          </div>
          {errors?.cep && <ErrorMessage>{errors?.cep?.message}</ErrorMessage>}

          <div>
            <InputFormRua
              id="street"
              type="text"
              placeholder="Rua"
              {...register('street')}
            />
          </div>
          {errors?.street && (
            <ErrorMessage>{errors?.street?.message}</ErrorMessage>
          )}

          <BoxMultipleInputs>
            <InputFormNumero
              id="number"
              type="number"
              placeholder="Número"
              {...register('number', { valueAsNumber: true })}
            />
            <div>
              <InputFormComplemento
                id="complement"
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
              <span>Opcional</span>
            </div>
          </BoxMultipleInputs>
          {errors?.number && (
            <ErrorMessage>{errors?.number?.message}</ErrorMessage>
          )}

          <BoxMultipleInputs>
            <InputFormBairro
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />

            <InputFormCidade
              id="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />

            <InputFormUF
              id="state"
              type="text"
              placeholder="UF"
              {...register('state')}
            />
          </BoxMultipleInputs>
          {errors?.neighborhood && (
            <ErrorMessage>{errors?.neighborhood?.message}</ErrorMessage>
          )}
          {errors?.city && <ErrorMessage>{errors?.city?.message}</ErrorMessage>}
          {errors?.state && (
            <ErrorMessage>{errors?.state?.message}</ErrorMessage>
          )}
        </div>
      </FormSectionAddress>

      <FormSectionPayment>
        <header>
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>

        <div>
          <input
            type="radio"
            id="credit_card"
            value="credit_card"
            {...register('paymentMethod')}
          />
          <LabelOptionPayment htmlFor="credit_card">
            <CreditCard size={16} />
            <span>Cartão de crédito</span>
          </LabelOptionPayment>

          <input
            type="radio"
            id="debit_card"
            value="debit_card"
            {...register('paymentMethod')}
          />

          <LabelOptionPayment htmlFor="debit_card">
            <Bank size={16} />
            <span>Cartão de débito</span>
          </LabelOptionPayment>

          <input
            type="radio"
            id="money"
            value="money"
            {...register('paymentMethod')}
          />

          <LabelOptionPayment htmlFor="money">
            <Money size={16} />
            <span>Dinheiro</span>
          </LabelOptionPayment>
        </div>
        {errors?.paymentMethod && (
          <ErrorMessage>{errors?.paymentMethod?.message}</ErrorMessage>
        )}
      </FormSectionPayment>
    </FormOrderContainer>
  )
}
