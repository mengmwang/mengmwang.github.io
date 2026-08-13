// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A collection of applied ML and GenAI projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Research and Publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience and Education",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "projects-applied-genai-evidence-extraction-amp-cross-paper-synthesis",
          title: 'Applied GenAI: Evidence Extraction &amp;amp; Cross-Paper Synthesis',
          description: "LLM-based pipeline for extracting structured data from clinical trial literature and synthesising evidence across papers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_evidence_extraction/";
            },},{id: "projects-retrieval-augmented-generation-system-for-training-resources",
          title: 'Retrieval-Augmented Generation System for Training Resources',
          description: "A personal end-to-end RAG application over Orygen&#39;s public training resources, with hybrid retrieval, reranking, and a streaming FastAPI backend.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rag_system/";
            },},{id: "projects-large-scale-text-analytics-via-ai-assisted-thematic-analysis",
          title: 'Large-Scale Text Analytics via AI-Assisted Thematic Analysis',
          description: "Privacy-preserving, reproducible thematic analysis pipeline for large-scale open-ended survey responses.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_thematic_analysis/";
            },},{id: "projects-multimodal-outcome-prediction-from-linked-multi-source-data",
          title: 'Multimodal Outcome Prediction from Linked Multi-Source Data',
          description: "Multimodal XGBoost pipeline integrating structured clinical data with text-derived features across 175,000+ records.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_multimodal_prediction/";
            },},{id: "projects-kidexplain",
          title: 'KidExplain',
          description: "Local-first web app using an LLM to translate concepts into age-appropriate language for children.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_kidexplain/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%6E%67%6D%65%6E%67.%77%61%6E%67.%70%68%64@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mengmwang", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mengmwang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
