export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    icon?: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
    seriesPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'home@boherm.dev',
    subtitle: 'Minimal Astro.js theme',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {},
        // {
        //     text: 'Blog',
        //     href: '/blog'
        // },
        // {
        //     text: 'Séries',
        //     href: '/series'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // },
        // {
        //     text: 'Projets',
        //     href: '/projects'
        // },
    ],
    footerNavLinks: [
        // {
        //     text: 'À propos',
        //     href: '/about-me'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
    ],
    socialLinks: [
        {
            text: 'GitHub',
            icon: 'github',
            href: 'https://github.com/boherm'
        },
        {
            text: 'LinkedIn',
            icon: 'linkedin',
            href: 'https://www.linkedin.com/in/boris-hermans/'
        },
        // {
        //     text: 'YouTube',
        //     icon: 'youtube',
        //     href: '#'
        // },
        {
            text: 'X/Twitter',
            icon: 'twitter',
            href: 'https://x.com/bohermdev'
        },
        {
            text: 'BlueSky',
            icon: 'bluesky',
            href: 'https://bsky.app/profile/boherm.bsky.social'
        }
    ],
    hero: {
        title: 'Hey, bienvenue !',
        text: "<p align='center'><strong>Site en cours de construction...</strong></p> <p>Je suis <strong>Boris Hermans</strong> aka <em>boherm</em>, un développeur travaillant actuellement au sein de PrestaShop SA. J'ai la chance de pouvoir faire partie de l'équipe des mainteneurs de l'application Open Source du même nom.</p><p>Étant également un passionné de développement, de nouvelles technologies et de musique, je partage ici mes découvertes, mes projets et mes réflexions autour de tous ces sujets.</p> <p>N'hésitez pas à me contacter pour discuter de vos projets !</p> <p><strong>Bonne lecture</strong></p>",
        image: {
            src: '/assets/about/hero.jpeg',
            alt: 'Une personne qui utilise un ordinateur.'
        },
        actions: [
            // {
            //     text: 'Get in Touch',
            //     href: '/contact'
            // }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8,
    seriesPerPage: 8,
};

export default siteConfig;
