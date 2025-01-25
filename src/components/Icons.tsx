type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  Analytics: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 22a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m5 0a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1"
      />
    </svg>
  ),

  Bookmark: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M4 5v14.586c0 .89 1.077 1.337 1.707.707L12 14l6.293 6.293c.63.63 1.707.184 1.707-.707V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" />
    </svg>
  ),

  ChatBubble: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172 2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07" />
      <path d="M14 19c-1.236 0-2.598.5-3.841 1.145-1.998 1.037-2.997 1.556-3.489 1.225-.492-.33-.399-1.355-.212-3.404L6.5 17.5" />
    </svg>
  ),

  Heart: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
    </svg>
  ),

  Repeat: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M0 0v24h24V0zm11.407 23.258l.011.002l.071.035l.02.004l.014-.004l.071-.036c.01-.003.019 0 .024.006l.004.01l.017.428l-.005.02l-.01.013l-.104.074l-.015.004l-.012-.004l-.104-.074l-.012-.016l-.004-.017l.017-.427c.002-.01.009-.017.016-.018Zm-.265-.113l.014.002l.184.093l.01.01l.003.011l-.018.43l-.005.012l-.008.008l-.201.092a.025.025 0 0 1-.029-.008l-.004-.014l.034-.614c.003-.012.01-.02.02-.022m.715.002a.023.023 0 0 1 .027.006l.006.014l.034.614c0 .012-.007.02-.017.024l-.015-.002l-.201-.093l-.01-.008l-.003-.011l-.018-.43l.003-.012l.01-.01z" />
        <path
          fill="currentColor"
          d="M20 9a1 1 0 0 1 .993.883L21 10v5a4 4 0 0 1-3.8 3.995L17 19H8.107l-.02.415l-.034.519c-.027.346-.352.557-.631.41l-.306-.164l-.36-.203l-.198-.117l-.43-.263a20.62 20.62 0 0 1-.229-.147l-.463-.31l-.21-.147l-.377-.273l-.315-.24a16.254 16.254 0 0 1-.133-.104c-.236-.188-.225-.566.023-.762l.28-.217l.34-.252l.4-.282l.456-.305l.462-.291l.416-.249l.365-.205l.307-.165c.275-.143.571.036.598.36l.025.347l.024.415l.01.23H17a2 2 0 0 0 1.995-1.85L19 15v-5a1 1 0 0 1 1-1m-3.422-5.345l.306.165l.36.203l.198.117l.43.263l.229.147l.463.31l.21.147l.377.273l.315.24l.133.104c.236.188.225.566-.023.762l-.28.217l-.34.252l-.4.282l-.456.305l-.462.291l-.416.249l-.365.205l-.307.165c-.275.143-.572-.036-.598-.36l-.025-.347l-.024-.415a24.926 24.926 0 0 1-.01-.23H7a2 2 0 0 0-2 2v5a1 1 0 1 1-2 0V9a4 4 0 0 1 4-4h8.893l.02-.415l.022-.36l.012-.159c.027-.346.352-.557.631-.41Z"
        />
      </g>
    </svg>
  ),

  Share: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="18" cy="19" r="3" />
      <circle cx="6" cy="12" r="3" />
      <path d="M15.408 6.512l-6.814 3.975m6.814 7.001l-6.814-3.975" />
    </svg>
  ),

  VerticalEllipsis: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
        fill="currentColor"
      />
      <path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill="currentColor"
      />
      <path
        d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default Icons;
