import { ReactNode } from 'react'

interface IContainer {
    children: ReactNode
    className?: string
    size?: 'small' | 'medium'
}

export default function Container({
    children,
    className,
    size = 'medium',
}: IContainer) {
    return (
        <div className={'flex w-full justify-center ' + className}>
            <div
                className={`w-full ${size === 'small' ? 'max-w-[720px]' : 'max-w-[1280px]'} px-4`}
            >
                {children}
            </div>
        </div>
    )
}
