import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitch, Twitter } from "lucide-react";

export const data = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Skills', link: '#skills' },
    { label: 'Projects', link: '#projects' },
    { label: 'Contact', link: '#contact' },
]

export const talents = [
    {
        name: 'Web Development',
        description: 'I can develop a website for you with a responsive and unique designs',
    },
    {
        name: 'Vulnerability Assessment',
        description: 'I can help you to identify and fix vulnerabilities in your website',
    },
    {
        name: 'Cyber Security',
        description: 'I can help you to protect your website from cyber attacks',
    },
]

export const skills = [
    {
        category: 'Web Development',
        skills: [
            { name: 'HTML', proficiency: '90%' },
            { name: 'CSS', proficiency: '80%' },
            { name: 'JavaScript', proficiency: '70%' },
            { name: 'React', proficiency: '60%' },
            { name: 'Node.js', proficiency: '30%' }
        ]
    },
    {
        category: 'Cybersecurity',
        skills: [
            { name: 'Nmap', proficiency: '50%' },
            { name: 'Wireshark', proficiency: '40%' },
            { name: 'Burp Suite', proficiency: '30%' }
        ]
    }
];

export const contact_info = [
    {
        name: 'Email',
        value: 'tahirahamed463@gmail.com',
        image: <Mail />
    },
    {
        name: 'Phone',
        value: '7981095656',
        image: <Phone />
    },
    {
        name: 'LinkedIn',
        value: 'https://www.linkedin.com/in/tahir-ahammad-peddananne',
        image: <Linkedin />
    },
    {
        name: 'GitHub',
        value: 'https://github.com/TahirAhammad',
        image: <Github />
    },
    {
        name: 'Instagram',
        value: 'https://www.instagram.com/tahir_ahammad/',
        image: <Instagram />
    },
    {
        name: 'Twitter',
        value: 'https://twitter.com/tahir_ahammad',
        image: <Twitter />
    },
    {
        name: 'Facebook',
        value: 'https://www.facebook.com/tahir.ahammad',
        image: <Facebook />
    },
    {
        name: 'Location',
        value: 'Nellore, India',
        image: <MapPin />
    }
]
