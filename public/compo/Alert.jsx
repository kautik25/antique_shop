import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import { statusDetails } from '../services/httpErrorHandling'
import { useAlert } from '../store'
import { XCircleIcon } from '@heroicons/react/solid'




// export default function Alert() {


//     let alert = useAlert(state => state)
//     return (
//         <div hidden={!alert.isShow} className={`m-2 rounded-md bg-${statusDetails(alert.type)}-50 p-4 w-1/2 text-center align-middle justify-center`}>
//             <div className="flex ">
//                 <div className="flex-shrink-0">
//                     <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />

//                     {/* <CheckCircleIcon className={`h-5 w-5 text-${statusDetails(alert.type)}-400`} aria-hidden="true" /> */}
//                 </div>
//                 <div className="ml-3">
//                     {/* <p className="text-sm font-medium text-green-800">Successfully uploaded</p> */}
//                     <p className={`text-sm font-medium text-${statusDetails(alert.type)}-800`}>{alert.message} - {statusDetails(alert.type)}</p>
//                 </div>
//                 <div className="ml-auto pl-3">
//                     <div className="-mx-1.5 -my-1.5">
//                         <button
//                             type="button"
//                             className={`inline-flex bg-${statusDetails(alert.type)}-50 rounded-md p-1.5 text-${statusDetails(alert.type)}-500 hover:bg-${statusDetails(alert.type)}-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-${statusDetails(alert.type)}-600`}
//                         >
//                             <span className="sr-only">Dismiss</span>
//                             <XIcon className="h-5 w-5" aria-hidden="true" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
// import { CheckCircleIcon } from '@heroicons/react/outline'
// import { XIcon } from '@heroicons/react/solid'

export default function Alert() {
    let alert = useAlert(state => state)


    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end my-3">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={alert.isShow}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className={`h-6 w-6 text-${statusDetails(alert.type)}-400`} aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className={`text-sm font-medium text-${statusDetails(alert.type)}-900`}>{alert.message}!</p>
                                        <p className="mt-1 text-sm text-gray-500">{alert.message}.</p>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className={`bg-${statusDetails(alert.type)} rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${statusDetails(alert.type)}-500`}
                                            onClick={() => alert.close()}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}