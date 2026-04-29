const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/mdshahin.me",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: (
        <path d="M15 8h-2c-.6 0-1 .4-1 1v2h3l-.5 3H12v7H9v-7H7v-3h2V9c0-2.2 1.3-4 4-4h2v3Z" />
      ),
    },
    {
      label: "GitHub",
      href: "https://github.com/MdShahinDev",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: (
        <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.8 0 0 .9-.3 2.8 1.1.8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.4 2.8-1.1 2.8-1.1.5 1.5.2 2.5.1 2.8.6.8 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5 4-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mdshahinme/",
      target: "_blank",
      rel: "noopener noreferrer",      
      icon: (
        <path d="M6.5 8.5h-3V21h3V8.5ZM5 3a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5 3Zm16 11.1c0-3.4-1.8-5.1-4.3-5.1-2 0-2.9 1.1-3.4 1.9V9.3h-3V21h3v-6.5c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21h3v-6.9Z" />
      ),
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted text-center sm:text-left">
          &copy; {year} <span className="text-primary font-bold">Md Shahin.</span> All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              className="w-10 h-10 rounded-xl border border-border/50 bg-surface/70 text-text-muted hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
