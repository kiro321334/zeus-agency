const d = { trend: 'M3 17l6-6 4 4 8-8M15 7h6v6', hash: 'M4 9h16M4 15h16M10 3L8 21M16 3l-2 18', wand: 'M15 4V2M15 16v-2M8 9H6M20 9h-2M17 6l1-1M17 12l1 1M3 21l9-9', clap: 'M3 9h18v11H3zM3 9l2-5 4 1-2 4M10 9l2-5 4 1-2 4', check: 'M20 6L9 17l-5-5', chat: 'M21 12a8 8 0 0 1-11.6 7L4 20l1.1-4.8A8 8 0 1 1 21 12z', mail: 'M3 5h18v14H3zM3 7l9 7 9-7', play: 'M8 5v14l11-7z' };
export default function Icon({ n, size = 20, className = '' }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}><path d={d[n]} /></svg>;
}
