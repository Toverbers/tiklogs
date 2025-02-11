import { AboutSection } from '@/components/_HomeComponents/AboutSection'
import { DownloadSection } from '@/components/_HomeComponents/DownloadSection'
import { FeaturesSection } from '@/components/_HomeComponents/FeatureSection'
import { HeroSection } from '@/components/_HomeComponents/HeroSection'
import { HowItWorksSection } from '@/components/_HomeComponents/HowItWorksSection'
import { QuickAnswersSection } from '@/components/_HomeComponents/QuickAnswersSection'
import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import React from 'react'

export const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <DownloadSection />
      <FeaturesSection />
      <QuickAnswersSection />
      <HowItWorksSection />
    </Layout>
  )
}
