'use client';

import { useDispatch, useSelector } from 'react-redux';

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

import { setHamburgerState } from 'store';

import { Button } from 'common';

import Logo from '../Logo/Logo';

import { CloseIcon } from 'components/svgs';

const MobileMenu = () => {

    const dispatch = useDispatch();

    const { openMenu } = useSelector(state => state.common)

    const close = () => {
        dispatch(setHamburgerState(false))
    }

    return (
        <Transition show={openMenu}>
            <Dialog className="relative block lg:hidden z-[9999]" onClose={close}>
                <TransitionChild
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed dur inset-y-0 left-0 flex max-w-full pr-10">
                            <TransitionChild
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <DialogPanel className="pointer-events-auto  w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-hidden bg-white py-1 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-center justify-between">
                                                <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                                                    <Logo width={120} height={100} name="Logo" href="/" url='/icons/logo.svg' />
                                                </DialogTitle>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={close}
                                                    >
                                                        <CloseIcon />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6  flex-col px-4 sm:px-6">
                                            <Button name='main_btn' classes='w-full h-9' text='Upload' />
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default MobileMenu;
