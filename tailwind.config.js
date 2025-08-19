import { fontFamily } from  "tailwindcss/defaultTheme";
module.exports = {
   content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/service/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/interfaces/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto':["Roboto",...fontFamily.sans]
      },
      fontSize: {
        titleHeader: ["60px", "72px"],
        titleHeaderMob: ["28px", "38px"], 
        btn: ["16px", "24px"],
        h2_simple_box: ["32px", "42px"],
        h2_header_title: ["20px", "28px"],
        h2__header_title_mobi: ["18px", "26px"],
        h1_title: ["40px", "52px"],
        h1_title_mobi: ["24px", "32px"],
        h2_container: ["18px", "26px"],
        h2_container_mobi: ["16px", "24px"],
        span: ["16px", "24px"],
        span_mobi: ["14px", "18px"],
        span_mobi_2025_client: ["10px", "12px"],
        span_client: ["12px", "16px"],
        hover: ["20px", "28px"],
      },
      fontStyle:{
        
      },
      backgroundColor: {
        bg_col: ["#6b6cff"],
        experience: "#FAFAFA",
        client: "#FAFAFA",
        hover: "#A6A7FF",
        btn: "#F1F1FF",
        bg_sm: "#f4f6fe",
      },
      backgroundImage: {
        gradient_top: "linear-gradient(to top,white 10%,transparent 60%)",
        avatar_bg: "url('/img/image.png')",
      },
      maxWidth: {
        box_max: "280px",
        box_max_mobi: "350px",
        span_client: "312px",
        max_scroll: "1465px",
        max_scroll_mobi:"550px",
        btn_simple: "286px",
        box_simple: "241px",
        layout_client:"600px",
        h2_client:'328px',
        box_li_simple:"219px",
        cover_box_simple:"350px"
      },
      maxHeight: {},
      letterSpacing: {
        ls: ["0.4px"],
      },
      colors: {
        purple: "#6b6cff",
        gay_client: "#7A838C",
        span_simple: "#A7ADB2",
        check_simple: "#46CB31",
        border_simple: "#A6A7FF",
      },
      boxShadow: {
        sl: "1px 1px 10px 1px rgba(0,0,0,0.2)",
      },
      borderRadius: {
        box: "12px",
      },
      borderColor: {
        bor_col: ["#C4C4FF"],
      },
      gap: {
        choose: "64px",
        ft_box: "52px",
        ft: "50px",
        ft_mobi: "32px",
      },
      width: {
        btn_exp: "290px",
        btn: "286px",
        img: "52px",
        span_clien: "312px",
        hover: "600px",
        box_client: "360px",
        box_simple:'350px',
        btn_header:'290px',
       
      },
      height: {
        img: "52px",
        box_client: "206px",
        span: "96px",
        hover: "244px",
        experience:"352px",
      },
      margin: {
        exp: "26px",
        exper_box:"60px"
      },
      padding: {
        ft: "64px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
