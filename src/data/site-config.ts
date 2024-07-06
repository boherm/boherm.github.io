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
    subtitle: 'Développeur, musicien et passionné de nouvelles technologies.',
    description: 'Développeur, musicien et passionné de nouvelles technologies. Je partage ici mes découvertes, mes projets et mes réflexions autour de tous ces sujets.',
    image: {
        src: '/assets/og-default.png',
        alt: 'home@boherm.dev'
    },
    headerNavLinks: [
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
        {
            text: 'À propos',
            href: '/about-me'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
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
        {
            text: 'YouTube',
            icon: 'youtube',
            href: 'https://www.youtube.com/@bohermdev'
        },
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
        title: 'Hey, bienvenue ! 👋',
        text: "<p>Je m'appelle <strong>Boris Hermans</strong> <em>aka</em> <strong>boherm</strong>, un développeur travaillant actuellement au sein de <em>PrestaShop SA</em>. Étant un passionné de développement, de nouvelles technologies et également de musique, je partage ici mes découvertes, mes projets et mes réflexions autour de tous ces sujets.</p>",
        actions: [
            {
                text: 'En savoir plus',
                href: '/about-me'
            },
            {
                text: 'Contactez-moi !',
                href: '/contact'
            }
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
