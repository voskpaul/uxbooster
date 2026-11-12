'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Activity, BarChart3, Bell, ChevronDown, ChevronLeft, CircleHelp, Command, Compass, FileBarChart2, Filter, FolderKanban, Gauge, LayoutDashboard, Menu, MessageSquareText, MousePointer2, Search, Settings2, Sparkles, Users, Video, X } from 'lucide-react'
import type { ReactNode } from 'react'

const groups = [
  { label: 'Overview', items: [{ label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard }] },
  { label: 'Analytics', items: [
    { label: 'User Behavior', href: '/dashboard/behavior', icon: Activity },
    { label: 'Heatmaps', href: '/dashboard/heatmaps', icon: MousePointer2 },
    { label: 'Session Recordings', href: '/dashboard/recordings', icon: Video },
    { label: 'Conversion Funnels', href: '/dashboard/funnels', icon: Filter },
    { label: 'User Journeys', href: '/dashboard/journeys', icon: Compass },
  ] },
  { label: 'Insights', items: [
    { label: 'Feedback', href: '/dashboard/feedback', icon: MessageSquareText },
    { label: 'UX Insights', href: '/dashboard/insights', icon: Sparkles },
    { label: 'Reports', href: '/dashboard/reports', icon: FileBarChart2 },
  ] },
  { label: 'Management', items: [
    { label: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
    { label: 'Team Members', href: '/dashboard/team', icon: Users },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings2 },
  ] },
]

const routeTitles: Record<string, string> = Object.fromEntries(groups.flatMap(group => group.items.map(item => [item.href, item.label])))

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [project, setProject] = useState('Acme Website')
  const [workspace, setWorkspace] = useState('Acme Digital Workspace')
  const [workspaceOpen, setWorkspaceOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [date, setDate] = useState('Last 30 days')
  const [searchOpen, setSearchOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)
  const currentTitle = routeTitles[pathname] ?? 'Dashboard'

  return <div className="app-shell">
    {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''} ${mobileOpen ? 'sidebar-mobile-open' : ''}`}>
      <div className="brand-row"><Link href="/dashboard" className="brand" aria-label="UXBooster dashboard"><span className="brand-mark"><MousePointer2 /><span className="brand-arrow">↗</span></span>{!collapsed && <span>UX<span className="brand-accent">Booster</span></span>}</Link><button className="icon-button collapse-button" onClick={() => setCollapsed(!collapsed)} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}><ChevronLeft className={collapsed ? 'rotate-180' : ''} /></button><button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></button></div>
      {!collapsed && <div className="workspace-control"><button className="workspace-switch" aria-expanded={workspaceOpen} onClick={() => setWorkspaceOpen(!workspaceOpen)}><span className="workspace-avatar">{workspace[0]}</span><span className="workspace-label"><strong>{workspace.replace(' Workspace', '')}</strong><small>Workspace</small></span><ChevronDown /></button>{workspaceOpen && <div className="workspace-popover">{['Acme Digital Workspace', 'Product Design Studio'].map(name => <button key={name} onClick={() => { setWorkspace(name); setWorkspaceOpen(false) }}><span className="workspace-avatar">{name[0]}</span><span>{name}</span>{workspace === name && <span className="workspace-check">✓</span>}</button>)}</div>}</div>}
      <nav className="side-nav" aria-label="Main navigation">{groups.map(group => <div className="nav-group" key={group.label}><div className="nav-label">{!collapsed ? group.label : <span className="nav-divider" />}</div>{group.items.map(item => { const Icon = item.icon; const active = pathname === item.href; return <Link key={item.href} href={item.href} title={collapsed ? item.label : undefined} onClick={() => setMobileOpen(false)} className={`nav-item ${active ? 'nav-item-active' : ''}`} aria-current={active ? 'page' : undefined}><Icon /><span>{item.label}</span>{item.label === 'UX Insights' && !collapsed && <span className="nav-count">4</span>}</Link> })}</div>)}</nav>
      {!collapsed && <div className="sidebar-bottom"><div className="plan-card"><div className="plan-icon"><Gauge /></div><div><strong>Growth plan</strong><small>68% of monthly events</small></div><div className="plan-meter"><span /></div><Link className="plan-link" href="/dashboard/settings">Manage plan <span>→</span></Link></div><div className="sidebar-user"><div className="avatar avatar-lilac">AM</div><div className="user-label"><strong>Alex Morgan</strong><small>alex@acme.design</small></div><button className="icon-button tiny" aria-label="Account options" aria-expanded={accountOpen} onClick={() => setAccountOpen(!accountOpen)}><MoreIcon /></button>{accountOpen && <div className="account-popover"><strong>Alex Morgan</strong><Link href="/dashboard/settings" onClick={() => setProfileOpen(false)}>Account settings</Link><Link href="/login">Sign out of demo</Link></div>}</div></div>}
      {collapsed && <div className="collapsed-bottom"><div className="avatar avatar-lilac">AM</div></div>}
    </aside>

    <div className="main-column"><header className="topbar"><div className="topbar-left"><button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></button><div className="breadcrumb"><span>Acme Digital</span><span className="crumb-slash">/</span><strong>{currentTitle}</strong></div></div><div className="topbar-controls"><label className="project-select"><span className="project-dot" /><select value={project} onChange={event => setProject(event.target.value)} aria-label="Select project"><option>Acme Website</option><option>UXBooster App</option><option>ShopFlow E-commerce</option></select><ChevronDown /></label><label className="range-select"><select value={date} onChange={event => setDate(event.target.value)} aria-label="Select date range"><option>Last 7 days</option><option>Last 30 days</option><option>Last 90 days</option><option>Custom range</option></select><ChevronDown /></label><div className={`global-search ${searchOpen ? 'search-open' : ''}`}>{searchOpen && <input value={search} onChange={event => setSearch(event.target.value)} autoFocus placeholder="Search pages, sessions…" aria-label="Search dashboard" onKeyDown={event => { if (event.key === 'Escape') { setSearchOpen(false); setSearch('') } }} />}<button className="icon-button" aria-label={searchOpen ? 'Close search' : 'Search'} onClick={() => { setSearchOpen(!searchOpen); setSearch('') }}><Search /></button>{!searchOpen && <kbd>⌘ K</kbd>}{searchOpen && search && <div className="search-results">{groups.flatMap(group => group.items).filter(item => item.label.toLowerCase().includes(search.toLowerCase())).map(item => <Link key={item.href} href={item.href} onClick={() => { setSearchOpen(false); setSearch('') }}>{item.label}<span>→</span></Link>)}{!groups.flatMap(group => group.items).some(item => item.label.toLowerCase().includes(search.toLowerCase())) && <span className="search-empty">No matching dashboard pages</span>}</div>}</div><div className="notification-wrap"><button className="icon-button notification-button" aria-label="Notifications" onClick={() => setShowNotifications(!showNotifications)}><Bell /><i /></button>{showNotifications && <div className="notification-popover"><strong>Notifications</strong><p><span className="notification-dot" />New UX insight: mobile checkout drop-off</p><p><span className="notification-dot cyan-dot" />Weekly report is ready to view</p><button onClick={() => setShowNotifications(false)}>Mark all as read</button></div>}</div><div className="help-wrap"><button className="icon-button help-button" aria-label="Help center" title="Help center" onClick={() => setHelpOpen(!helpOpen)}><CircleHelp /></button>{helpOpen && <div className="help-popover"><strong>How can we help?</strong><p>Explore the sample workspace or browse a report.</p><Link href="/dashboard/reports" onClick={() => setHelpOpen(false)}>Open analytics reports <span>→</span></Link><Link href="/dashboard/feedback" onClick={() => setHelpOpen(false)}>View feedback examples <span>→</span></Link></div>}</div><div className="profile-wrap"><button className="profile-button" aria-label="Alex Morgan profile" aria-expanded={profileOpen} onClick={() => setProfileOpen(!profileOpen)}><span className="avatar avatar-lilac">AM</span><ChevronDown /></button>{profileOpen && <div className="profile-popover"><div><strong>Alex Morgan</strong><small>Demo workspace owner</small></div><Link href="/dashboard/settings" onClick={() => setProfileOpen(false)}>Profile &amp; settings</Link><Link href="/login">Sign out of demo</Link></div>}</div></div></header><main className="workspace-content"><div className="mobile-context"><span><Command /> Acme Digital Workspace</span></div>{children}<footer className="page-footer"><span>UXBooster <b>·</b> Sample analytics for demonstration purposes</span><a href="/dashboard/settings">Privacy &amp; data settings</a></footer></main></div>
  </div>
}

function MoreIcon() { return <span className="more-dots" aria-hidden="true">•••</span> }
