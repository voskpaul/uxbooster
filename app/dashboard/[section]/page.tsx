import { SectionPage } from '@/components/uxbooster/section-page'

export default async function DashboardSection({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionPage section={section} />
}
