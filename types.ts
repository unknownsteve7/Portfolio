// FIX: Import 'ComponentType' from 'react' to resolve 'Cannot find namespace 'React'' error.
import type { ComponentType } from 'react';

export interface NavLink {
    name: string;
    href: string;
}

export interface TimelineItem {
    date: string;
    title: string;
    subtitle: string;
    details: string | string[];
}

export interface Service {
    // FIX: Use 'ComponentType' instead of 'React.ComponentType'.
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface Skill {
    name: string;
    icon: ComponentType<{ className?: string }>;
    category: 'Frontend' | 'Data';
    color : string;
}

export interface Project {
    title: string;
    category: 'Development' | 'Analysis';
    image: string;
    description: string;
    tags: string[];
    liveLink?: string;
    repoLink?: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

export interface EventItem {
    date: string;
    title: string;
    description: string;
    // FIX: Use 'ComponentType' instead of 'React.ComponentType'.
    icon: ComponentType<{ className?: string }>;
}

export interface SocialLink {
    name: string;
    url: string;
    // FIX: Use 'ComponentType' instead of 'React.ComponentType'.
    icon: ComponentType<{ className?: string }>;
    color: string;
}