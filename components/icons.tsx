import React from 'react';

// 💡 Archivo de íconos completamente renovado con la librería Lucide.
// Este set es conocido por su claridad, consistencia y diseño geométrico, ideal para una estética premium.
// Cada ícono está estandarizado para aceptar `className` y ser estilizado con Tailwind CSS.

type IconProps = {
  className?: string;
};

// --- Íconos de Navegación Principal ---

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const ProjectIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const MessageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const NewspaperIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </svg>
);

// --- Íconos de UI y Acciones ---

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="currentColor" className="text-accent-premium"/>
    <path d="M10.5 8.5L8 12L10.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 8.5L17 12L14.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export const Sun: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export const Moon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const LanguageIcon: React.FC<IconProps> = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 511.999 511.999"
    enableBackground="new 0 0 511.999 511.999"
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "#B8C9D9",
      }}
      d="M461.909,133.563H320.778c-4.986,0-9.706,2.226-12.878,6.077c-3.172,3.84-4.452,8.904-3.506,13.79 l37.108,191.607H190.331c-5.009,0-9.739,2.237-12.922,6.111c-3.172,3.862-4.43,8.96-3.45,13.857l26.713,133.563 c1.625,8.114,8.515,13.111,15.772,13.423h245.466c27.614,0,50.086-22.472,50.086-50.086V183.649 C511.995,156.035,489.523,133.563,461.909,133.563z"
    />
    <path
      style={{
        fill: "#E6F3FF",
      }}
      d="M461.909,283.821h-50.086v-16.695c0-9.22-7.475-16.695-16.695-16.695 c-9.22,0-16.695,7.475-16.695,16.695v16.695h-50.086c-9.22,0-16.695,7.475-16.695,16.695s7.475,16.695,16.695,16.695h17.982 c3.195,19.862,12.261,34.916,25.553,50.151c-7.137,6.956-14.031,13.602-21.95,21.521c-6.52,6.519-6.52,17.09,0,23.611 c6.519,6.52,17.091,6.52,23.611,0c7.794-7.793,14.674-14.425,21.586-21.163c6.902,6.729,13.789,13.368,21.586,21.163 c6.519,6.52,17.09,6.521,23.611,0c6.52-6.52,6.52-17.091,0-23.611c-7.914-7.914-14.802-14.555-21.95-21.521 c13.293-15.234,22.357-30.288,25.553-50.151h17.982c9.22,0,16.695-7.475,16.695-16.695S471.129,283.821,461.909,283.821z  M395.128,343.229c-7.323-8.736-12.152-16.753-14.652-26.017h29.303C407.279,326.476,402.449,334.494,395.128,343.229z"
    />
    <path
      style={{
        fill: "#2860CC",
      }}
      d="M377.286,355.656c-2.504-6.4-8.682-10.618-15.549-10.618H190.331c-5.009,0-9.739,2.237-12.922,6.111 c-3.172,3.862-4.43,8.96-3.45,13.857l26.713,133.563c1.625,8.114,8.515,13.111,15.772,13.423c0.479,0.011,0.957,0.011,1.436,0 c3.706-0.167,7.413-1.581,10.496-4.419l144.693-133.563C378.121,369.346,379.79,362.056,377.286,355.656z"
    />
    <path
      style={{
        fill: "#167EE6",
      }}
      d="M361.737,378.428H50.09c-27.619,0-50.086-22.467-50.086-50.086V50.086C0.004,22.468,22.472,0,50.09,0 h244.865c8,0,14.869,5.674,16.391,13.521l66.781,345.037c0.946,4.892-0.337,9.956-3.51,13.794 C371.443,376.2,366.726,378.428,361.737,378.428z"
    />
    <path
      style={{
        fill: "#E6F3FF",
      }}
      d="M166.958,255.996c-36.814,0-66.781-29.967-66.781-66.781s29.967-66.781,66.781-66.781 c9.032,0,17.804,1.793,26.021,5.282c8.478,3.62,12.424,13.434,8.804,21.913c-3.62,8.446-13.402,12.424-21.913,8.804 c-4.044-1.729-8.413-2.609-12.913-2.609c-18.424,0-33.391,14.967-33.391,33.391s14.967,33.391,33.391,33.391 c12.326,0,23.119-6.717,28.923-16.695h-12.228c-9.228,0-16.695-7.467-16.695-16.695c0-9.228,7.467-16.695,16.695-16.695h33.391 c9.228,0,16.695,7.467,16.695,16.695C233.739,226.028,203.772,255.996,166.958,255.996z"
    />
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const ShoppingCartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

// 💡 Iconos para E-commerce Venezolano
export const BankIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21v-7" />
    <path d="M19 21v-7" />
    <path d="M10 9L3 21" /> {/* Estilo simplificado */}
    <path d="M14 9l7 12" />
    <rect x="2" y="3" width="20" height="5" />
    <path d="M12 12v9" />
  </svg>
);

export const BinanceIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>{`
      .st1{fill:#fff}
    `}</style>
    <g id="Icon">
      <circle
        cx={512}
        cy={512}
        r={512}
        style={{
          fill: "#f3ba2f",
        }}
      />
      <path
        className="st1"
        d="M404.9 468 512 360.9l107.1 107.2 62.3-62.3L512 236.3 342.6 405.7z"
      />
      <path
        transform="rotate(-45.001 298.629 511.998)"
        className="st1"
        d="M254.6 467.9h88.1V556h-88.1z"
      />
      <path
        className="st1"
        d="M404.9 556 512 663.1l107.1-107.2 62.4 62.3h-.1L512 787.7 342.6 618.3l-.1-.1z"
      />
      <path
        transform="rotate(-45.001 725.364 512.032)"
        className="st1"
        d="M681.3 468h88.1v88.1h-88.1z"
      />
      <path
        className="st1"
        d="M575.2 512 512 448.7l-46.7 46.8-5.4 5.3-11.1 11.1-.1.1.1.1 63.2 63.2 63.2-63.3z"
      />
    </g>
  </svg>
);

export const WalletIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const XCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

// 💡 Nuevos iconos de Autenticación
export const LogInIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" x2="3" y1="12" y2="12" />
  </svg>
);

export const LogOutIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" x2="9" y1="12" y2="12" />
  </svg>
);

export const UserPlusIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" x2="19" y1="8" y2="14" />
    <line x1="22" x2="16" y1="11" y2="11" />
  </svg>
);

export const FrontendIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
);

export const BackendIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
);

export const ApiIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-5" />
        <path d="M9 17H7A5 5 0 0 1 7 7h1a4 4 0 0 1 4 4v1" />
        <path d="M15 17h2a5 5 0 0 0 0-10h-1a4 4 0 0 0-4 4v1" />
        <path d="M12 7V2" />
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// 💡 Icono de marca para Git (Colorido)
export const GitBrandIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#F05032" d="M116.82 43.512L84.49 11.18a14.995 14.995 0 0 0-21.206 0l-52.1 52.103a15.004 15.004 0 0 0 0 21.21L43.51 116.82a15 15 0 0 0 21.208 0l52.102-52.103a15 15 0 0 0 0-21.205zM87.133 55.217a7.333 7.333 0 1 1-1.795-10.215l11.07-11.07a2.667 2.667 0 0 1 3.772 3.772l-11.07 11.07c-.523 2.06-.47 4.27.18 6.287a7.333 7.333 0 0 1-2.157.156zm-39.28 25.932a7.352 7.352 0 1 1-2.84-9.813l9.654-9.653a2.667 2.667 0 0 1 3.772 3.772l-9.655 9.653c-.562 1.97-.376 4.11.42 5.967a7.333 7.333 0 0 1-1.35.074zm13.075-21.71l-5.576-5.577a7.334 7.334 0 1 1 0-10.372l5.576 5.577a2.667 2.667 0 0 1 0 3.772 2.667 2.667 0 0 1-3.772 0l-5.576-5.577a7.333 7.333 0 1 1-10.372-10.371 7.333 7.333 0 0 1 10.372 10.37l5.576 5.578a2.667 2.667 0 1 1 3.772 3.772z"/>
    <path fill="#fff" d="M87.133 55.217a7.333 7.333 0 1 1-1.795-10.215l11.07-11.07a2.667 2.667 0 0 1 3.772 3.772l-11.07 11.07c-.523 2.06-.47 4.27.18 6.287a7.333 7.333 0 0 1-2.157.156zm-39.28 25.932a7.352 7.352 0 1 1-2.84-9.813l9.654-9.653a2.667 2.667 0 0 1 3.772 3.772l-9.655 9.653c-.562 1.97-.376 4.11.42 5.967a7.333 7.333 0 0 1-1.35.074zm13.075-21.71l-5.576-5.577a7.334 7.334 0 1 1 0-10.372l5.576 5.577a2.667 2.667 0 0 1 0 3.772 2.667 2.667 0 0 1-3.772 0l-5.576-5.577a7.333 7.333 0 1 1-10.372-10.371 7.333 7.333 0 0 1 10.372 10.37l5.576 5.578a2.667 2.667 0 1 1 3.772 3.772z"/>
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM12.1032 21.7768H12.0992C10.3294 21.7776 8.59195 21.3025 7.06888 20.4012L6.70803 20.1874L2.96836 21.1685L3.96713 17.52L3.73169 17.1461C2.74331 15.5709 2.22039 13.7484 2.22328 11.8889C2.22328 6.44185 6.65615 2.00783 12.1072 2.00783C14.7284 2.00934 17.2417 3.05207 19.0941 4.90662C20.9465 6.76117 21.9863 9.27564 21.9848 11.8969C21.9825 17.3456 17.5496 21.7768 12.1032 21.7768ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
    />
  </svg>
);


// --- Íconos para Tarjetas de Habilidades ---

export const FrameworkIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21 16-4 4-4-4" />
    <path d="M17 20V4" />
    <path d="m3 8 4-4 4 4" />
    <path d="M7 4v16" />
  </svg>
);

export const DesignIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.37 3.63a2.12 2.12 0 1 1 3 3L12 16l-4 1 1-4Z" />
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21v-7" />
    <path d="M4 8V3" />
    <path d="M12 21v-9" />
    <path d="M12 7V3" />
    <path d="M20 21v-5" />
    <path d="M20 11V3" />
    <path d="M1 14h6" />
    <path d="M9 8h6" />
    <path d="M17 16h6" />
  </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.993.142"/>
    <path d="M12 5a3 3 0 1 0 5.993.142"/>
    <path d="M12 5a3 3 0 1 0-5.993-.142"/>
    <path d="M12 5a3 3 0 1 0 5.993-.142"/>
    <path d="M15 6.38a3 3 0 1 0-6 0"/>
    <path d="M15.36 9.17a3 3 0 1 0-6.72 0"/>
    <path d="M12 13a3 3 0 1 0-5.993.142"/>
    <path d="M12 13a3 3 0 1 0 5.993.142"/>
    <path d="M12 13a3 3 0 1 0-5.993-.142"/>
    <path d="M12 13a3 3 0 1 0 5.993-.142"/>
    <path d="M16 14.38a3 3 0 1 0-8 0"/>
    <path d="M17.64 18.17a3 3 0 1 0-11.28 0"/>
    <path d="M6 18h12"/>
  </svg>
);

// 💡 Nuevos iconos para Soft Skills (Estilo Humano y Abstracto)

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const EarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/>
    <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 0 4 0v-1a.5.5 0 0 1 .5-.5"/>
  </svg>
);

export const MessageSquareTextIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    <path d="M13 8H7"/>
    <path d="M17 12H7"/>
  </svg>
);

export const PuzzleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 15.424a1 1 0 0 0-1.415 0l-5.597 5.597a1 1 0 0 0 0 1.415l1.415 1.414a1 1 0 0 0 1.414 0l5.597-5.597a1 1 0 0 0 0-1.415z"/>
    <path d="M15.424 4.561a1 1 0 0 0 0 1.415l5.597 5.597a1 1 0 0 0 1.415 0l1.414-1.415a1 1 0 0 0 0-1.414l-5.597-5.597a1 1 0 0 0-1.415 0z"/>
    <path d="M4.561 8.576a1 1 0 0 0 0 1.415l5.597 5.597a1 1 0 0 0 1.415 0l1.414-1.415a1 1 0 0 0 0-1.414l-5.597-5.597a1 1 0 0 0-1.415 0z"/>
    <path d="M8.576 19.439a1 1 0 0 0 0-1.415L2.979 12.427a1 1 0 0 0-1.415 0l-1.415 1.414a1 1 0 0 0 0 1.415l5.597 5.597a1 1 0 0 1.415 0z"/>
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.2-2.8-6-6-6S6 4.5 6 7.7c0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5"/>
    <path d="M9 18h6"/>
    <path d="M10 22h4"/>
  </svg>
);

export const RefreshCwIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
    <path d="M21 3v5h-5"/>
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
    <path d="M8 21H3v-5"/>
  </svg>
);

export const GraduationCapIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
    <path d="M22 10v6"/>
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

// --- Íconos para Tecnologías Específicas ---

export const ViteIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="-0.5 0 257 257"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        x1="-0.828097821%"
        y1="7.6518539%"
        x2="57.6359644%"
        y2="78.4107719%"
        id="vite-linearGradient-1"
      >
        <stop stopColor="#41D1FF" offset="0%" />
        <stop stopColor="#BD34FE" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="43.3760053%"
        y1="2.24179788%"
        x2="50.3158848%"
        y2="89.0299051%"
        id="vite-linearGradient-2"
      >
        <stop stopColor="#FFEA83" offset="0%" />
        <stop stopColor="#FFDD35" offset="8.33333%" />
        <stop stopColor="#FFA800" offset="100%" />
      </linearGradient>
    </defs>
    <g>
      <path
        d="M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z"
        fill="url(#vite-linearGradient-1)"
      />
      <path
        d="M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z"
        fill="url(#vite-linearGradient-2)"
      />
    </g>
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#3178C6" d="M0 0h24v24H0z"/>
    <path fill="#FFF" d="M11.5 16.5h-4V11h1.5v4h2.5v1.5zm3.9-3.3c.3.2.6.3.9.3.4 0 .8-.1 1.1-.4.3-.3.4-.7.4-1.1s-.1-.8-.4-1.1c-.3-.3-.7-.4-1.1-.4-.3 0-.6.1-.9.3l-1-1.2c.5-.4 1.1-.6 1.9-.6.9 0 1.7.3 2.3.9.6.6.9 1.4.9 2.3s-.3 1.7-.9 2.3c-.6.6-1.4.9-2.3.9-.8 0-1.4-.2-1.9-.6l1-1.2z"/>
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="JavaScript"
    role="img"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width={512} height={512} rx="15%" fill="#f7df1e" />
    <path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
  </svg>
);

export const Html5Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="#E34F26" d="M3.2,0h17.6l-1.6,18.1L12,24l-8.2-5.9L3.2,0z"/>
        <path fill="#EF652A" d="M12,2.2l0.1,20l6.2-4.4L18.8,2.2H12z"/>
        <path fill="#EBEBEB" d="M12,5.3h-4l-0.3,3.1h4.3V5.3z M8.1,12.3h-3l-0.3,3.5l7.2,2.5v-3.2h-3.8L8.1,12.3z"/>
        <path fill="#FFF" d="M12,5.3v3.1h4.5l-0.4,4.9l-4.1,1.5v3.2l7.2-2.5l0.1-1l0.6-6.3l0.1-1.4H12V5.3z"/>
    </svg>
);

export const Css3Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="#1572B6" d="M3.2,0h17.6l-1.6,18.1L12,24l-8.2-5.9L3.2,0z"/>
        <path fill="#33A9DC" d="M12,2.2l0.1,20l6.2-4.4L18.8,2.2H12z"/>
        <path fill="#EBEBEB" d="M12,5.3H8.1L7.8,8.4H12V5.3z M7.8,12.3h-3l-0.3,3.5l7.5,2.5v-3.2h-3.8L7.8,12.3z"/>
        <path fill="#FFF" d="M12,5.3v3.1h4.2l-0.4,4.9l-3.8,1.5v3.2l7.2-2.5l0.1-1l0.6-6.3L20,5.3H12z"/>
    </svg>
);

export const SassIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill="#CD6799" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm5.4,17.21a.23.23,0,0,1-.16.07.39.39,0,0,1-.28-.12c-.22-.22-.22-.5,0-.72l.71-.72a.51.51,0,0,0,0-.72L12.9,10.21a1.2,1.2,0,0,0-.8-.4,1.25,1.25,0,0,0-.86.4,1.4,1.4,0,0,0-.42.92.51.51,0,0,1-.51.51H9.46a.51.51,0,0,1-.51-.51V9.58A.51.51,0,0,1,9.46,9h4.3a.51.51,0,0,1,.51.51,1.4,1.4,0,0,0,.42.92,1.2,1.2,0,0,0,.86.4,1.28,1.28,0,0,0,.8-.4l4.77-4.76a.51.51,0,0,0,0-.72L19.4,3.71a.51.51,0,0,0-.72,0l-.71.72c-.22.22-.51.22-.72,0a.39.39,0,0,1-.12-.28.23.23,0,0,1,.07-.16.49.49,0,0,1,.6-.2.49.49,0,0,1,.36.15L23,8.57a1.44,1.44,0,0,1,0,2l-4.77,4.76A1.51,1.51,0,0,1,17.4,17.21ZM6.11,14.61a.49.49,0,0,1-.36-.15L1,9.8a1.44,1.44,0,0,1,0-2L5.73,3a.49.49,0,0,1,.71,0,.51.51,0,0,1,0,.72L5.27,4.9a.51.51,0,0,0,0,.72l4.77,4.76a1.2,1.2,0,0,0,.8.4,1.25,1.25,0,0,0,.86-.4,1.4,1.4,0,0,0,.42-.92.51.51,0,0,1-.51-.51h.85a.51.51,0,0,1,.51.51v1.14a.51.51,0,0,1-.51.51H8.62a.51.51,0,0,1-.51-.51,1.4,1.4,0,0,0-.42-.92,1.2,1.2,0,0,0-.86-.4,1.28,1.28,0,0,0-.8.4L1.27,15.18a.51.51,0,0,0,0,.72l1.73,1.73a.51.51,0,0,0,.72,0l.71-.72c-.22-.22-.51-.22-.72,0a.39.39,0,0,1,.28.12.23.23,0,0,1,.07.16.51.51,0,0,1-.2.48.49.49,0,0,1-.36.15.49.49,0,0,1-.35-.15L1,13.18a1.44,1.44,0,0,1,0-2l4.76-4.77a1.51,1.51,0,0,1,1.86-1.86Z"/>
    </svg>
);


export const ReactIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}>
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

export const NextjsIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z"
      fill="currentColor"
    />
  </svg>
);

export const VuejsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#42b883" d="M12,2.3L22,2.3L12,21.7L2,2.3H12z"/>
      <path fill="#35495e" d="M12,2.3l-10,0l10,19.4l10-19.4H12z M7.1,7.2h3.4l1.5,2.6l1.5-2.6h3.4l-4.9,8.5L7.1,7.2z"/>
  </svg>
);

export const NodejsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#339933" d="M11.9,0.3c-0.2-0.2-0.5-0.2-0.7,0l-10,5.8C1,6.2,0.8,6.5,0.8,6.8v11.5c0,0.3,0.1,0.6,0.4,0.8l10,5.8 c0.2,0.1,0.5,0.1,0.7,0l10-5.8c0.2-0.1,0.4-0.4,0.4-0.8V6.8c0-0.3-0.1-0.6-0.4-0.8L11.9,0.3z M12,22.2L2.5,16.7V7.6l9.5,5.5V22.2z M21.5,16.7L12,22.2v-9.1l9.5-5.5V16.7z M12,1.7l9.5,5.5l-9.5,5.5L2.5,7.2L12,1.7z"/>
  </svg>
);

export const ExpressIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M28 20.594l-4.031 3.906c-1.031.969-2.031 1.5-3.031 1.5-1.5 0-2.813-1.094-3.688-3.281l-1.469-3.594c-.938-2.313-2.188-3.469-3.781-3.469-.844 0-1.563.5-2.156 1.5l-1.844 3.219c-.625 1.094-1.344 1.656-2.156 1.656-.625 0-1.281-.406-1.938-1.188l1.469-2.125c.344.281.656.438.969.438.375 0 .688-.25.938-.75l1.781-3.156c.656-1.156 1.406-1.719 2.25-1.719.938 0 1.938.656 3 2l1.531 3.5c.969 2.406 2.219 3.625 3.75 3.625.844 0 1.594-.531 2.25-1.594l4.031-3.906-1.406-1.438zM24.281 9.406l1.406 1.438 4-4.031-1.438-1.406z"/>
  </svg>
);

export const TailwindCssIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="#38bdf8" fillRule="evenodd" d="M12.9 11.25c-.53 0-.96-.43-.96-.96s.43-.96.96-.96h4.35c.53 0 .96.43.96.96s-.43.96-.96.96h-4.35Zm-4.92-2.45c0 .53-.43.96-.96.96H2.67c-.53 0-.96-.43-.96-.96s.43-.96.96-.96h4.35c.53 0 .96.43.96.96Zm7.47 5.86c0 .53-.43.96-.96.96h-8.7c-.53 0-.96-.43-.96-.96s.43-.96.96-.96h8.7c.53 0 .96.43.96.96Z" clipRule="evenodd"/>
  </svg>
);

export const StyledComponentsIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#DB7093" d="M18.5,4.5c-2,0-3.8,1.1-4.8,2.8c-1-1.7-2.8-2.8-4.8-2.8C5.5,4.5,3,7,3,10.4c0,4.5,4.5,8.1,9,8.1s9-3.6,9-8.1C21,7,18.5,4.5,18.5,4.5z M12,17.2c-2.4,0-4.7-1.7-5.5-4.1h11C16.7,15.5,14.4,17.2,12,17.2z"/>
  </svg>
);

export const FramerMotionIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#0055FF" d="M4,4h8v4h-4v4h4v4h-4v4H4V4z M12,4h8v4h-8V4z M12,12h8v4h-8V12z"/>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 9v6" /> <path d="m13 15-3-3 3-3" />
  </svg>
);

export const WebpackIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="#8DD6F9" d="M21.2,16.8l-8.5,4.9c-0.4,0.2-1,0.2-1.4,0L2.8,16.8c-0.4-0.2-0.8-0.7-0.8-1.2V8.4c0-0.5,0.3-1,0.8-1.2l8.5-4.9 c0.4-0.2,1-0.2,1.4,0l8.5,4.9c0.4,0.2,0.8,0.7,0.8,1.2v7.2C22,16.1,21.7,16.6,21.2,16.8z"/>
      <path fill="#1C78C0" d="M12,12.8L3.5,7.9l8.5-4.9l8.5,4.9L12,12.8z M12,22V12l8.5-4.9v7.2L12,22z"/>
  </svg>
);

export const FirebaseIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"file_type_firebase"}</title>
    <path
      d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z"
      style={{
        fill: "#ffc24a",
      }}
    />
    <path
      d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"
      style={{
        fill: "#ffa712",
      }}
    />
    <path
      d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z"
      style={{
        fill: "#f4bd62",
      }}
    />
    <path
      d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z"
      style={{
        fill: "#ffa50e",
      }}
    />
    <polygon
      points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601"
      style={{
        fill: "#f6820c",
      }}
    />
    <path
      d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0"
      style={{
        fill: "#fde068",
      }}
    />
    <path
      d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z"
      style={{
        fill: "#fcca3f",
      }}
    />
    <path
      d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z"
      style={{
        fill: "#eeab37",
      }}
    />
  </svg>
);

export const VercelIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12,2.2L0.7,21.8h22.6L12,2.2z"/>
  </svg>
);