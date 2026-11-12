export type Metric = { label: string; value: string; change: string; positive?: boolean; icon: string; values: number[] }
export type PageRow = { page: string; views: number; users: number; time: string; bounce: string; conversion: string }

export const activity = Array.from({ length: 30 }, (_, index) => ({
  day: `May ${index + 1}`,
  active: Math.round(2800 + Math.sin(index * 0.42) * 520 + index * 34 + (index % 5) * 90),
  newUsers: Math.round(940 + Math.cos(index * 0.36) * 210 + index * 12 + (index % 4) * 32),
}))

export const metrics: Metric[] = [
  { label: 'Total users', value: '128,450', change: '+18.6%', positive: true, icon: 'users', values: [28, 39, 34, 53, 45, 62, 57, 78] },
  { label: 'Active sessions', value: '24,892', change: '+12.4%', positive: true, icon: 'activity', values: [34, 28, 48, 39, 56, 48, 68, 62] },
  { label: 'Avg. session duration', value: '4m 32s', change: '+8.2%', positive: true, icon: 'clock', values: [26, 34, 30, 44, 42, 57, 52, 68] },
  { label: 'Conversion rate', value: '3.84%', change: '+0.6 pp', positive: true, icon: 'target', values: [32, 39, 36, 48, 43, 58, 53, 70] },
]

export const pages: PageRow[] = [
  { page: '/home', views: 48210, users: 32480, time: '2m 48s', bounce: '32.4%', conversion: '4.82%' },
  { page: '/pricing', views: 28740, users: 18620, time: '3m 16s', bounce: '24.8%', conversion: '8.16%' },
  { page: '/product/analytics', views: 19260, users: 12840, time: '4m 02s', bounce: '19.2%', conversion: '6.44%' },
  { page: '/blog/ux-research', views: 14820, users: 11290, time: '5m 28s', bounce: '38.6%', conversion: '1.82%' },
  { page: '/signup', views: 12480, users: 9560, time: '1m 42s', bounce: '18.4%', conversion: '12.60%' },
  { page: '/resources/guides', views: 9820, users: 7240, time: '3m 36s', bounce: '35.1%', conversion: '2.94%' },
  { page: '/features/heatmaps', views: 8420, users: 6180, time: '3m 12s', bounce: '27.3%', conversion: '5.14%' },
]

export const traffic = [
  { label: 'Organic search', value: 42, sessions: '10,458', color: '#8b5cf6' },
  { label: 'Direct', value: 26, sessions: '6,472', color: '#22d3ee' },
  { label: 'Social media', value: 15, sessions: '3,734', color: '#6366f1' },
  { label: 'Referral', value: 10, sessions: '2,489', color: '#34d399' },
  { label: 'Paid ads', value: 7, sessions: '1,739', color: '#f59e0b' },
]

export const events = [
  { title: 'New user completed onboarding', detail: 'Maya Chen · Acme Website', time: '2 min ago', icon: 'user', tone: 'violet' },
  { title: 'Conversion funnel updated', detail: 'Checkout journey · UXBooster App', time: '18 min ago', icon: 'filter', tone: 'cyan' },
  { title: 'Session recording processed', detail: 'Session #S-20481 · 6m 12s', time: '42 min ago', icon: 'play', tone: 'green' },
  { title: 'UX insight detected', detail: 'Mobile checkout friction · High priority', time: '1 hr ago', icon: 'sparkles', tone: 'amber' },
]

export const recordings = [
  { id: 'S-20481', visitor: 'Maya Chen', device: 'Desktop', browser: 'Chrome', duration: '6m 12s', pages: 8, events: 24, date: 'May 30, 10:42 AM', status: 'Completed' },
  { id: 'S-20480', visitor: 'Jordan Lee', device: 'Mobile', browser: 'Safari', duration: '3m 48s', pages: 5, events: 18, date: 'May 30, 10:18 AM', status: 'Frustrated' },
  { id: 'S-20479', visitor: 'Sam Rivera', device: 'Desktop', browser: 'Firefox', duration: '8m 06s', pages: 11, events: 37, date: 'May 30, 9:56 AM', status: 'Completed' },
  { id: 'S-20478', visitor: 'Avery Kim', device: 'Tablet', browser: 'Chrome', duration: '2m 14s', pages: 3, events: 12, date: 'May 30, 9:31 AM', status: 'Error' },
  { id: 'S-20477', visitor: 'Taylor Morgan', device: 'Mobile', browser: 'Chrome', duration: '5m 32s', pages: 7, events: 29, date: 'May 30, 9:12 AM', status: 'Completed' },
]

export const feedback = [
  { user: 'Jamie L.', message: 'The new dashboard feels much easier to navigate. I found the reports I needed right away.', category: 'Navigation', sentiment: 'Positive', rating: 5, date: 'May 30', status: 'Reviewed' },
  { user: 'Alex R.', message: 'Checkout takes a while to load on my phone, especially when I return to edit my cart.', category: 'Performance', sentiment: 'Negative', rating: 2, date: 'May 29', status: 'New' },
  { user: 'Morgan K.', message: 'Would love a way to compare two date ranges side by side in the overview.', category: 'Feature request', sentiment: 'Neutral', rating: 3, date: 'May 29', status: 'In review' },
  { user: 'Casey T.', message: 'The clearer labels make the analytics much more approachable for our team.', category: 'Usability', sentiment: 'Positive', rating: 5, date: 'May 28', status: 'Reviewed' },
]

export const insights = [
  { title: 'High mobile checkout drop-off', description: 'Mobile visitors leave the checkout flow more often than desktop visitors in this sample.', priority: 'High', category: 'Conversion', metric: '−18.4% mobile completion', action: 'Review the mobile checkout form and simplify the payment step.', status: 'Needs review' },
  { title: 'Homepage CTA opportunity', description: 'The primary homepage action receives fewer interactions than expected in the demo dataset.', priority: 'Medium', category: 'Engagement', metric: '2.8% click-through', action: 'Test a more descriptive label and move the CTA closer to the product value statement.', status: 'Needs review' },
  { title: 'Pricing navigation friction', description: 'Visitors often return to the main navigation after viewing the pricing page.', priority: 'Medium', category: 'Navigation', metric: '31% return to nav', action: 'Clarify plan differences and keep the comparison anchored while scrolling.', status: 'Reviewed' },
  { title: 'Form completion issues', description: 'Several illustrative sessions show repeated attempts around required form fields.', priority: 'Low', category: 'Usability', metric: '1.7 retries / form', action: 'Add inline examples and keep validation messages next to each field.', status: 'Needs review' },
]

export const reports = [
  { title: 'UX performance report', description: 'Core experience metrics, engagement, and friction signals.', date: 'May 30, 2025', status: 'Ready', icon: 'chart' },
  { title: 'User engagement report', description: 'Session quality, returning users, and page interactions.', date: 'May 29, 2025', status: 'Ready', icon: 'users' },
  { title: 'Conversion report', description: 'Funnel performance and stage-by-stage drop-off analysis.', date: 'May 28, 2025', status: 'Ready', icon: 'target' },
  { title: 'Feedback summary', description: 'Sentiment, categories, and recent fictional feedback.', date: 'May 26, 2025', status: 'Ready', icon: 'message' },
  { title: 'Device performance report', description: 'Engagement and conversion compared across device types.', date: 'May 24, 2025', status: 'Ready', icon: 'monitor' },
]

export const projects = [
  { name: 'Acme Website', domain: 'acme.example.com', status: 'Tracking demo', users: '128,450', activity: '2 min ago', icon: 'A', hue: 'violet' },
  { name: 'UXBooster App', domain: 'app.uxbooster.example', status: 'Tracking demo', users: '42,816', activity: '18 min ago', icon: 'U', hue: 'cyan' },
  { name: 'ShopFlow E-commerce', domain: 'shopflow.example.com', status: 'Setup demo', users: '86,204', activity: '1 hr ago', icon: 'S', hue: 'orange' },
]

export const teamMembers = [
  { name: 'Alex Morgan', email: 'alex@acmedigital.example', role: 'Owner', status: 'Active', lastActive: 'Now', initials: 'AM' },
  { name: 'Maya Chen', email: 'maya@acmedigital.example', role: 'Admin', status: 'Active', lastActive: '12 min ago', initials: 'MC' },
  { name: 'Jordan Lee', email: 'jordan@acmedigital.example', role: 'Analyst', status: 'Active', lastActive: '1 hr ago', initials: 'JL' },
  { name: 'Sam Rivera', email: 'sam@acmedigital.example', role: 'Viewer', status: 'Invited', lastActive: 'Pending', initials: 'SR' },
]
