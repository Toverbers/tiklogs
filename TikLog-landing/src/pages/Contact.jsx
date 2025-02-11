import { ActionCards } from '@/components/_ContactComponent/ActionCards'
import { ContactForm } from '@/components/_ContactComponent/ContactForm'
import { ContactHeader } from '@/components/_ContactComponent/ContactHeader'
import { DownloadSection } from '@/components/_ContactComponent/DownloadSection'
import { FaqSection } from '@/components/_ContactComponent/FaqSection'
import { Layout } from '@/components/Layout'
import React from 'react'

export const ContactPage = () => {
  return (
    <Layout>
        <ContactHeader />
        <ActionCards />
        <ContactForm />
        <FaqSection />
        <DownloadSection />
    </Layout>
  )
}
