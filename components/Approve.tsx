import { Dialog, Transition } from '@headlessui/react'
import { useRef, Fragment } from 'react'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import { LoanOpportunity } from '../pages/api/data/LoanOpportunity'
import { WriteContractConfig } from '@wagmi/core';

type Props = {
  message: string
  maxcost: number
  erc20: number
  dai: number
  lock: number
  open: boolean
  setOpen: (b:boolean) => void
  opportunity: LoanOpportunity
  callSmartContract: (overrideConfig?: WriteContractConfig | undefined) => void
}

export function Approve({ message, maxcost, erc20, dai, lock, open, setOpen, opportunity, callSmartContract }: Props) {
  const cancelButtonRef = useRef(null);

  function handleApproveOpportunity() {
    setOpen(false)
		const stablePay = opportunity.stableAmount;
		const nativePay = opportunity.erc20Amount;
		const exchangeRate = opportunity.erc20Price;
		const nativeToken = opportunity.erc20Address;
		let deadline = new Date();
		deadline.setDate(deadline.getDate())
		deadline = new Date(deadline.getTime() + 40*24*60*60*1000 * 1.15)	// 40 days  
		callSmartContract({ args: [stablePay, nativePay, exchangeRate, nativeToken, Math.round(deadline.getTime()/1000)] })
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-300 sm:mx-0 sm:h-10 sm:w-10">
                      <ShieldCheckIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-stone-900"
                      >
                        Validate transactions
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-stone-500">
                          By validating the opportunity, the following amounts
                          of token will be lock
                        </p>
                      </div>
                      <div className="mt-3 items-start gap-2 text-sm text-stone-600 sm:mt-4 sm:flex sm:flex-col">
                        <div>Maximum total cost: {maxcost}</div>
                        <div className="flex">
                          <img
                            src="./ethereum.svg"
                            alt="eth"
                            className="mr-2 h-4 w-4"
                          />
                          {erc20}
                        </div>
                        <div className="flex">
                          <img
                            src="./dai.svg"
                            alt="dai"
                            className="mr-2 h-4 w-4"
                          />
                          {dai}
                        </div>
                        <div className='flex'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>{' '}
                          {lock} days
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-stone-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-emerald-700  sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleApproveOpportunity}
                  >
                    Approve {message}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-stone-300 bg-white px-4 py-2 text-base font-medium text-stone-700 shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-50 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Approve
