import React from 'react';

type IconProps = {
    className?: string;
};

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.998a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 .52-1.424L4.5 10.5h15l.732 2.226c.26.79.358 1.63.298 2.474Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5a2.25 2.25 0 0 0-2.25 2.25v.75a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-.75a2.25 2.25 0 0 0-2.25-2.25h-15Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75V6.75a3 3 0 0 0-3-3h-1.5a3 3 0 0 0-3 3v3" />
    </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

export const ChartBarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

export const CpuChipIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-12h1.5m-19.5 0h1.5m16.5 0h1.5m-19.5 0h1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25V4.5m0 15V12m0 0v-3.75m0 3.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Zm0 0a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z" />
    </svg>
);

export const PaintBrushIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118 2.25 2.25 0 0 1-2.47-2.118c0-.62.28-1.22.755-1.634m10.239-9.31a3 3 0 0 0-5.78-1.128 2.25 2.25 0 0 1-2.47-2.118 2.25 2.25 0 0 1 2.47 2.118c.62 0 1.22-.28 1.634-.755m-1.634 5.78a3 3 0 0 0 5.78 1.128 2.25 2.25 0 0 1 2.47 2.118 2.25 2.25 0 0 1-2.47-2.118c0-.62-.28-1.22-.755-1.634m-4.662-3.23a3 3 0 0 0-1.128-5.78 2.25 2.25 0 0 1-2.118-2.47 2.25 2.25 0 0 1 2.118 2.47c0 .62.28 1.22.755 1.634m0 0a3 3 0 0 0 1.128 5.78 2.25 2.25 0 0 1 2.118 2.47 2.25 2.25 0 0 1-2.118-2.47c-.62 0-1.22.28-1.634.755m-1.634-5.78a3 3 0 0 0-5.78-1.128 2.25 2.25 0 0 1-2.47-2.118 2.25 2.25 0 0 1 2.47 2.118c.62 0 1.22-.28 1.634-.755m1.634 5.78a3 3 0 0 0 5.78 1.128 2.25 2.25 0 0 1 2.47 2.118 2.25 2.25 0 0 1-2.47-2.118c0-.62-.28-1.22-.755-1.634Z" />
    </svg>
);

export const KeyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
    </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.57-.063.996-.59.996-1.18V9.813c0-.59-.426-1.117-.996-1.181a9.006 9.006 0 0 0-5.008 0c-.57.064-.996.59-.996 1.18v3.75c0 .59.426 1.117.996 1.181a9.006 9.006 0 0 0 5.008 0ZM10.5 11.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-2.25a2.25 2.25 0 0 0-2.25 2.25v.375m17.25-10.5a9.094 9.094 0 0 0-3.742-.479 3 3 0 0 0-4.68 2.72M15 11.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
);
export const RocketLaunchIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a6 6 0 0 1 7.38 5.84h-4.82m-2.56-5.84a6 6 0 0 1-7.38-5.84v4.82m5.84-2.56a6 6 0 0 1 5.84-7.38h-4.82m-2.56 5.84a6 6 0 0 1-5.84-7.38v4.82m10.64 0A6 6 0 0 0 9.63 3.73m10.64 0a6 6 0 0 1-7.38 5.84m-2.56-5.84a6 6 0 0 1 5.84 7.38m-5.84-7.38a6 6 0 0 0-5.84 7.38" />
    </svg>
);
export const MegaphoneIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
    </svg>
);
export const ChatBubbleBottomCenterTextIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12.75a6 6 0 0 0-12 0v4.5m12-4.5v4.5m-6-12C8.625 5.25 7.5 7.5 7.5 9.75s1.125 4.5 3.375 4.5 3.375-2.25 3.375-4.5-1.125-4.5-3.375-4.5Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
    </svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M1.5 4.5v15h21v-15H1.5zM3 6h18v1.989L12 14.123 3 7.989V6zm18 12H3V9.223l9 6.134 9-6.134V18z"/>
  </svg>
);

// SKILL ICONS START
export const ReactIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" {...props}><circle cx="0" cy="0" r="2.05" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>
);
export const NextjsIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" {...props}><path d="M64 128C99.346 128 128 99.346 128 64C128 28.654 99.346 0 64 0C28.654 0 0 28.654 0 64C0 99.346 28.654 128 64 128Z"></path><path fill="#000" d="M102.66 45.03L58.21 98.42V36h-8v62.37l-38.4-52.66h-9.28v78.26h8V45.03l44.45 53.39V92h8V29.63l38.4 52.66h9.28V16h-8v29.03z"></path></svg>
);
export const JavascriptIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 24a12 12 0 1 1 12-12a12.013 12.013 0 0 1-12 12m6.5-4.8c0 .8-.5 1.3-1.4 1.3a2.308 2.308 0 0 1-1.7-.7l-.9.8c.7.9 2 1.5 3.3 1.5c2.4 0 3.8-1.5 3.8-3.6c0-4.1-5.6-3.1-5.6-4.7c0-.6.4-1.1 1.2-1.1c.8 0 1.2.4 1.5.7l.9-.8c-.6-.7-1.6-1.2-2.9-1.2c-2.1 0-3.5 1.3-3.5 3.2c0 4.1 5.6 3 5.6 4.7m-8.1-.4c0 .9-.5 1.5-1.5 1.5c-1.1 0-1.7-.8-2-1.2l-1 .7c.6.9 1.7 1.8 3.5 1.8c2.2 0 3.6-1.4 3.6-3.6c0-4.4-5.6-3.2-5.6-4.8c0-.6.4-1.1 1.2-1.1c.7 0 1.2.4 1.4.6l.9-.8c-.5-.5-1.4-1-2.8-1c-2 0-3.4 1.3-3.4 3.2c0 4.4 5.6 3.2 5.6 4.8"/></svg>
);
export const TypescriptIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 24a12 12 0 1 1 12-12a12.013 12.013 0 0 1-12 12M15.4 10.4h-4.3v9.2h2.2v-7.1h1.9v-2.1h.2m-5.8-3.3c0-.3.1-.6.4-.8s.6-.3 1-.3c.4 0 .8.1 1.1.3c.3.2.5.5.7.8l2-1.2c-.3-.6-.8-1.1-1.4-1.5c-.6-.4-1.3-.6-2.2-.6c-1 0-1.8.3-2.5.8c-.7.6-1 1.3-1 2.3c0 .8.2 1.5.7 2.1c.5.6 1.1 1 1.9 1.1v.1c-.6.1-1.1.4-1.4.8c-.3.4-.5.9-.5 1.4v.2h6.1v-2h-3.9c.4-.3.7-.7.8-1.2c.2-.5.2-.9.2-1.4v-.2Z"/></svg>
);
export const Html5Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="m1.9 21.2l1.8-20.7h16.6l-1.8 20.7l-6.5 1.8l-6.5-1.8m12.4-10.4h-5.2l-.2-2.3h5.1l.3-3.5h-10l.3 3.5h5.1l-.3 3.4h-4.6l.3 4.2l3.4 1l3.4-1l.3-3.6"/></svg>
);
export const Css3Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="m1.9 21.2l1.8-20.7h16.6l-1.8 20.7l-6.5 1.8l-6.5-1.8m12.4-10.4h-8.2l.2 2.3h7.7l-.3 4.2l-3.4 1l-3.4-1l-.2-2.3h-2.1l.3 4.5l5.4 1.5l5.4-1.5l.7-8.2h-7.8l-.2-2.3h8.3l.3-3.5h-13.4l.3 3.5h8.5"/></svg>
);
export const TailwindCssIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 99" fill="currentColor" {...props}><path d="M101.309 0C45.356 0 0 45.356 0 101.309c0 28.242 11.533 53.606 29.691 71.764 18.158 18.158 43.522 29.691 71.618 29.691 55.953 0 101.309-45.356 101.309-101.309C202.618 45.356 157.262 0 101.309 0zm-18.158 143.254c-12.836 0-23.272-10.528-23.272-23.455 0-12.836 10.436-23.272 23.272-23.272 12.836 0 23.455 10.436 23.455 23.272 0 12.836-10.528 23.455-23.455 23.455zm54.84-54.657c-12.836 0-23.272-10.528-23.272-23.455 0-12.836 10.436-23.272 23.272-23.272 12.836 0 23.455 10.436 23.455 23.272 0 12.928-10.528 23.455-23.455 23.455z"/></svg>
);
export const BootstrapIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.5 5.5c0-.4.3-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.3-.8-.8m-9 0c0-.4.3-.8.8-.8s.8.4.8.8-.4.8-.8.8-.8-.3-.8-.8m9.2 15H7.3c-1.8 0-3.3-1.5-3.3-3.3V7.3c0-1.8 1.5-3.3 3.3-3.3h9.4c1.8 0 3.3 1.5 3.3 3.3v9.9c0 1.8-1.5 3.3-3.3 3.3M7.3 6C6.6 6 6 6.6 6 7.3v9.9c0 .7.6 1.3 1.3 1.3h9.4c.7 0 1.3-.6 1.3-1.3V7.3c0-.7-.6-1.3-1.3-1.3H7.3Z"/></svg>
);
export const NodejsIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.88 15.118c-1.04-.21-1.34-.84-1.34-1.84V8.728h-1.4V7.298h1.4V6.158c0-1.28.6-2.48 2.27-2.48h1.06v1.4h-1.06c-.53 0-.74.28-.74.77v1.45h1.8v1.43h-1.8v5.82c0 1.7 1.05 2.29 2.14 2.05l.38-1.28zM15.5 14h-1.3v-4h1.3v4z"/></svg>
);
export const ReduxIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.1,12.2a1.2,1.2,0,0,1-1.3.4,4,4,0,0,0-3.4-2,4.3,4.3,0,0,0-3.2,1.9,1.1,1.1,0,0,1-1.3.4,1.2,1.2,0,0,1-.5-1.3,6.2,6.2,0,0,1,5-3.2,6.1,6.1,0,0,1,5.1,3.4A1.3,1.3,0,0,1,17.1,14.2Zm-8.5-1.9a1.1,1.1,0,0,1-1.3.4A1.2,1.2,0,0,1,6,11.5a6.1,6.1,0,0,1,5.1-3.4,6.2,6.2,0,0,1,5,3.2,1.2,1.2,0,0,1-1.7,1,4.3,4.3,0,0,0-3.2-1.9,4,4,0,0,0-3.4,2Z"/></svg>
);
export const PythonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.93c-2.73 0-5-2.27-5-5s2.27-5 5-5v2c-1.65 0-3 1.35-3 3s1.35 3 3 3v2zm6-4c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/></svg>
);
export const SqlIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14h-3v-2h3v2zm0-4h-3V7h3v5zM8 16H5v-2h3v2zm0-4H5V7h3v5z"/></svg>
);
export const TableauIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4 4h4v16H4zm6 0h4v16h-4zm6 0h4v16h-4z"/></svg>
);
export const PowerBiIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4 4h5v16H4zm6 0h5v16h-5zm6 0h5v16h-5z"/></svg>
);
export const PandasIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4.5 7.5h3V9h-3zm0 3h3v1.5h-3zm0 3h3V15h-3zm0 3h3v1.5h-3zm6-9h3V9h-3zm0 3h3v1.5h-3zm0 3h3V15h-3zm0 3h3v1.5h-3zm6-9h3V9h-3zm0 3h3v1.5h-3zm0 3h3V15h-3zm0 3h3v1.5h-3z"/></svg>
);
export const NumpyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M8.2,16.4l7.4-8.8H8.4V6h9v1.6l-7.4,8.8h7.2v1.6H8.2V16.4z"/></svg>
);
export const ScikitLearnIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><circle cx="7" cy="12" r="3"/><circle cx="17" cy="18" r="3"/><path d="M8.6 10.4l6.8 5.2"/></svg>
);
export const GitIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21.5 12.5v-1l-3.2-3.2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l2.2 2.2H12v-5.7l2.2 2.2c.2.2.5.2.7 0s.2-.5 0-.7L12.5 4c-.2-.2-.5-.2-.7 0l-2.4 2.4c-.2.2-.2.5 0 .7s.5.2.7 0l2.2-2.2v5.7H4.8l2.2-2.2c.2-.2.2-.5 0-.7s-.5-.2-.7 0L3.1 8.3c-.2.2-.2.5 0 .7l3.2 3.2v1l-3.2 3.2c-.2.2-.2.5 0 .7s.5.2.7 0l2.2-2.2h7.2l-2.2 2.2c-.2.2-.2.5 0 .7s.5.2.7 0l2.4-2.4c.2-.2.2-.5 0-.7l-2.4-2.4H20v5.7l-2.2-2.2c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l2.4 2.4c.2.2.5.2.7 0l2.4-2.4c.2-.2.2-.5 0-.7L21.5 12.5z"/></svg>
);
export const NpmIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M21 3H3v18h18V3zM9 18H6V9h3v9zm3 0h-2V9h2v9zm6 0h-5V9h2v8h3v1z"/></svg>
);
export const AngularIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2L1 4.5l1.5 12L12 22l9.5-5.5L23 4.5 12 2zm0 3.16L19.5 8 12 18.5 4.5 8 12 5.16zM12 9.4l3.5 6.1h-7L12 9.4z"/></svg>
);
export const VueIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M24 4.5L12 22 0 4.5h4.8L12 14.5 19.2 4.5H24zM4.8 3L12 13 19.2 3H4.8z"/></svg>
);
export const WebpackIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.5 16.5l-8-4.5v-9l8 4.5v9zm-10 0l-8-4.5v-9l8 4.5v9zm-1-10.75l-6-3.375 6-3.375 6 3.375-6 3.375zm12 0l-6-3.375 6-3.375 6 3.375-6 3.375z"/></svg>
);
export const BabelIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16 12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm-4-2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 12c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8zm8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/></svg>
);
export const JestIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5V11h-3V9h3V6.5h2V9h3v2h-3v6.5h-2z"/></svg>
);
export const GqlIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4.6 4.6l14.8 14.8m-14.8 0l14.8-14.8m-14.8 7.4h14.8m-7.4-7.4v14.8m-7.4-7.4a7.4 7.4 0 1014.8 0 7.4 7.4 0 10-14.8 0z"/></svg>
);
export const PostmanIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.99V19h-2v-2h2v-2h2v2h2v2h-2v.01c-1.1.01-2 .01-2 0zm0-8V5h2v2h-2v2h-2V7h2V5h2v4h-2zm4 4h-2v-2h2v2z"/></svg>
);
// SKILL ICONS END