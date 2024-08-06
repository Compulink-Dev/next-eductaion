'use client'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from '@/components/ui/card'
import React from 'react'
import Header from './header'
import Social from './social'
import BackButton from './back-button'



interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string
    backButtonLabel: string
    backButtonHref: string
    showSocial?: boolean

}

function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) {
    return (
        <Card className='w-[400px]'>
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}

export default CardWrapper