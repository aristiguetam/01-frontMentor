'use client';

import { UIProvider } from '@/context'

const Providers = ({ children }: { children: React.ReactNode  }) => {

    return (
        <UIProvider>
            {children}
        </UIProvider>
    )
}

export default Providers