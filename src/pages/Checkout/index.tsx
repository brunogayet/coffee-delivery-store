import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z as zod } from 'zod'

import { FormOrder } from './components/FormOrder'
import { OrderSummary } from './components/OrderSummary'
import { ContainerCheckout } from './styles'
import { useNavigate } from 'react-router-dom'

const newOrderFormValidationSchema = zod.object({
  cep: zod.string().regex(/\d{5}-\d{3}/, 'CEP deve estar no formato 99999-999'),
  street: zod.string().min(1, 'Rua é obrigatório'),
  number: zod
    .number({ invalid_type_error: 'Número espera um número inteiro' })
    .min(1, 'Número é obrigatório'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Bairro é obrigatório'),
  city: zod.string().min(1, 'Cidade é obrigatório'),
  state: zod
    .string()
    .min(2, 'UF deve ter apenas 2 dígitos')
    .max(2, 'UF deve ter apenas 2 dígitos'),
  paymentMethod: zod.enum(['credit_card', 'debit_card', 'money'], {
    invalid_type_error: 'Preencha uma forma de pagamento',
    required_error: 'Preencha uma forma de pagamento',
  }),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

const descriptionPaymentMethod = {
  credit_card: 'Cartão de Crédito',
  debit_card: 'Cartão de Débito',
  money: 'Dinheiro',
}

export function Checkout() {
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const navigate = useNavigate()

  const { handleSubmit } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    const checkoutData = {
      ...data,
      paymentMethod: descriptionPaymentMethod[data.paymentMethod],
    }

    localStorage.setItem(
      '@coffee-delivery:purchase-info-1.0.0',
      JSON.stringify(checkoutData),
    )

    navigate('/success')
  }

  return (
    <ContainerCheckout>
      <form onSubmit={handleSubmit(handleCreateNewOrder)} action="">
        <FormProvider {...newOrderForm}>
          <FormOrder />
        </FormProvider>

        <OrderSummary />
      </form>
    </ContainerCheckout>
  )
}
